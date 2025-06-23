import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-white rounded-t-xl text-red-800 pt-10 pb-6 shadow-lg shadow-red-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Find us */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaMapMarkerAlt className="text-black text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Find us</h3>
              <p className="text-sm mt-1 text-gray-800">B 15, Second floor, Sector 2, Noida 201301</p>
            </div>
          </div>

          {/* Call us */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaPhone className="text-black text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Call us</h3>
              <p className="text-sm mt-1">
                <a href="tel:+918336889553" className="hover:text-red-400 transition duration-300 text-gray-800">+91-8336889553</a>
              </p>
              <p className="text-sm mt-1">
                <a href="tel:+919008525443" className="hover:text-red-400 transition duration-300 text-gray-800">+91-9008525443</a>
              </p>
            </div>
          </div>

          {/* Mail us */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaEnvelope className="text-black text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Mail us</h3>
              <p className="text-sm mt-1">
                <a href="mailto:hi@edukyu.com" className="hover:text-red-400 transition duration-300 text-gray-800">hi@edukyu.com</a>
              </p>
            </div>
          </div>
        </div>

        <hr className="border-red-300 my-6" />

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="text-3xl font-bold text-red-800 hover:text-black transition">
                EduKyū
              </Link>
            </div>
            <p className="text-sm text-gray-800 mb-5">
              Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative text-gray-800">
              Useful Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 -mb-2 rounded"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/about-us", label: "About Us" },
                { to: "/our-team", label: "Our Team" },
                { to: "/partner-with-us", label: "Partner With Us" },
                { to: "/refer-and-earn", label: "Refer And Earn" },
                { to: "/blogs", label: "Blogs" },
                { to: "/contact-us", label: "Contact Us" },
                { to: "/sgpa-calculator", label: "SGPA To Calculator" },
                { to: "/cgpa-calculator", label: "CGPA To Calculator" },
                { to: "/sgpa-to-cgpa", label: "SGPA To CGPA" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-black hover:text-red-800 flex items-center transition duration-300">
                    <span className="mr-2">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative text-gray-800">
              Online Courses
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 -mb-2 rounded"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/courses/mba", label: "Masters In Business Administration" },
                { to: "/courses/bba", label: "Bachelors In Business Administration" },
                { to: "/courses/marketing-management", label: "Marketing Management (MBA)" },
                { to: "/courses/hrm", label: "Human Resource Management (MBA)" },
                { to: "/courses/financial-management", label: "Financial Management (MBA)" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-black hover:text-red-800 flex items-center transition duration-300">
                    <span className="mr-2">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative text-gray-800">
              Locations
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 -mb-2 rounded"></span>
            </h3>
            <ul className="mt-4 space-y-2 mb-6">
              {["noida", "bangalore", "kolkata", "lucknow"].map((loc) => (
                <li key={loc}>
                  <Link to={`/locations/${loc}`} className="text-black hover:text-red-800 transition duration-300">
                    {loc.charAt(0).toUpperCase() + loc.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8 text-gray-800">Subscribe</h3>
            <p className="text-sm text-black mb-4">
              Don't miss out on our latest updates! Enter your email to subscribe.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 border border-red-400 rounded-l-md text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                <FaPaperPlane />
              </button>
            </form>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[{
                href: "https://instagram.com",
                icon: <FaInstagram />,
                label: "Instagram"
              }, {
                href: "https://linkedin.com",
                icon: <FaLinkedin />,
                label: "LinkedIn"
              }, {
                href: "https://pinterest.com",
                icon: <FaPinterest />,
                label: "Pinterest"
              }].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-100 text-gray-800 p-2 rounded-md hover:bg-red-200 transition"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-red-300 text-center text-sm text-black">
          <p className="mb-4">
            By continuing past this page, you agree to our
            <Link to="/terms" className="text-gray-800 hover:underline mx-1">Terms of Service</Link>,
            <Link to="/privacy" className="text-gray-800 hover:underline mx-1">Privacy Policy</Link> and
            <Link to="/refund" className="text-gray-800 hover:underline mx-1">Refund Policy</Link>.
          </p>
          <p>© {new Date().getFullYear()} - Edukyu Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
