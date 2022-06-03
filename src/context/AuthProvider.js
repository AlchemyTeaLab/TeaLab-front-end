import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../services/users';

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ email: null });
  const [newUser, setNewUser] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
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
    loading,
    setLoading,
  };

  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  );
}
