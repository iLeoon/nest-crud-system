import {
	Controller,
	Post,
	UseGuards,
	UseInterceptors,
	Req,
	Get,
	Res,
} from '@nestjs/common';
import { SessionGuard } from '../../guards/session.guard';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { AuthenticatedGuard } from '../../guards/auth.guard';
@UseInterceptors(LoggerInterceptor)
@Controller('auth')
export class AuthController {
	@UseGuards(SessionGuard)
	@Post('login')
	login() {}

	@UseGuards(AuthenticatedGuard)
	@Get('status')
	status(@Req() req) {
		const { name, email, roles } = req.user;
		return { name, email, roles };
	}

	@UseGuards(AuthenticatedGuard)
	@Get('logout')
	logout(@Req() req, @Res() res) {
		req.session.destroy(function () {
			res.clearCookie('nest-session');
			res.send('Ok');
		});
	}
}
