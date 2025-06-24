import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, BookOpen, Clock, Users, Award, Star, Search, Filter } from 'lucide-react';


// coursesData.jsx
const coursesData = [
  {
    id: 1,
    title: 'MBA - Master of Business Administration',
    duration: '2 years',
    eligibility: "Bachelor's Degree with minimum 50%",
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 2,
    title: 'MCA - Master of Computer Applications',
    duration: '2 years',
    eligibility: 'BCA or equivalent with minimum 50%',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 3,
    title: 'MCOM - Master of Commerce',
    duration: '2 years',
    eligibility: 'B.Com or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 4,
    title: 'MA - Master of Arts',
    duration: '2 years',
    eligibility: 'Graduation in any stream',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 5,
    title: 'MSC - Master of Science',
    duration: '2 years',
    eligibility: 'B.Sc or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 6,
    title: 'MJMC - Master of Journalism & Mass Communication',
    duration: '2 years',
    eligibility: 'Graduation in any stream',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 7,
    title: 'BBA - Bachelor of Business Administration',
    duration: '3 years',
    eligibility: '10+2 or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 8,
    title: 'BCA - Bachelor of Computer Applications',
    duration: '3 years',
    eligibility: '10+2 or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 9,
    title: 'BCOM - Bachelor of Commerce',
    duration: '3 years',
    eligibility: '10+2 or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 10,
    title: 'BA - Bachelor of Arts',
    duration: '3 years',
    eligibility: '10+2 or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 11,
    title: 'BSC - Bachelor of Science',
    duration: '3 years',
    eligibility: '10+2 with Science',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 12,
    title: 'BJMC - Bachelor of Journalism & Mass Communication',
    duration: '3 years',
    eligibility: '10+2 or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 13,
    title: 'PGP - Post Graduate Program',
    duration: '1 year',
    eligibility: 'Graduation in any stream',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 14,
    title: 'DIPLOMA - Diploma Program',
    duration: '1 year',
    eligibility: '10+2 or Graduation (varies by course)',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 15,
    title: 'CERTIFICATE - Short Term Certification',
    duration: '3–6 months',
    eligibility: '10+2 or equivalent',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    id: 16,
    title: 'LLM - Master of Law',
    duration: '1 year',
    eligibility: 'LLB or equivalent law degree',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
];

// Helper functions
const getCourseLevel = (title) => {
  if (title.includes('Master') || title.includes('M.') || title.includes('PGP') || title.includes('LLM')) return 'Masters';
  if (title.includes('Bachelor') || title.includes('B.')) return 'Bachelors';
  if (title.includes('DIPLOMA')) return 'Diploma';
  if (title.includes('CERTIFICATE')) return 'Certificate';
  return 'Other';
};

const getCourseColor = (title) => {
  if (title.includes('MBA') || title.includes('BBA')) return 'from-red-500 to-rose-600';
  if (title.includes('MCA') || title.includes('BCA')) return 'from-blue-500 to-indigo-600';
  if (title.includes('MCOM') || title.includes('BCOM')) return 'from-green-500 to-emerald-600';
  if (title.includes('MSC') || title.includes('BSC')) return 'from-purple-500 to-violet-600';
  if (title.includes('MA') || title.includes('BA')) return 'from-orange-500 to-amber-600';
  if (title.includes('MJMC') || title.includes('BJMC')) return 'from-teal-500 to-cyan-600';
  if (title.includes('LLM')) return 'from-gray-700 to-slate-800';
  return 'from-red-500 to-red-600';
};

const getShortTitle = (title) => {
  return title.split(' - ')[0];
};

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const dropdownRef = useRef(null);

  const levels = ['All', 'Masters', 'Bachelors', 'Diploma', 'Certificate'];
  
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || getCourseLevel(course.title) === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  function toggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setDropdownOpen(false);
    }
  }

  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
    setSearchTerm('');
    setSelectedLevel('All');
  }

  function handleCourseClick(courseId) {
    console.log(`Navigate to course ${courseId}`);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  return (
    <header className="relative bg-white shadow-lg border-b-2 border-red-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">EduKyu</h1>
              <p className="text-xs text-red-600 font-medium">Online & Distance Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="group relative cursor-pointer overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                aria-expanded={isDropdownOpen}
              >
                <span className="relative z-10">Browse Courses</span>
                <ChevronDown className={`h-4 w-4 relative z-10 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              {/* Desktop Mega Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 w-[900px] right-0 overflow-hidden animate-in slide-in-from-top-4 duration-300">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 border-b border-red-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Explore Our Courses</h3>
                        <p className="text-sm text-gray-600">Choose from {coursesData.length} premium online programs</p>
                      </div>
                      <button onClick={() => setDropdownOpen(false)} className="text-gray-400 hover:text-gray-600">
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Search and Filter */}
                    <div className="flex space-x-4">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search courses..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <select
                          value={selectedLevel}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="pl-10 pr-8 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white"
                        >
                          {levels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Courses Grid */}
                  <div className="p-6 max-h-120 overflow-y-auto">
                    {filteredCourses.length > 0 ? (
                      <div className="grid grid-cols-3 gap-4">
                        {filteredCourses.map((course, index) => (
                          <div
                            key={course.id}
                            className="group relative bg-white border border-gray-100 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-red-200"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => handleCourseClick(course.id)}
                          >
                            {/* <div className={`w-full h-2 bg-gradient-to-r ${getCourseColor(course.title)} rounded-full mb-3`}></div> */}
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-bold text-gray-800 text-sm">{getShortTitle(course.title)}</h4>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  getCourseLevel(course.title) === 'Masters' ? 'bg-red-100 text-red-700' :
                                  getCourseLevel(course.title) === 'Bachelors' ? 'bg-blue-100 text-blue-700' :
                                  getCourseLevel(course.title) === 'Diploma' ? 'bg-green-100 text-green-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {getCourseLevel(course.title)}
                                </span>
                              </div>
                              
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="h-3 w-3" />
                                  <span>Online</span>
                                </div>
                              </div>
                              
                              <p className="text-xs text-gray-600 line-clamp-2">{course.eligibility}</p>
                              
                              <div className="flex items-center justify-between pt-2">
                                <span className="text-xs font-medium text-green-600">{course.payment}</span>
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-gray-400 mb-2">
                          <Search className="h-12 w-12 mx-auto" />
                        </div>
                        <p className="text-gray-600">No courses found matching your criteria</p>
                      </div>
                    )}
                  </div>
                  
                </div>
              )}
            </div>
            
            <a href="/" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors rounded-xl hover:bg-red-50">
              Home
            </a>
            <a href="/about-us" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors rounded-xl hover:bg-red-50">
              About Us
            </a>
            <a href="/compare-colleges" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors rounded-xl hover:bg-red-50">
              Compare
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 px-4 pb-6">
          {/* Mobile Courses */}
          <div className="pt-4">
            <button
              onClick={toggleDropdown}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-2xl font-semibold flex items-center justify-between shadow-lg"
            >
              <span>Browse Courses</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="mt-4 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Mobile Search */}
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                
                {/* Mobile Courses List */}
                <div className="max-h-80 overflow-y-auto">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-3 h-12 bg-gradient-to-b ${getCourseColor(course.title)} rounded-full flex-shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-800 text-sm">{getShortTitle(course.title)}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              getCourseLevel(course.title) === 'Masters' ? 'bg-red-100 text-red-700' :
                              getCourseLevel(course.title) === 'Bachelors' ? 'bg-blue-100 text-blue-700' :
                              getCourseLevel(course.title) === 'Diploma' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {getCourseLevel(course.title)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                            <span>{course.duration}</span>
                            <span>•</span>
                            <span>Online</span>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-1">{course.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="space-y-2 mt-4">
            <a href="/" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium transition-all">
              Home
            </a>
            <a href="/about-us" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium transition-all">
              About Us
            </a>
            <a href="/compare-colleges" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium transition-all">
              Compare Colleges
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}