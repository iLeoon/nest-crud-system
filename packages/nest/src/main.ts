import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import sessionConfig from './sessions/sessions.store';
import { LoggerFilter } from './exceptions/logging.filter';
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: [`${process.env.NEXT_API_URL}`],
		credentials: true,
	});
	app.use(
		session({
			name: 'nest-session',
			secret: process.env.SESSION_SECRET,
			saveUninitialized: false,
			resave: false,
			cookie: {
				maxAge: 3600000,
			},
			store: MongoStore.create(sessionConfig),
		}),
	);
	app.use(passport.initialize());
	app.use(passport.session());
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new LoggerFilter());
	await app.listen(3000);
}
bootstrap();
