import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class Logger {
	private readonly formattingMessage = winston.format.printf((info) => {
		return `[${info.timestamp} ${info.level}]: ${info.message}`;
	});
	Log = winston.createLogger({
		transports: [
			new winston.transports.Console({
				format: winston.format.combine(
					winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
					winston.format.colorize({ all: true }),
					winston.format.splat(),
					winston.format.simple(),
					winston.format.prettyPrint(),
					this.formattingMessage,
				),
			}),
		],
	});
}
