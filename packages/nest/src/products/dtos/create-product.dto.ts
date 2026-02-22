/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
	@IsNotEmpty()
	@IsString()
	product_name: string;

	@IsNotEmpty()
	@IsNumber()
	unit_price: number;

	@IsNotEmpty()
	@IsNumber()
	units_in_stock: number;

	@IsOptional()
	@IsNumber()
	discontinued?: number = 0;
}
