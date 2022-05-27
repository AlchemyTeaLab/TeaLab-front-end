import { createContext, useState, useEffect } from 'react';
import { getCurrentUser, signIn } from '../services/users';

export const authContext = createContext();

export default function AuthProvider({ children }) {
  // const currentUser = getCurrentUser();
  const [user, setUser] = useState({ email: null });
  const [newUser, setNewUser] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    }
    getUser();
  }, []);

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
