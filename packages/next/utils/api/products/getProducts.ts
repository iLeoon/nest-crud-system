import { type productsResponse } from '@/utils/types';
import apiFetch from '../config';

export const getProducts = async (pageNumber: number) => {
	try {
		const res = await apiFetch.get<productsResponse>(
			`/products?page=${pageNumber}&limit=5`
		);

		return res.data;
	} catch (e) {
		throw new Error(`An error occured while trying to fetch the products.`);
	}
};
