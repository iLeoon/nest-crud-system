import type { UpdateAuthUserType } from '@/utils/types';
import { toast } from 'sonner';
import apiFetch from '../config';
import { toastid } from '@/components/forms/account/UpdateAccountForm';

export const updateAccount = async (data: UpdateAuthUserType) => {
	try {
		const formData = new FormData();
		if (data.image) {
			formData.append('image', data.image);
		}

		if (data.username) {
			formData.append('username', data.username);
		}
		await apiFetch.patch('/users/update', formData);
		toast.success('Your profile has been updated successfully.', {
			id: toastid,
			cancel: {
				label: 'X',
				onClick: () => console.log('clicked')
			},
			cancelButtonStyle: {
				backgroundColor: 'transparent',
				color: 'black',
				position: 'absolute',
				right: 2,
				top: 2,
				padding: '1'
			}
		});
		return { message: 'success' };
	} catch (e: any) {
		return { message: 'failed', error: e.response.data.message };
	}
};
