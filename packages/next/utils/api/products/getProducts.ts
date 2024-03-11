import { type productsResponse } from '@/utils/types';
import apiFetch from '../config';

export const getProducts = async (pageNumber: number) => {
	const res = await apiFetch.get<productsResponse>(
		`/products?page=${pageNumber}&limit=5`
	);

	return res.data;
};
