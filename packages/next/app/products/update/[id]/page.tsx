'use client';
import React from 'react';
import UpdateForm from '@/components/forms/products/UpdateForm';
import { useQuery } from '@tanstack/react-query';
import { showProducts } from '@/utils/api/products/showProduct';

function Update({ params }: { params: { id: number } }) {
	const { data, isFetching } = useQuery({
		queryKey: ['show-product', params.id],
		queryFn: () => showProducts(params.id)
	});
	return isFetching ? '' : <UpdateForm id={params.id} data={data} />;
}

export default Update;
