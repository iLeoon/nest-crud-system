import { User, credentialsUser } from '@/utils/types';
import api from '../config';

export const loginAuth = async (userData: credentialsUser) => {
	try {
		await api.post('/auth/login', userData);
		return { message: 'success', status: 201 };
	} catch (e: any) {
		return { message: 'faild', error: e.response.data.message };
	}
};

export const authenticatedUser = async () => {
	try {
		const res = await api.get<User>('/auth/status');
		return res.data;
	} catch (e) {
		throw new Error('An Error occured whhile trying to fetch the user status');
	}
};

export const signOut = async () => api.get('/auth/logout');
