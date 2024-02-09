import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Logger } from 'src/logger';

@Injectable()
export class LoggerMiddelWare implements NestMiddleware {
	private logger = new Logger();
	use(req: Request, res: Response, next: NextFunction) {
		const { method, originalUrl } = req;
		const userAgent = req.get('user-agent') || '';

		res.on('close', () => {
			const { statusCode } = res;
			const loggerObject = {
				Request: `method: ${method} userAgent: ${userAgent} url: ${originalUrl}`,
				Response: `status: ${statusCode}`,
			};
			if (!req.isAuthenticated()) {
				this.logger.Log.info('%j', loggerObject);
			}
		});
		next();
	}
}
