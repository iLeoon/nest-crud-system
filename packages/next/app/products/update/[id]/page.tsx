'use client';
import React from 'react';
import UpdateProductForm from '@/components/forms/products/UpdateProductForm';
import { useQuery } from '@tanstack/react-query';
import { showProducts } from '@/utils/api/products/showProduct';

function UpdateProduct({ params }: { params: { id: number } }) {
	const { data, isFetching } = useQuery({
		queryKey: ['show-product', params.id],
		queryFn: () => showProducts(params.id)
	});
	return isFetching ? '' : <UpdateProductForm id={params.id} data={data} />;
}

export default UpdateProduct;
