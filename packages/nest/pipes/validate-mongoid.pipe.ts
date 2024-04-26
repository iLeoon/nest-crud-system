import {
	ArgumentMetadata,
	BadRequestException,
	Injectable,
	PipeTransform,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';

@Injectable()
export class ValidateMongoIdPipe implements PipeTransform {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	transform(value: string, metadata: ArgumentMetadata) {
		if (ObjectId.isValid(value)) {
			if (String(new ObjectId(value)) === value) return value;
			throw new BadRequestException();
		}
		throw new BadRequestException('Not a valid mongo id');
	}
}
