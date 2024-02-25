import { User, credentialsUser } from '@/utils/types';
import api from '../config';

export const loginAuth = async (userData: credentialsUser) => {
  const res = await api.post('/auth/login', userData);
  return res;
};

export const authenticatedUser = async () => {
  const res = await api.get<User>('/auth/status');
  return res.data;
};

export const signOut = async () => api.get('/auth/logout');
