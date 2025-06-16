import React, { useState } from 'react';
import { BookOpen, Clock, Award, Laptop } from 'lucide-react';

// Enhanced courses data with categories (keeping original durations and correcting some)
const coursesData = [
  {
    id: 1,
    title: 'MBA',
    duration: '2 years',
    icon: <Award className="text-red-600" />,
    category: 'PG'
  },
  {
    id: 2,
    title: 'MCA',
    duration: '2 years',
    icon: <Laptop className="text-red-600" />,
    category: 'PG'
  },
  {
    id: 3,
    title: 'MCOM',
    duration: '2 years',
    icon: <BookOpen className="text-red-600" />,
    category: 'PG'
  },
  {
    id: 4,
    title: 'MA',
    duration: '2 years',
    icon: <Award className="text-red-600" />,
    category: 'PG'
  },
  {
    id: 5,
    title: 'MSC',
    duration: '2 years',
    icon: <Laptop className="text-red-600" />,
    category: 'PG'
  },
  {
    id: 6,
    title: 'MJMC',
    duration: '2 years',
    icon: <Award className="text-red-600" />,
    category: 'PG'
  },
  {
    id: 7,
    title: 'BBA',
    duration: '2 years',
    icon: <Award className="text-red-600" />,
    category: 'UG'
  },
  {
    id: 8,
    title: 'BCA',
    duration: '2 years',
    icon: <Laptop className="text-red-600" />,
    category: 'UG'
  },
  {
    id: 9,
    title: 'BCOM',
    duration: '1 year',
    icon: <BookOpen className="text-red-600" />,
    category: 'UG'
  },
  {
    id: 10,
    title: 'BA',
    duration: '2 years',
    icon: <BookOpen className="text-red-600" />,
    category: 'UG'
  },
  {
    id: 11,
    title: 'BSC',
    duration: '2 years',
    icon: <BookOpen className="text-red-600" />,
    category: 'UG'
  },
  {
    id: 12,
    title: 'BJMC',
    duration: '1 year',
    icon: <Clock className="text-red-600" />,
    category: 'UG'
  },
  {
    id: 13,
    title: 'PGP',
    duration: '1 year',
    icon: <Clock className="text-red-600" />,
    category: 'Executive'
  },
  {
    id: 14,
    title: 'DIPLOMA',
    duration: '1 year',
    icon: <Clock className="text-red-600" />,
    category: 'Certification'
  },
  {
    id: 15,
    title: 'CERTIFICATE',
    duration: '1 year',
    icon: <Clock className="text-red-600" />,
    category: 'Certification'
  },
  {
    id: 16,
    title: 'LLM',
    duration: '1 year',
    icon: <Clock className="text-red-600" />,
    category: 'Doctorate'
  },
];

const filterCategories = [
  { id: 'all', label: 'All Programs', subtitle: 'Complete List' },
  { id: 'PG', label: 'PG Courses', subtitle: 'After Graduation' },
  { id: 'UG', label: 'UG Courses', subtitle: 'After 12th' },
  { id: 'Executive', label: 'Executive Programs', subtitle: 'Working Professionals' },
  { id: 'Certification', label: 'Certification', subtitle: 'Get Certified' },
  { id: 'Doctorate', label: 'Doctorate/Ph.D', subtitle: 'Get Dr. Title' }
];

// Original CourseCard component with preserved functionality
const CourseCard = ({ course, onViewProgram }) => {
  return (
    <div 
      onClick={() => onViewProgram(course)} 
      className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border cursor-pointer border-gray-100 hover:border-red-200 transform hover:scale-105"
    >
      <div className="w-full p-2 flex flex-col items-center space-y-2">
        <div className="bg-red-50 rounded-full p-3 mb-2 transition-colors duration-300 hover:bg-red-100">
          {course.icon}
        </div>
        <div className="text-sm font-medium text-red-600">{course.duration}</div>
        <h3 className="text-lg font-bold text-gray-800 text-center">{course.title}</h3>
      </div>
      <button 
        className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-300"
        onClick={(e) => {
          e.stopPropagation();
          onViewProgram(course);
        }}
      >
        View Program
      </button>
    </div>
  );
};

export default function CourseDisplay() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Navigation functionality (removed useNavigate dependency for demo)
  const handleViewProgram = (course) => {
    console.log('Navigating to colleges page with course:', course);
    
    // Navigate to the colleges page with the selected course data
    // navigate('/colleges', {
    //   state: {
    //     selectedCourse: course.id
    //   }
    // });
    
    // For demo purposes, just log the action
    alert(`Viewing program: ${course.title}`);
  };

  // Filter courses based on active filter
  const filteredCourses = activeFilter === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
            Explore Top-Ranked Online Programs
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of accredited programs designed to advance your career and education goals
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 border-2 min-w-max transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-red-600 text-white border-red-600 shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold">{category.label}</div>
                  <div className="text-xs opacity-80 hidden sm:block">{category.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Courses Section with Original Design */}
        <div className="bg-gradient-to-b from-red-50 to-white py-12 px-4 sm:px-6 rounded-xl mb-5 shadow-inner lg:px-8" style={{ boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Academic Programs</h2>
              <p className="mt-4 text-lg text-gray-600">
                {activeFilter === 'all' 
                  ? 'Explore our wide range of courses designed to advance your career'
                  : `Showing ${filterCategories.find(cat => cat.id === activeFilter)?.label || 'Selected'} - ${filteredCourses.length} program${filteredCourses.length !== 1 ? 's' : ''} available`
                }
              </p>
            </div>
            
            {/* Fixed Responsive Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <CourseCard 
                    course={course} 
                    onViewProgram={handleViewProgram}
                  />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <BookOpen size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No programs found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>

        {/* Course Count Summary */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Showing {filteredCourses.length} of {coursesData.length} programs
            {activeFilter !== 'all' && (
              <span className="ml-2">
                • <button 
                    onClick={() => setActiveFilter('all')} 
                    className="text-red-600 hover:text-red-700 underline font-medium"
                  >
                    View All Programs
                  </button>
              </span>
            )}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
    </div>
  );
}
