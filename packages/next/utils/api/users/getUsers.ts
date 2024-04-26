import type { User } from '@/utils/types';
import apiFetch from '../config';

export const getUsers = async () => {
	try {
		const res = await apiFetch.get<User[]>('/users');
		return res.data;
	} catch (e) {
		throw new Error(
			`An error occured while trying to fetch the users from the server.`
		);
	}
};
