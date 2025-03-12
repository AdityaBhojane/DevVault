import { Outlet } from 'react-router-dom';
import React from 'react';

const Auth: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default Auth;
