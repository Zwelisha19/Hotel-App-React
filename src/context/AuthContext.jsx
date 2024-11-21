import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        
        localStorage.removeItem('user');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
