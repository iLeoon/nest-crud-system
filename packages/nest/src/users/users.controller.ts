import {
	Body,
	Controller,
	Get,
	Post,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/users.dto';
import { AuthenticatedGuard } from 'src/auth/auth.guard';
import { LoggerInterceptor } from 'src/interceptors/logging.interceptor';

@UseGuards(AuthenticatedGuard)
@UseInterceptors(LoggerInterceptor)
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}
	@Get()
	async getUsers() {
	 return await this.usersService.getUsers();
	}

	@Post('create')
	async create(@Body() userData: UserDTO): Promise<UserDTO | string> {
		await this.usersService.createUser(userData);
		return 'User created succ!';
	}
}
