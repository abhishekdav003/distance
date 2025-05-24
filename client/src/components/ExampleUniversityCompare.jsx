import { useState } from 'react';
import { ChevronDown, ChevronUp, Info, Calendar, BookOpen, Layers, DollarSign, CheckCircle, University, MapPin, Star, Users, Award, TrendingUp } from 'lucide-react';

const UniversityCompare = ({ university1, university2 }) => {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    programs: false,
    methodology: false,
    fees: false,
    eligibility: false
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Modern section header with enhanced styling
  const SectionHeader = ({ title, icon, section }) => (
    <div 
      className="group flex items-center justify-between p-6 cursor-pointer 
                 bg-gradient-to-r from-red-50 to-rose-50 hover:from-red-100 hover:to-rose-100
                 rounded-2xl mb-4 border border-red-100 hover:border-red-200
                 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg"
      onClick={() => toggleSection(section)}
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl text-white
                        group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300
                        shadow-lg group-hover:shadow-xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="p-2 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
        {expandedSections[section] ? 
          <ChevronUp className="text-red-600 w-6 h-6" /> : 
          <ChevronDown className="text-red-600 w-6 h-6" />
        }
      </div>
    </div>
  );

  // Enhanced comparison row with modern styling
  const ComparisonRow = ({ label, value1, value2, highlight = false }) => (
    <div className={`grid grid-cols-12 py-6 border-b border-red-100 hover:bg-red-25 transition-colors duration-200
                     ${highlight ? 'bg-gradient-to-r from-red-50 to-rose-50' : ''}`}>
      <div className="col-span-4 text-gray-700 font-semibold text-lg flex items-center">
        <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4"></div>
        {label}
      </div>
      <div className="col-span-4 text-gray-800 font-medium text-lg px-4">{value1}</div>
      <div className="col-span-4 text-gray-800 font-medium text-lg px-4">{value2}</div>
    </div>
  );

  // Enhanced list comparison with modern cards
  const ListComparison = ({ items1, items2 }) => (
    <div className="grid grid-cols-12 py-6 gap-6">
      <div className="col-span-4"></div>
      <div className="col-span-4">
        <div className="space-y-3">
          {items1.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-gradient-to-r from-red-50 to-white rounded-xl border border-red-100
                         hover:border-red-200 hover:shadow-md transition-all duration-300
                         transform hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <div className="space-y-3">
          {items2.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-gradient-to-l from-red-50 to-white rounded-xl border border-red-100
                         hover:border-red-200 hover:shadow-md transition-all duration-300
                         transform hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Modern university card with enhanced visuals
  const UniversityCard = ({ university, position }) => (
    <div 
      className={`relative p-8 flex flex-col items-center justify-center
                  bg-gradient-to-br from-white via-red-50 to-rose-100
                  border-2 border-red-200 rounded-3xl
                  transform transition-all duration-500 hover:scale-105
                  shadow-xl hover:shadow-2xl
                  ${position === 'left' ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}
      onMouseEnter={() => setHoveredCard(position)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 
                      rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 
                      rounded-full opacity-10 animate-pulse delay-1000"></div>
      
      {/* Logo container with enhanced styling */}
      <div className="relative mb-6">
        <div className="h-32 w-32 bg-white rounded-3xl p-4 flex items-center justify-center
                        shadow-xl border-4 border-red-100 relative overflow-hidden
                        group-hover:border-red-200 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 
                          group-hover:opacity-10 transition-opacity duration-300"></div>
          <University className="w-16 h-16 text-red-600" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 
                        rounded-full flex items-center justify-center shadow-lg">
          <Star className="w-4 h-4 text-white" />
        </div>
      </div>
      
      {/* University name with enhanced typography */}
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-2 leading-tight">
        {university.name}
      </h3>
      
      {/* University type badge */}
      <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white 
                      rounded-full text-sm font-semibold shadow-lg">
        {university.instituteType}
      </div>
      
      {/* Established year */}
      <div className="mt-4 flex items-center space-x-2 text-gray-600">
        <Calendar className="w-4 h-4" />
        <span className="font-medium">Est. {university.establishment}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 py-12">
      <div className="container mx-auto px-6">
        {/* Main header with enhanced styling */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 to-red-800 
                         bg-clip-text text-transparent mb-6">
            University Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compare top educational institutions side by side to make informed decisions about your future
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Enhanced comparison card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-red-100
                        backdrop-blur-sm bg-opacity-95">
          
          {/* University headers with modern cards */}
          <div className="grid grid-cols-12 p-8 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              w-48 h-48 bg-white rounded-full opacity-5"></div>
            </div>
            
            <div className="col-span-4 flex items-center justify-center relative z-10">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white">VS</h2>
                <p className="text-red-100 mt-2">Head to Head</p>
              </div>
            </div>
            
            <div className="col-span-4 relative z-10">
              <UniversityCard university={university1} position="left" />
            </div>
            
            <div className="col-span-4 relative z-10">
              <UniversityCard university={university2} position="right" />
            </div>
          </div>

          {/* Enhanced sections with modern styling */}
          <div className="p-8 space-y-8">
            {/* About section */}
            <div>
              <SectionHeader 
                title="About Universities" 
                icon={<Info className="w-6 h-6" />} 
                section="about" 
              />
              {expandedSections.about && (
                <div className="grid grid-cols-12 gap-8 animate-in slide-in-from-top duration-500">
                  <div className="col-span-4 flex items-center">
                    <div className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl">
                      <Info className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100
                                    hover:shadow-lg transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed text-lg">{university1.about}</p>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="p-6 bg-gradient-to-bl from-red-50 to-white rounded-2xl border border-red-100
                                    hover:shadow-lg transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed text-lg">{university2.about}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Programs section */}
            <div>
              <SectionHeader 
                title="Programs Offered" 
                icon={<BookOpen className="w-6 h-6" />} 
                section="programs" 
              />
              {expandedSections.programs && (
                <div className="animate-in slide-in-from-top duration-500">
                  <ListComparison 
                    items1={university1.programs} 
                    items2={university2.programs} 
                  />
                </div>
              )}
            </div>

            {/* Learning Methodology section */}
            <div>
              <SectionHeader 
                title="Learning Methodology" 
                icon={<Layers className="w-6 h-6" />} 
                section="methodology" 
              />
              {expandedSections.methodology && (
                <div className="grid grid-cols-12 gap-8 animate-in slide-in-from-top duration-500">
                  <div className="col-span-4 flex items-center">
                    <div className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100
                                    hover:shadow-lg transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed text-lg">{university1.methodology}</p>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="p-6 bg-gradient-to-bl from-red-50 to-white rounded-2xl border border-red-100
                                    hover:shadow-lg transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed text-lg">{university2.methodology}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fees section with enhanced table */}
            <div>
              <SectionHeader 
                title="Fees Structure" 
                icon={<DollarSign className="w-6 h-6" />} 
                section="fees" 
              />
              {expandedSections.fees && (
                <div className="animate-in slide-in-from-top duration-500">
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100">
                    <div className="grid grid-cols-12 pb-4 border-b-2 border-red-200">
                      <div className="col-span-4 text-xl font-bold text-gray-800 flex items-center">
                        <Award className="w-6 h-6 text-red-600 mr-3" />
                        Program
                      </div>
                      <div className="col-span-4 text-xl font-bold text-gray-800 text-center">
                        {university1.name}
                      </div>
                      <div className="col-span-4 text-xl font-bold text-gray-800 text-center">
                        {university2.name}
                      </div>
                    </div>
                    {university1.fees.map((fee, index) => (
                      <div key={index} className="grid grid-cols-12 py-4 border-b border-red-100 
                                                   hover:bg-white hover:rounded-xl transition-all duration-200">
                        <div className="col-span-4 text-gray-700 font-semibold text-lg flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                          {fee.program}
                        </div>
                        <div className="col-span-4 text-center">
                          <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white 
                                         rounded-full font-semibold shadow-lg">
                            {fee.amount}
                          </span>
                        </div>
                        <div className="col-span-4 text-center">
                          <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white 
                                         rounded-full font-semibold shadow-lg">
                            {university2.fees.find(f => f.program === fee.program)?.amount || 'N/A'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with sample data
const ExampleUniversityCompare = () => {
  const sampleUniversity1 = {
    name: "Manipal University",
    logoUrl: "/api/placeholder/100/100",
    instituteType: "Private University",
    establishment: "1953",
    about: "Manipal University is a leading private university known for its excellence in education, research, and healthcare. It offers a wide range of undergraduate and postgraduate programs with state-of-the-art facilities and experienced faculty.",
    programs: [
      "B.Tech in Computer Science",
      "B.Tech in Electronics",
      "MBA",
      "MBBS",
      "BDS"
    ],
    methodology: "Manipal University follows a blend of classroom teaching, practical labs, and industry exposure. The university emphasizes hands-on learning and research-based education with modern pedagogical approaches.",
    fees: [
      { program: "B.Tech", amount: "₹2,50,000 per annum" },
      { program: "MBA", amount: "₹3,20,000 per annum" },
      { program: "MBBS", amount: "₹12,00,000 per annum" }
    ],
    eligibility: [
      { program: "B.Tech", requirements: "10+2 with PCM, minimum 60%" },
      { program: "MBA", requirements: "Bachelor's degree with 50%, valid entrance score" },
      { program: "MBBS", requirements: "10+2 with PCB, NEET qualification" }
    ]
  };

  const sampleUniversity2 = {
    name: "Delhi University",
    logoUrl: "/api/placeholder/100/100",
    instituteType: "Central University",
    establishment: "1922",
    about: "Delhi University is one of India's premier central universities, known for its high academic standards and diverse course offerings. It has a rich heritage of academic excellence and produces leaders across various fields.",
    programs: [
      "B.A. Economics",
      "B.Com Honours",
      "B.Sc Physics",
      "M.A. English",
      "M.Com"
    ],
    methodology: "Delhi University follows a semester system with classroom teaching, tutorials, and practical sessions. It emphasizes critical thinking and comprehensive understanding of subjects through interactive learning methods.",
    fees: [
      { program: "B.Tech", amount: "₹25,000 per annum" },
      { program: "MBA", amount: "₹50,000 per annum" },
      { program: "MBBS", amount: "₹1,50,000 per annum" }
    ],
    eligibility: [
      { program: "B.Tech", requirements: "10+2 with PCM, minimum 55%" },
      { program: "MBA", requirements: "Bachelor's degree with 45%, valid entrance score" },
      { program: "MBBS", requirements: "10+2 with PCB, NEET qualification" }
    ]
  };

  return <UniversityCompare university1={sampleUniversity1} university2={sampleUniversity2} />;
};

export default ExampleUniversityCompare;