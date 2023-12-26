import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAlert } from './AlertContext';

const AuthContext = createContext();

const initialState = {
  user: null,
  authenticated: false,
  status: 'idle',
};

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const [auth, setAuth] = useState(initialState);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const response = await fetch(import.meta.env.VITE_API_URL + '/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setAuth({ user: data, authenticated: true, status: 'success' });
      } else {
        setAuth({ ...auth, status: 'error' });
        showAlert('Something went wrong', 'error');
      }
    }
  };

  const register = async (user) => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + '/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      setAuth({ ...auth, status: 'success' });
      showAlert('Register success', 'success');
      navigate('/login');
    } else {
      setAuth({ ...auth, status: 'error' });
      showAlert('Something went wrong', 'error');
    }
  };

  const login = async (user) => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: user.username,
        password: user.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setAuth({ user: data.user, authenticated: true, status: 'success' });
      localStorage.setItem('token', data.jwt);
      showAlert('Login success', 'success');
      navigate('/');
    } else {
      setAuth({ ...auth, status: 'error' });
      showAlert('Something went wrong', 'error');
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
