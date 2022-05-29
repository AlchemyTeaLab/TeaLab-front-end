import { useHistory, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';

export default function Footer() {
  const { user, setUser, signOutUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
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
            {routes.map((route, i) => (
              <li key={`${route.name}${i}`}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
            <li>{signInOutButton}</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
