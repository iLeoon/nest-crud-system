import { forwardRef, Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { UsersModule } from 'src/users/users.module';

@Module({
	controllers: [UploadController],
	imports: [forwardRef(() => UsersModule)],
	providers: [UploadService],
	exports: [UploadService],
})
export class UploadModule {}
