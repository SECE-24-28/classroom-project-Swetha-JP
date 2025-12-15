import React from 'react';
import { useApp } from '../context/AppContext';

function NotificationPanel() {
  const { state } = useApp();

  if (state.notifications.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      {state.notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg animate-slide-up ${
            notification.type === 'success' ? 'bg-green-500 text-white' :
            notification.type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span>
              {notification.type === 'success' ? '✅' :
               notification.type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationPanel;