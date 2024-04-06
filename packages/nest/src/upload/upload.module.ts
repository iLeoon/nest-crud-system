import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { UsersModule } from 'src/users/users.module';

@Module({
	controllers: [UploadController],
	imports: [UsersModule],
	providers: [UploadService],
})
export class UploadModule {}
