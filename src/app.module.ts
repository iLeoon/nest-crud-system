import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Products } from './products/entities/Products';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/Users';
import { AuthModule } from './auth/auth.module';
import { Logger } from './logger';
import { LoggerMiddelWare } from './middelware/logging.middelware';
@Module({
	imports: [
		TypeOrmModule.forRoot({
			name: 'MongoDB',
			type: 'mongodb',
			url: 'mongodb+srv://ahmed123:Midomon1@cluster0.yglwi9c.mongodb.net/?retryWrites=true&w=majority',
			synchronize: false,
			database: 'test',
			entities: [Users],
		}),
		TypeOrmModule.forRoot({
			name: 'PostgresQL',
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'ahmed',
			password: 'admin',
			database: 'northwind',
			synchronize: false,
			entities: [Products],
		}),
		ProductsModule,
		UsersModule,
		AuthModule,
	],
	controllers: [],
	providers: [Logger],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddelWare).forRoutes('*');
	}
}
