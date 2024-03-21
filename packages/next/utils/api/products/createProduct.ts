import apiFetch from '../config';
import { type createSchemaType } from '@/utils/types';

export async function createProduct(productData: createSchemaType) {
	await apiFetch.post<createSchemaType>(`/products/create`, productData);
	return;
}
