// MiddlewareLayout.js
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useStore from '../stores/store';

const MiddlewareLayout = () => {
  const location = useLocation();
  const setCurrentPath = useStore((state:any) => state.setCurrentPath);

  useEffect(() => {
    setCurrentPath(location.pathname);
    console.log(`Navigated to ${location.pathname}`);
  }, [location, setCurrentPath]);

  return <Outlet />;
};

export default MiddlewareLayout;
