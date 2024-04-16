import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/Product';
import { UsersModule } from 'src/users/users.module';

@Module({
	imports: [TypeOrmModule.forFeature([Product], 'PostgresQL'), UsersModule],
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class ProductsModule {}
