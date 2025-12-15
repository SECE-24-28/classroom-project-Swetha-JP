import { useApp } from '../context/AppContext';

export function useNotification() {
  const { dispatch } = useApp();

  const showNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toISOString()
    };
    
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATIONS' });
    }, 5000);
  };

  return { showNotification };
}