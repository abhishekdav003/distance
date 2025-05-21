import React from 'react';
import { FaClock, FaGraduationCap, FaLaptop, FaCreditCard } from 'react-icons/fa';

// Mock data for demonstration purposes
const coursesData = [
  {
    id: 1,
    title: "MBA",
    duration: "2 Years",
    eligibility: "Bachelor's Degree",
    mode: "Online",
    payment: "Semester-based",
    icon: "📊"
  },
  {
    id: 2,
    title: "MCA",
    duration: "2 Years",
    eligibility: "BCA/BSc IT",
    mode: "Online",
    payment: "Yearly",
    icon: "💻"
  },
  {
    id: 3,
    title: "MCOM",
    duration: "2 Years",
    eligibility: "BCOM/BBA",
    mode: "Distance",
    payment: "Semester-based",
    icon: "📈"
  },
  {
    id: 4,
    title: "MA",
    duration: "2 Years",
    eligibility: "Bachelor's Degree",
    mode: "Online",
    payment: "Yearly",
    icon: "🎓"
  },
  {
    id: 5,
    title: "MSC",
    duration: "2 Years",
    eligibility: "BSc/BCA",
    mode: "Distance",
    payment: "Semester-based",
    icon: "🧪"
  },
  {
    id: 6,
    title: "MJMC",
    duration: "2 Years",
    eligibility: "Bachelor's Degree",
    mode: "Online",
    payment: "Yearly",
    icon: "🤝"
  },
  {
    id: 7,
    title: "BBA",
    duration: "3 Years",
    eligibility: "12th Pass",
    mode: "Online",
    payment: "Semester-based",
    icon: "💼"
  },
  {
    id: 8,
    title: "BCA",
    duration: "3 Years",
    eligibility: "12th Pass with Maths",
    mode: "Online",
    payment: "Yearly",
    icon: "🖥️"
  },
  {
    id: 9,
    title: "BCOM",
    duration: "3 Years",
    eligibility: "12th Pass",
    mode: "Distance",
    payment: "Semester-based",
    icon: "🧮"
  },
  {
    id: 10,
    title: "BA",
    duration: "3 Years",
    eligibility: "12th Pass",
    mode: "Online",
    payment: "Yearly", 
    icon: "📚"
  },
  {
    id: 11,
    title: "BSC",
    duration: "3 Years",
    eligibility: "12th Pass with Science",
    mode: "Distance",
    payment: "Semester-based",
    icon: "⏳"
  },
  {
    id: 12,
    title: "BJMC",
    duration: "3 Years",
    eligibility: "12th Pass",
    mode: "Online",
    payment: "Yearly",
    icon: "🚴"
  }
];

const CoursesDisplay = () => {
  const handleViewProgram = (courseId) => {
    // Functionality remains the same
    console.log(`Viewing program: ${courseId}`);
    // In actual implementation with react-router-dom:
    // navigate('/course-college', { state: { selectedCourse: courseId } });
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Explore Our Distance Education Courses
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Choose from our wide range of undergraduate and postgraduate programs designed for working professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.id}
              className="group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border-t-4 border-blue-800 h-full flex flex-col">
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-800 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-800">{course.title}</span>
                    </div>
                  </div>
                  
                  {/* <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaClock className="text-blue-800 mr-3" /> 
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaGraduationCap className="text-blue-800 mr-3" /> 
                      <span className="font-medium">{course.eligibility}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaLaptop className="text-blue-800 mr-3" /> 
                      <span className="font-medium">{course.mode}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaCreditCard className="text-blue-800 mr-3" /> 
                      <span className="font-medium">{course.payment}</span>
                    </div>
                  </div> */}
                </div>
                
                {/* <div className="mt-auto p-7 pt-0">
                  <button
                    onClick={() => handleViewProgram(course.id)}
                    className="w-full py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Program
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesDisplay;