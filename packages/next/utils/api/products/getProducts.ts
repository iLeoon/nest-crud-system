import { Product } from '@/utils/types';
import apiFetch from '../config';

export const getProduct = async () => {
  const products = await apiFetch.get<Product[]>('/products');

  return products.data;
};
