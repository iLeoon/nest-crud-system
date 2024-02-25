import apiFetch from '../config';

export const getProduct = async () => {
  const products = await apiFetch.get('/products', {
    withCredentials: true,
  });

  return products.data;
};
