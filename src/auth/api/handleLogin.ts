import { apiRequest } from '../../config/apiRequest';
import type { LoginPayloadInterface } from './model';

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('access_token_expires');
  window.location.href = '/login';
};

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
  if (!refreshToken) {
    logout();
    return null;
  }

  try {
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
  } catch (err: any) {
    logout();
  }

  return null;
};

const isTokenExpired = () => {
  const expiresAt = localStorage.getItem('access_token_expires');
  if (!expiresAt) return true;
  return new Date(expiresAt).getTime() - Date.now() < 60_000;
};

export const authorizedRequest = async (options: any) => {
  try {
    if (isTokenExpired()) {
      const newToken = await refreshAccessToken();
      if (!newToken) {
        logout();
        return;
      }
    }

    const token = localStorage.getItem('access_token');

    return await apiRequest({
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout();
      return;
    }
    throw error;
  }
};
