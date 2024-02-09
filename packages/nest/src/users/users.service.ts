import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./entities/Users";
import { Repository } from "typeorm";
import { UserDTO } from "./dto/users.dto";
import { encodePassword } from "src/utils/hashing";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users, "MongoDB") private mongodb: Repository<Users>,
  ) {}

  async getUsers() {
    const users = await this.mongodb.find();
    if (users) {
      return users;
    }
    throw new HttpException("Error", HttpStatus.BAD_REQUEST);
  }

  async getUserByEmail(email: string) {
    const user = await this.mongodb.findOneBy({ email });
    if (user) {
      return user;
    }
    throw new BadRequestException("No email was found");
  }

  async createUser(userData: UserDTO) {
    const password = await encodePassword(userData.password);
    const user = this.mongodb.create({ ...userData, password });
    return await this.mongodb.save(user);
  }
}
