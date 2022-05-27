import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
  // const { user } = useAuth();
  const user = localStorage.getItem('currentUser');
  const location = useLocation();

  return (
    <Route {...rest}>
      {user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}

// clear local storage on logout
