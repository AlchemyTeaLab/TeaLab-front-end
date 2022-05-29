import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { username } = useAuth();

  return (
    <>
      <header>
        <h1>
          {'<'}TeaLab{' />'}
        </h1>
        <p>
          Welcome <span>{user.username}</span>!
        </p>
      </header>
    </>
  );
}
