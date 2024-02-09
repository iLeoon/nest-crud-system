import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string) {
	const salt = bcrypt.genSaltSync();
	return await bcrypt.hash(rawPassword, salt);
}
