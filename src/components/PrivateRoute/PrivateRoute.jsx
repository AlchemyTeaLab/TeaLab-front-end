import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';

export default function PrivateRoute({ children, ...rest }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  return loading ? (
    <Loading />
  ) : (
    <Route {...rest}>
      {user.email ? (
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
