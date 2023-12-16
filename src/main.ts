import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import sessionConfig from './sessions/sessions.config';
import { LoggerFilter } from './exceptions/logging.filter';
import { Logger } from './logger';
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const logger = app.get(Logger);
	app.use(
		session({
			name: 'nest-session',
			secret: 'this-is-my-secret',
			saveUninitialized: false,
			resave: false,
			cookie: {
				maxAge: 60000,
			},
			store: MongoStore.create(sessionConfig),
		}),
	);
	app.use(passport.initialize());
	app.use(passport.session());
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new LoggerFilter(logger));
	await app.listen(3000);
}
bootstrap();
