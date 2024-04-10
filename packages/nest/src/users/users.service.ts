import {
	BadRequestException,
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/Users';
import { MongoRepository } from 'typeorm';
import { encodePassword } from 'src/utils/hashing';
import { ObjectId } from 'mongodb';
import { CreateUserDto } from './dto/create-users.dto';
import { UploadService } from 'src/upload/upload.service';

type UpdateUserData = {
	username: string;
};

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User, 'MongoDB') private userRepo: MongoRepository<User>,
		private readonly uploadService: UploadService,
	) {}

	async getUsers() {
		const users = await this.userRepo.find();
		if (users) {
			return users;
		}
		throw new HttpException('Error', HttpStatus.BAD_REQUEST);
	}

	async getUserByEmail(email: string) {
		const user = await this.userRepo.findOneBy({ email });
		if (user) {
			return user;
		}
		throw new BadRequestException('No email was found');
	}

	async createUser(userData: CreateUserDto) {
		const password = await encodePassword(userData.password);
		const user = this.userRepo.create({ ...userData, password });
		return await this.userRepo.save(user);
	}

	async updateUser(user: User, data: UpdateUserData) {
		await this.userRepo.updateOne(
			{ _id: new ObjectId(user._id) },
			{ $set: { name: data.username } },
		);
	}

	async updateUserImage(user: User, image: string) {
		await this.userRepo.updateOne(
			{ _id: new ObjectId(user._id) },
			{ $set: { image: `${image}${user._id}` } },
		);
	}

	async fetchUserData(user: User) {
		const { imageUrl } = await this.uploadService.getImage(user);
		return { email: user.email, name: user.name, image: imageUrl };
	}
}
