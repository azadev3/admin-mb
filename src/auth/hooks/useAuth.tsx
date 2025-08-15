import React from "react";

export const useAuth = () => {
  const token = localStorage.getItem('access_token');
  const [isAuth, setIsAuth] = React.useState<boolean>(!!token);

  React.useEffect(() => {
    setIsAuth(!!token);
  }, []);

  return {
    isAuth,
    token,
  };
};
