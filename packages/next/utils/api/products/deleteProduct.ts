import apiFetch from '../config';

export const deleteProduct = async (product_id: number) => {
	try {
		await apiFetch.delete(`/products/delete/${product_id}`);
	} catch (e) {
        throw new Error(`An error occured while trying to delete the product.`);
    }
};
