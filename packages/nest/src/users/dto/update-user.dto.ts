/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	username: string;
}
