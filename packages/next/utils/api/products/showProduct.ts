import { type Product } from '@/utils/types';
import apiFetch from '../config';

export const showProducts = async (product_id: number) => {
	try {
		const res = await apiFetch.get<Product>(`/products/${product_id}`);

		return res.data;
	} catch (e) {
		throw new Error(`An error occured while trying to show the product.`);
	}
};
