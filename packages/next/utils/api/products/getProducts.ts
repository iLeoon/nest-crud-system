import { type Product } from '@/utils/types';
import apiFetch from '../config';

export const getProducts = async () => {
	try {
		const res = await apiFetch.get<Product[]>(`products`);

		return res?.data;
	} catch (e) {
		throw new Error(`An error occured while trying to fetch the products.`);
	}
};
