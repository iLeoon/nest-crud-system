import apiFetch from '../config';
import { type createSchemaType } from '@/utils/types';

export async function createProduct(productData: createSchemaType) {
	try {
		await apiFetch.post<createSchemaType>(`/products/create`, productData);
	} catch (e) {
		throw new Error(`An error occured while trying to create the product.`);
	}
}
