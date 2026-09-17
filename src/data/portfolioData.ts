import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types/portfolio';

export const personalInfo = {
  name: "Sathasivam S",
  title: "AI & Full-Stack Developer",
  shortRole: "AI & Full-Stack Developer",
  tagline: "B.Tech student building practical software, AI, IoT and data-driven solutions.",
  currentStatus: "3rd Year B.Tech (5th Semester • 2024 – 2028)",
  location: "Tamil Nadu, India",
  email: "sathasivam0706@gmail.com",
  phone: "8248570338",
  phoneFormatted: "+91 82485 70338",
  photoUrl: "/sathasivam.jpg",
  resumeUrl: "", // When a resume file is uploaded, paste path here or keep empty for "Resume available soon"
  
  socials: {
    github: "https://github.com/Sathasivam0706",
    linkedin: "https://www.linkedin.com/in/sathasivam-s-b157b6422/",
    leetcode: "https://leetcode.com/u/SathaSivam_06/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/sathasiv7j31",
  },

  heroIntro:
    "I’m Sathasivam S, a B.Tech student at V S B Engineering College with a strong interest in software development, artificial intelligence, machine learning, IoT and data-driven applications. I enjoy turning real-world problems into practical technology solutions and continuously improving my technical skills through projects and problem solving.",

  aboutStory: [
    "I’m a B.Tech student passionate about building practical technology solutions. My interests span software development, artificial intelligence, machine learning, IoT, data analytics and modern web applications.",
    "I enjoy learning by building real projects rather than only studying concepts. My current focus is strengthening my programming and problem-solving skills while developing applications that connect software, AI and real-world operational data.",
    "Alongside technology, I’m interested in business and sports, and I aspire to grow into a strong technology professional and eventually explore entrepreneurship."
  ],

  personalHighlights: [
    { title: "Hard Worker", desc: "Committed to dedicated practice and delivering consistent project milestones." },
    { title: "Quick Learner", desc: "Rapidly adapting to modern web frameworks, IoT hardware, and AI concepts." },
    { title: "Problem Solver", desc: "Active problem solver on LeetCode and GeeksforGeeks across core algorithms." },
    { title: "Continuous Learner", desc: "Constantly expanding knowledge in system design, distributed data, and agents." },
    { title: "Business Mindset", desc: "Enthusiastic about turning technical products into viable real-world solutions." },
    { title: "Team Collaboration", desc: "Collaborative mindset ready to contribute to engineering teams and open source." },
  ]
};

export const educationData: EducationItem = {
  degree: "B.Tech",
  institution: "V S B Engineering College, Karur",
  university: "Anna University",
  period: "2024 – 2028",
  cgpa: "8.0",
  status: "3rd Year • 5th Semester (Active)",
  currentYear: "3rd Year",
  currentSemester: "5th Semester",
  details: [
    "Currently pursuing 3rd Year (5th Semester) with core focus on Operating Systems, Networks, and AI.",
    "Active technical project development in IoT telemetry, AI automation, and Full-Stack systems.",
    "Hands-on laboratory research in microcontrollers (ESP32) and applied database management."
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    category: "programming",
    iconName: "Code2",
    skills: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
    ]
  },
  {
    title: "Frontend Engineering",
    category: "frontend",
    iconName: "Layout",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript", highlight: true },
      { name: "React.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Recharts" },
    ]
  },
  {
    title: "Backend & APIs",
    category: "backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Authentication" },
      { name: "JWT concepts" },
    ]
  },
  {
    title: "Databases & Storage",
    category: "database",
    iconName: "Database",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "MongoDB Atlas" },
      { name: "MySQL", highlight: true },
    ]
  },
  {
    title: "Artificial Intelligence & ML",
    category: "ai",
    iconName: "Cpu",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Predictive Analytics" },
      { name: "Anomaly Detection" },
      { name: "AI Agents", highlight: true },
      { name: "Generative AI / LLM concepts" },
      { name: "Computer Vision concepts" },
      { name: "Data Analytics" },
    ]
  },
  {
    title: "Internet of Things (IoT)",
    category: "iot",
    iconName: "Radio",
    skills: [
      { name: "ESP32 Microcontrollers", highlight: true },
      { name: "Sensor Data Integration" },
      { name: "Temperature Monitoring" },
      { name: "Humidity Monitoring" },
      { name: "Energy Monitoring" },
    ]
  },
  {
    title: "Developer Tools & Platforms",
    category: "tools",
    iconName: "Wrench",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Google AI Studio" },
      { name: "Antigravity" },
      { name: "Recharts" },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "facilityops-ai",
    title: "FacilityOps AI",
    subtitle: "Agentic Facility Operations Platform",
    description: "An AI-powered facility management platform designed to monitor IoT data, energy consumption, occupancy, security and operational conditions while providing intelligent recommendations and predictive insights.",
    repoUrl: "https://github.com/Sathasivam0706/FacilityOps-AI.",
    demoUrl: "https://facility-ops-ai.vercel.app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "IoT", "AI/ML", "Recharts", "REST APIs"],
    keyFeatures: [
      "Facility management & zone control",
      "IoT sensor telemetry integration",
      "Energy monitoring & load forecasting",
      "AI recommendations engine",
      "Predictive analytics & maintenance insights",
      "Anomaly detection for equipment",
      "Occupancy & security intelligence",
      "Indoor air quality tracking",
      "Dashboard analytics with Recharts"
    ],
    category: "AI & Full-Stack",
    milestones: [
      { title: "Milestone 1", desc: "Utility & IoT Data Integration across sensors and live telemetry." },
      { title: "Milestone 2", desc: "Energy Intelligence & Optimization algorithms for peak reduction." },
      { title: "Milestone 3", desc: "Occupancy & Security Intelligence through multi-zone telemetry." },
      { title: "Milestone 4", desc: "AI-driven operational intelligence & autonomous system capabilities." },
    ],
    details: {
      problem: "Commercial facility managers struggle with fragmented building systems, uncoordinated energy spikes, delayed equipment fault detection, and disconnected IoT sensor streams.",
      solution: "FacilityOps AI unifies sensor feeds from building management systems into an agentic operations platform providing automated anomaly detection, load forecasting, and autonomous recommendations.",
      technologyOverview: "Constructed with React and TypeScript on the client for interactive analytics and Recharts visualizations, coupled with an Express/Node.js API service connected to MongoDB and IoT data endpoints.",
      featuresList: [
        "Real-time sensor metrics (temperature, humidity, CO2 ppm, vibration)",
        "Peak tariff energy demand forecasting",
        "Predictive remaining useful life (RUL) estimation",
        "Autonomous multi-agent advisory system",
        "Interactive analytics dashboards and exportable operational reports"
      ],
      architecture: "IoT/BMS Telemetry Stream -> REST APIs (Express/Node.js) -> MongoDB Storage -> Predictive/Anomaly Analytics Layer -> Responsive React Dashboard.",
      contribution: "Designed and implemented the core dashboard interface, telemetry data schemas, analytical chart components, and integrated end-to-end full-stack API communication."
    }
  },
  {
    id: "edgeguard-ai",
    title: "EdgeGuard AI",
    subtitle: "Industrial Safety Platform",
    description: "An intelligent industrial safety platform concept focused on worker safety, accident prevention, IoT monitoring and AI-assisted safety detection.",
    repoUrl: "https://github.com/Sathasivam0706/EdgeGuardAI-Industrial-Safety-Platform",
    demoUrl: null,
    technologies: ["TypeScript", "React", "Tailwind CSS", "IoT Monitoring", "Computer Vision Concepts", "Safety Analytics"],
    keyFeatures: [
      "AI-assisted PPE detection concept (Helmet, Safety Vest)",
      "Real-time industrial monitoring dashboard",
      "IoT environmental sensor alerts",
      "Live incident detection & logging",
      "Worker safety compliance tracking",
      "Hazardous factory zone perimeter alerts",
      "Risk score calculation per factory floor",
      "Emergency notification dispatch"
    ],
    category: "AI & IoT",
    details: {
      problem: "Manufacturing environments face critical safety hazards from PPE non-compliance, hazardous gas exposure, and delayed emergency responses.",
      solution: "EdgeGuard AI conceptualizes a centralized safety hub that cross-references IoT hazard readings with vision-based PPE compliance tracking to keep workers protected.",
      technologyOverview: "Built with TypeScript, React, and modern UI engineering, simulating high-risk zone telemetry and intelligent compliance metrics.",
      featuresList: [
        "PPE compliance status monitoring",
        "Factory floor risk index visualization",
        "Environmental safety metric alerts",
        "Live incident log and timeline",
        "High-priority dispatch notification UI"
      ],
      architecture: "Camera/Sensor Feeds -> Edge Processing & Detection Logic -> Alert Dispatch -> Industrial Safety Console.",
      contribution: "Project developed as part of my hands-on learning and development journey, focusing on industrial safety UI architecture and telemetry integration."
    }
  },
  {
    id: "disease-detection",
    title: "AI Disease Detection System",
    subtitle: "Spring Boot & Machine Learning Prototype",
    description: "AI-powered disease detection system built with Spring Boot, Machine Learning, and MySQL for early-stage predictive modeling.",
    repoUrl: "https://github.com/Sathasivam0706/disease-detection-system",
    demoUrl: null,
    technologies: ["Java", "Spring Boot", "Machine Learning", "MySQL", "REST APIs", "Ensemble ML"],
    keyFeatures: [
      "Multi-condition risk indicator modeling",
      "Spring Boot RESTful micro-backend",
      "Ensemble Machine Learning classifiers",
      "Data preprocessing, imputation & scaling",
      "Relational record persistence with MySQL",
      "Educational & research-focused architecture"
    ],
    category: "Java & ML",
    details: {
      problem: "Early indicators for chronic conditions can be hard to identify without systematic parameter evaluation and algorithmic pattern recognition.",
      solution: "A Java Spring Boot service integrating ensemble machine learning classifiers to assess risk metrics from laboratory indicator values.",
      technologyOverview: "Backend built with Java and Spring Boot, utilizing relational database structures in MySQL and pure Java ensemble model algorithms.",
      featuresList: [
        "Standardized medical metric parameter ingestion",
        "Data normalization and missing value handling",
        "Custom ensemble voting classifier implementation",
        "Structured REST endpoints for inference requests",
        "Disclaimer: Educational prototype, not for clinical diagnostic deployment"
      ],
      architecture: "Client Request -> Spring Boot Controller -> Preprocessing Pipeline -> Java ML Ensemble -> MySQL Result Store.",
      contribution: "Project developed as part of my hands-on learning and development journey, exploring Java-based ML architectures and Spring Boot backend engineering."
    }
  },
  {
    id: "tn-bus-scheduling",
    title: "Tamil Nadu Bus Scheduling System",
    subtitle: "State Transit Route & Timetable System",
    description: "A comprehensive bus scheduling and transit timetable management application designed for state transport networks in Tamil Nadu.",
    repoUrl: "https://github.com/Sathasivam0706/TamilNadu-Bus-Scheduling-System",
    demoUrl: null,
    technologies: ["Java", "Object-Oriented Design", "Data Structures", "Transit Logistics", "Route Planning"],
    keyFeatures: [
      "Bus route & stop sequence organization",
      "Depot dispatch and timetable coordination",
      "Conflict detection for overlapping schedules",
      "Driver & bus unit assignment logic",
      "Tailored for Tamil Nadu transit networks"
    ],
    category: "Java Software",
    details: {
      problem: "Managing regional public transit schedules with changing routes, bus frequencies, and depot turnaround requires reliable data modeling.",
      solution: "Developed an object-oriented Java scheduling engine to organize bus timetables, depot fleets, and stops efficiently.",
      technologyOverview: "Crafted using core Java, leveraging robust data structures and object-oriented paradigms for transit dispatch.",
      featuresList: [
        "Route stop management with mileage tracking",
        "Timetable generation and schedule conflict checks",
        "Fleet availability verification",
        "Console & structured transit reporting"
      ],
      architecture: "Java Core Engine -> Schedule Data Models -> Fleet & Route Dispatch Manager -> Transit Schedule Output.",
      contribution: "Project developed as part of my hands-on learning and development journey, applying algorithms and data structures to regional transit logistics."
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    title: "Internship & Industry Training",
    organization: "Infosys / Infosys Springboard",
    duration: "Approx. 2 months",
    type: "Industry Training & Hands-on Learning",
    description: "Focused on learning and practical exposure in technology, core software development methodologies, and foundational computer science practices.",
    tags: ["Software Engineering", "Problem Solving", "Learning Curriculum", "Technology Exposure"]
  },
  {
    title: "Data Analytics Summer Internship",
    organization: "Industry Training Program",
    duration: "Approx. 1 month",
    type: "Summer Internship",
    description: "Focused on learning and practical exposure in technology and data analytics, exploring dataset analysis, visualization fundamentals, and data-driven insights.",
    tags: ["Data Analytics", "Dataset Analysis", "Visualization", "Data Interpretation"]
  }
];

export const codingProfiles = {
  leetcode: {
    url: "https://leetcode.com/u/SathaSivam_06/",
    username: "SathaSivam_06",
    totalSolvedCategories: 109,
    languageBreakdown: [
      { language: "Python3", count: 73, color: "#38bdf8" },
      { language: "Java", count: 32, color: "#f97316" },
      { language: "Python", count: 4, color: "#a855f7" }
    ],
    topicHighlights: [
      "Arrays",
      "Strings",
      "Dynamic Programming",
      "Backtracking",
      "Hash Table",
      "Recursion",
      "Two Pointers",
      "Divide and Conquer"
    ],
    note: "Language-wise solved counts displayed on profile (Python3: 73, Java: 32, Python: 4). Not presented as 109 unique problems."
  },
  geeksforgeeks: {
    url: "https://www.geeksforgeeks.org/profile/sathasiv7j31",
    username: "sathasiv7j31",
    label: "Active GeeksforGeeks Profile"
  }
};

export const verifiedAchievements = [
  {
    title: "Hands-on Project Development",
    desc: "Built 4 multi-technology open-source repositories spanning Agentic AI, IoT facility operations, Industrial Safety, and Java backend systems."
  },
  {
    title: "Consistent Algorithm & Data Structures Practice",
    desc: "Active problem solver across Python3 and Java on LeetCode and GeeksforGeeks covering Dynamic Programming, Backtracking, and Arrays."
  },
  {
    title: "Practical Hardware-Software IoT Integrations",
    desc: "Implemented ESP32 sensor telemetry streams monitoring real-time temperature, humidity, and energy load metrics."
  },
  {
    title: "Internship & Technical Training Completion",
    desc: "Completed dedicated hands-on learning programs with Infosys Springboard and summer data analytics industry training."
  }
];

export const beyondTechData = {
  title: "Beyond Technology",
  quote: "Alongside technology, I’m interested in business, entrepreneurship and understanding how technology can be transformed into useful products and real-world solutions.",
  pillars: [
    {
      title: "Business Mindset",
      desc: "Analyzing how software, automation, and IoT solve real operational bottlenecks in businesses and commercial infrastructure."
    },
    {
      title: "Sports & Discipline",
      desc: "Passionate about sports, teamwork, and cultivating the physical discipline and focus required for long-term engineering rigor."
    },
    {
      title: "Aspiring Entrepreneur",
      desc: "Committed to mastering core technical foundations first, with the long-term goal of building scalable product ventures."
    }
  ]
};
