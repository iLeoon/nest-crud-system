import {
	Catch,
	ExceptionFilter,
	ExecutionContext,
	HttpException,
} from '@nestjs/common';

import { Logger } from '../logger';

@Catch(HttpException)
export class LoggerFilter<T extends HttpException> implements ExceptionFilter {
	private readonly logger = new Logger();
	catch(exception: T, context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const response = context.switchToHttp().getResponse();
		const status = exception.getStatus();
		const errMessage =
			exception['response']['message'] || exception['response'];
		const exceptionObj = {
			exception: exception.name,
			status: exception.getStatus(),
			url: request.url,
			description: errMessage,
		};
		this.logger.Log.error('%j', exceptionObj);
		response.status(status).json({
			type: exception.name,
			path: request.url,
			statuCode: status,
			message: errMessage,
		});
	}
}
