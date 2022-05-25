import { createContext, useState } from 'react';
import { getCurretUser, signIn } from '../services/users';

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const currentUser = getCurretUser();
  const [user, setUser] = useState(currentUser || { email: null });
  const [newUser, setNewUser] = useState(false);
  const [profile, setProfile] = useState(null);

  const authState = {
    user,
    setUser,
    newUser,
    setNewUser,
    profile,
    setProfile,
  };

  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  );
}