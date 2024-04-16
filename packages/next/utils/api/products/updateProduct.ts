import type { updateSchemaType } from '@/utils/types';
import apiFetcher from '../config';

export async function updateProduct({
	values,
	id
}: {
	values: updateSchemaType;
	id: number;
}) {
	try {
		await apiFetcher.put(`/products/update/${id}`, values);
	} catch (e) {
		throw new Error(`An error occured while trying to update the product.`);
	}
}
