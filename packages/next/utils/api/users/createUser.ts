import type { CreateUserSchemaType, User } from '@/utils/types';
import apiFetch from '../config';

export const createUser = async (userData: CreateUserSchemaType) => {
	try {
		await apiFetch.post('/users/create', userData);
	} catch (e) {
		throw new Error(`An error occured while trying to create a user.`);
	}
};
