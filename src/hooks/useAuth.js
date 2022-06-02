import { useContext } from 'react';
import { authContext } from '../context/AuthProvider';
import { signIn, signUp, signOut, getCurrentUser } from '../services/users';

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within UserProvider');
  }

  const {
    user,
    setUser,
    newUser,
    setNewUser,
    profile,
    setProfile,
    loading,
    setLoading,
  } = context;

  const authorizeUser = async (email, password, username) => {
    try {
      if (!newUser) {
        const authorizedUser = await signIn(email, password);
        setUser(authorizedUser.user);

        return authorizedUser;
      } else {
        const authorizedUser = await signUp(email, password, username);
        setUser(authorizedUser.user);

        return authorizedUser;
      }
    } catch (err) {
      throw err;
    }
  };

  const setCurrentUser = async () => {
    try {
      const profile = await getCurrentUser();
      setProfile(profile.username);
    } catch (err) {
      throw err;
    }
  };

  const signOutUser = async () => {
    try {
      setUser({ email: null });
      await signOut();
    } catch (err) {
      throw err;
    }
  };

  return {
    signOutUser,
    user,
    setUser,
    newUser,
    setNewUser,
    authorizeUser,
    profile,
    setProfile,
    setCurrentUser,
    loading,
    setLoading,
  };
};
