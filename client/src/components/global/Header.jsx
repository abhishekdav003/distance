import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setDropdownOpen(false);
    }
  }

  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setMobileMenuOpen(false);
    }
  }

  return (
    <header className="border-b border-red-600 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Link to={'/'}>
            <img src="/logos/main.webp" alt="EduKyu Logo" className="h-8 w-auto" />
          </Link>
          <span className="h-10 w-1 bg-red-600 rounded"></span>
          <span className="text-base md:text-lg font-semibold text-red-800">
            Online and Distance Education
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-red-800 text-sm font-semibold">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="bg-red-600 hover:bg-red-700 transition-colors px-5 py-2 rounded-full flex items-center space-x-2 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-expanded={isDropdownOpen}
              aria-controls="online-courses-menu"
            >
              <span>Online Courses</span>
              <FaChevronDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <div
                id="online-courses-menu"
                className="absolute mt-2 bg-white border border-red-300 shadow-lg rounded w-52 z-20"
              >
                <Link
                  to="/course1"
                  className="block px-5 py-3 text-red-700 hover:bg-red-100 transition-colors"
                >
                  Course 1
                </Link>
                <Link
                  to="/course2"
                  className="block px-5 py-3 text-red-700 hover:bg-red-100 transition-colors"
                >
                  Course 2
                </Link>
                <Link
                  to="/course3"
                  className="block px-5 py-3 text-red-700 hover:bg-red-100 transition-colors"
                >
                  Course 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/"
            className="hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-red-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/compare-colleges"
            className="hover:text-red-600 transition-colors"
          >
            Compare Colleges
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-700 text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white text-red-800 text-sm font-semibold space-y-4 border-t border-red-600">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-red-500 hover:bg-red-600 transition-colors px-5 py-2 rounded-full flex items-center justify-between w-full text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-expanded={isDropdownOpen}
              aria-controls="mobile-online-courses-menu"
            >
              <span>Online Courses</span>
              <FaChevronDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <div
                id="mobile-online-courses-menu"
                className="mt-2 bg-white border border-red-300 shadow-lg rounded w-full z-10"
              >
                <Link
                  to="/course1"
                  className="block px-5 py-3 text-red-700 hover:bg-red-100 transition-colors"
                >
                  Course 1
                </Link>
                <Link
                  to="/course2"
                  className="block px-5 py-3 text-red-700 hover:bg-red-100 transition-colors"
                >
                  Course 2
                </Link>
                <Link
                  to="/course3"
                  className="block px-5 py-3 text-red-700 hover:bg-red-100 transition-colors"
                >
                  Course 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/"
            className="block hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="block hover:text-red-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/compare-colleges"
            className="block hover:text-red-600 transition-colors"
          >
            Compare Colleges
          </Link>
        </div>
      )}
    </header>
  );
}
