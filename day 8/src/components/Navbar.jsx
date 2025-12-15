import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            RechargeApp
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/plans" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Recharge Plans
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user?.name}</span>
                <button 
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;