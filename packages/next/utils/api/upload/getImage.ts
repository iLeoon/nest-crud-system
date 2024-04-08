import type { GetImage } from '@/utils/types';
import apiFetch from '../config';

export const getImage = async () => {
	try {
		return await apiFetch.get<GetImage>('/upload/getimage');
	} catch (e) {
		throw new Error(`An error occured while trying to fetch the image from the server.`);
	}
};
