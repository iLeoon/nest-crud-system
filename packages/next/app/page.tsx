import * as React from 'react';
import CreateButton from '@/components/Buttons/CreateButton';
import Header from '@/components/Header';
// import Products from '@/components/Products';
import ProductsTable from '@/components/Table';

export default function HomePage() {
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
