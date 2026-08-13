import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '@/utils/constants';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">
              L
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg leading-tight tracking-wide">{APP_NAME}</h1>
              <p className="text-xs text-accent-light font-medium tracking-wider uppercase opacity-90">Member Directory</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wider">Home</Link>
            <Link to="/#directory" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wider">Directory</Link>
            <Link to="/birthdays" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wider">Birthdays</Link>
            <Link to="/about" className="text-gray-200 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wider">About</Link>
            {session && (
              <Link to="/admin" className="text-accent hover:text-white transition-colors font-medium text-sm uppercase tracking-wider border border-accent rounded-full px-4 py-1.5 hover:bg-accent hover:border-transparent">Admin</Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-primary border-t border-primary-light">
          <Link to="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-accent hover:bg-primary-dark">Home</Link>
          <Link to="/#directory" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-accent hover:bg-primary-dark">Directory</Link>
          <Link to="/birthdays" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-accent hover:bg-primary-dark">Birthdays</Link>
          <Link to="/about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-accent hover:bg-primary-dark">About</Link>
          {session ? (
            <Link to="/admin" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-accent hover:text-white hover:bg-primary-dark">Admin Dashboard</Link>
          ) : (
            <Link to="/login" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-primary-dark">Admin Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};
