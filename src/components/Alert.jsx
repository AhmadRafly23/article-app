import toast, { Toaster } from 'react-hot-toast';
import { useAlert } from '../contexts/AlertContext';
import { useEffect } from 'react';

function Alert() {
  const { type, message, show, hideAlert } = useAlert();

  const alert = (type, message) => {
    switch (type) {
      case 'success':
        return toast.success(message, { duration: 3000 });
      case 'error':
        return toast.error(message, { duration: 3000 });
      default:
        return toast(message, { duration: 3000 });
    }
  };

  useEffect(() => {
    if (show) {
      alert(type, message);
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  }, [show]);

  return <Toaster position="top-center" reverseOrder={false} />;
}

export default Alert;
