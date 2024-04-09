import type { UpdateUserData } from '@/utils/types';
import apiFetch from '../config';

export const updateUser = async (data: UpdateUserData) => {
	console.log(data);
	const formData = new FormData();
	formData.append('image', data.image);
	formData.append('username', data.username);
	try {
		await apiFetch.post('/users/update', formData);
	} catch (e) {
		throw new Error(
			`An error occured while trying to upload the image to the server.`
		);
	}
};
