import axios, { AxiosRequestConfig } from 'axios';
import { User, credentialsUser } from '@/types';

const config: AxiosRequestConfig = { withCredentials: true };
export const loginAuth = async (userData: credentialsUser) => {
  const res = await axios.post<User>(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/login`,
    userData,
    config,
  );
  return res;
};
