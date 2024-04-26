import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Roles } from '../decorators/products.decorator';
import { ProductsGuard } from '../guards/products.guard';
import { AuthenticatedGuard } from 'src/guards/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthenticatedGuard, ProductsGuard)
export class ProductsController {
	constructor(private productservice: ProductsService) {}
	@Roles('admin')
	@Get()
	async getProducts() {
		return await this.productservice.allProducts();
	}
	@Get(':id')
	async getProductByID(@Param('id', ParseIntPipe) id: number) {
		const product = await this.productservice.byid(id);
		return product;
	}
	@Roles('admin')
	@Post('create')
	async create(
		@Body()
		productData: CreateProductDto,
	) {
		await this.productservice.createProduct(productData);
	}

	@Put('update/:id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() productData: UpdateProductDto,
	) {
		return this.productservice.updateProduct(id, productData);
	}

	@Delete('delete/:id')
	delete(@Param('id', ParseIntPipe) id: number) {
		console.log(id);
		return this.productservice.deleteProduct(id);
	}
}
