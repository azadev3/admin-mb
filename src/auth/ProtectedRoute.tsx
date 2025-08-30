import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
