import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./entities/Products";

@Module({
  imports: [TypeOrmModule.forFeature([Products], "PostgresQL")],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
