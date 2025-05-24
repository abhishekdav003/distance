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
    "Lovely Professional University (LPU) is a young but prominent university in India. Established in 2005 under the Lovely Professional University Act, LPU began operations in 2006. Founded by the Lovely International Trust, it has grown rapidly, becoming one of India’s largest single-campus private universities. LPU offers a vast array of courses across over 40 disciplines. LPU Online is an extension of Lovely Professional University, a top educational university in India that offers various types of online programs designed to cater to the needs of distance learners globally. The university aims to deliver flexible, affordable, and quality education that mirrors the standards and rigor of its on-campus offerings.",
    "LPU platform allows students to pursue various undergraduate, postgraduate, and diploma programs across fields such as Business Administration, Computer Applications, Information Technology, Commerce, and the Arts. Its courses are structured to provide an interactive and engaging learning experience. The university utilizes modern technology to deliver lectures, tutorials, and interactive sessions through a user-friendly digital platform. This approach ensures that students gain theoretical and practical knowledge relevant to their field. LPU Online college supports its students with comprehensive resources, including digital libraries, online discussion forums, and dedicated academic assistance. Its commitment to academic excellence and accessibility makes it the best choice for students. Its global reach and ability to provide a learning environment that is both flexible and supportive make LPU the best online university."
  ],
  description: "Enroll now at LPU Online University to enhance your career skills through our comprehensive online courses. With UGC–DEB recognition and an NAAC A++ grade, LPU stands out as one of India’s top universities, ranked 27th in the NIRF.",
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
  { feature: "Focus Areas", details: "Skill-oriented, holistic, and industry-relevant education" },
  { feature: "Educational Expertise", details: "Academic excellence with over 15 years in education" },
  { feature: "Learning Methodologies", details: "Comprehensive online resources and interactive sessions" },
  { feature: "Growth Emphasis", details: "Personal and professional development" },
  { feature: "Learning Platform", details: "Learning Management System (LMS)" },
  { feature: "Support Services", details: "Academic support, career counseling, technical assistance" },
  { feature: "Admission Process", details: "Simple, transparent, and entirely online" },
  { feature: "NIRF Rank", details: "38 (University Category, 2023)" },
  { feature: "Student Rating", details: "4.3/5" }
],
EMIOptionAvailable:"No processing fee is charged when students opt to pay their fees in installments over time. This scheme is designed to make education more financially accessible and manageable by reducing upfront costs and spreading payments. The university offers EMI facilities in its online courses. There are some minimum percentage charges in some LPU online courses. The tenurity for online UG courses is 24 months, and PG courses are 18 months.",

KeyFeaturesofEMI: [
  {
    title: "Flexible Payment Options",
    body: "Spread the cost of your tuition fees across manageable monthly instalments."
  },
  {
    title: "Interest-Free EMI",
    body: "Pay your fees in instalments without any additional interest, making education more affordable."
  },
  {
    title: "Broad Accessibility",
    body: "Available for various undergraduate, postgraduate, and doctoral programs."
  },
  {
    title: "Simple Application Process",
    body: "Easily apply for EMI options through a straightforward approval process with minimal hassle."
  },
  {
    title: "Better Financial Management",
    body: "Helps students and their families manage finances more effectively by avoiding large upfront payments."
  },
  {
    title: "Inclusive Support for Students",
    body: "Designed to support students from diverse financial backgrounds, ensuring equal access to quality education."
  },
  {
    title: "Collaborations with Financial Institutions",
    body: "Partnerships with leading banks and financial institutions to provide secure and reliable EMI plans."
  }
],
WhyShouldYouChoose: [
  {
    feature: "Reputation of Excellence",
    detail: "LPU Online or Professional University is a top private university with a strong academic excellence and innovation reputation. Choosing LPU for online degree courses ensures quality education from a trusted university."
  },
  {
    feature: "Affordable Fee Structure",
    detail: "LPU online courses are more affordable than regular programs. There are no room and board costs associated with online learning, making it an attractive option for many students."
  },
  {
    feature: "Flexible Learning Options",
    detail: "Online learning with LPU is designed to accommodate the schedules of working professionals and individuals with personal commitments. Learners can conveniently access study materials and engage in virtual learning sessions."
  },
  {
    feature: "Industry-Oriented Curriculum",
    detail: "The LPU Online curriculum is co-designed with industry experts. It blends academic rigour with practical skills to prepare students for today’s job market and foster holistic development."
  },
  {
    feature: "Recognized Degrees",
    detail: "LPU online degrees are recognized by UGC-DEB. The university accreditation ensures that employers and other universities recognise and value the degree. LPU’s reputation for excellence attracts students from around the world."
  },
  {
    feature: "Placement Assistance",
    detail: "LPU Placement Support Services prepares students for the job market, providing opportunities through impactful Placement Drives and a Professional Enhancement Programme tailored to different professional needs."
  }
],
Benefits: [
  {
    icon:"FaLaptop",
    title: "Learning Management System (LMS)",
    detail: "Learning Management System (LMS) provides a user-friendly platform for accessing course materials, submitting assignments, engaging in online discussions, and tracking progress. The LMS is accessible anytime, anywhere, making it convenient for students."
  },
  {
    icon:"FaChalkboardTeacher",
    title: "Interactive Virtual Classrooms",
    detail: "LPU offers interactive virtual classrooms that allow students to engage with faculty and peers in real-time. These classrooms have various tools and features that make it easy to participate in discussions, ask questions, and collaborate on projects."
  },
  {
    icon:"FaBookOpen",
    title: "E-Learning Resources",
    detail: "LPU provides students with a comprehensive collection of e-learning resources, including e-books, video tutorials, simulations, and interactive exercises. These resources improve the education experience and cater to different learning styles."
  },
  {
    icon:"FaHeadphonesAlt",
    title: "24/7 Dedicated Support System",
    detail: "LPU provides comprehensive student support services for online learning students. These include academic guidance, technical assistance, and career counseling to ensure that students have all the necessary resources."
  },
  {
    icon:"FaFileAlt",
    title: "Online Assessments and Exams",
    detail: "LPU conducts online assessments and exams to evaluate students' understanding of the course material. These assessments provide valuable feedback and help students track their progress throughout the program."
  },
  {
    icon:"FaUserTie",
    title: "Experienced Faculty",
    detail: "Learn from experienced and industry-connected faculty members who bring real-world insights to the classroom. Furthermore, students can join live classes to engage in real-time discussions with the professors."
  }
],
HowareExamsconducted: [
  {
    title: "Platform",
    details:
      'Exams are conducted through the "My Class" interface, accessible via the university Learning Management System (LMS). The exam schedule is available through the LPU e-Connect portal or the university notice board. This centralized platform makes tracking and managing your exam schedules and results easy.',
  },
  {
    title: "Proctoring",
    details:
      "The exams are monitored using proctoring software to ensure fair testing conditions. This involves using webcams and microphones. Proctoring maintains the credibility of the exam process by preventing any form of cheating.",
  },
  {
    title: "Device Compatibility",
    details:
      "You can appear for exams using a laptop, desktop, or even your smartphone. This flexibility ensures that you can take exams from a location and device that is most convenient for you.",
  },
  {
    title: "Exam Format",
    details:
      "The format of exams can vary depending on the course. They may include multiple-choice questions, essays, short answer questions, or a combination thereof. This helps in analyzing your understanding of the course material.",
  },
  {
    title: "Preparation",
    details:
      "Students are familiarized with the online exam system during their induction program or before the exams through demo videos. This ensures they're comfortable with the interface and testing procedures. Regular mock tests are also provided to help students practice and feel confident.",
  },
  {
    title: "Continuous Assessment",
    details:
      "The University uses continuous assessment through assignments, quizzes, and projects alongside final exams. This approach keeps students consistently engaged and helps them apply their learning practically.",
  },
],
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