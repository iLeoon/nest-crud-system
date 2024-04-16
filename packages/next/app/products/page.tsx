'use client';

import * as React from 'react';
import Header from '@/components/Header';
import ProductsTable from '@/components/ProductsTable';

export default function Products() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<ProductsTable />
			</div>
		</>
	);
}
