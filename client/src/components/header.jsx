import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import profileImage from '/account_logo.png'

import { LogOut, User } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // this checks if user is logged in or nah
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
  
  const userData = JSON.parse(localStorage.user)
  console.log(userData.username)


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
    <aside className='absolute w-9 h-36 bg-gray-200 border border-gray-500/40 shadow-xl rounded-r-xl top-1/2 -translate-y-1/2 overflow-hidden z-50'>
      <div className='flex flex-col items-center justify-between h-full overflow-hidden'>
        <div className='flex items-center justify-center rounded-full border-2 p-1  bg mt-2   text-gray-500'>
          <User size={17} />
        </div>
        <button onClick={handleLogout} className='text-rose-500 hover:bg-rose-500/20 cursor-pointer bg-rose-500/10 w-full py-2 flex justify-center'>
          <LogOut size={16} />
        </button> 
      </div>
    </aside>
  );
  

  // return (
    // <header className="w-full bg-white shadow-md">
    //   <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16 max-w-7xl">
    //       {/* Logo */}
    //       <div className="flex-shrink-0">
    //         <Link to='/' className="font-bold text-xl text-indigo-600">P's Market</Link>
    //       </div>

    //       {/* Desktop Navigation */}
    //       <div className="hidden md:flex items-center space-x-8">
    //         <Link 
    //           to='/yourstocks'
    //           className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors"
    //         >
    //           Your Stocks
    //         </Link>
            
    //       </div>

    //       {/* Desktop Buttons */}
    //       <div className="hidden md:flex items-center space-x-4">
    //         {isLoggedIn ? (
    //           <div className='flex'>
    //             <img
    //               src={profileImage}
    //               alt="Profile"
    //               className="w-8 h-8 mt-1 rounded-full"
    //             />
              
    //           <span className='text-gray-700 px-3 py-2 rounded-md font-medium transition-colors'>
    //             {userData?.username}
    //           </span>


    //           <button
    //             onClick={handleLogout}
    //             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
    //           >
    //             Logout
    //           </button>
    //           </div>
    //         ) : (
    //           <>
    //             <Link to='/login' className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
    //               Login
    //             </Link>
    //             <Link to='/signup' className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
    //               Sign Up
    //             </Link>
    //           </>
    //         )}
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <div className="md:hidden">
    //         <button
    //           onClick={() => setIsOpen(!isOpen)}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
    //         >
    //           <div className="relative w-6 h-5">
    //             <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'}`} />
    //             <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
    //             <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-2'}`} />
    //           </div>
    //         </button>
    //       </div>
    //     </div>

    //     {/* Mobile Navigation Menu */}
    //     {isOpen && (
    //       <div className="md:hidden">
    //         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //           <Link
    //             to='/yourstocks'
    //             className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
    //           >
    //             Your Stocks
    //           </Link>

    //         </div>
    //         <div className="pt-4 pb-3 border-t border-gray-200">
    //           {isLoggedIn ? (
    //             <div className="px-4">
    //               <span>okay</span>
    //               <button
    //                 onClick={handleLogout}
    //                 className="block w-full px-3 py-2 rounded-md text-center font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
    //               >
    //                 Logout
    //               </button>
    //             </div>
    //           ) : (
    //             <>
    //               <div className="flex items-center px-2 space-x-4">
    //                 <Link to='/login' className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
    //                   Login
    //                 </Link>
    //               </div>
    //               <div className="mt-3 px-4">
    //                 <Link to='/signup' className="block w-full px-3 py-2 rounded-md text-center font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
    //                   Sign Up
    //                 </Link>
    //               </div>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //     )}
    //   </nav>
    // </header>
  // );
}