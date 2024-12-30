import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


 export const useAuth = () => {
  const navigate = useNavigate();
//   const location = useLocation();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, []);
};