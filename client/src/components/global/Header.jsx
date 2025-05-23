import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
         <Link to={'/'}> <img src='/logos/main.webp' alt="EduKyu Logo" className="h-8 w-auto" /></Link>
          <span className='h-10 w-0.5 bg-black '></span>
          <span className="text-base md:text-lg font-semibold text-gray-800">Online and Distance Education</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 text-sm font-medium">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="bg-red-400 px-4 py-2 rounded-full flex items-center space-x-2 focus:outline-none"
            >
              <span>Online Courses</span>
              <FaChevronDown className="text-xs" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white border shadow-md rounded w-48 z-10">
                <Link to="/course1" className="block px-4 py-2 hover:bg-gray-100">Course 1</Link>
                <Link to="/course2" className="block px-4 py-2 hover:bg-gray-100">Course 2</Link>
                <Link to="/course3" className="block px-4 py-2 hover:bg-gray-100">Course 3</Link>
              </div>
            )}
          </div>
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
          <Link to="/compare-colleges" className="hover:text-blue-600">Compare Colleges</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 text-gray-800 text-sm font-medium space-y-2">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="bg-red-300 px-4 py-2 rounded-full flex items-center space-x-2 w-full"
            >
              <span>Online Courses</span>
              <FaChevronDown className="text-xs" />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white border shadow-md rounded w-full z-10">
                <Link to="/course1" className="block px-4 py-2 hover:bg-gray-100">Course 1</Link>
                <Link to="/course2" className="block px-4 py-2 hover:bg-gray-100">Course 2</Link>
                <Link to="/course3" className="block px-4 py-2 hover:bg-gray-100">Course 3</Link>
              </div>
            )}
          </div>
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/about-us" className="block hover:text-blue-600">About Us</Link>
          <Link to="/compare-colleges" className="block hover:text-blue-600">Compare Colleges</Link>
        </div>
      )}
    </header>
  );
}
