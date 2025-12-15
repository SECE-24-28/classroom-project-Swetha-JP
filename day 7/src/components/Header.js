import React from 'react';
import { useApp } from './AppContext';

function Header({ title, showBalance = true }) {
  const { state, dispatch } = useApp();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <header className={`p-4 shadow-md ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        
        <div className="flex items-center space-x-4">
          {showBalance && (
            <div className="bg-secondary text-white px-3 py-1 rounded-full">
              Balance: ₹{state.balance}
            </div>
          )}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {state.theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          {state.user && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                {state.user.name.charAt(0)}
              </div>
              <span className="hidden md:block">{state.user.name}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;