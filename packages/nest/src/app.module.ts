import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './entities/Products';
import { UsersModule } from './users/users.module';
import { User } from './entities/Users';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddelWare } from './middelware/logging.middelware';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { UploadModule } from './upload/upload.module';
@Module({
	imports: [
		ConfigModule.forRoot(),
		ThrottlerModule.forRoot([]),
		TypeOrmModule.forRoot({
			name: 'MongoDB',
			type: 'mongodb',
			url: process.env.MONGO_URI,
			synchronize: true,
			database: 'test',
			entities: [User],
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
			entities: [Product],
		}),
		ProductsModule,
		UsersModule,
		AuthModule,
		UploadModule,
	],
	controllers: [],
	providers: [
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard,
		},
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddelWare).forRoutes('*');
	}
}
