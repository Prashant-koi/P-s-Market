import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-7xl">
          {/* Logo and Brand */}
          <div className="flex-shrink-0">
            <span className="font-bold text-xl text-indigo-600">P's Market</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors"
            >
              Your Stocks
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors"
            >
              Market
            </a>
            {/* <a 
              href="#" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors"
            >
              Portfolio
            </a> */}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Login
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {/* Simple hamburger menu icon using spans */}
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-2'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Your Stocks
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Market
              </a>
              {/* <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Portfolio
              </a> */}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-2 space-x-4">
                <button className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                  Login
                </button>
              </div>
              <div className="mt-3 px-4">
                <button className="block w-full px-3 py-2 rounded-md text-center font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}