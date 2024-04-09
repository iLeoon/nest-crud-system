import z from 'zod';
import {
	AccountFormSchema,
	createProductSchema,
	LoginFormSchema,
	updateProductSchema
} from '../validation/FormSchemas';
import { AlertProps } from '@mui/material';

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

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;
export type UpdateProductSchemaType = z.infer<typeof updateProductSchema>;
export type LoginSchemaType = z.infer<typeof LoginFormSchema>;
export type AccountSchemaType = z.infer<typeof AccountFormSchema>;

export type attributes = { message: string } & AlertProps;

export type UpdateUserData = {
	username: string;
	image: File;
};

export type GetImage = {
	imageUrl: string;
};
