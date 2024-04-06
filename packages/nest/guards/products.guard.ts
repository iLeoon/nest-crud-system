import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Roles } from '../src/decorators/products.decorator';
import { checkRoles } from '../src/utils/checkroles';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ProductsGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}
	canActivate(context: ExecutionContext) {
		const roles = this.reflector.get(Roles, context.getHandler());
		if (!roles) {
			return true;
		}
		const request = context.switchToHttp().getRequest();
		const user = request.user.roles[0];

		return checkRoles(roles, user);
	}
}
