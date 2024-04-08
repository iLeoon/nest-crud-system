import type { UpdateProfileData } from '@/utils/types';
import apiFetch from '../config';

export const uploadImage = async (image?: File) => {
	try {
		await apiFetch.post('/upload', image);
	} catch (e) {
		throw new Error(
			`An error occured while trying to upload the image to the server.`
		);
	}
};
