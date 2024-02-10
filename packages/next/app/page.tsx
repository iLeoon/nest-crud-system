import * as React from 'react';
import Header from '@/components/Header';
import ProductsTable from '@/components/Table';
import CreateButton from '@/components/Buttons/CreateButton';

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
