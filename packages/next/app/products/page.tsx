/* eslint-disable import/no-extraneous-dependencies */

'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import CreateButton from '@/components/Buttons/CreateButton';
import Header from '@/components/Header';
import ProductsTable from '@/components/ProductsTable';

export default function Products() {
  const params = useSearchParams();
  const paramValue = parseInt(params.get('page')!, 2);
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <CreateButton />
        <ProductsTable queryParams={paramValue} />
      </div>
    </>
  );
}
