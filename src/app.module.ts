import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Products } from './products/entities/Products';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/Users';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddelWare } from './middelware/logging.middelware';
import { ConfigModule } from '@nestjs/config';
@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			name: 'MongoDB',
			type: 'mongodb',
			url: process.env.MONGO_URI,
			synchronize: false,
			database: 'test',
			entities: [Users],
		}),
		TypeOrmModule.forRoot({
			name: 'PostgresQL',
			type: 'postgres',
			host: process.env.DATABASE_HOST,
			port: parseInt(process.env.DATABASE_PORT),
			username: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
			synchronize: false,
			entities: [Products],
		}),
		ProductsModule,
		UsersModule,
		AuthModule,
	],
	controllers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddelWare).forRoutes('*');
	}
}
