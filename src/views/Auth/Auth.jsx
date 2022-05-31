import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Auth.css';
import toast from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';

export default function Auth() {
  const { user, newUser, setNewUser, authorizeUser } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    user?.email && history.replace('/');
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { message, user } = await authorizeUser(email, password, username);
      console.log('message', message);

      if (message !== 'Successfully signed in!')
        throw new Error(`Oh no! ${message}...`);

      setEmail('');
      setPassword('');
      setUsername('');

      toast(`Hello ${user.username}!`);
      history.replace(from.pathname !== '/' ? from.pathname : '/ingredients');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <form
        aria-label="sign in or sign up to continue"
        className={styles.authForm}
        onSubmit={handleSubmit}
      >
        <div aria-label="container for sign in and sign up toggles">
          <span
            aria-label="toggle sign in for existing users"
            onClick={() => setNewUser(false)}
            className={newUser ? styles.clickable : styles.inactive}
          >
            Sign In
          </span>
          <span
            aria-label="toggle sign up for new users"
            onClick={() => setNewUser(true)}
            className={!newUser ? styles.clickable : styles.inactive}
          >
            Sign Up
          </span>
        </div>
        {newUser && (
          <>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              minLength="3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          minLength="6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>{!newUser ? 'Sign in' : 'Sign up'}</button>
      </form>
    </>
  );
}
