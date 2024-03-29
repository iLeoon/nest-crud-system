import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
	createProductDTO,
	updateProductDTO,
} from 'src/products/dtos/products.dto';
import { Products } from './entities/Products';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Products, 'PostgresQL')
		private productsRepo: Repository<Products>,
	) {}

	allProducts(): Promise<Products[]> {
		const products = this.productsRepo.find();
		if (products) {
			return products;
		}
		throw new HttpException(
			'Error occured when fetching products',
			HttpStatus.BAD_REQUEST,
		);
	}

	async byid(id: number): Promise<Products> {
		const product = await this.productsRepo.findOneBy({ product_id: id });
		if (product) {
			return product;
		}
		throw new HttpException(
			'Error occured when fetching product',
			HttpStatus.BAD_REQUEST,
		);
	}

	async createProduct(data: createProductDTO): Promise<createProductDTO> {
		const newProduct = this.productsRepo.create(data);
		return await this.productsRepo.save(newProduct);
	}

	updateProduct(id: number, data: updateProductDTO) {
		return this.productsRepo.update(id, data);
	}

	deleteProduct(id: number) {
		return this.productsRepo.delete(id);
	}

	async paginate(options: IPaginationOptions) {
		const queryBuilder = this.productsRepo.createQueryBuilder('p');
		queryBuilder.orderBy('p.product_id', 'ASC');
		return await paginate<Products>(queryBuilder, options);
	}
}
