/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class UpdateUserDto {
	@IsString()
	username: string;
}
