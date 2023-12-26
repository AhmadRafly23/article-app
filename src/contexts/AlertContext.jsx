import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AlertContext = createContext();

const initialState = {
  message: '',
  type: '',
  show: false,
};

function AlertProvider({ children }) {
  const [alert, setAlert] = useState(initialState);

  const showAlert = (message, type) => {
    setAlert({ message, type, show: true });
  };

  const hideAlert = () => {
    setAlert({
      ...alert,
      show: false,
    });
  };

  return (
    <AlertContext.Provider value={{ ...alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }

  return context;
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
