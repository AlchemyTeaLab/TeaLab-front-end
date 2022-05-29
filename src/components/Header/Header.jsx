import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { user } = useAuth();

  return (
    <>
      <header>
        <h1>
          {'<'}TeaLab{' />'}
        </h1>
        {user.email && (
          <p>
            Welcome <span>{user.username}</span>!
          </p>
        )}
      </header>
    </>
  );
}
