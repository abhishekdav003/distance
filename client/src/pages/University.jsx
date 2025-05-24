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
    return <div className="text-center py-20 text-red-600 font-bold text-xl">University not found.</div>;
  }

  
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 pb-12 ">
      <div className="">
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
  }
  return (
  <div>
   <div className="w-full bg-red-100 h-auto p-6 text-red-600 ">
  {/* University Info Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    
    {/* Text and Details */}
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">{university.universityName} - online</h2>
      <p className="text-base">
        {university.description}
      </p>

      {/* Approvals Logos */}
      <div className="flex gap-4">
        {university?.regulatory.map((logo)=>(
        <img src={logo} alt="" className="h-12" />
        ))}
        
       
      </div>

      {/* Program Buttons */}
      <div className="flex flex-wrap gap-2">
        {university?.programNames?.map((course) => (
          <span
            key={course}
            className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium"
          >
            {course}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 mt-4 flex-wrap">
        <button onClick={handleContactFormToggle} className="bg-orange-500 px-5 py-2 rounded text-white font-semibold hover:bg-orange-600">
          Download Brochure
        </button>
        <button onClick={handleContactFormToggle} className="bg-blue-600 px-5 py-2 rounded text-white font-semibold hover:bg-blue-700">
          Get Help
        </button>
        <Link  to={'/compare-colleges'} className="bg-green-600 px-5 py-2 rounded text-white font-semibold hover:bg-green-700 cursor-pointer">
          Add to Compare
        </Link>
      </div>
    </div>

    {/* Image & Rating */}
    <div className="relative w-full">
      <img src={university.img} alt="LPU Campus" className="w-full rounded" />
      <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded flex items-center gap-1 text-yellow-500 text-lg">
        ★ ★ ★ ★ ☆
      </div>
    </div>
  </div>
</div>
<div>
<h2>About {university.universityName} -online</h2>
{university?.About.map((about)=>(
  <p>{about}</p>
))}
<h2 className="text-xl font-semibold mb-4">Key Highlights of {university.universityName}</h2>
<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300">
    <thead className="bg-red-700">
      <tr>
        <th className="text-left p-2 border border-red-900 text-white">Feature</th>
        <th className="text-left p-2 border border-red-900 text-white">Details</th>
      </tr>
    </thead>
    <tbody>
      {university?.keyhighlights?.map((item, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="p-2 border border-gray-300 font-medium">{item.feature}</td>
          <td className="p-2 border border-gray-300">{item.details}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" relative bg-white rounded-xl shadow-xl "
    >
      
      {/* University Header */}
      <div className=" flex  relative text-red-700 p-6">
        <img src={university?.img} alt="" className=" md:h-56 w-full scale-110 md:scale-105 opacity-35"/>
        <div className=" absolute top-10 flex flex-col md:gap-10">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white p-3 rounded-full mr-4 text-red-700">
              <FaUniversity size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{university.universityName} Online Courses With Updated Fees for 2025</h2>
              <div className="flex items-center mt-1">
                <FaMapMarkerAlt className="mr-1" />
                <span className="text-sm">{university.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0 text-white">
            <div className="flex items-center bg-red-900 bg-opacity-40 rounded-full px-3 py-1">
              <FaCalendarAlt className="mr-1" />
              <span className="text-sm">Est. {university.established}</span>
            </div>
            <div className="flex items-center bg-red-900 bg-opacity-40 rounded-full px-3 py-1">
              <FaMedal className="mr-1" />
              <span className="text-sm">{university.accreditation}</span>
            </div>
            <div className="flex items-center bg-red-900 bg-opacity-40 rounded-full px-3 py-1">
              <FaStar className="mr-1" />
              <span className="text-sm">{university.features.studentRating}</span>
            </div>
          </div>
        </div>
      </div>

 

      {/* Programs */}
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
          <FaGraduationCap className="mr-2 text-red-600" />
          Programs Offered
        </h3>

        <div className="space-y-4">
          {university.programsOffered.map((program, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <motion.button
                onClick={() => toggleProgram(index)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                whileHover={{ backgroundColor: "rgba(2, 94, 104, 0.05)" }}
              >
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <FaGraduationCap className="text-red-700" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{program.degree}</h4>
                    <div className="flex flex-wrap mt-1 gap-3">
                      <div className="flex items-center text-xs text-gray-600">
                        <FaClock className="mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <FaLaptop className="mr-1" />
                        {program.mode}
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <FaRupeeSign className="mr-1" />
                        {program.semesterFee}/semester
                      </div>
                      {program.emiAvailable && (
                        <div className="flex items-center text-xs text-green-600">
                          <FaCreditCard className="mr-1" />
                          EMI Available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {expandedProgram === index ? (
                  <FaChevronUp className="text-red-600" />
                ) : (
                  <FaChevronDown className="text-red-600" />
                )}
              </motion.button>

              <AnimatePresence>
                {expandedProgram === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="mb-3">
                          <span className="font-medium text-gray-700">Eligibility:</span>
                          <p className="text-sm text-gray-600 mt-1">{program.eligibility}</p>
                        </div>

                        <div>
                          <span className="font-medium text-gray-700">Specializations:</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {program.specializations.map((spec, i) => (
                              <span
                                key={i}
                                className="bg-white border border-red-200 text-red-700 text-xs px-2 py-1 rounded-full flex items-center"
                              >
                                <FaCheckCircle className="mr-1 text-red-500" size={10} />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
<h2>
  EMI Option Available At {university?.universityName}
</h2>
<p>{university?.EMIOptionAvailable}</p>
<h2>Key Features of EMI Facility at {university?.universityName}</h2>
<ul>
  {university?.KeyFeaturesofEMI?.map((data , index)=>(
    <li><span className="font-bold">• {data.title}: </span>{data.body}</li>
  ))}
</ul>
<h2>Why Should You Choose {university?.universityName} online</h2>
<table className="min-w-full table-auto border border-gray-200">
  <thead>
    <tr className="bg-blue-100 text-gray-800">
      <th className="px-4 py-3 text-left font-semibold border border-gray-200">Feature</th>
      <th className="px-4 py-3 text-left font-semibold border border-gray-200">Details</th>
    </tr>
  </thead>
  <tbody>
    {university?.WhyShouldYouChoose?.map((data, index) => (
      <tr key={index} className="even:bg-gray-50">
        <td className="px-4 py-3 border border-gray-200 font-medium text-gray-900">{data?.feature}</td>
        <td className="px-4 py-3 border border-gray-200 text-gray-700">{data?.detail}</td>
      </tr>
    ))}
  </tbody>
</table>


<h2>Benefits of Studying at {university?.universityName}</h2>
<section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Benefits of {university.universityName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {university?.Benefits?.map((benefit, index) => {
          const IconComponent = FaIcons[benefit.icon] || FaIcons.FaLaptop; // fallback icon
          return (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IconComponent className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">{benefit.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <section className="py-8">
  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
    How Are Exams Conducted at {university.universityName}
  </h2>
  <ul className="space-y-4 max-w-4xl mx-auto text-gray-700 text-base px-4">
    {university?.HowareExamsconducted?.map((item, index) => (
      <li key={index} className="leading-relaxed">
        <span className="font-semibold">{item.title}:</span> {item.details}
      </li>
    ))}
  </ul>
</section>
<section className="py-10 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8">Accreditations & Approvals</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-2xl shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Logo</th>
          <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Accreditation</th>
          <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">About</th>
        </tr>
      </thead>
      <tbody>
        {university?.acreditationsApprovals?.map((item, index) => (
          <tr key={index} className="border-b last:border-none">
            <td className="px-6 py-4">
              <img src={item.img} alt={item.AccreditationsApprovals} className="w-12 h-12 object-contain" />
            </td>
            <td className="px-6 py-4 font-medium text-gray-800">{item.AccreditationsApprovals}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{item.about}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
<section className="py-10 px-4 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10">Academic Approach</h2>

  {/* Experiential Metrics */}
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Experiential Metrics</h3>
    <div className="space-y-4">
      {university?.AcademicApproach?.[0]?.map((item, index) => (
        <div key={index}>
          <p className="font-medium text-gray-800">{item.subtitle}:</p>
          <p className="text-sm text-gray-700">{item.detail}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Quantitative Metrics */}
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Quantitative Metrics</h3>
    <div className="space-y-4">
      {university?.AcademicApproach?.[1]?.map((item, index) => (
        <div key={index}>
          <p className="font-medium text-gray-800">{item.subtitle}:</p>
          <p className="text-sm text-gray-700">{item.detail}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-10 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8">Top Hiring Partners</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th>Logo</th>
          <th className="text-left px-4 py-2 border-b">Company</th>
          <th className="text-left px-4 py-2 border-b">About</th>
        </tr>
      </thead>
      <tbody>
        {university?.Placement?.map((item, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-3"><img src={item?.img} alt="" /></td>
            <td className="px-4 py-3 font-medium text-gray-800">{item.company}</td>
            <td className="px-4 py-3 text-gray-700">{item.about}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
<h2>
  What More Than Just A Degree?
</h2>
<section className="py-10 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8">Why Choose an LPU Online Degree?</h2>
  <div className="flex flex-col lg:flex-row items-center gap-10">
    
    {/* Left Side: Details and Points */}
    <div className="flex-1">
      <p className="text-gray-700 text-base mb-4">
        {university?.Degree?.detail}
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-800 font-medium">
        {university?.Degree?.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>

    {/* Right Side: Degree Image */}
    <div className="flex-1">
      <img
        src={university?.Degree?.img}
        alt="Sample LPU Degree"
        className="w-full max-w-md mx-auto rounded-xl shadow-lg object-contain"
      />
    </div>
    
  </div>
</section>
<section className="py-10 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-6">How to Take Online Admission in {university?.universityName} Online ?</h2>
  
  {/* Header Description */}
  <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
    {university?.howtoapply?.[0]?.header}
  </p>

  {/* Steps */}
  <div className="flex flex-wrap justify-center gap-6">
    {university?.howtoapply?.slice(1).map((step, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-5 w-48 text-center shadow-sm"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full mb-3 font-bold text-lg">
          {index + 1}
        </div>
        <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.detail}</p>
      </div>
    ))}
  </div>
</section>

      {/* Features */}
      <div className="px-6 py-4 bg-gray-50">
        <h3 className="font-bold text-lg text-gray-800 mb-3">University Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-red-700 mb-2">Learning Methodology</h4>
            <p className="text-sm text-gray-600">{university.features.learningMethodology}</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-red-700 mb-2">Support Services</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {university.features.supportServices.map((service, i) => (
                <li key={i} className="flex items-center">
                  <FaCheckCircle className="mr-2 text-red-500" size={12} />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {university.features.placementSupport && (
          <div className="mt-4 flex items-center bg-red-50 text-red-700 p-3 rounded-lg">
            <FaUserGraduate className="mr-2" />
            <span className="font-medium">Placement Support Available</span>
          </div>
        )}
      </div>
{contactFormVisible && (
          <div className=" fixed top-0 w-full bg-amber-950">
            <UniversityContactForm universityName={university.universityName} logoUrl={university.logo} onClose={handleContactFormToggle} />
          </div>
        )}
      {/* CTA */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm text-gray-500">Apply now for upcoming sessions</span>
        
        <motion.button
        onClick={handleContactFormToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded-lg shadow-md focus:outline-none"
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  </div>
  );
}