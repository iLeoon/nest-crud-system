import z from 'zod';

export const LoginFormSchema = z.object({
	email: z
		.string()
		.email('Invalid email address format')
		.min(5, 'Email must be at least 5 characters long')
		.max(255, 'Email cannot exceed 255 characters'),

	password: z
		.string()
		.min(3, 'Password must be at least 3 characters long')
		.max(255, 'Password cannot exceed 255 characters')
});

export const CreateProductSchema = z
	.object({
		product_name: z
			.string({
				required_error: "* Product name can't be an empty string",
				invalid_type_error: '* Product name must be a string'
			})
			.min(5, '* Product name must not be less than 5 letters')
			.max(100, '* Product name must not be more than 20 letters'),
		unit_price: z.coerce
			.number({
				required_error: "* Product price can't be empty",
				invalid_type_error: '* Product price must be a number'
			})
			.max(1000, "* Product price can't exceed 1000($)")
			.positive('* Product price must be a postive number'),
		units_in_stock: z.coerce
			.number({
				required_error: "* Amount of produt in stock can't be empty",
				invalid_type_error: '* Amount of product in stock must be number'
			})
			.max(
				3000,
				'* Amount of product in stock must not exceed 3000 pieces per product'
			)
			.positive('* Amount of product in stock must be a postive number')
	})
	.strict();

export const UpdateProductSchema = CreateProductSchema;

export const AccountFormSchema = z.object({
	username: z
		.string()
		.regex(
			/^[A-Za-z\s]*$/,
			'The name must not include any characters or numbers'
		)
		.min(5, 'The name letters must be more than 5 letters')
		.max(20, 'Your name letters must be less than 20 letters')
		.optional()
		.or(z.literal('')),
	image: z.instanceof(File).optional()
});

// fix: 0 is recognized as a non-postive number in product schema

export const CreateUserFormSchema = z.object({
	name: z
		.string({ required_error: 'You must enter a user name' })
		.regex(
			/^[A-Za-z\s]*$/,
			'The name must not include any characters or numbers'
		)
		.min(5, 'The name letters must be more than 5 letters')
		.max(20, 'Your name letters must be less than 20 letters'),
	email: z
		.string({ required_error: 'You must enter a user email' })
		.email('Invalid email address format')
		.min(5, 'Email must be at least 5 characters long')
		.max(255, 'Email cannot exceed 255 characters'),
	password: z
		.string({ required_error: 'You must enter a user password' })
		.min(3, 'Password must be at least 3 characters long')
		.max(255, 'Password cannot exceed 255 characters'),
	roles: z.string({ required_error: 'Please select a role' })
});
