import { useContext } from 'react';
import { authContext } from '../context/AuthProvider';
import { signIn, signUp, signOut, getCurrentUser } from '../services/users';

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within UserProvider');
  }

  const { user, setUser, newUser, setNewUser, profile, setProfile } = context;

  const authorizeUser = async (email, password, username) => {
    if (!newUser) {
      const responseUser = await signIn(email, password);
      setUser(responseUser.user);
      localStorage.setItem('currentUser', JSON.stringify(responseUser.user));
    } else {
      const responseUser = await signUp(email, password, username);
      setUser(responseUser.user);
      localStorage.setItem('currentUser', JSON.stringify(responseUser.user));
    }
  };

  const setCurrentUser = async () => {
    const profile = await getCurrentUser();
    console.log(profile);
    setProfile(profile.username);
  };

  const signOutUser = async () => {
    await signOut();
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
  };
};
