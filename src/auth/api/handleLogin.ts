import { apiRequest } from '../../config/apiRequest';
import type { LoginPayloadInterface } from './model';

export const handleLogin = async (data: LoginPayloadInterface | null) => {
  const res = await apiRequest({
    endpoint: 'login',
    method: 'post',
    data: data ?? null,
    headers: { 'Content-Type': 'application/json' },
  });

  if (res && res.accessToken) {
    localStorage.setItem('access_token', res.accessToken);
    localStorage.setItem('refresh_token', res.refreshToken);
    localStorage.setItem('access_token_expires', res.accessTokenExpires);

    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  }
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (!refreshToken) return null;

  const res = await apiRequest({
    endpoint: 'refresh',
    method: 'post',
    data: { refreshToken },
    headers: { 'Content-Type': 'application/json' },
  });

  if (res && res.accessToken) {
    localStorage.setItem('access_token', res.accessToken);
    localStorage.setItem('access_token_expires', res.accessTokenExpires);
    return res.accessToken;
  }

  return null;
};

const isTokenExpired = () => {
  const expiresAt = localStorage.getItem('access_token_expires');
  if (!expiresAt) return true;
  return new Date(expiresAt).getTime() - Date.now() < 60_000;
};

export const authorizedRequest = async (options: any) => {
  if (isTokenExpired()) {
    await refreshAccessToken();
  }
  const token = localStorage.getItem('access_token');

  return apiRequest({
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
