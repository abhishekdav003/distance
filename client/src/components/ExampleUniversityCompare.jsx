import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiInfo, FiCalendar, FiBookOpen, FiLayers, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const UniversityCompare = ({ university1, university2 }) => {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    programs: false,
    methodology: false,
    fees: false,
    eligibility: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Animation variants for expanding/collapsing sections
  const contentVariants = {
    collapsed: { 
      height: 0, 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      } 
    },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Component for section headers
  const SectionHeader = ({ title, icon, section }) => (
    <motion.div 
      className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg mb-2"
      onClick={() => toggleSection(section)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center">
        {icon}
        <h3 className="ml-2 font-medium text-gray-800">{title}</h3>
      </div>
      {expandedSections[section] ? 
        <FiChevronUp className="text-teal-600" /> : 
        <FiChevronDown className="text-teal-600" />
      }
    </motion.div>
  );

  // Helper component for comparison data rows
  const ComparisonRow = ({ label, value1, value2 }) => (
    <div className="grid grid-cols-12 py-3 border-b border-gray-100">
      <div className="col-span-4 text-gray-700 font-medium">{label}</div>
      <div className="col-span-4 text-gray-800">{value1}</div>
      <div className="col-span-4 text-gray-800">{value2}</div>
    </div>
  );

  // Helper component for list comparison (programs, etc.)
  const ListComparison = ({ items1, items2 }) => (
    <div className="grid grid-cols-12 py-3">
      <div className="col-span-4"></div>
      <div className="col-span-4">
        <ul className="list-disc pl-5 space-y-1">
          {items1.map((item, index) => (
            <li key={index} className="text-gray-800">{item}</li>
          ))}
        </ul>
      </div>
      <div className="col-span-4">
        <ul className="list-disc pl-5 space-y-1">
          {items2.map((item, index) => (
            <li key={index} className="text-gray-800">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header with university logos */}
        <div className="grid grid-cols-12 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="col-span-4 p-6 flex items-center justify-center">
            <h2 className="text-xl font-bold">University Comparison</h2>
          </div>
          <div className="col-span-4 p-6 flex flex-col items-center justify-center border-l border-r border-teal-500">
            <div className="h-24 w-24 bg-white rounded-full p-2 flex items-center justify-center mb-2">
              <img src={university1.logoUrl} alt={`${university1.name} logo`} className="max-h-16 max-w-full" />
            </div>
            <h3 className="text-lg font-semibold text-center">{university1.name}</h3>
          </div>
          <div className="col-span-4 p-6 flex flex-col items-center justify-center">
            <div className="h-24 w-24 bg-white rounded-full p-2 flex items-center justify-center mb-2">
              <img src={university2.logoUrl} alt={`${university2.name} logo`} className="max-h-16 max-w-full" />
            </div>
            <h3 className="text-lg font-semibold text-center">{university2.name}</h3>
          </div>
        </div>

        {/* Basic information - always visible */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
          <div className="space-y-1">
            <ComparisonRow 
              label="Institute Type" 
              value1={university1.instituteType} 
              value2={university2.instituteType} 
            />
            <ComparisonRow 
              label="Established" 
              value1={university1.establishment} 
              value2={university2.establishment} 
            />
          </div>
        </div>

        {/* About section */}
        <div className="p-6 border-t border-gray-200">
          <SectionHeader 
            title="About" 
            icon={<FiInfo className="text-teal-600" />} 
            section="about" 
          />
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={expandedSections.about ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pt-2">
              <div className="col-span-4"></div>
              <div className="col-span-4 text-gray-700">
                <p>{university1.about}</p>
              </div>
              <div className="col-span-4 text-gray-700">
                <p>{university2.about}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Programs section */}
        <div className="p-6 border-t border-gray-200">
          <SectionHeader 
            title="Programs Offered" 
            icon={<FiBookOpen className="text-teal-600" />} 
            section="programs" 
          />
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={expandedSections.programs ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <ListComparison 
              items1={university1.programs} 
              items2={university2.programs} 
            />
          </motion.div>
        </div>

        {/* Learning Methodology section */}
        <div className="p-6 border-t border-gray-200">
          <SectionHeader 
            title="Learning Methodology" 
            icon={<FiLayers className="text-teal-600" />} 
            section="methodology" 
          />
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={expandedSections.methodology ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pt-2">
              <div className="col-span-4"></div>
              <div className="col-span-4 text-gray-700">
                <p>{university1.methodology}</p>
              </div>
              <div className="col-span-4 text-gray-700">
                <p>{university2.methodology}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fees section */}
        <div className="p-6 border-t border-gray-200">
          <SectionHeader 
            title="Fees Structure" 
            icon={<FiDollarSign className="text-teal-600" />} 
            section="fees" 
          />
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={expandedSections.fees ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 pt-2">
              <div className="col-span-4 font-medium text-gray-700">Program</div>
              <div className="col-span-4 font-medium text-gray-700">Fee (₹)</div>
              <div className="col-span-4 font-medium text-gray-700">Fee (₹)</div>
            </div>
            {university1.fees.map((fee, index) => (
              <div key={index} className="grid grid-cols-12 py-3 border-b border-gray-100">
                <div className="col-span-4 text-gray-700">{fee.program}</div>
                <div className="col-span-4 text-gray-800">{fee.amount}</div>
                <div className="col-span-4 text-gray-800">
                  {university2.fees.find(f => f.program === fee.program)?.amount || 'N/A'}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Eligibility section */}
        <div className="p-6 border-t border-gray-200">
          <SectionHeader 
            title="Eligibility Criteria" 
            icon={<FiCheckCircle className="text-teal-600" />} 
            section="eligibility" 
          />
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={expandedSections.eligibility ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 pt-2">
              <div className="col-span-4 font-medium text-gray-700">Program</div>
              <div className="col-span-4 font-medium text-gray-700">Requirements</div>
              <div className="col-span-4 font-medium text-gray-700">Requirements</div>
            </div>
            {university1.eligibility.map((item, index) => (
              <div key={index} className="grid grid-cols-12 py-3 border-b border-gray-100">
                <div className="col-span-4 text-gray-700">{item.program}</div>
                <div className="col-span-4 text-gray-800">{item.requirements}</div>
                <div className="col-span-4 text-gray-800">
                  {university2.eligibility.find(e => e.program === item.program)?.requirements || 'N/A'}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
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
    about: "Manipal University is a leading private university known for its excellence in education, research, and healthcare. It offers a wide range of undergraduate and postgraduate programs.",
    programs: [
      "B.Tech in Computer Science",
      "B.Tech in Electronics",
      "MBA",
      "MBBS",
      "BDS"
    ],
    methodology: "Manipal University follows a blend of classroom teaching, practical labs, and industry exposure. The university emphasizes hands-on learning and research-based education.",
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
    about: "Delhi University is one of India's premier central universities, known for its high academic standards and diverse course offerings. It has a rich heritage of academic excellence.",
    programs: [
      "B.A. Economics",
      "B.Com Honours",
      "B.Sc Physics",
      "M.A. English",
      "M.Com"
    ],
    methodology: "Delhi University follows a semester system with classroom teaching, tutorials, and practical sessions. It emphasizes critical thinking and comprehensive understanding of subjects.",
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