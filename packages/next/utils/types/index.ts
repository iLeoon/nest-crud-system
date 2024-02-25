export type User = {
  email: string;
  name: string;
  roles: string[];
};
export type credentialsUser = Pick<User, 'email'> & { password: string };

export type Product = {
  product_id: number;
  product_name: string;
  unit_price: number;
  units_in_stock: number;
};
