import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
	@IsNotEmpty()
	@IsString()
	product_name: string;

	@IsNotEmpty()
	@IsNumber()
	unit_price: number;

	@IsNotEmpty()
	@IsNumber()
	units_in_stock: number;
}
