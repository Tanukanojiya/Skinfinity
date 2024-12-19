import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // for toggle the mobile navbar
  const [isModalOpen, setIsModalOpen] = useState(false); // for toggle the signup/login modal
  const [isLogin, setIsLogin] = useState(false); // for toggle the login and signup forms

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md w-full px-3">
        <div className="container mx-auto px-2 sm:px-2 lg:px-2 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Logo" className="w-50 h-20 mr-2" />
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">
              Search
            </button>
          </div>

          {/* Navbar */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          </nav>

          {/* Cart Icon nd Signup Button */}
          <div className="flex items-center space-x-6">
            {/* Cart icon */}
            <a href="#" className="hidden lg:flex items-center">
              <svg
                className="w-8 h-8 text-gray-600 hover:text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h14M9 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </a>

            {/* Signup Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 ml-4 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Signup
            </button>
          </div>

          {/* Mobile menu  */}
          <div className="lg:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}
      >
        <div className="flex flex-col space-y-2 p-4">
          <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-green-600">About</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Blog</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-left px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Signup
          </button>
        </div>
      </nav>

      {/* Signup/Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-80 relative">
            <h2 className="text-2xl font-semibold mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="text-sm mt-4">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <span
                    onClick={() => setIsLogin(false)}
                    className="text-green-500 cursor-pointer"
                  >
                    Sign up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span
                    onClick={() => setIsLogin(true)}
                    className="text-green-500 cursor-pointer"
                  >
                    Login
                  </span>
                </>
              )}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-7 text-gray-600 hover:text-red-600"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
