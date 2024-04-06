import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/Products';

@Module({
	imports: [TypeOrmModule.forFeature([Product], 'PostgresQL')],
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class ProductsModule {}
