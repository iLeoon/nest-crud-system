import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bycrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(private userService: UsersService) {}
	async validateUser(email: string, password: string) {
		const user = await this.userService.getUserByEmail(email);
		/**
		 * signing in with a super user that does not require a hashed password
		 * then you can create users with hashed passwords
		 */
		if (user.email === 'user@gmail.com' && user.password === '123') {
			return user;
		}
		const matched = await bycrypt.compare(password, user.password);
		if (user && matched) {
			return user;
		}
		throw new UnauthorizedException('Invalid password');
	}
}
