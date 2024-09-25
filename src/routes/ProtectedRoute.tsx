// ProtectedRoute.js
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state:any) => state.isAuthenticated);
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  if (showMessage) {
    return <div>You need to login to access this page. Redirecting...</div>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
