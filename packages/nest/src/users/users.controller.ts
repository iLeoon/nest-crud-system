import {
	Body,
	Controller,
	Get,
	HttpStatus,
	ParseFilePipeBuilder,
	Patch,
	Post,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { AuthenticatedGuard } from 'src/guards/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/decorators/authuser.decorator';
import { User } from 'src/entities/User';
import { UploadService } from 'src/upload/upload.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomUploadFileTypeValidator } from 'src/upload/upload.validator';

const ACCEPTED_IMAGE_TYPES = ['image/png, image/jpg', 'image/jpeg'];
const ACCEPTED_MAX_IMAGE_SIZE = 1024 * 1024 * 2;
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

	@Patch('/update')
	@UseInterceptors(FileInterceptor('image'))
	async uploadProfileImage(
		@UploadedFile(
			new ParseFilePipeBuilder()
				.addValidator(
					new CustomUploadFileTypeValidator({
						fileType: ACCEPTED_IMAGE_TYPES,
					}),
				)
				.addMaxSizeValidator({
					maxSize: ACCEPTED_MAX_IMAGE_SIZE,
					message: 'File size should be less than 2mb',
				})
				.build({
					errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
					fileIsRequired: false,
				}),
		)
		image: Express.Multer.File,
		@Body() { username }: UpdateUserDto,
		@AuthUser() user: User,
	) {
		if (image) {
			await this.uploadService.uploadImage(image, user);
			await this.usersService.updateUserImage(user, image.originalname);
		}

		if (username) {
			await this.usersService.updateUser(user, {
				username,
			});
		}
	}

	@Get('/getuser')
	async getProfileImage(@AuthUser() user: User) {
		return await this.usersService.fetchUserData(user);
	}
}
