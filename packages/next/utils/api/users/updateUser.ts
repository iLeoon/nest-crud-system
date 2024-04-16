import type { UpdateAuthUserType } from '@/utils/types';
import apiFetch from '../config';

export const updateUser = async (data: UpdateAuthUserType) => {
	try {
		const formData = new FormData();
		if (data.image) {
			formData.append('image', data.image);
		}

		if (data.username) {
			formData.append('username', data.username);
		}
		await apiFetch.patch('/users/update', formData);
		return { message: 'success' };
	} catch (e: any) {
		return { message: 'failed', error: e.response.data.message };
	}
};
