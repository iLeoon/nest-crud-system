import {
	PutObjectCommand,
	S3Client,
	GetObjectCommand,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/Users';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UploadService {
	private readonly s3Client = new S3Client({
		region: process.env.BUCKET_REGION,
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		},
	});
	constructor(private readonly userService: UsersService) {}

	async uploadImage(imageName: string, image: Buffer, user: User) {
		await this.s3Client.send(
			new PutObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: `${imageName}${user._id}`,
				Body: image,
			}),
		);
		await this.userService.updateUser(user, imageName);
	}

	async getImage(imageName: string) {
		await this.s3Client.send(
			new GetObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: imageName,
			}),
		);
	}

	async deleteImage() {}
}
