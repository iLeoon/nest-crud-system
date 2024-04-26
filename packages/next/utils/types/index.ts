import z from 'zod';
import {
	AccountFormSchema,
	CreateProductSchema,
	CreateUserFormSchema,
	LoginFormSchema,
	UpdateProductSchema
} from '../validation/FormSchemas';
import { AlertProps } from '@mui/material';

export type User = {
	_id: string;
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

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
export type UpdateProductSchemaType = z.infer<typeof UpdateProductSchema>;
export type LoginSchemaType = z.infer<typeof LoginFormSchema>;
export type AccountSchemaType = z.infer<typeof AccountFormSchema>;
export type CreateUserSchemaType = z.infer<typeof CreateUserFormSchema>;

export type attributes = { message: string } & AlertProps;

export type UpdateAuthUserType = {
	username?: string;
	image?: File;
};

export type AuthUserType = {
	email?: string;
	name?: string;
	image?: string;
};
