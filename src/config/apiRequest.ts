import type { RawAxiosRequestHeaders } from 'axios';
import { toastdev } from '@azadev/react-toastdev';
import { baseUrl } from './baseURL';
import axios from 'axios';
import { logout } from '../auth/api/handleLogin';

type Method = 'get' | 'post' | 'put' | 'delete';

interface RequestInterface {
  endpoint: string;
  method: Method;
  headers?: RawAxiosRequestHeaders;
  data?: any;
  params?: any;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => {
    const msg = response?.data?.message;
    if (msg) toastdev.success(msg, { sound: false });
    return response;
  },
  error => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 401) {
        logout();
        return;
      }

      const data = error.response?.data;
      const msg =
        typeof data === 'string'
          ? data
          : data?.message?.slice(0, 40) || data.messages?.[0] || 'Xəta baş verdi';
      toastdev.error(msg ?? '', { sound: true });
    }

    return Promise.reject(error);
  },
);

export const apiRequest = async ({
  endpoint,
  method,
  headers = {},
  data,
  params,
}: RequestInterface) => {
  try {
    const res = await axiosInstance({
      url: endpoint,
      method,
      headers,
      params: method === 'get' ? params : undefined,
      data: method !== 'get' && method !== 'delete' ? data : undefined,
    });
    return res.data;
  } catch (error: any) {
    const msg =
      axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : error.message || '';
    toastdev.error(msg, { sound: true });
    throw error;
  }
};
