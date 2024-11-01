
import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};


export const logout = () => {
  return signOut(auth);
};
