import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PropTypes from 'prop-types';

function GuestGuard({ redirect }) {
  const { authenticated } = useAuth();

  if (authenticated) {
    return <Navigate to={redirect} replace />;
  }

  return <Outlet />;
}

export default GuestGuard;

GuestGuard.propTypes = {
  redirect: PropTypes.string,
};
