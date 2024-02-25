import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest<Request>();
		console.log('Is Authenticated:', request.isAuthenticated());
		console.log('Authenticated User:', request.user);
		return request.isAuthenticated();
	}
}
