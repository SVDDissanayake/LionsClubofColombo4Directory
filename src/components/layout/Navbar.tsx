import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME, CLUB_LOGO_PATH, DISTRICT_LOGO_PATH } from '@/utils/constants';
import { useAuth } from '@/contexts/AuthContext';
import { navLinks } from '@/data/homepageData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { session } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll detection for compact navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Handle navigation for hash links and route links
  const handleNavClick = (href: string) => {
    closeMenu();
    if (href.startsWith('#')) {
      // If we're on the homepage, scroll to the section
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage first, then scroll
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/98 backdrop-blur-md shadow-lg'
          : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <img
                src={CLUB_LOGO_PATH}
                alt="Club Logo"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}
              />
              <img
                src={DISTRICT_LOGO_PATH}
                alt="District Logo"
                className={`object-contain hidden sm:block transition-all duration-300 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg leading-tight tracking-wide text-white">
                {APP_NAME}
              </h1>
              <p
                className={`text-accent font-medium tracking-wider uppercase transition-all duration-300 ${
                  isScrolled ? 'text-[10px] opacity-80' : 'text-xs opacity-90'
                }`}
              >
                District 306 C2
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-200 hover:text-accent transition-colors font-medium text-sm tracking-wide"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-gray-200 hover:text-accent transition-colors font-medium text-sm tracking-wide ${
                    location.pathname === link.href ? 'text-accent' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {session && (
              <Link
                to="/admin"
                className="text-gray-200 hover:text-accent transition-colors font-medium text-sm tracking-wide"
              >
                Admin
              </Link>
            )}

            {/* Join Us CTA */}
            <a
              href="#get-involved"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#get-involved');
              }}
              className="ml-2 px-5 py-2.5 bg-accent text-primary font-bold text-sm rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none p-2"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-primary border-t border-primary-light">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-accent hover:bg-primary-dark transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-accent bg-primary-dark'
                    : 'text-gray-200 hover:text-accent hover:bg-primary-dark'
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          {session ? (
            <Link
              to="/admin"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-lg text-base font-medium text-accent hover:text-white hover:bg-primary-dark transition-colors"
            >
              Admin Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-primary-dark transition-colors"
            >
              Admin Login
            </Link>
          )}

          {/* Mobile Join Us CTA */}
          <div className="pt-3">
            <a
              href="#get-involved"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#get-involved');
              }}
              className="block w-full text-center px-5 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all duration-300"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
