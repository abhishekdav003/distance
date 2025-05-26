import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiRepeat } from 'react-icons/fi';
import ExampleUniversityCompare from '../components/ExampleUniversityCompare';

const UniversityComparisonPage = () => {
  const [selectedUniversity1, setSelectedUniversity1] = useState('');
  const [selectedUniversity2, setSelectedUniversity2] = useState('');
  const [university1Data, setUniversity1Data] = useState(null);
  const [university2Data, setUniversity2Data] = useState(null);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // List of universities
  const universities = [
    "LPU",
    "Nmims Online",
    "Chandigarh University Online",
    "Amity Online",
    "Manipal",
    "SMU",
    "Shoolni",
    "DY Patil",
    "IMT Ghaziabad"
  ];
  
  // Database of university information
  const universityDatabase = {
    "LPU": {
      name: "Lovely Professional University",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Private University",
      establishment: "2005",
      about: "Lovely Professional University (LPU) is one of the largest private universities in India with more than 30,000 students. It offers a wide range of undergraduate, postgraduate, and doctorate programs across various disciplines.",
      programs: [
        "B.Tech in various specializations",
        "MBA with multiple specializations",
        "BBA, B.Com, B.Sc",
        "Ph.D. Programs",
        "Law Programs"
      ],
      methodology: "LPU follows a modern teaching methodology with a mix of classroom teaching, online learning, and practical training. The university has a strong focus on industry-relevant education and research.",
      fees: [
        { program: "B.Tech", amount: "₹1,80,000 per annum" },
        { program: "MBA", amount: "₹2,00,000 per annum" },
        { program: "BCA", amount: "₹1,20,000 per annum" }
      ],
      eligibility: [
        { program: "B.Tech", requirements: "10+2 with PCM, minimum 60% marks" },
        { program: "MBA", requirements: "Bachelor's degree with 50% marks, entrance exam" },
        { program: "BCA", requirements: "10+2 with 50% marks in any stream" }
      ]
    },
    "NMIMS ONLINE": {
      name: "NMIMS Online",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Deemed University",
      establishment: "1981 (Online division more recent)",
      about: "NMIMS Online is the distance learning division of SVKM's Narsee Monjee Institute of Management Studies. It offers online programs designed for working professionals who want to enhance their qualifications.",
      programs: [
        "PGDM in various specializations",
        "MBA with specializations",
        "Executive MBA",
        "Certificate Programs",
        "Diploma Programs"
      ],
      methodology: "NMIMS Online uses a sophisticated Learning Management System (LMS) with virtual classrooms, recorded lectures, and interactive sessions. Students get access to e-learning resources and digital libraries.",
      fees: [
        { program: "PGDM", amount: "₹3,50,000 total" },
        { program: "MBA", amount: "₹4,00,000 total" },
        { program: "Diploma", amount: "₹1,00,000 total" }
      ],
      eligibility: [
        { program: "PGDM", requirements: "Bachelor's degree with 50% marks, work experience preferred" },
        { program: "MBA", requirements: "Bachelor's degree with 50% marks, valid entrance score" },
        { program: "Diploma", requirements: "10+2 or equivalent" }
      ]
    },
    "CHANDIGARH UNIVERSITY ONLINE": {
      name: "Chandigarh University Online",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Private University",
      establishment: "2012 (Online division more recent)",
      about: "Chandigarh University Online offers various distance education programs. It is known for its flexible learning options and industry-oriented curriculum designed for working professionals.",
      programs: [
        "MBA with specializations",
        "MCA, BCA",
        "B.Com, M.Com",
        "BBA, MA",
        "Certificate Courses"
      ],
      methodology: "Chandigarh University Online uses a blended learning approach with self-paced learning modules, virtual classrooms, and occasional contact sessions. The platform includes interactive tools for better engagement.",
      fees: [
        { program: "MBA", amount: "₹1,20,000 total" },
        { program: "BCA", amount: "₹80,000 total" },
        { program: "B.Com", amount: "₹60,000 total" }
      ],
      eligibility: [
        { program: "MBA", requirements: "Bachelor's degree with 50% marks" },
        { program: "BCA", requirements: "10+2 with 50% marks in any stream" },
        { program: "B.Com", requirements: "10+2 with 45% marks in commerce or equivalent" }
      ]
    },
    "AMITY ONLINE": {
      name: "Amity University Online",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Private University",
      establishment: "1995 (Online division more recent)",
      about: "Amity Online is the distance education arm of Amity University. It offers UGC-DEB approved online degree programs across various disciplines, designed for working professionals and students seeking flexible education options.",
      programs: [
        "MBA with multiple specializations",
        "BBA, BCA, B.Com",
        "M.Com, MCA",
        "Post Graduate Diplomas",
        "Certification Programs"
      ],
      methodology: "Amity Online uses a comprehensive Learning Management System with recorded lectures, live sessions, and digital resources. Students also get access to Amity's vast digital library and research resources.",
      fees: [
        { program: "MBA", amount: "₹1,50,000 total" },
        { program: "BBA", amount: "₹90,000 total" },
        { program: "BCA", amount: "₹95,000 total" }
      ],
      eligibility: [
        { program: "MBA", requirements: "Bachelor's degree with 50% marks" },
        { program: "BBA", requirements: "10+2 with 45% marks in any stream" },
        { program: "BCA", requirements: "10+2 with 45% marks, mathematics as a subject preferred" }
      ]
    },
    "MANIPAL": {
      name: "Manipal University",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Deemed University",
      establishment: "1953",
      about: "Manipal University is a leading private university known for its excellence in education, research, and healthcare. It offers a wide range of undergraduate and postgraduate programs with a strong focus on research and innovation.",
      programs: [
        "B.Tech in various specializations",
        "MBBS, BDS, Pharmacy",
        "MBA, MCA",
        "Allied Health Sciences",
        "Ph.D. Programs"
      ],
      methodology: "Manipal University follows a modern teaching approach combining classroom learning, practical labs, case studies, and industry projects. The university has state-of-the-art facilities and research centers.",
      fees: [
        { program: "B.Tech", amount: "₹2,50,000 per annum" },
        { program: "MBA", amount: "₹3,20,000 per annum" },
        { program: "MBBS", amount: "₹12,00,000 per annum" }
      ],
      eligibility: [
        { program: "B.Tech", requirements: "10+2 with PCM, minimum 60% marks" },
        { program: "MBA", requirements: "Bachelor's degree with 50% marks, valid entrance score" },
        { program: "MBBS", requirements: "10+2 with PCB, NEET qualification" }
      ]
    },
    "SMU": {
      name: "Sikkim Manipal University",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Private University",
      establishment: "1995",
      about: "Sikkim Manipal University (SMU) is one of the pioneering universities in distance education in India. It offers various undergraduate, postgraduate, and professional courses through distance and online modes.",
      programs: [
        "BBA, B.Com, BCA",
        "MBA with specializations",
        "MCA, MSc IT",
        "MA, M.Com",
        "Certificate Programs"
      ],
      methodology: "SMU uses a blended learning approach with self-study materials, online resources, and periodic contact programs. The university has an extensive network of learning centers across India for support services.",
      fees: [
        { program: "MBA", amount: "₹1,10,000 total" },
        { program: "BCA", amount: "₹75,000 total" },
        { program: "BBA", amount: "₹70,000 total" }
      ],
      eligibility: [
        { program: "MBA", requirements: "Bachelor's degree with 45% marks" },
        { program: "BCA", requirements: "10+2 with any stream" },
        { program: "BBA", requirements: "10+2 with any stream" }
      ]
    },
    "SHOOLNI": {
      name: "Shoolini University",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Private University",
      establishment: "2009",
      about: "Shoolini University is a research-focused university known for its innovation and academic excellence. Located in Himachal Pradesh, it offers programs in various disciplines with a strong emphasis on research and patents.",
      programs: [
        "B.Tech in various specializations",
        "Pharmacy, Biotechnology",
        "MBA, Law",
        "Agriculture, Forestry",
        "PhD Programs"
      ],
      methodology: "Shoolini University follows a research-oriented teaching methodology with focus on practical learning, projects, and industry collaborations. The university has various research centers and labs for hands-on experience.",
      fees: [
        { program: "B.Tech", amount: "₹1,40,000 per annum" },
        { program: "MBA", amount: "₹1,75,000 per annum" },
        { program: "Pharmacy", amount: "₹1,50,000 per annum" }
      ],
      eligibility: [
        { program: "B.Tech", requirements: "10+2 with PCM, minimum 55% marks" },
        { program: "MBA", requirements: "Bachelor's degree with 50% marks, entrance test" },
        { program: "Pharmacy", requirements: "10+2 with PCB/PCM, minimum 55% marks" }
      ]
    },
    "DY PATIL": {
      name: "DY Patil University",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Deemed University",
      establishment: "2000",
      about: "DY Patil University is a prominent university known for its excellence in medicine, engineering, management, and other professional courses. The university has multiple campuses and a strong focus on practical education.",
      programs: [
        "MBBS, BDS, Nursing",
        "Engineering (B.Tech, M.Tech)",
        "Management Studies",
        "Architecture, Design",
        "Sports Management"
      ],
      methodology: "DY Patil University employs a hands-on teaching methodology with a strong emphasis on practical training, clinical exposure, and industry internships. The university has state-of-the-art facilities and simulation centers.",
      fees: [
        { program: "MBBS", amount: "₹15,00,000 per annum" },
        { program: "B.Tech", amount: "₹2,20,000 per annum" },
        { program: "MBA", amount: "₹3,00,000 per annum" }
      ],
      eligibility: [
        { program: "MBBS", requirements: "10+2 with PCB, NEET qualification" },
        { program: "B.Tech", requirements: "10+2 with PCM, minimum 60% marks" },
        { program: "MBA", requirements: "Bachelor's degree with 50% marks, entrance test" }
      ]
    },
    "IMT GHAZIABAD": {
      name: "IMT Ghaziabad",
      logoUrl: "/api/placeholder/100/100",
      instituteType: "Private Business School",
      establishment: "1980",
      about: "Institute of Management Technology (IMT) Ghaziabad is one of the premier business schools in India. It offers postgraduate management programs and is known for its industry connections and quality education.",
      programs: [
        "PGDM (equivalent to MBA)",
        "PGDM Executive",
        "PGDM Banking & Financial Services",
        "PGDM Marketing",
        "FPM (Fellow Program in Management)"
      ],
      methodology: "IMT Ghaziabad follows a case-study based teaching methodology with focus on experiential learning, simulations, and industry projects. The institute has a strong emphasis on developing leadership and entrepreneurial skills.",
      fees: [
        { program: "PGDM", amount: "₹19,50,000 total" },
        { program: "PGDM Executive", amount: "₹14,00,000 total" },
        { program: "FPM", amount: "₹3,00,000 per annum" }
      ],
      eligibility: [
        { program: "PGDM", requirements: "Bachelor's degree with 50% marks, CAT/GMAT/XAT score" },
        { program: "PGDM Executive", requirements: "Bachelor's degree with 50% marks, minimum 5 years of work experience" },
        { program: "FPM", requirements: "Master's degree with 55% marks, entrance test" }
      ]
    }
  };

  // Effect to load university data when selections change
  useEffect(() => {
    if (selectedUniversity1) {
      // Convert to uppercase for case-insensitive matching
      const key1 = selectedUniversity1.toUpperCase();
      const matchedKey1 = Object.keys(universityDatabase).find(
        k => k.toUpperCase() === key1
      );
      
      if (matchedKey1) {
        setUniversity1Data(universityDatabase[matchedKey1]);
      } else {
        setUniversity1Data(null);
      }
    } else {
      setUniversity1Data(null);
    }
    
    if (selectedUniversity2) {
      // Convert to uppercase for case-insensitive matching
      const key2 = selectedUniversity2.toUpperCase();
      const matchedKey2 = Object.keys(universityDatabase).find(
        k => k.toUpperCase() === key2
      );
      
      if (matchedKey2) {
        setUniversity2Data(universityDatabase[matchedKey2]);
      } else {
        setUniversity2Data(null);
      }
    } else {
      setUniversity2Data(null);
    }
  }, [selectedUniversity1, selectedUniversity2]);

  // Handle university selection
  const selectUniversity1 = (university) => {
    setSelectedUniversity1(university);
    setIsDropdown1Open(false);
    
    // If same university is selected for both dropdowns, clear the second one
    if (university === selectedUniversity2) {
      setSelectedUniversity2('');
    }
  };

  const selectUniversity2 = (university) => {
    setSelectedUniversity2(university);
    setIsDropdown2Open(false);
    
    // If same university is selected for both dropdowns, clear the first one
    if (university === selectedUniversity1) {
      setSelectedUniversity1('');
    }
  };

  // Swap universities
  const swapUniversities = () => {
    setIsLoading(true);
    setTimeout(() => {
      const temp = selectedUniversity1;
      setSelectedUniversity1(selectedUniversity2);
      setSelectedUniversity2(temp);
      setIsLoading(false);
    }, 500); // Add a small delay for animation
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">University Comparison Tool</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Select two universities from the dropdown menus below to compare their features, programs, fees, and eligibility criteria.
        </p>
      </motion.div>

      {/* University Selection Area */}
      <div className="bg-white rounded-xl shadow-md mb-8 p-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* First University Dropdown */}
          <div className="w-full md:w-2/5 relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Select First University
            </label>
            <div 
              className="relative"
              onMouseLeave={() => setIsDropdown1Open(false)}
            >
              <div 
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer hover:border-red-500 transition-colors"
                onClick={() => setIsDropdown1Open(!isDropdown1Open)}
              >
                <span className={`${selectedUniversity1 ? 'text-gray-800' : 'text-gray-500'}`}>
                  {selectedUniversity1 || "Select University"}
                </span>
                <FiChevronDown className={`text-gray-500 transition-transform ${isDropdown1Open ? 'transform rotate-180' : ''}`} />
              </div>
              
              {isDropdown1Open && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                >
                  {universities.map((university, index) => (
                    <div 
                      key={index}
                      className={`px-4 py-2 cursor-pointer hover:bg-red-50 ${selectedUniversity2 === university ? 'opacity-50 cursor-not-allowed' : ''} ${selectedUniversity1 === university ? 'bg-red-100' : ''}`}
                      onClick={() => selectedUniversity2 !== university && selectUniversity1(university)}
                    >
                      {university}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={!selectedUniversity1 || !selectedUniversity2 || isLoading}
              onClick={swapUniversities}
              className={`p-2 rounded-full ${(selectedUniversity1 && selectedUniversity2) ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-gray-100 text-gray-400'} transition-colors`}
            >
              <FiRepeat className={`text-xl ${isLoading ? 'animate-spin' : ''}`} />
            </motion.button>
          </div>

          {/* Second University Dropdown */}
          <div className="w-full md:w-2/5 relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Select Second University
            </label>
            <div 
              className="relative"
              onMouseLeave={() => setIsDropdown2Open(false)}
            >
              <div 
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer hover:border-red-500 transition-colors"
                onClick={() => setIsDropdown2Open(!isDropdown2Open)}
              >
                <span className={`${selectedUniversity2 ? 'text-gray-800' : 'text-gray-500'}`}>
                  {selectedUniversity2 || "Select University"}
                </span>
                <FiChevronDown className={`text-gray-500 transition-transform ${isDropdown2Open ? 'transform rotate-180' : ''}`} />
              </div>
              
              {isDropdown2Open && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                >
                  {universities.map((university, index) => (
                    <div 
                      key={index}
                      className={`px-4 py-2 cursor-pointer hover:bg-red-50 ${selectedUniversity1 === university ? 'opacity-50 cursor-not-allowed' : ''} ${selectedUniversity2 === university ? 'bg-red-100' : ''}`}
                      onClick={() => selectedUniversity1 !== university && selectUniversity2(university)}
                    >
                      {university}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* No Universities Selected Message */}
      {!selectedUniversity1 || !selectedUniversity2 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Select Two Universities to Compare</h3>
          <p className="text-gray-500">
            Please choose two different universities from the dropdown menus above to see a detailed comparison.
          </p>
        </div>
      ) : university1Data && university2Data ? (
        // Comparison Component (when both universities are selected and data is available)
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ExampleUniversityCompare
            university1={university1Data} 
            university2={university2Data} 
          />
        </motion.div>
      ) : (
        // Loading or Error State
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Loading Data...</h3>
          <p className="text-gray-500">
            Please wait while we fetch the university information.
          </p>
        </div>
      )}
    </div>
  );
};

export default UniversityComparisonPage;