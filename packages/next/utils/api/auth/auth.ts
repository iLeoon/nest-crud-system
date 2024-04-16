import { credentialsUser } from '@/utils/types';
import api from '../config';

export const loginAuth = async (userData: credentialsUser) => {
	try {
		await api.post('/auth/login', userData);
		return { message: 'success' }
	} catch (e: any) {
		return { message: 'failed', error: e.response.data.message };
	}
};

export const signOut = async () => api.get('/auth/logout');
