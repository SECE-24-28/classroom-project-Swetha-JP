import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Button from './Button';

function Navbar() {
  const { state, dispatch } = useApp();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/recharge', label: 'Recharge', icon: '📱' },
    { to: '/plans', label: 'Plans', icon: '📋' },
    { to: '/history', label: 'History', icon: '📊' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">📱</span>
            <span className="text-xl font-bold text-primary-500">RechargeApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            {state.isLoggedIn && (
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">Balance:</span>
                <span className="font-semibold text-secondary-500">₹{state.balance}</span>
              </div>
            )}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {state.theme === 'light' ? '🌙' : '☀️'}
            </button>

            {state.isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {state.user?.name?.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{state.user?.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                    location.pathname === link.to
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-gray-700'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t">
                {state.isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-600">
                      Balance: ₹{state.balance}
                    </div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-gray-700"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-primary-500"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;