import type { DataResponse } from '@/utils/types';
import apiFetch from '../config';

export const getProducts = async () => {
  const data = await apiFetch.get<DataResponse>('/products');

  return data.data;
};
