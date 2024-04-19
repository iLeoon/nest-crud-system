import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ProductsTable from '@/components/ProductsTable';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/components/table/columns';
import type { Product } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/utils/api/products/getProducts';
import { cookies } from 'next/headers';

export default async function Products() {
	// const cookiesStore = cookies();
	// const cookie = cookiesStore.get('nest-session');
	// console.log(`${cookie?.name}=${cookie?.value}`);
	// console.log(cookies().toString())
	const data = await getProducts();
	console.log(data);
	return (
		<>
			<Header />
			<div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
					</div>
				</div>
				{/* <DataTable data={data} columns={columns} /> */}
			</div>
		</>
	);
}
