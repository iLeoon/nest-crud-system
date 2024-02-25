import React from 'react';
import ProductsTable from './Table';
import apiFetch from '@/api/config';

export default async function Products() {
  const products = await apiFetch.get('/products', {
    withCredentials: true,
  });
  console.log(products);
  return products.data;

  // return <ProductsTable products={products.data} />;
}
