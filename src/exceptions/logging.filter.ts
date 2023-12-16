import {
	Catch,
	ExceptionFilter,
	ExecutionContext,
	HttpException,
	Inject,
} from '@nestjs/common';

import { Logger } from '../logger';

@Catch(HttpException)
export class LoggerFilter<T extends HttpException> implements ExceptionFilter {
	constructor(@Inject('LOGGER') private readonly logger: Logger) {}
	catch(exception: T, context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const response = context.switchToHttp().getResponse();
		const status = exception.getStatus();
		const errMessage = exception['response']['message'];
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
