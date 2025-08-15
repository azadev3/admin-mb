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
    if (response.data) {
      const msg = response?.data?.message;
      if (msg) {
         toastdev.success(msg ?? 'Əməliyyat Uğurludur!', { sound: true });
      }
    }
    return response;
  },
  error => {
    if (axios.isAxiosError(error)) {
      const msg = error?.response?.data ?? error?.response?.data?.message;
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
}: RequestInterface) => {
  try {
    const res = await axiosInstance({
      url: endpoint,
      method,
      headers, // user custom headers
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
