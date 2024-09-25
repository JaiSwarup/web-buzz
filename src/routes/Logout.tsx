// ProtectedRoute.js
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

const Logout = () => {
  const isAuthenticated = useAuthStore((state:any) => state.isAuthenticated);
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  if (redirect) {
    return <Navigate to="/discover" />;
  }

  if (showMessage) {
    return <div>You are already logged in. Redirecting...</div>;
  }

  return (
    <>
    <h1 className="text-6xl text-center font-bold font-serif mt-10">XYZ Organization</h1>
    <Outlet />
    </>
);
};

export default Logout;
