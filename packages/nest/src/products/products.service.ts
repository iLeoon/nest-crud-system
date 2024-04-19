import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from '../entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Product, 'PostgresQL')
		private productsRepo: Repository<Product>,
	) {}

	async allProducts() {
		return await this.productsRepo.find();
	}

	async byid(id: number): Promise<Product> {
		const product = await this.productsRepo.findOneBy({ product_id: id });
		if (product) {
			return product;
		}
		throw new HttpException(
			'Error occured when fetching product',
			HttpStatus.BAD_REQUEST,
		);
	}

	async createProduct(data: CreateProductDto): Promise<CreateProductDto> {
		const newProduct = this.productsRepo.create(data);
		return await this.productsRepo.save(newProduct);
	}

	updateProduct(id: number, data: UpdateProductDto) {
		return this.productsRepo.update(id, data);
	}

	deleteProduct(id: number) {
		return this.productsRepo.delete(id);
	}
}
