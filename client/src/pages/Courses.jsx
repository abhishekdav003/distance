import { useState, useEffect } from 'react';
import { FaClock, FaGraduationCap, FaLaptop, FaCreditCard, FaUniversity, FaMapMarkerAlt, FaRupeeSign, FaCheck, FaBriefcase, FaArrowRight, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { coursesData } from '../components/data/coursesData';
import { universitiesData } from '../components/data/universitiesData';

const CourseCollegesComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modeFilter, setModeFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Set the selected course from route state when the component mounts
  useEffect(() => {
    if (location.state && location.state.selectedCourse) {
      setSelectedCourse(location.state.selectedCourse);
    }
  }, [location.state]);

  // Get the selected course details
  const selectedCourseDetails = coursesData.find(course => course.id === selectedCourse);
  
  // Get universities for the selected course
  const courseUniversities = selectedCourse ? 
    universitiesData[selectedCourse] || [] : [];

  // Apply filters to universities
  const filteredUniversities = courseUniversities.filter(uni => 
    modeFilter === 'all' || uni.mode.toLowerCase().includes(modeFilter.toLowerCase())
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gradient-to-b from-red-50 to-indigo-50 min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-6">
        <button 
          onClick={goBack}
          className="mb-4 px-4 py-2 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
        >
          <FaArrowLeft /> Back to Courses
        </button>
      </div>

      {/* Selected Course Details */}
      {selectedCourseDetails ? (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {selectedCourseDetails.title}
              </h1>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <FaClock className="text-red-600 text-xl" />
                  <div>
                    <h3 className="text-sm text-gray-500 font-medium">Duration</h3>
                    <p className="text-gray-800">{selectedCourseDetails.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-red-600 text-xl" />
                  <div>
                    <h3 className="text-sm text-gray-500 font-medium">Eligibility</h3>
                    <p className="text-gray-800">{selectedCourseDetails.eligibility}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLaptop className="text-red-600 text-xl" />
                  <div>
                    <h3 className="text-sm text-gray-500 font-medium">Mode</h3>
                    <p className="text-gray-800">{selectedCourseDetails.mode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-red-600 text-xl" />
                  <div>
                    <h3 className="text-sm text-gray-500 font-medium">Payment</h3>
                    <p className="text-gray-800">{selectedCourseDetails.payment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* University Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-red-800">
              Universities Offering {selectedCourseDetails.title}
            </h2>
            
            <div className="flex gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search universities..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-2 items-center">
                <button 
                  onClick={() => setModeFilter('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    modeFilter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Modes
                </button>
                <button 
                  onClick={() => setModeFilter('online')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    modeFilter === 'online' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Online
                </button>
                <button 
                  onClick={() => setModeFilter('distance')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    modeFilter === 'distance' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Distance
                </button>
              </div>
            </div>
          </div>
          
          {/* Universities List */}
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredUniversities
                .filter(uni => uni.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((university, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                  <div className="md:w-1/3 lg:w-1/4 relative">
                    <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-md text-sm font-medium text-white ${
                      university.mode.toLowerCase().includes('online') ? 'bg-red-600' : 'bg-indigo-600'
                    }`}>
                      {university.mode}
                    </div>
                  </div>
                  
                  <div className="p-6 md:w-2/3 lg:w-3/4">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                      <h3 className="text-xl font-bold text-red-800 mb-2 md:mb-0">
                        {university.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-600" />
                        <span className="text-gray-700">{university.location}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Course Fee:</h4>
                        <p className="flex items-center gap-1 text-gray-800 font-semibold">
                          <FaRupeeSign className="text-red-600" /> {university.fee}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Approvals:</h4>
                        <p className="flex items-center gap-1 text-gray-800">
                          <FaCheck className="text-red-600" /> {university.approvals}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Advantage:</h4>
                        <p className="flex items-center gap-1 text-gray-800">
                          <FaBriefcase className="text-red-600" /> {university.advantage}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Semester Starts:</h4>
                        <p className="text-gray-800">{university.semesterStarts || 'January & July'}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center gap-2">
                        Get Help <FaArrowRight className="text-sm" />
                      </button>
                      <button className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-md transition-colors">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center">
              <FaUniversity className="mx-auto text-5xl text-gray-300 mb-4" />
              <p className="text-lg text-gray-700">No universities found with the selected filter.</p>
              <button 
                onClick={() => setModeFilter('all')}
                className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Show All Universities
              </button>
            </div>
          )}
        </div>
      ) : (
        // No course selected state
        <div className="container mx-auto px-4 py-20 text-center">
          <FaUniversity className="mx-auto text-6xl text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-700 mb-4">No Course Selected</h2>
          <p className="text-gray-600 mb-8">Please select a course from the carousel to view available universities.</p>
          <button 
            onClick={goBack}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft /> Return to Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCollegesComponent;