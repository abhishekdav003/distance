import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-gray-800 rounded-t-xl text-white pt-10 pb-4">
      {/* Contact information section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Find us */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaMapMarkerAlt className="text-red-400 text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-red-400">Find us</h3>
              <p className="text-sm mt-1">B 15, Second floor, Sector 2, Noida 201301</p>
            </div>
          </div>

          {/* Call us */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaPhone className="text-red-400 text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-red-400">Call us</h3>
              <p className="text-sm mt-1">
                <a href="tel:+918336889553" className="hover:text-red-200 transition duration-400">+91-8336889553</a>
              </p>
              <p className="text-sm mt-1">
                <a href="tel:+919008525443" className="hover:text-red-200 transition duration-400">+91-9008525443</a>
              </p>
            </div>
          </div>

          {/* Mail us */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaEnvelope className="text-red-400 text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-red-400">Mail us</h3>
              <p className="text-sm mt-1">
                <a href="mailto:hi@edukyu.com" className="hover:text-red-200 transition duration-400">hi@edukyu.com</a>
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="text-3xl font-bold text-white">
                EduKyū
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-5">
              Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 relative">
              Useful Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-400 -mb-2"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> About Us</Link></li>
              <li><Link to="/our-team" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Our Team</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Partner With Us</Link></li>
              <li><Link to="/refer-and-earn" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Refer And Earn</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Blogs</Link></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Contact Us</Link></li>
              <li><Link to="/sgpa-calculator" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> SGPA To Calculator</Link></li>
              <li><Link to="/cgpa-calculator" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> CGPA To Calculator</Link></li>
              <li><Link to="/sgpa-to-cgpa" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> SGPA To CGPA</Link></li>
            </ul>
          </div>

          {/* Online Courses */}
          <div>
            <h3 className="text-lg font-medium mb-4 relative">
              Online Courses
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-400 -mb-2"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/courses/mba" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Masters In Business Administration</Link></li>
              <li><Link to="/courses/bba" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Bachelors In Business Administration</Link></li>
              <li><Link to="/courses/marketing-management" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Marketing Management (MBA)</Link></li>
              <li><Link to="/courses/hrm" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Human Resource Management (MBA)</Link></li>
              <li><Link to="/courses/financial-management" className="text-gray-400 hover:text-red-400 flex items-center"><span className="mr-2">›</span> Financial Management (MBA)</Link></li>
            </ul>
          </div>

          {/* Locations & Subscribe */}
          <div>
            <h3 className="text-lg font-medium mb-4 relative">
              Locations
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-400 -mb-2"></span>
            </h3>
            <ul className="mt-4 space-y-2 mb-6">
              <li><Link to="/locations/noida" className="text-gray-400 hover:text-red-400">Noida</Link></li>
              <li><Link to="/locations/bangalore" className="text-gray-400 hover:text-red-400">Bangalore</Link></li>
              <li><Link to="/locations/kolkata" className="text-gray-400 hover:text-red-400">Kolkata</Link></li>
              <li><Link to="/locations/lucknow" className="text-gray-400 hover:text-red-400">Lucknow</Link></li>
            </ul>

            <h3 className="text-lg font-medium mb-4 mt-8">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">Don't miss out on our latest updates! Enter your email to subscribe.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 border border-white text-gray-800 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-red-400 text-white px-4 py-2 hover:bg-red-400 transition-colors cursor-pointer"
              >
                <FaPaperPlane />
              </button>
            </form>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition">
                <FaLinkedin />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p className="mb-4">
            By continuing past this page, you agree to our 
            <Link to="/terms" className="text-red-400 hover:underline mx-1">Terms of Service</Link>,
            <Link to="/privacy" className="text-red-400 hover:underline mx-1">Privacy Policy</Link> and
            <Link to="/refund" className="text-red-400 hover:underline mx-1">Refund Policy</Link>.
          </p>
          <p>© {new Date().getFullYear()} - Edukyu Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;