/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class UploadDto {
	@IsNotEmpty()
	@IsString()
	username: string;
}

