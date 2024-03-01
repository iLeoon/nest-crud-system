import { type DataResponse } from '@/utils/types';
import apiFetch from '../config';

export const getProducts = async () => {
  const data = await apiFetch.get<DataResponse>('/products?page=1&limit=5');

  return data.data;
};
