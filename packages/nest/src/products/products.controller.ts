import {
	Body,
	Controller,
	DefaultValuePipe,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductDTO, updateProductDTO } from './dtos/products.dto';
import { Roles } from '../decorators/products.decorator';
import { ProductsGuard } from '../../guards/products.guard';
import { AuthenticatedGuard } from 'guards/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';
@Controller('products')
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthenticatedGuard, ProductsGuard)
export class ProductsController {
	constructor(private productservice: ProductsService) {}
	@Roles(['admin'])
	@Get()
	async getProducts(
		@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
		@Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
	) {
		return await this.productservice.paginate({ page, limit });
	}
	@Get(':id')
	async getProductByID(@Param('id', ParseIntPipe) id: number) {
		const product = await this.productservice.byid(id);
		return product;
	}
	@Roles(['admin'])
	@Post('create')
	async create(
		@Body()
		productData: createProductDTO,
	) {
		await this.productservice.createProduct(productData);
	}

	@Put('update/:id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() productData: updateProductDTO,
	) {
		return this.productservice.updateProduct(id, productData);
	}

	@Delete('delete/:id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.productservice.deleteProduct(id);
	}
}
