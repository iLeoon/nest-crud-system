import z from 'zod';

export const createSchema = z
	.object({
		product_name: z
			.string({
				required_error: "* Product name can't be an empty string",
				invalid_type_error: '* Product name must be a string'
			})
			.min(5, '* Product name must not be less than 5 letters')
			.max(20, '* Product name must not be more than 20 letters'),
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

export const updateSchema = createSchema;
