import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/Products';
import { Logger } from 'src/logger';

@Module({
	imports: [TypeOrmModule.forFeature([Products], 'PostgresQL')],
	controllers: [ProductsController],
	providers: [ProductsService, { provide: 'LOGGER', useClass: Logger }],
})
export class ProductsModule {}
