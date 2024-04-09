import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthenticatedGuard } from 'guards/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';
import { AuthUser } from 'src/decorators/authuser.decorator';
import { User } from 'src/entities/Users';
import { UploadService } from './upload.service';

@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthenticatedGuard)
@Controller('upload')
export class UploadController {
	constructor(private readonly uploadService: UploadService) {}
	@Get('/getimage')
	async getProfileImage(@AuthUser() user: User) {
		return await this.uploadService.getImage(user);
	}
}
