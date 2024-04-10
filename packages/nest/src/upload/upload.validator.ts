import { FileValidator } from '@nestjs/common';
import fileType from 'file-type';

type CustomUploadTypeValidatorOptions = {
	fileType: string[];
};
export class CustomUploadFileTypeValidator extends FileValidator {
	private _allowedMimeTypes: string[];

	constructor(
		protected readonly validationOptions: CustomUploadTypeValidatorOptions,
	) {
		super(validationOptions);
		this._allowedMimeTypes = this.validationOptions.fileType;
	}

	public async isValid(file?: Express.Multer.File) {
		const response = await fileType.fromBuffer(file.buffer);
		return this._allowedMimeTypes.includes(response.mime);
	}

	public buildErrorMessage(): string {
		return 'Only file allowed types are .jpg, .png, and .jpeg';
	}
}
