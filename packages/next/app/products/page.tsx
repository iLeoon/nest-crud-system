import React from 'react';
import Header from '@/components/Header';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/components/table/columns';
import { getProducts } from '@/utils/api/products/getProducts';

export default async function Products() {
	const data = await getProducts();
	
	return (
		<>
			<Header />
			<div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
					</div>
				</div>
				<DataTable data={data} columns={columns} />
			</div>
		</>
	);
}
