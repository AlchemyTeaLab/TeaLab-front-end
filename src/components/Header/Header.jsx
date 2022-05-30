import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Header.css';

export default function Header() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const publicLocation = ['/', '/login', '/about'].includes(pathname);

  return (
    <>
      <header className={publicLocation ? styles.public : null}>
        <h1>TeaLab</h1>
        {user.email && !publicLocation && (
          <p>
            Welcome <span className={styles.username}>{user.username}</span>!
          </p>
        )}
      </header>
    </>
  );
}
