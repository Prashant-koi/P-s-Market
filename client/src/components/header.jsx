import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // this checks if user is logged in or nah
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Remove Authorization header
    delete axios.defaults.headers.common['Authorization'];
    
    setIsLoggedIn(false);
    
    // Navigate to home page
    navigate('/');
  };

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-7xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to='/' className="font-bold text-xl text-indigo-600">P's Market</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to='/yourstocks'
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors"
            >
              Your Stocks
            </Link>
            
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to='/login' className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Login
                </Link>
                <Link to='/signup' className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-2'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to='/yourstocks'
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Your Stocks
              </Link>

            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="px-4">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-3 py-2 rounded-md text-center font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center px-2 space-x-4">
                    <Link to='/login' className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                      Login
                    </Link>
                  </div>
                  <div className="mt-3 px-4">
                    <Link to='/signup' className="block w-full px-3 py-2 rounded-md text-center font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}