import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheck,
  FaClock,
  FaGraduationCap,
  FaStar,
  FaCalendar,
  FaUsers,
  FaBook,
  FaCertificate,
  FaLaptop,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaDownload,
  FaPlay,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaTrophy,
  FaBuilding,
  FaUserTie,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { universityDetail } from "../components/data/universityDetail";
import { courses, modulardata } from "../components/data/ModularUnivarsityData";

const UniversityDetailPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ============================>
  const location = useLocation();

  let courseName = location.pathname
    .toString()
    .split("/")[2]
    .replaceAll("-", "");
  // console.log(courseName);

  let matchUni = courses.find((course)=> course.name == courseName)
  // console.log('====================================');
  // console.log(matchUni);
  // console.log('====================================');

  let uniname = location.pathname.toString().split("/")[3].replaceAll("-", "");

  // console.log(uniname);
  let found = modulardata.find(
    (matchUniversity) => matchUniversity.name.replaceAll(" ", "") == uniname
  );
  // console.log(found);

  const courseDetail = {
    id: 1,
    title: "Master of Business Administration (MBA)",
    duration: "2 Years",
  };

  const goBack = () => {
    console.log("Going back to universities page");
    navigate(-1);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FaBook },
    { id: "curriculum", label: "Curriculum", icon: FaGraduationCap },
    { id: "admission", label: "Admission", icon: FaCertificate },
    { id: "fees", label: "Fees & Payment", icon: FaRupeeSign },
    { id: "faq", label: "FAQ", icon: FaQuestionCircle },
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-all duration-200 hover:shadow-md text-sm sm:text-base"
          >
            <FaArrowLeft className="text-xs sm:text-sm" />
            <span className="hidden sm:inline">Back to Universities</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative">
          <div className="flex flex-col xl:flex-row items-start gap-6 lg:gap-8">
            {/* University Image */}
            <div className="flex-shrink-0 mx-auto xl:mx-0">
              <div className="relative">
                <img
                  src={`/colleges/${found.image}`}
                  alt={found.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-white text-red-600 rounded-full p-2 shadow-lg">
                  <FaGraduationCap className="text-lg sm:text-xl" />
                </div>
              </div>
            </div>

            {/* Course & University Info */}
            <div className="flex-1 text-center xl:text-left space-y-4 sm:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight">
                    {matchUni.fullName}
                  </h1>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-white/30">
                    {universityDetail.mode}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold opacity-90 mb-4 sm:mb-6 capitalize">
                  {found.name}
                </h2>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center justify-center xl:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <FaMapMarkerAlt className="text-white/80 text-lg flex-shrink-0" />
                  <div className="text-center xl:text-left">
                    <p className="text-xs sm:text-sm opacity-80">Location</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {found.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center xl:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <FaClock className="text-white/80 text-lg flex-shrink-0" />
                  <div className="text-center xl:text-left">
                    <p className="text-xs sm:text-sm opacity-80">Duration</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {courseDetail.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center xl:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 sm:col-span-2 lg:col-span-1">
                  <FaStar className="text-yellow-300 text-lg flex-shrink-0" />
                  <div className="text-center xl:text-left">
                    <p className="text-xs sm:text-sm opacity-80">Rating</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {universityDetail.rating}/5
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 *:cursor-pointer">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-white text-red-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <FaPhoneAlt className="text-sm" />
                  <span className="text-sm sm:text-base">
                    Get Free Counseling
                  </span>
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                  <FaDownload className="text-sm" />
                  <span className="text-sm sm:text-base">
                    Download Brochure
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <FaRupeeSign className="text-red-600 text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Course Fee</p>
            <p className="font-bold text-sm sm:text-lg text-gray-800">
              ₹{found.courseFees}
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <FaCalendar className="text-red-600 text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Next Intake</p>
            <p className="font-bold text-sm sm:text-lg text-gray-800">
              {found.nextTake}
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <FaUsers className="text-red-600 text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Students</p>
            <p className="font-bold text-sm sm:text-lg text-gray-800">
              {found.noOfStudents}+
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <FaCertificate className="text-red-600 text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              Accreditation
            </p>
            <p className="font-bold text-sm sm:text-lg text-gray-800">
              {universityDetail.accreditation}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Mobile Tab Menu */}
          <div className="lg:hidden border-b bg-gray-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-6 py-4 flex items-center justify-between text-gray-700 font-semibold"
            >
              <span className="flex items-center gap-2">
                {tabs.find((tab) => tab.id === activeTab)?.icon &&
                  React.createElement(
                    tabs.find((tab) => tab.id === activeTab).icon,
                    { className: "text-red-600" }
                  )}
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </span>
              <FaBars
                className={`transform transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="border-t bg-white">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-6 py-4 flex items-center gap-3 text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-red-50 text-red-600 border-r-4 border-red-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="text-lg" />
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tab Menu */}
          <div className="hidden lg:flex border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-max px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <tab.icon className="text-lg" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-400"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            {activeTab === "overview" && (
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    About the Program
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {universityDetail.programDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaTrophy className="text-red-600" /> Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {universityDetail.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaBuilding className="text-red-600" /> University
                      Features
                    </h4>
                    <ul className="space-y-3">
                      {universityDetail.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Course Curriculum
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {universityDetail.curriculum.map((semester, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                        <FaBook className="text-red-600" />
                        {semester.semester}
                      </h4>
                      <ul className="space-y-2">
                        {semester.subjects.map((subject, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"
                          >
                            <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "admission" && (
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                    Admission Process
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaUserTie className="text-red-600" />
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-3">
                        {universityDetail.eligibility.map((criteria, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base">
                              {criteria}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaCertificate className="text-red-600" />
                        Required Documents
                      </h4>
                      <ul className="space-y-3">
                        {universityDetail.documents.map((doc, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm sm:text-base">
                              {doc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                  <h4 className="text-lg sm:text-xl font-semibold mb-6 text-center">
                    Application Timeline
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {universityDetail.applicationTimeline.map((step, index) => (
                      <div key={index} className="text-center relative">
                        <div className="bg-white text-red-600 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-3 font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                        <h5 className="font-semibold mb-2 text-sm sm:text-base">
                          {step.step}
                        </h5>
                        <p className="text-xs sm:text-sm opacity-90">
                          {step.description}
                        </p>
                        {index <
                          universityDetail.applicationTimeline.length - 1 && (
                          <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-white/30 -translate-x-1/2 z-0"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fees" && (
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Fee Structure & Payment Options
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
                      <FaRupeeSign className="text-red-600" />
                      Fee Breakdown
                    </h4>
                    <div className="space-y-4">
                      {found.feeStructure.map((fee, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-3 border-b border-red-200 last:border-b-0"
                        >
                          <span className="text-gray-700 text-sm sm:text-base">
                            {fee.component}
                          </span>
                          <span className="font-semibold text-red-600 text-sm sm:text-base">
                            ₹{fee.amount}
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center py-4 border-t-2 border-red-300 font-bold text-base sm:text-lg">
                        <span className="text-red-800">Total Fee</span>
                        <span className="text-red-600">
                          ₹{found.courseFees}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCalendar className="text-red-600" />
                      Payment Options
                    </h4>
                    <div className="space-y-4">
                      {universityDetail.paymentOptions.map((option, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
                        >
                          <h5 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                            {option.type}
                          </h5>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3">
                            {option.description}
                          </p>
                          <p className="text-red-600 font-semibold text-sm sm:text-base">
                            {option.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {universityDetail.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">
                          {faq.question}
                        </span>
                        {expandedFaq === index ? (
                          <FaChevronUp className="text-red-600 flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-red-600 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-white border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-8 sm:mb-12">
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl text-white p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Get Started?
              </h3>
              <p className="mb-6 sm:mb-8 opacity-90 text-sm sm:text-base lg:text-lg">
                Get personalized guidance from our education counselors and take
                the next step towards your dream career
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <FaPhoneAlt className="text-sm" />
                  <span className="text-sm sm:text-base">Call Now</span>
                </button>
                <button className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                  <FaEnvelope className="text-sm" />
                  <span className="text-sm sm:text-base">Request Callback</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Get Free Counseling
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message (Optional)"
                  rows="4"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all duration-300 text-sm sm:text-base"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-red-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-600" />
                  <span>info@university.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button
          onClick={() => setShowContactForm(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
        >
          <FaPhoneAlt className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default UniversityDetailPage;
