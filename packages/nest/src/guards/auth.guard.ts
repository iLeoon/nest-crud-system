import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/entities/User';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	constructor(private readonly userService: UsersService) {}
	async canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest<Request>();

		if (request.isAuthenticated()) {
			const user = request.user as User;
			const dbUser = await this.userService.getUserByEmail(user.email);
			user.image = dbUser.image;
			user.name = dbUser.name;
			return true;
		}
		return false;
	}
}
