import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
	createProductDTO,
	updateProductDTO,
} from 'src/products/dtos/products.dto';
import { Products } from './entities/Products';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Products, 'PostgresQL')
		private productsRepo: Repository<Products>,
	) {}

	allProducts(): Promise<Products[]> {
		return this.productsRepo.find();
	}

	async byid(id: number): Promise<Products> {
		return await this.productsRepo.findOneBy({ product_id: id });
	}

	createProduct(data: createProductDTO): Promise<createProductDTO> {
		const newProduct = this.productsRepo.create(data);
		return this.productsRepo.save(newProduct);
	}

	updateProduct(id: number, data: updateProductDTO) {
		return this.productsRepo.update(id, data);
	}
	deleteProduct(id: number) {
		return this.productsRepo.delete(id);
	}
}
