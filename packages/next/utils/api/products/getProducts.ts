import { type DataResponse } from '@/utils/types';
import apiFetch from '../config';

export const getProducts = async (pageNumber: number) => {
  const data = await apiFetch.get<DataResponse>(
    `/products?page=${pageNumber}&limit=5`
  );

  return data.data;
};
