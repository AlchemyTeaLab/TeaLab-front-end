import { useHistory, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Footer() {
  const { user, setUser, signOutUser } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();
  const routes = [
    { path: '/ingredients', name: 'Home' },
    { path: '/about', name: 'About' },
  ];

  const signInOutButton = user.email ? (
    <button onClick={handleSignOut}>Sign Out</button>
  ) : (
    <button onClick={() => history.push('/login')}>Sign In</button>
  );

  async function handleSignOut() {
    await signOutUser();
    setUser({ email: null });
    history.replace('/');
  }

  return (
    <>
      <footer>
        <nav>
          <ul>
            {routes.map(
              ({ name, path }, i) =>
                pathname !== path && (
                  <li key={`${name}${i}`}>
                    <Link to={path}>{name}</Link>
                  </li>
                )
            )}
            <li>{signInOutButton}</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
