import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductDTO, updateProductDTO } from './dtos/products.dto';
import { Roles } from './products.decorator';
import { ProductsGuard } from './products.guard';
import { AuthenticatedGuard } from 'src/auth/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('products')
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthenticatedGuard, ProductsGuard)
export class ProductsController {
	constructor(private productservice: ProductsService) {}
	@Roles(['admin'])
	@Get()
	async getProducts() {
		return await this.productservice.allProducts();
	}
	@Get(':id')
	async getProductByID(@Param('id', ParseIntPipe) id: number) {
		const product = await this.productservice.byid(id);
		if (product) {
			return product;
		} else {
			throw new HttpException('Product not found!', HttpStatus.BAD_REQUEST);
		}
	}
	@Roles(['admin'])
	@Post('create')
	create(
		@Body()
		productData: createProductDTO,
	) {
		return this.productservice.createProduct(productData);
	}

	@Put('update/:id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() productData: updateProductDTO,
	) {
		return this.productservice.updateProduct(id, productData);
	}

	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.productservice.deleteProduct(id);
	}
}
