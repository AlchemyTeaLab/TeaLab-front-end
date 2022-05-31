import { useContext } from 'react';
import toast from 'react-hot-toast';
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
        const responseUser = await signIn(email, password);
        setUser(responseUser.user);
      } else {
        const responseUser = await signUp(email, password, username);
        setUser(responseUser.user);
      }
    } catch (err) {
      //
      toast.error(err.message);
      throw err;
    }
  };

  const setCurrentUser = async () => {
    try {
      const profile = await getCurrentUser();
      setProfile(profile.username);
      toast(`hello ${profile.username}`, { icon: '👋' });
    } catch (err) {
      //
      toast.error(err.message);
      throw err;
    }
  };

  const signOutUser = async () => {
    try {
      await signOut();
    } catch (err) {
      //
      toast.error(err.message);
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
