import {
	Body,
	Controller,
	Get,
	Post,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { AuthenticatedGuard } from 'guards/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/decorators/authuser.decorator';
import { User } from 'src/entities/Users';
import { UploadService } from 'src/upload/upload.service';
import { UpdateUserDto } from './dto/update-user.dto';

@UseGuards(AuthenticatedGuard)
@UseInterceptors(LoggerInterceptor)
@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly uploadService: UploadService,
	) {}
	@Get()
	async getUsers() {
		return await this.usersService.getUsers();
	}

	@Post('create')
	async create(@Body() userData: CreateUserDto): Promise<string> {
		await this.usersService.createUser(userData);
		return 'User created succ!';
	}

	@Post('/update')
	@UseInterceptors(FileInterceptor('image'))
	async uploadProfileImage(
		@UploadedFile() image: Express.Multer.File,
		@Body() data: UpdateUserDto,
		@AuthUser() user: User,
	) {
		await this.uploadService.uploadImage(image, user);
		await this.usersService.updateUser(user, {
			image: image.originalname,
			username: data.username,
		});
	}

	@Get('/getuser')
	async getProfileImage(@AuthUser() user: User) {
		return await this.usersService.fetchUserData(user);
	}
}
