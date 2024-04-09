import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/Users';
import { UploadModule } from 'src/upload/upload.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([User], 'MongoDB'),
		forwardRef(() => UploadModule),
	],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
