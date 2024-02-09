import * as React from 'react';
import Button from '@mui/material/Button';
import Header from '@/components/Header';
import ProductsTable from '@/components/Table';
import CreateButton from '@/components/Buttons/CreateButton';

export default function ButtonUsage() {
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
