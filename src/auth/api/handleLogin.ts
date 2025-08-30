import { apiRequest } from '../../config/apiRequest';
import type { LoginPayloadInterface } from './model';

export const handleLogin = async (data: LoginPayloadInterface | null) => {
  const res = await apiRequest({
    endpoint: 'login',
    method: 'post',
    data: data ? data : null,
    headers: { 'Content-Type': 'application/json' },
  });
  if (res && res.accessToken) {
    localStorage.setItem('access_token', res.accessToken);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  }
};
