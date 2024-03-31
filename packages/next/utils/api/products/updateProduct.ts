import type { updateSchemaType } from '@/utils/types';
import apiFetcher from '../config';

export async function updateProduct({
	values,
	id
}: {
	values: updateSchemaType;
	id: number;
}) {
	await apiFetcher.put(`/products/update/${id}`, values);
}
