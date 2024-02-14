import {
	Controller,
	Post,
	UseGuards,
	Request,
	UseInterceptors,
} from '@nestjs/common';
import { SessionGuard } from '../sessions/session.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('auth')
@UseInterceptors(LoggerInterceptor)
export class AuthController {
	@UseGuards(SessionGuard)
	@Post('login')
	login(@Request() req) {
		const user = req.user;
		const { name, email, roles } = user;
		return { name, email, roles };
	}
}
