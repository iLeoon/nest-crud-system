import apiFetch from '../config';
import type { CreateProductSchemaType } from '@/utils/types';

export async function createProduct(productData: CreateProductSchemaType) {
	try {
		await apiFetch.post<CreateProductSchemaType>(
			`/products/create`,
			productData
		);
	} catch (e) {
		throw new Error(`An error occured while trying to create the product.`);
	}
}
