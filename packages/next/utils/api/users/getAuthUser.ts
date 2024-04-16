import type { AuthUserType } from '@/utils/types';
import apiFetch from '../config';

export const getAuthUser = async () => {
	try {
		const res = await apiFetch.get<AuthUserType>('/users/getuser');
		return res.data;
	} catch (e) {
		throw new Error(
			`An error occured while trying to fetch the user from the server.`
		);
	}
};
