/* eslint-disable import/no-extraneous-dependencies */

'use client';

import * as React from 'react';
import CreateButton from '@/components/Buttons/CreateButton';
import Header from '@/components/Header';
import ProductsTable from '@/components/ProductsTable';

export default function Products() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <CreateButton />
        <ProductsTable />
      </div>
    </>
  );
}
