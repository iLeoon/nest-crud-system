import type { UpdateUserData } from '@/utils/types';
import apiFetch from '../config';

export const updateUser = async (data: UpdateUserData) => {
	try {
		const formData = new FormData();
		formData.append('image', data.image!);
		formData.append('username', data.username!);
		await apiFetch.patch('/users/update', formData);
	} catch (e: any) {
		return { message: 'failed', error: e.response.data.message };
	}
};
