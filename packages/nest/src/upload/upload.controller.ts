import {
	Body,
	Controller,
	Get,
	Post,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from 'guards/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';
import { UploadService } from './upload.service';
import { AuthUser } from 'src/decorators/authuser.decorator';
import { User } from 'src/entities/Users';
import { UploadDto } from './dto/update-profile.dto';

@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthenticatedGuard)
@Controller('upload')
export class UploadController {
	constructor(private readonly uploadService: UploadService) {}
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	uploadProfileImage(
		@UploadedFile() image: Express.Multer.File,
		@AuthUser() user: User,
	) {
		console.log(image);
		this.uploadService.uploadImage(image, user);
	}

	@Get('/getimage')
	async getProfileImage(@AuthUser() user: User) {
		return await this.uploadService.getImage(user);
	}
}
