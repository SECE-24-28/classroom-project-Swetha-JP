import React, { useState } from 'react';
import { useApp } from './AppContext';

function NotificationPanel() {
  const { state, dispatch } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const clearNotifications = () => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        🔔
        {state.notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {state.notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg z-50 ${
          state.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border`}>
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Notifications</h3>
              {state.notifications.length > 0 && (
                <button
                  onClick={clearNotifications}
                  className="text-sm text-primary hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {state.notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              state.notifications.map(notification => (
                <div key={notification.id} className="p-3 border-b last:border-b-0">
                  <div className={`text-sm ${
                    notification.type === 'success' ? 'text-green-600' : 
                    notification.type === 'error' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {notification.message}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationPanel;