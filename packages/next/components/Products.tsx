import React from 'react';
import ProductsTable from './Table';
import apiFetch from '@/api/config';
import { getCookie } from '@/api/cookie';

export default async function Products() {
  const products = await apiFetch.get('/products', {
    headers: {
      Authorization: getCookie(),
    },
  });

  return <ProductsTable products={products.data} />;
}
