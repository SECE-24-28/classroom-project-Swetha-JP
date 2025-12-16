import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Mobile Recharge
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Quick and easy mobile recharge for all operators
          </p>

          {isAuthenticated ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Hello, <span className="font-semibold">{user?.username}</span>!
              </p>
              <div className="space-x-4">
                <Link
                  to="/plans"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-block"
                >
                  View Recharge Plans
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-block"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg inline-block"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">All Operators</h3>
            <p className="text-gray-600">Support for Airtel, Jio, Vi, and BSNL</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Recharge</h3>
            <p className="text-gray-600">Quick and secure recharge process</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Safe</h3>
            <p className="text-gray-600">Your transactions are protected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;