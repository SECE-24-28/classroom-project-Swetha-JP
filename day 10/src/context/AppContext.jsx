import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  // Auth state
  isLoggedIn: false,
  user: null,
  
  // Theme state
  theme: 'light',
  
  // App state
  balance: 1000,
  transactions: [],
  notifications: [],
  loading: false,
  
  // UI state
  sidebarOpen: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'LOGIN':
      return { ...state, isLoggedIn: true, user: action.payload };
    
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, user: null };
    
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    
    case 'UPDATE_BALANCE':
      return { ...state, balance: action.payload };
    
    case 'ADD_TRANSACTION':
      return { 
        ...state, 
        transactions: [action.payload, ...state.transactions],
        balance: state.balance - action.payload.amount
      };
    
    case 'ADD_NOTIFICATION':
      return { 
        ...state, 
        notifications: [action.payload, ...state.notifications.slice(0, 4)]
      };
    
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] };
    
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    
    case 'CLOSE_SIDEBAR':
      return { ...state, sidebarOpen: false };
    
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch({ type: 'TOGGLE_THEME' });
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}