import { type Product } from '@/utils/types';
import apiFetch from '../config';

export const showProducts = async (product_id: number) => {
	const res = await apiFetch.get<Product>(`/products/${product_id}`);

	return res.data;
};
