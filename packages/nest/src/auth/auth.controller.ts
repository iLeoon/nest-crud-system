import {
	Controller,
	Post,
	UseGuards,
	UseInterceptors,
	Req,
} from '@nestjs/common';
import { SessionGuard } from '../sessions/session.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';
import { Request } from 'express';
@UseInterceptors(LoggerInterceptor)
@Controller('auth')
export class AuthController {
	@UseGuards(SessionGuard)
	@Post('login')
	login(@Req() req: Request) {
		const user = req.user;
		return user;
	}
}
