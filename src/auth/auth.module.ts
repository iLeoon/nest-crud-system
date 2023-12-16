import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { SessionSerializer } from '../sessions/session.serilizer';
import { Logger } from 'src/logger';

@Module({
	providers: [
		AuthService,
		LocalStrategy,
		SessionSerializer,
		{ provide: 'LOGGER', useClass: Logger },
	],
	imports: [UsersModule, PassportModule.register({ session: true })],
	controllers: [AuthController],
})
export class AuthModule {}
