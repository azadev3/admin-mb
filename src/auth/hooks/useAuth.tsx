import React from 'react';

export const useAuth = () => {
  const [token, setToken] = React.useState<string | null>(() =>
    localStorage.getItem('access_token'),
  );
  const [isAuth, setIsAuth] = React.useState<boolean>(!!token);

  React.useEffect(() => {
    const handleStorage = () => {
      const newToken = localStorage.getItem('access_token');
      setToken(newToken);
      setIsAuth(!!newToken);
    };

    window.addEventListener('storage', handleStorage); 
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return {
    isAuth,
    token,
  };
};
