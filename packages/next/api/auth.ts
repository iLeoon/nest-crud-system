import axios, { AxiosRequestConfig } from 'axios';
import { User } from '@/types';

const config: AxiosRequestConfig = { withCredentials: true };
export const loginAuth = async (userData: User) => {
  await axios.post(`${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/login`, userData, config);
};
