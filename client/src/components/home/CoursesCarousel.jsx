import React from 'react';
import { BookOpen, Clock, Award, Laptop } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// This would normally be imported from your file
// For this example, I'm including it directly
const coursesData = [
  {
    id: 1,
    title: 'MBA',
    duration: '2 years',
    icon: <Award className="text-red-600" />
  },
  {
    id: 2,
    title: 'MCA',
    duration: '2 years',
    icon: <Laptop className="text-red-600" />
  },
  {
    id: 3,
    title: 'MCOM',
    duration: '2 years',
    icon: <BookOpen className="text-red-600" />
  },
  {
    id: 4,
    title: 'MA',
    duration: '2 years',
    icon: <Award className="text-red-600" />
  },
  {
    id: 5,
    title: 'MSC',
    duration: '2 years',
    icon: <Laptop className="text-red-600" />
  },
  {
    id: 6,
    title: 'MJMC',
    duration: '2 years',
    icon: <Award className="text-red-600" />
  },
  {
    id: 7,
    title: 'BBA',
    duration: '2 years',
    icon: <Award className="text-red-600" />
  },
  {
    id: 8,
    title: 'BCA',
    duration: '2 years',
    icon: <Laptop className="text-red-600" />
  },
  {
    id: 9,
    title: 'BCOM',
    duration: '1 year',
    icon: <BookOpen className="text-red-600" />
  },
  {
    id: 10,
    title: 'BA',
    duration: '2 years',
    icon: <BookOpen className="text-red-600" />
  },
  {
    id: 11,
    title: 'BSC',
    duration: '2 years',
    icon: <BookOpen className="text-red-600" />
  },
  {
    id: 12,
    title: 'BJMC',
    duration: '1 year',
    icon: <Clock className="text-red-600" />
  },
  {
    id: 13,
    title: 'PGP',
    duration: '1 year',
    icon: <Clock className="text-red-600" />
  },
  {
    id: 14,
    title: 'DIPLOMA',
    duration: '1 year',
    icon: <Clock className="text-red-600" />
  },
  {
    id: 15,
    title: 'CERTIFICATE',
    duration: '1 year',
    icon: <Clock className="text-red-600" />
  },
  {
    id: 16,
    title: 'LLM',
    duration: '1 year',
    icon: <Clock className="text-red-600" />
  },
];

const CourseCard = ({ course, onViewProgram }) => {
  return (
    <div onClick={() => onViewProgram(course)} className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border cursor-pointer border-gray-100">
      <div className="w-full p-2 flex flex-col items-center space-y-2">
        <div className="bg-red-50 rounded-full p-3 mb-2">
          {course.icon}
        </div>
        <div className="text-sm font-medium text-red-600">{course.duration}</div>
        <h3 className="text-lg font-bold text-gray-800 text-center">{course.title}</h3>
      </div>
      <button 
        
        className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-300"
      >
        View Program
      </button>
    </div>
  );
};

export default function CourseDisplay() {
  const navigate = useNavigate();

  const handleViewProgram = (course) => {
    // Navigate to the colleges page with the selected course data
    navigate('/colleges', {
      state: {
        selectedCourse: course.id
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-red-50 to-white py-12 px-4 sm:px-6 rounded-xl  mb-5 shadow-inner shadow lg:px-8" style={{ boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Academic Programs</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our wide range of courses designed to advance your career</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-7">
          {coursesData.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onViewProgram={handleViewProgram}
            />
          ))}
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
  );
}
