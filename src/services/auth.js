// src/services/auth.js
import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Function to log in
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function to log out
export const logout = () => {
  return signOut(auth);
};
