import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/entities/Users';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	constructor(private readonly userService: UsersService) {}
	async canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest<Request>();
		const user = request.user as User;
		const dbUser = await this.userService.getUserByEmail(user.email);
		user.image = dbUser.image;
		user.name = dbUser.name;
		return request.isAuthenticated();
	}
}
