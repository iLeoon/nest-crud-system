import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/Users';
import { Logger } from 'winston';

@Module({
	imports: [TypeOrmModule.forFeature([Users], 'MongoDB')],
	controllers: [UsersController],
	providers: [
		UsersService,
		{
			provide: 'LOGGER',
			useClass: Logger,
		},
	],
	exports: [UsersService],
})
export class UsersModule {}
