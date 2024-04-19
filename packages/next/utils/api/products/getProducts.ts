import { type Product } from '@/utils/types';
import apiFetch from '../config';
import { cookies } from 'next/headers';

export const getProducts = async () => {
	try {
		const cookie = cookies().toString();
		const res = await apiFetch.get<Product[]>(`products`, {
			headers: {
				Cookie: cookie
			}
		});

		return res?.data;
	} catch (e) {
		throw new Error(`An error occured while trying to fetch the products.`);
	}
};
