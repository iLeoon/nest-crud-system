import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
	Inject,
} from '@nestjs/common';
import { Logger } from 'src/logger';
import { tap } from 'rxjs';

export interface Response<T> {
	products: T;
}

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
	constructor(@Inject('LOGGER') private readonly logger: Logger) {}
	intercept(context: ExecutionContext, next: CallHandler) {
		const request = context.switchToHttp().getRequest();
		const response = context.switchToHttp().getResponse();
		const handlerName = context.getHandler().name;
		const className = context.getClass().name;
		const { url, method } = request;
		const loggerObject = {
			Request: `Handler: ${handlerName} Class: ${className} url: ${url} method: ${method}`,
			Response: `status: ${response.statusCode}`,
		};
		// if (request.isAuthenticated()) {
		// 	this.logger.Log.info('Interceptor Request %j', requestObj);
		// }

		return next.handle().pipe(
			tap(() => {
				if (request.isAuthenticated()) {
					this.logger.Log.info('%j', loggerObject);
				}
			}),
		);
	}
}
