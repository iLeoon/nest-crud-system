import { PassportSerializer } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-users.dto';
import { UsersService } from 'src/users/users.service';

export class SessionSerializer extends PassportSerializer {
	constructor(private readonly userService: UsersService) {
		super();
	}

	serializeUser(user: CreateUserDto, done: (err, user: CreateUserDto) => void) {
		return done(null, user);
	}

	async deserializeUser(
		user: CreateUserDto,
		done: (err, user: CreateUserDto) => void,
	) {
		return done(null, user);
	}
}
