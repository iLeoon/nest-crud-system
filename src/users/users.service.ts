import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/Users';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/users.dto';
import { encodePassword } from 'src/utils/hashing';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users, 'MongoDB') private mongodb: Repository<Users>,
	) {}

	async getUsers() {
		return await this.mongodb.find();
	}

	async getUserByEmail(email: string) {
		return await this.mongodb.findOneBy({ email });
	}

	async createUser(userData: UserDTO) {
		const password = await encodePassword(userData.password);
		const user = this.mongodb.create({ ...userData, password });
		return await this.mongodb.save(user);
	}
}
