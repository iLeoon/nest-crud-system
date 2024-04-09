import {
	PutObjectCommand,
	S3Client,
	GetObjectCommand,
	DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/Users';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class UploadService {
	private readonly s3Client = new S3Client({
		region: process.env.BUCKET_REGION,
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		},
	});
	constructor() {}

	async uploadImage(image: Express.Multer.File, user: User) {
		await this.s3Client.send(
			new PutObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: `${image.originalname}${user._id}`,
				Body: image.buffer,
				ContentType: image.mimetype,
			}),
		);
	}

	async getImage(user: User) {
		const command = new GetObjectCommand({
			Bucket: process.env.BUCKET_NAME,
			Key: user.image,
		});

		const url = await getSignedUrl(this.s3Client, command, { expiresIn: 900 });
		return { imageUrl: url };
	}

	async deleteImage(user: User) {
		await this.s3Client.send(
			new DeleteObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: user.image,
			}),
		);
	}
}
