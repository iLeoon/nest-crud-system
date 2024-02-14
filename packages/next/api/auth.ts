import axios, { AxiosRequestConfig } from 'axios';
import { credentialsUser } from '@/types';

const config: AxiosRequestConfig = { withCredentials: true };
export const loginAuth = async (userData: credentialsUser) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/login`,
    userData,
    config,
  );
  return data;
};
