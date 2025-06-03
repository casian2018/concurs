import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { BrowserRouter, Routes, Route } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Acasa', path: '/Home' },
    { name: 'Magazin', path: '/Shop' },
    { name: 'Despre', path: '/About' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/Home">
              <img 
                src="logo.png" 
                alt="Company Logo"
                className="h-32 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item) => {
                const activeClass = isActive(item.path)
                  ? 'text-green-600 font-medium border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-500 transition-colors duration-300';
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`${activeClass} py-6 px-1`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-600 hover:text-green-600 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-8 w-8 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-8 w-8 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mx-4 mb-3">
          <div className="flex justify-center py-4">
            <Link to="/Home">
              <img 
                src="logo.png" 
                alt="Company Logo"
                className="h-32 w-auto"
              />
            </Link>
          </div>
          {menuItems.map((item) => {
            const activeClass = isActive(item.path)
              ? 'bg-green-50 text-green-600 block px-4 py-3 rounded-md font-medium'
              : 'text-gray-600 hover:bg-gray-50 block px-4 py-3 rounded-md';
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={activeClass}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;