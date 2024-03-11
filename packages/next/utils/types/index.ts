import z from 'zod';
import { createSchema } from '../validation/create-updateFormValidation';

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

export type paginationOps = {
	totalItems: number;
	itemCount: number;
	itemsPerPage: number;
	totalPages: number;
	currentPage: number;
};

export type productsResponse = {
	items: Product[];
	meta: paginationOps;
};

export type createSchemaType = z.infer<typeof createSchema>;
