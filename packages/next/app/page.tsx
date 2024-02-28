/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CreateButton from '@/components/Buttons/CreateButton';
import Header from '@/components/Header';
import ProductsTable from '@/components/ProductsTable';
import { getProducts } from '@/utils/api/products/getProducts';

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <CreateButton />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductsTable />
        </HydrationBoundary>
      </div>
    </>
  );
}
