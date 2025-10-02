import type { RawAxiosRequestHeaders } from 'axios';
import { toastdev } from '@azadev/react-toastdev';
import { baseUrl } from './baseURL';
import axios from 'axios';

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
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? error.request?.status;
      console.log(status, 'STATUS::::::');

      if (status === 401) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token_expires');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      const msg = error.response?.data?.message || error.message || 'Xəta baş verdi';
      toastdev.error(msg, { sound: true });
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
