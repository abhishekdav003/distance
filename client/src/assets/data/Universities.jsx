const universities = [
  {
    universityName: "DY Patil University",
    logo: "/logos/dpu-logo.webp",
    About:"DY Patil University Online (DPUO) operates under Dr. D. Y. Patil Vidyapeeth – Centre for Online Learning (DPU-COL), a top private university in India. Launched in 2010, DPUO offers a wide range of UGC- and DEB-approved undergraduate and postgraduate online programs designed for modern learners seeking flexibility and career relevance.Accredited by NAAC with an A++ grade and ranked among the top 50 universities in NIRF 2025, DPU emphasizes academic excellence and industry-aligned education. Its programs span Business Management, Healthcare, IT, and more, combining practical skills with a flexible, student-friendly learning environment.",
    location: "Navi Mumbai, Maharashtra, India",
    established: 2002,
    accreditation: "NAAC A++",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Marketing Management",
          "Finance Management",
          "Human Resource Management",
          "International Business",
          "Logistics and Supply Chain Management",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Project Management",
          "Operations Management",
          "IT Management",
          "Healthcare and Hospital Management",
          "Business Analytics",
        ],
      },
    ],
    features: {
      learningMethodology:
        "Blended Learning with Advanced Tech-Enabled Facilities",
      supportServices: [
        "Academic Advising",
        "Career Counseling",
        "Technical Support",
      ],
      placementSupport: true,
      studentRating: "4.5/5 Stars",
    },
  },
  {
    universityName: "Uttaranchal University",
     About:"",
     logo: "/logos/uu.webp",
     img:"/images/lpu.webp",
    location: "Dehradun, Uttarakhand, India",
    established: 2013,
    accreditation: "NAAC A+",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Arts (BA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Literature",
          "History",
          "Philosophy",
          "Sociology",
          "Psychology",
          "Economics",
        ],
      },
      {
        degree: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Marketing",
          "Finance",
          "Human Resource Management",
          "International Business",
        ],
      },
      {
        degree: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 with Mathematics",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Programming",
          "Databases",
          "Software Development",
          "Web Design",
          "Computer Networking",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility:
          "Bachelor’s degree with minimum 50% marks (45% for reserved categories)",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "Marketing Management",
          "Financial Management",
          "Human Resource Management",
          "Business Analytics",
          "Information Technology",
          "Digital Marketing",
          "International Business",
        ],
      },
      {
        degree: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree in relevant field",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "Software Development",
          "IT Infrastructure",
          "Data Science",
          "Cyber Security",
        ],
      },
    ],
    features: {
      learningMethodology:
        "Blended Learning with Advanced Tech-Enabled Facilities",
      supportServices: [
        "Academic Advising",
        "Career Counseling",
        "Technical Support",
      ],
      placementSupport: true,
      studentRating: "4.5/5 Stars",
    },
  },
  {
    universityName: "UPES University",
     About:"",
     logo: "/logos/upes.webp",
    location: "Dehradun, Uttarakhand, India",
    established: 2003,
    accreditation: "NAAC A",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Marketing Management",
          "Finance Management",
          "Human Resource Management",
          "International Business",
          "Oil & Gas Marketing",
          "Power Management",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Project Management",
          "Operations Management",
          "Oil & Gas Management",
          "Power Management",
          "Business Analytics",
        ],
      },
    ],
    features: {
      learningMethodology:
        "Flexible Online Learning with Industry-Relevant Curriculum",
      supportServices: [
        "Academic Support",
        "Career Services",
        "Technical Assistance",
      ],
      placementSupport: true,
      studentRating: "4.4/5 Stars",
    },
  },
  {
    universityName: "Vivekananda Global University",
     About:"",
     logo: "/logos/vgu.webp",
    location: "Jaipur, Rajasthan, India",
    established: 2012,
    accreditation: "NAAC A",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Marketing Management",
          "Finance Management",
          "Human Resource Management",
          "International Business",
          "Retail Management",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Project Management",
          "Operations Management",
          "Business Analytics",
          "Retail Management",
        ],
      },
    ],
    features: {
      learningMethodology:
        "Interactive Online Sessions with Practical Exposure",
      supportServices: [
        "Academic Mentoring",
        "Career Guidance",
        "Technical Support",
      ],
      placementSupport: true,
      studentRating: "4.3/5 Stars",
    },
  },
  {
    universityName: "Shoolini University",
     About:"",
     logo: "/logos/su-logo.webp",
    location: "Solan, Himachal Pradesh, India",
    established: 2009,
    accreditation: "NAAC B++",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Marketing Management",
          "Finance Management",
          "Human Resource Management",
          "International Business",
          "Entrepreneurship",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Entrepreneurship",
          "Business Analytics",
        ],
      },
    ],
    features: {
      learningMethodology:
        "Innovative Online Learning with Research-Oriented Approach",
      supportServices: [
        "Academic Counseling",
        "Career Services",
        "Technical Assistance",
      ],
      placementSupport: true,
      studentRating: "4.2/5 Stars",
    },
  },
  {
    universityName: "Chandigarh University",
     About:"",
     logo: "/logos/cu.webp",
    location: "Mohali, Punjab, India",
    established: 2012,
    accreditation: "NAAC A+",
    approvals: ["UGC", "AICTE", "MHRD"],
    programsOffered: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Marketing Management",
          "Finance Management",
          "Human Resource Management",
          "International Business",
          "Logistics and Supply Chain Management",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Project Management",
          "Operations Management",
          "IT Management",
          "Healthcare and Hospital Management",
          "Business Analytics",
        ],
      },
    ],
    features: {
      learningMethodology: "Advanced Tech-Enabled Learning",
      supportServices: [
        "Academic Advising",
        "Career Counseling",
        "Technical Support",
      ],
      placementSupport: true,
      studentRating: "4.5/5 Stars",
    },
  },
  {
    universityName: "Amity University",
     About:"",
     logo: "/logos/amity.webp",
    location: "Noida, Uttar Pradesh, India",
    established: 2005,
    accreditation: "NAAC A+",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Arts (BA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "English",
          "Economics",
          "Political Science",
          "Sociology",
          "Psychology",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Project Management",
          "Operations Management",
          "IT Management",
          "Healthcare and Hospital Management",
          "Business Analytics",
        ],
      },
    ],
    features: {
      learningMethodology: "Interactive Online Sessions",
      supportServices: [
        "Academic Mentoring",
        "Career Guidance",
        "Technical Support",
      ],
      placementSupport: true,
      studentRating: "4.4/5 Stars",
    },
  },
  {
    universityName: "Manipal University",
     About:"",
     logo: "/logos/manipal.webp",
    location: "Manipal, Karnataka, India",
    established: 1993,
    accreditation: "NAAC A+",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "Accounting",
          "Finance",
          "Taxation",
          "Banking",
          "Insurance",
        ],
      },
      {
        degree: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree in relevant field",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "Software Development",
          "IT Infrastructure",
          "Data Science",
          "Cyber Security",
        ],
      },
    ],
    features: {
      learningMethodology: "Flexible Online Learning",
      supportServices: [
        "Academic Support",
        "Career Services",
        "Technical Assistance",
      ],
      placementSupport: true,
      studentRating: "4.3/5 Stars",
    },
  },
  {
    universityName: "Sikkim Manipal University",
     About:"",
    logo: "/logos/smu.webp",
    location: "Gangtok, Sikkim, India",
    established: 1995,
    accreditation: "NAAC A+",
    approvals: ["UGC", "AICTE", "AIU"],
    programsOffered: [
      {
        degree: "Bachelor of Arts (BA)",
        duration: "3 Years",
        mode: "Online",
        eligibility: "10+2 from a recognized board",
        semesterFee: "₹9,500",
        emiAvailable: true,
        specializations: [
          "English",
          "Economics",
          "Political Science",
          "Sociology",
          "Psychology",
        ],
      },
      {
        degree: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "Online",
        eligibility: "Bachelor’s degree with minimum 50% marks",
        semesterFee: "₹20,500",
        emiAvailable: true,
        specializations: [
          "General Management",
          "Finance Management",
          "Marketing Management",
          "Human Resource Management",
          "International Business",
          "Project Management",
          "Operations Management",
          "IT Management",
          "Healthcare and Hospital Management",
          "Business Analytics",
        ],
      },
    ],
    features: {
      learningMethodology: "Flexible Learning Options",
      supportServices: [
        "Academic Advising",
        "Career Counseling",
        "Technical Support",
      ],
      placementSupport: true,
      studentRating: "4.2/5 Stars",
    },
  },
 {
  universityName: "Lovely Professional University",
  About: [
    "Lovely Professional University (LPU), established in 2005 under the Lovely Professional University Act and operational since 2006, has quickly emerged as one of India’s largest and most prominent single-campus private universities. Founded by the Lovely International Trust, LPU has become a leader in higher education, offering a diverse range of programs across more than 40 disciplines.",
    
    "LPU Online offers a wide selection of undergraduate, postgraduate, and diploma programs in fields such as Business Administration, Computer Applications, Information Technology, Commerce, and Arts. The curriculum is thoughtfully developed to ensure both academic depth and industry relevance, blending theoretical knowledge with practical application."
  ],
  description: "Join LPU Online to elevate your career with our industry-relevant and comprehensive online programs. Recognized by UGC–DEB and accredited with an NAAC A++ grade, Lovely Professional University ranks among India’s top institutions, securing the 27th position in the NIRF rankings. Experience quality education designed for the modern learner—flexible, accessible, and impactful.",
  logo: "/logos/lpu.webp",
  img: "/images/lpu.webp",
  location: "Phagwara, Punjab, India",
  established: 2005,
  accreditation: "NAAC A++",
  approvals: ["UGC", "AICTE", "AIU"],
  nirfRank: "27th",
  studentRating: "4.5/5 Stars",
  programTypes: ["Undergraduate", "Postgraduate"],
  focusAreas: "Emphasis on Employability",
  educationalExpertise: "Over 19 Years",
  learningMethodologies: "Technology-driven learning",
  growthEmphasis: "Academic Excellence and Personal Development",
  learningPlatform: "User-friendly LMS and app",
  supportServices: [
    "Placement assistance",
    "Dedicated support team",
    "Career Counselling"
  ],
  admissionProcess: "Online and User-friendly application process",
  programNames: ["MBA", "MCA", "MSC", "MCOM", "MA", "BCA", "BA", "BCOM"],
  regulatory: [
    "/regulatoryLogo/aicte-icon.webp",
    "/regulatoryLogo/naac-icon.webp",
    "/regulatoryLogo/nirf-icon.webp",
    "/regulatoryLogo/ugc-icon.webp"
  ],
  programsOffered: [
    {
      degree: "Master of Business Administration (MBA)",
      duration: "2 Years",
      mode: "Online",
      eligibility: "Bachelor’s degree with minimum 50% marks",
      semesterFee: "₹43,000",
      emiAvailable: true,
      specializations: [
        "General Management",
        "Finance Management",
        "Marketing Management",
        "Human Resource Management",
        "International Business",
        "Project Management",
        "Operations Management",
        "IT Management",
        "Healthcare and Hospital Management",
        "Business Analytics"
      ]
    },
    {
      degree: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      mode: "Online",
      eligibility:
        "Bachelor’s degree in Computer Science or related field with Mathematics at 10+2 or Graduation level",
      semesterFee: "₹33,000",
      emiAvailable: true,
      specializations: [
        "Application Development",
        "Cloud Computing",
        "Data Science",
        "Cyber Security",
        "System Management",
        "Artificial Intelligence"
      ]
    },
    {
      degree: "Master of Science (MSC)",
      duration: "2 Years",
      mode: "Online",
      eligibility: "Bachelor’s degree in Science or equivalent",
      semesterFee: "₹18,000",
      emiAvailable: true,
      specializations: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Data Science",
        "Computer Science"
      ]
    },
    {
      degree: "Master of Commerce (MCOM)",
      duration: "2 Years",
      mode: "Online",
      eligibility: "Bachelor’s degree in Commerce or related stream",
      semesterFee: "₹23,000",
      emiAvailable: true,
      specializations: [
        "Accounting",
        "Finance",
        "Taxation",
        "Banking",
        "Business Law"
      ]
    },
    {
      degree: "Master of Arts (MA)",
      duration: "2 Years",
      mode: "Online",
      eligibility: "Bachelor’s degree in any stream",
      semesterFee: "₹18,000",
      emiAvailable: true,
      specializations: [
        "English",
        "Economics",
        "Political Science",
        "History",
        "Psychology"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      mode: "Online",
      eligibility: "10+2 with Mathematics",
      semesterFee: "₹28,000",
      emiAvailable: true,
      specializations: [
        "Programming",
        "Databases",
        "Software Development",
        "Web Design",
        "Computer Networking"
      ]
    },
    {
      degree: "Bachelor of Arts (BA)",
      duration: "3 Years",
      mode: "Online",
      eligibility: "10+2 in any stream",
      semesterFee: "₹18,000",
      emiAvailable: true,
      specializations: [
        "English",
        "Psychology",
        "Political Science",
        "Economics",
        "Sociology"
      ]
    }
  ],
  features: {
    learningMethodology: "Live Interactive Sessions and Recorded Videos",
    supportServices: [
      "Academic Mentoring",
      "Career Guidance",
      "Technical Support"
    ],
    placementSupport: true,
    studentRating: "4.5/5 Stars"
  },
  keyhighlights: [
  { feature: "University", details: "Lovely Professional University" },
  { feature: "Accreditation", details: "NAAC A++" },
  { feature: "Approval", details: "UGC-DEB, AICTE, AIU, NIRF" },
  { feature: "Location", details: "Jalandhar, Punjab" },
  { feature: "Establishment Year", details: "2005" },
  { feature: "Program Types", details: "UG, PG, Diploma" },
  // { feature: "Focus Areas", details: "Skill-oriented, holistic, and industry-relevant education" },
  // { feature: "Educational Expertise", details: "Academic excellence with over 15 years in education" },
  // { feature: "Learning Methodologies", details: "Comprehensive online resources and interactive sessions" },
  // { feature: "Growth Emphasis", details: "Personal and professional development" },
  { feature: "Learning Platform", details: "Learning Management System (LMS)" },
  { feature: "Support Services", details: "Academic support, career counseling, technical assistance" },
  // { feature: "Admission Process", details: "Simple, transparent, and entirely online" },
  { feature: "NIRF Rank", details: "38 (University Category, 2023)" },
  { feature: "Student Rating", details: "4.3/5" }
],
EMIOptionAvailable:"LPU Online offers convenient EMI (Equated Monthly Installment) facilities to make higher education more financially accessible. Students can opt to pay their program fees in easy installments without any processing charges, helping reduce upfront financial burden. This flexible payment scheme is available across various online courses.",

KeyFeaturesofEMI: [
  {
    "title": "Flexible Payment Options",
    "body": "Distribute your tuition fees into manageable monthly installments, easing financial planning."
  },
  {
    "title": "Interest-Free EMI",
    "body": "Opt for installment payments without incurring additional interest, making education more affordable."
  },
  {
    "title": "Broad Accessibility",
    "body": "EMI options are available across a wide range of undergraduate, postgraduate, and doctoral programs."
  },
  {
    "title": "Simple Application Process",
    "body": "Apply for EMI plans through a straightforward approval process with minimal documentation."
  },
  {
    "title": "Better Financial Management",
    "body": "Facilitates effective financial planning by reducing the burden of lump-sum payments."
  },
  {
    "title": "Inclusive Support for Students",
    "body": "Designed to assist students from diverse financial backgrounds, promoting equal access to education."
  },
  {
    "title": "Collaborations with Financial Institutions",
    "body": "Partnerships with leading banks and financial institutions ensure secure and reliable EMI plans."
  }
],
WhyShouldYouChoose: [
  {
    "feature": "Reputation of Excellence",
    "detail": "LPU Online is a premier private university known for its commitment to academic excellence and innovation, ensuring quality education for online learners."
  },
  {
    "feature": "Affordable Fee Structure",
    "detail": "Online courses at LPU are cost-effective, eliminating expenses like accommodation and commuting, making education accessible to a broader audience."
  },
  {
    "feature": "Flexible Learning Options",
    "detail": "LPU Online offers flexible learning schedules, allowing students to balance their studies with personal and professional commitments."
  },
  {
    "feature": "Industry-Oriented Curriculum",
    "detail": "Curriculum co-designed with industry experts ensures that students acquire practical skills relevant to current market demands."
  },
  {
    "feature": "Recognized Degrees",
    "detail": "Degrees from LPU Online are recognized by UGC-DEB, ensuring their validity and acceptance by employers and educational institutions."
  },
  {
    "feature": "Placement Assistance",
    "detail": "LPU Online provides dedicated placement support, including professional enhancement programs and placement drives to facilitate career opportunities."
  }
],
Benefits: [
  {
    "icon": "FaLaptop",
    "title": "Learning Management System (LMS)",
    "detail": "A user-friendly platform providing access to course materials, assignments, discussions, and progress tracking anytime, anywhere."
  },
  {
    "icon": "FaChalkboardTeacher",
    "title": "Interactive Virtual Classrooms",
    "detail": "Real-time engagement with faculty and peers through virtual classrooms equipped with collaborative tools."
  },
  {
    "icon": "FaBookOpen",
    "title": "E-Learning Resources",
    "detail": "Comprehensive digital resources including e-books, video tutorials, and interactive exercises to support diverse learning styles."
  },
  {
    "icon": "FaHeadphonesAlt",
    "title": "24/7 Dedicated Support System",
    "detail": "Round-the-clock academic guidance, technical assistance, and career counseling to support student success."
  },
  {
    "icon": "FaFileAlt",
    "title": "Online Assessments and Exams",
    "detail": "Conducting assessments and exams online to evaluate understanding and provide timely feedback."
  },
  {
    "icon": "FaUserTie",
    "title": "Experienced Faculty",
    "detail": "Learn from seasoned educators and industry professionals who bring real-world insights into the virtual classroom."
  }
]
,
HowareExamsconducted: [
  {
    "title": "Platform",
    "details": "Exams are administered through the 'My Class' interface within the LMS, with schedules accessible via the LPU e-Connect portal."
  },
  {
    "title": "Proctoring",
    "details": "Utilization of proctoring software with webcam and microphone access to maintain exam integrity."
  },
  {
    "title": "Device Compatibility",
    "details": "Exams can be taken on various devices, including laptops, desktops, and smartphones, offering flexibility to students."
  },
  {
    "title": "Exam Format",
    "details": "Assessment formats vary by course and may include multiple-choice questions, essays, and short answers to comprehensively evaluate knowledge."
  },
  {
    "title": "Preparation",
    "details": "Students receive orientation and demo sessions to familiarize themselves with the online exam system, supplemented by mock tests."
  },
  {
    "title": "Continuous Assessment",
    "details": "Ongoing evaluations through assignments, quizzes, and projects complement final exams to ensure consistent engagement."
  }
]
,
acreditationsApprovals: [
    {
      "img": "/regulatoryLogo/ugc-icon.webp",
      "AccreditationsApprovals": "University Grants Commission (UGC)",
      "about": "LPU is recognized by the UGC, the statutory body of the government of India responsible for maintaining higher education standards. This ensures that your LPU online degree is widely accepted and valued."
    },
    {
      "img": "/regulatoryLogo/aicte-icon.webp",
      "AccreditationsApprovals": "All India Council for Technical Education (AICTE)",
      "about": "The All India Council for Technical Education (AICTE) approves LPU's online MBA and MCA programs, adding credibility and ensuring that these specific qualifications meet industry standards and requirements."
    },
    {
      "img": "/regulatoryLogo/naac-icon.webp",
      "AccreditationsApprovals": "National Assessment and Accreditation Council (NAAC) A++",
      "about": "LPU has received the highest grade (A++) from the NAAC, reflecting the university's excellence in academic delivery, research, and student support, which enhances its reputation and credibility."
    },
    {
      "img": "/regulatoryLogo/nirf-icon.webp",
      "AccreditationsApprovals": "National Institutional Ranking Framework (NIRF)",
      "about": "LPU has been steadily climbing the NIRF rankings in India. In 2025, it secured an impressive 27th position among universities."
    },
    {
      "img": "/regulatoryLogo/qs.webp",
      "AccreditationsApprovals": "QS World University Rankings",
      "about": "LPU is ranked 25th among the top universities in India, including both government and private institutions, according to the World University Rankings 2025, and falls within the 801-1000 band globally."
    }
  ],
AcademicApproach: [
    [
      {
        "title": "Experiential Metrics",
        "subtitle": "Exclusive Access to Resources",
        "detail": "Access a comprehensive collection of online scholarly articles, case studies, and journals to meet academic needs with diverse e-resources."
      },
      {
        "title": "Experiential Metrics",
        "subtitle": "Professional Development",
        "detail": "Engage in seminars and workshops for professional enhancement, learning from industry experts to gain current insights."
      },
      {
        "title": "Experiential Metrics",
        "subtitle": "Expert-Led Webinars",
        "detail": "Attend webinars led by distinguished speakers to receive educational insights, enhance knowledge and skills, and apply deep knowledge and skills in real-world situations."
      },
      {
        "title": "Experiential Metrics",
        "subtitle": "Mock Interview Practice",
        "detail": "Participate in practice sessions to improve interview performance, receiving feedback to strengthen areas of weakness."
      },
      {
        "title": "Experiential Metrics",
        "subtitle": "Research Facilities",
        "detail": "Utilize top-tier research facilities and collaborate in labs sponsored by the industry for various research projects."
      },
      {
        "title": "Experiential Metrics",
        "subtitle": "Incubation Centers",
        "detail": "Benefit from office space, technology support, and seed funding to foster and develop promising projects."
      }
    ],
    [
      {
        "title": "Quantitative Metrics",
        "subtitle": "400+ Hours of Recorded Video Content",
        "detail": "The university provides over 400 hours of recorded video content, allowing students to learn flexibly at their own pace and cover all necessary curriculum topics."
      },
      {
        "title": "Quantitative Metrics",
        "subtitle": "19 Years of Achievement",
        "detail": "LPU marks its 19th anniversary of academic distinction, recognized as a premier university in India for its cutting-edge teaching techniques and wide range of programs."
      }
    ]
  ],
Placement: [
    {
      "img":"/companiesImgs/accenture.webp",
      "company": "Accenture",
      "about": "Accenture is a global company specializing in IT services and consulting, renowned for its high-impact solutions that drive transformation and innovation across various industries worldwide."
    },
    {
      "img":"/companiesImgs/amazon.webp",
      "company": "Amazon",
      "about": "Amazon, a giant in e-commerce and cloud computing, is one of the largest tech companies globally, expanding into various sectors including artificial intelligence, media, and logistics."
    },
    {
      "img":"/companiesImgs/bosch.webp",
      "company": "Bosch",
      "about": "Bosch is a leading global electronics and engineering company, highly regarded for its innovative automotive components, industrial products, and smart home technology that enhances modern living."
    },
    {
      "img":"/companiesImgs/capgemini.webp",
      "company": "Capgemini",
      "about": "Capgemini, a multinational corporation, offers comprehensive consulting, technology, professional, and outsourcing services, with a robust focus on digital transformation and innovation for diverse business needs."
    },
    {
      "img":"/companiesImgs/cognizant.webp",
      "company": "Cognizant",
      "about": "Cognizant provides a wide array of IT services, including digital, technology, consulting, and operations services, aiming to drive digital transformation and efficiency for global enterprises."
    },
    {
      "img":"/companiesImgs/hcl-technologies.webp",
      "company": "HCL Technologies",
      "about": "HCL Technologies, a prominent global IT services company headquartered in Noida, India, offers a broad spectrum of services including software development, IT infrastructure, and business process outsourcing."
    },
    {
      "img":"/companiesImgs/ibm.webp",
      "company": "IBM",
      "about": "IBM is a multinational technology leader known for its innovations in computer hardware, middleware, and software, as well as providing extensive hosting and consulting services worldwide."
    },
    {
      "img":"/companiesImgs/HDFC-logo.webp",
      "company": "HDFC Bank",
      "about": "HDFC Bank, a leading financial institution in India headquartered in Mumbai, provides a wide range of banking products and financial services, including loans, insurance, and investment solutions."
    },
    {
      "img":"/companiesImgs/flipkart-logo.webp",
      "company": "Flipkart",
      "about": "Flipkart, an Indian e-commerce powerhouse based in Bangalore, is one of the largest online retailers in India, offering a vast selection of products similar to Amazon's diverse range."
    },
    {
      "img":"/companiesImgs/tata-consultancy-services-tcs.webp",
      "company": "TCS (Tata Consultancy Services)",
      "about": "TCS, an Indian multinational IT service and consulting company, part of the Tata group, is renowned for its comprehensive IT solutions, consultancy expertise, and commitment to client success."
    }
  ],
Degree: {detail:"An LPU online degree can provide valuable academic credentials, industry-ready skills, and the ability to effectively manage your learning and career. This degree is valuable for working professionals seeking to upskill or those who need the flexibility of online learning. Here is a breakdown to help you decide:" , points:['UGC recognition ensures your degree is valid throughout India.' , "Globally Recognized University" , 'Acknowledged by leading employers both domestically and internationally',
'Strong market reputation regarding job opportunities and career advancement', 'Equivalent to LPU on-campus program degrees'], 
img:'/degree/LPU-sample-degree-scaled.webp'},
howtoapply: [
  {header:"Applying to online courses at LPU University is a simple and online process. Any eligible candidate can apply to their respective courses. Follow these steps to secure your admission:-"},
    {
      "title": "Submit Form",
      "detail": "Fill in and submit your application form online"
    },
    {
      "title": "Expert's Counseling",
      "detail": "You will receive a call from our expert counselor"
    },
    {
      "title": "Choose University",
      "detail": "Select the course & university according to your interest"
    },
    {
      "title": "Online Payment",
      "detail": "You need to make a smooth online fee submission"
    },
    {
      "title": "Document Submit",
      "detail": "You will get an admission confirmation on your Email"
    },
    {
      "title": "Admission Confirm",
      "detail": "Get Confirmation on your Email & Whatsapp"
    }
  ]
}

];

export default universities;