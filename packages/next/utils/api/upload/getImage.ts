import type { GetUserData } from '@/utils/types';
import apiFetch from '../config';

export const getImage = async () => {
	try {
		const res = await apiFetch.get<GetUserData>('/users/getuser');
		return res.data;
	} catch (e) {
		throw new Error(
			`An error occured while trying to fetch the image from the server.`
		);
	}
};
