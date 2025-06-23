import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaMedal, FaCheckCircle,
  FaGraduationCap, FaClock, FaLaptop, FaUserGraduate, FaRupeeSign,
  FaCreditCard, FaChevronDown, FaChevronUp, FaStar
} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import universities from "../assets/data/Universities.jsx"; // Make sure this file exports an array of university objects
import UniversityContactForm from '../components/global/UniversityContactForm.jsx';

export default function University() {
  const { "university-name": universityNameParam } = useParams();
  const decodedName = decodeURIComponent(universityNameParam).toLowerCase();

  const university = universities.find(u =>
    u.universityName.toLowerCase().replace(/\s+/g, '-') === decodedName
  );

  if (!university) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center  from-red-50 to-red-100"
      >
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-red-200">
          <div className="text-red-600 text-6xl mb-4">
            <FaUniversity />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">University Not Found</h1>
          <p className="text-red-600">The requested university could not be located.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen  from-red-50 via-white to-red-50 pb-16">
      <div className="relative">
        <UniversityCard university={university} />
      </div>
    </div>
  );
}

function UniversityCard({ university }) {
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [expandedProgram, setExpandedProgram] = useState(null);

  const toggleProgram = (index) => {
    setExpandedProgram(expandedProgram === index ? null : index);
  };

  const handleContactFormToggle = () => {
    setContactFormVisible(!contactFormVisible);
  };

  return (
    <div className="relative">
      {/* Hero Section with Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 overflow-hidden"
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 -right-8 w-32 h-32 bg-red-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 left-1/3 w-16 h-16 bg-red-300 rounded-full opacity-15 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 relative z-10">
          {/* Text and Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                {university.universityName}
                <span className="block text-2xl lg:text-3xl text-red-200 font-medium mt-2">
                  Online Education
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-red-50 leading-relaxed max-w-2xl"
              >
                {university.description}
              </motion.p>
            </div>

            {/* Regulatory Logos with Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {university?.regulatory.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-xl border border-red-300 border-opacity-30"
                >
                  <img src={logo} alt="" className="h-12 w-auto object-contain filter brightness-110" />
                </motion.div>
              ))}
            </motion.div>

            {/* Program Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {university?.programNames?.map((course, index) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white bg-opacity-95 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-white"
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons with Enhanced Styling */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button 
                onClick={handleContactFormToggle}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-gray-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-400 hover:border-orange-300"
              >
                📚 Download Brochure
              </motion.button>
              
              <motion.button 
                onClick={handleContactFormToggle}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-gray-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-500 hover:border-blue-400"
              >
                💬 Get Help
              </motion.button>
              
              <Link 
                to={'/compare-colleges'}
                className="inline-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-gray-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-500 hover:border-green-400 cursor-pointer"
                >
                  ⚖️ Add to Compare
                </motion.div>
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Image & Rating with Enhanced Styling */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={university.img} 
                alt="University Campus" 
                className="w-full h-64 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-transparent to-transparent opacity-30"></div>
              
              {/* Floating Rating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-6 right-6 bg-white bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-yellow-200"
              >
                <div className="flex text-yellow-500 text-lg">
                  ★ ★ ★ ★ ☆
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section with Enhanced Styling */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 lg:px-8 py-12  from-red-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold  mb-8 text-center"
          >
            About {university.universityName} Online
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {university?.About?.map((about, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-gray-700 leading-relaxed text-lg bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {about}
                </motion.p>
              ))}
            </motion.div>

            {/* Key Highlights Table with Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gradient-to-r from-red-700 to-red-800">
                      <tr>
                        <th className="text-left p-4 text-gray-black text-sm font-bold">Feature</th>
                        <th className="text-left p-4 text-gray-black text-sm font-bold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {university?.keyhighlights?.map((item, index) => (
                        <motion.tr 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                          className="border-b border-red-100 hover:bg-red-50 transition-colors duration-300"
                        >
                          <td className="p-4 font-semibold text-black text-sm">
                            {item.feature}
                          </td>
                          <td className="p-4 text-gray-700 text-sm">
                            {item.details}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl  bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden my-8 mx-4 lg:mx-8"
      >
        {/* University Header with Parallax Effect */}
        <div className="relative text-gray-700  from-red-50 to-red-100 overflow-hidden">
          <motion.img
            src={university?.img}
            alt={`${university?.universityName} banner`}
            className=" h-96 md:h-64 w-full object-cover opacity-20"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          
          <div className="absolute inset-0 opacity-80"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-12"
          >
            <div className="flex items-center mb-6">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-4 rounded-full mr-6 text-black shadow-xl"
              >
                <FaUniversity size={32} />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg mb-2">
                  {university.universityName} Online Courses
                </h2>
                <p className="text-xl text-gray-800 font-medium">Updated Fees for 2025</p>
                <div className="flex items-center mt-2 text-gray-800">
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="text-base text-gray-800">{university.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-30"
              >
                <FaCalendarAlt className="mr-2" />
                Est. {university.established}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-30"
              >
                <FaMedal className="mr-2" />
                {university.accreditation}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-30"
              >
                <FaStar className="mr-2" />
                {university.features.studentRating}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Programs Offered with Enhanced Cards */}
        <div className="px-6 md:px-12 py-12 ">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl text-gray-900 mb-8 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              className="mr-3 text-red-600"
            >
              <FaGraduationCap />
            </motion.div>
            Programs Offered
          </motion.h3>

          <div className="space-y-6">
            {university.programsOffered.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-red-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleProgram(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-red-50 transition-colors duration-300"
                  whileHover={{ backgroundColor: "rgba(254, 242, 242, 0.8)" }}
                >
                  <div className="flex items-center flex-1">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className=" from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md"
                    >
                      <FaGraduationCap className="text-gray-700" size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">{program.degree}</h4>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          <FaClock className="mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          <FaLaptop className="mr-2" />
                          {program.mode}
                        </div>
                        <div className="flex items-center text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          <FaRupeeSign className="mr-2" />
                          {program.semesterFee}/semester
                        </div>
                        {program.emiAvailable && (
                          <div className="flex items-center text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full border border-green-200">
                            <FaCreditCard className="mr-2" />
                            EMI Available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProgram === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-600 ml-4"
                  >
                    <FaChevronDown size={20} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedProgram === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="p-6  from-red-50 to-red-100 rounded-xl border border-red-200">
                          <div className="mb-6">
                            <span className="font-bold text-gray-900 text-lg">Eligibility:</span>
                            <p className="text-gray-700 mt-2 leading-relaxed">{program.eligibility}</p>
                          </div>

                          <div>
                            <span className="font-bold text-gray-900 text-lg">Specializations:</span>
                            <div className="mt-4 flex flex-wrap gap-3">
                              {program.specializations.map((spec, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: i * 0.05 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="bg-white border-2 border-red-200 text-gray-700 text-sm px-4 py-2 rounded-full flex items-center shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                  <FaCheckCircle className="mr-2 text-red-500" size={12} />
                                  {spec}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EMI Section with Enhanced Design */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-6 md:px-12 py-12  from-red-50 to-white"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6 text-center"
            >
              💳 EMI Available at {university?.universityName}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed mb-8 text-lg text-center bg-white p-6 rounded-xl shadow-lg"
            >
              {university?.EMIOptionAvailable}
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
            >
              🌟 Key Features of EMI Facility
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {university?.KeyFeaturesofEMI?.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="font-bold text-black text-lg mb-2">{data.title}:</h4>
                  <p className="text-gray-700 leading-relaxed">{data.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Why Choose Section with Enhanced Table */}
  <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="px-4 md:px-12 py-12 bg-white"
>
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center"
  >
    ✨ Why Should You Choose {university?.universityName} Online
  </motion.h2>
  
  <div className="overflow-hidden rounded-2xl shadow-2xl border border-red-200">
    <div className="overflow-x-auto w-full">
      <table className="min-w-[640px] md:min-w-full bg-white">
        <thead className="bg-gradient-to-r from-red-600 to-red-700">
          <tr>
            <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold text-gray-black text-base md:text-lg">
              Feature
            </th>
            <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold text-gray-black text-base md:text-lg">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {university?.WhyShouldYouChoose?.map((data, index) => (
            <motion.tr 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-red-100 hover:bg-red-50 transition-colors duration-300"
            >
              <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-black text-sm md:text-base">
                {data?.feature}
              </td>
              <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base leading-relaxed">
                {data?.detail}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</motion.div>


        {/* Benefits Section with Creative Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="px-6 md:px-12 py-12  from-red-50 to-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 text-center text-red-800"
          >
            🎯 Benefits of {university.universityName}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {university?.Benefits?.map((benefit, index) => {
              const IconComponent = FaIcons[benefit.icon] || FaIcons.FaLaptop; // fallback icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="group p-8 bg-white border-2 border-red-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-red-300"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="mt-1 p-4  from-red-100 to-red-200 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    >
                      <IconComponent className="text-3xl text-red-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {benefit.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Exams Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="px-6 md:px-12 py-12 bg-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 text-center text-red-800"
          >
            📝 How Are Exams Conducted at {university.universityName}
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {university?.HowareExamsconducted?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className=" from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}:</h3>
                  <p className="text-gray-700 leading-relaxed">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Accreditations Section */}
<motion.section 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.4 }}
  className="px-4 md:px-12 py-12  from-red-50 to-white"
>
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-red-800"
  >
    🏆 Accreditations & Approvals
  </motion.h2>
  
  <div className="overflow-hidden rounded-2xl shadow-2xl border border-red-200">
    <div className="overflow-x-auto w-full">
      <table className="min-w-[640px] md:min-w-full bg-white">
        <thead className="bg-gradient-to-r from-red-600 to-red-700">
          <tr>
            <th className="text-left text-base md:text-lg font-bold text-gray-black px-6 md:px-8 py-4 md:py-6">Logo</th>
            <th className="text-left text-base md:text-lg font-bold text-gray-black px-6 md:px-8 py-4 md:py-6">Accreditation</th>
            <th className="text-left text-base md:text-lg font-bold text-gray-black px-6 md:px-8 py-4 md:py-6">About</th>
          </tr>
        </thead>
        <tbody>
          {university?.acreditationsApprovals?.map((item, index) => (
            <motion.tr 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-red-100 hover:bg-red-50 transition-colors duration-300"
            >
              <td className="px-6 md:px-8 py-4 md:py-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-xl border-2 border-red-200 flex items-center justify-center shadow-md"
                >
                  <img
                    src={item.img}
                    alt={item.AccreditationsApprovals}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </motion.div>
              </td>
              <td className="px-6 md:px-8 py-4 md:py-6 font-bold text-gray-900 text-base md:text-lg">
                {item.AccreditationsApprovals}
              </td>
              <td className="px-6 md:px-8 py-4 md:py-6 text-gray-700 leading-relaxed text-sm md:text-base">
                {item.about}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</motion.section>


        {/* Academic Approach Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="px-6 md:px-12 py-12 bg-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-red-800"
          >
            🎓 Academic Approach
          </motion.h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Experiential Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" from-red-50 to-white p-8 rounded-2xl shadow-xl border border-red-100"
            >
              <h3 className="text-3xl font-bold text-gray-700 mb-8 flex items-center">
                <span className="text-4xl mr-4">📊</span>
                1. Experiential Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {university?.AcademicApproach?.[0]?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-900 text-lg mb-3">{item.subtitle}:</h4>
                    <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quantitative Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className=" from-red-50 to-white p-8 rounded-2xl shadow-xl border border-red-100"
            >
              <h3 className="text-3xl font-bold text-gray-700 mb-8 flex items-center">
                <span className="text-4xl mr-4">📈</span>
                2. Quantitative Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {university?.AcademicApproach?.[1]?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-900 text-lg mb-3">{item.subtitle}:</h4>
                    <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Top Hiring Partners */}
<motion.section 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.8 }}
  className="px-4 md:px-12 py-12  from-red-50 to-white"
>
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 flex justify-center items-center gap-3 md:gap-4"
  >
    <motion.div
      whileHover={{ rotate: 15, scale: 1.1 }}
      className="text-red-600"
    >
      <FaUserGraduate />
    </motion.div>
    Top Hiring Partners
  </motion.h2>
  
  <div className="overflow-hidden rounded-2xl shadow-2xl border border-red-200">
    <div className="overflow-x-auto w-full">
      <table className="min-w-[640px] md:min-w-full bg-white">
        <thead className="bg-gradient-to-r from-red-600 to-red-700">
          <tr>
            <th className="px-6 md:px-8 py-4 md:py-6 text-left text-base md:text-lg font-bold text-gray-black">Logo</th>
            <th className="px-6 md:px-8 py-4 md:py-6 text-left text-base md:text-lg font-bold text-gray-black">Company</th>
            <th className="px-6 md:px-8 py-4 md:py-6 text-left text-base md:text-lg font-bold text-gray-black">About</th>
          </tr>
        </thead>
        <tbody>
          {university?.Placement?.map((item, index) => (
            <motion.tr 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-red-100 hover:bg-red-50 transition-colors duration-300"
            >
              <td className="px-6 md:px-8 py-4 md:py-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-xl border-2 border-red-200 flex items-center justify-center shadow-md"
                >
                  <img 
                    src={item?.img} 
                    alt={item?.company} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain" 
                  />
                </motion.div>
              </td>
              <td className="px-6 md:px-8 py-4 md:py-6 font-bold text-gray-900 text-base md:text-lg">
                {item.company}
              </td>
              <td className="px-6 md:px-8 py-4 md:py-6 text-gray-700 leading-relaxed text-sm md:text-base">
                {item.about}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</motion.section>


        {/* Degree Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="px-6 md:px-12 py-12 bg-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-red-800"
          >
            🎓 Why Choose an LPU Online Degree?
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Left Side: Details and Points */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <div className=" from-red-50 to-white p-8 rounded-2xl shadow-xl border border-red-100">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {university?.Degree?.detail}
                </p>
                <div className="space-y-3">
                  {university?.Degree?.points?.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center bg-white p-4 rounded-xl shadow-md border border-red-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-red-600 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-900 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Degree Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <img
                  src={university?.Degree?.img}
                  alt="Sample LPU Degree"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-red-200 object-contain"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-red-200 to-red-300 rounded-2xl opacity-20 blur-xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* How to Apply Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="px-6 md:px-12 py-12  from-red-50 to-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-8 text-red-800"
          >
            📋 How to Take Online Admission in {university?.universityName} Online?
          </motion.h2>

          {/* Header Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 mb-12 max-w-4xl mx-auto text-lg leading-relaxed bg-white p-6 rounded-xl shadow-lg"
          >
            {university?.howtoapply?.[0]?.header}
          </motion.p>

          {/* Steps */}
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {university?.howtoapply?.slice(1).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="flex flex-col items-center bg-white border-2 border-red-200 rounded-2xl p-8 w-64 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-red-400"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center w-16 h-16  from-red-600 to-red-700 text-gray-black rounded-full mb-6 font-bold text-xl shadow-lg"
                >
                  {index + 1}
                </motion.div>
                <h3 className="font-bold text-black text-lg mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="px-6 md:px-12 py-12  from-red-50 to-white"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl text-gray-900 mb-8 text-center"
          >
            🏛️ University Features
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Learning Methodology */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="font-bold text-gray-700 text-xl mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Learning Methodology
              </h4>
              <p className="text-red-600 leading-relaxed text-lg">{university.features.learningMethodology}</p>
            </motion.div>
            
            {/* Support Services */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="font-bold text-gray-700 text-xl mb-4 flex items-center">
                <span className="text-2xl mr-3">🛠️</span>
                Support Services
              </h4>
              <div className="space-y-3">
                {university.features.supportServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex items-center bg-red-50 p-3 rounded-lg border border-red-100"
                  >
                    <FaCheckCircle className="mr-3 text-red-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Placement Support */}
          {university.features.placementSupport && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="mt-8 flex items-center justify-center bg-gradient-to-r from-red-100 to-red-200 text-gray-900 p-6 rounded-2xl border-2 border-red-300 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-2xl mx-auto"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="mr-4"
              >
                <FaUserGraduate size={24} />
              </motion.div>
              <span className="font-bold text-lg">🎯 Placement Support Available</span>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Form Overlay */}
        <AnimatePresence>
          {contactFormVisible && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full bg-black bg-opacity-50 backdrop-blur-sm z-50  p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <UniversityContactForm 
                  universityName={university.universityName} 
                  logoUrl={university.logo} 
                  onClose={handleContactFormToggle} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced CTA Footer */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="px-6 md:px-12 py-8 bg-gradient-to-r from-red-600 to-red-700 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-black font-medium text-lg mb-2">🚀 Ready to Transform Your Future?</p>
            <p className="text-red-100">Apply now for upcoming sessions and unlock your potential</p>
          </div>
          
          <motion.button
            onClick={handleContactFormToggle}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-red-50 text-gray-700 font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl focus:outline-none border-2 border-transparent hover:border-red-200 transition-all duration-300"
          >
            ✨ Apply Now - Start Your Journey
          </motion.button>
        </motion.div> */}
      </motion.div>
    </div>
  );
}