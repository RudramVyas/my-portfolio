// Portfolio Data - Centralized source for all portfolio information
// Edit this file to update content across all pages (game, explore, etc.)

const PORTFOLIO_DATA = {
  personal: {
    name: "Rudram Vyas",
    title: "Full-Stack Developer",
    initials: "RV",
    email: "rudram.vyas@gmail.com",
    phone: "+1 (978) 375-8413",
    location: "Houston, TX",
    currentRole: "Software Engineer @ AllianceHCM",
    currentRoleDescription: "Developing enterprise-scale payroll & HCM solutions",
    tagline: "I build thoughtful, scalable web experiences.",
    description: "From high-impact production systems to polished interfaces, I combine solid computer science foundations with product-minded thinking to ship reliable, delightful software.",
    image: "assets/profile-photo.png",
    yearsExperience: "3+",
    projectsDelivered: "10+"
  },
  social: {
    linkedin: {
      url: "https://linkedin.com/in/rudram-vyas",
      username: "rudram-vyas"
    },
    github: {
      url: "https://github.com/rudramvyas",
      username: "rudramvyas"
    },
    website: "https://rudramvyas.github.io/my-portfolio/"
  },
  stats: {
    experience: "3+",
    projects: "10+",
    pagesBuilt: "500+"
  },
  techStack: {
    current: [
      { name: "ASP.NET", color: "purple" },
      { name: "C#", color: "purple" },
      { name: "JavaScript", color: "blue" },
      { name: "jQuery", color: "blue" },
      { name: "SQL Server", color: "default" },
      { name: "React", color: "default" }
    ]
  },
  experience: [
    {
      id: "alliancehcm",
      company: "AllianceHCM",
      position: "Software Engineer",
      location: "Houston, TX",
      startDate: "Sept 2025",
      endDate: "Present",
      isCurrent: true,
      description: "Developed and enhanced full-stack features across a 500+ page ASP.NET Web Forms (C#, JS/jQuery) HCM platform serving 2.5M+ active users and 10K+ client companies.",
      highlights: [
        "Developed and enhanced full-stack features across a 500+ page ASP.NET Web Forms (C#, JS/jQuery) HCM platform serving 2.5M+ active users and 10K+ client companies.",
        "Built new modules and optimized existing functionalities using ASP.NET C#, jQuery, and MS SQL Server to improve performance, usability, and scalability.",
        "Collaborated across teams to implement end-to-end feature development spanning backend logic, frontend UI updates, and database integrations within a large-scale Payroll & HCM system.",
        "Wrote and optimized complex SQL queries and stored procedures to handle large-scale payroll calculations and reporting.",
        "Implemented responsive UI components using JavaScript and jQuery, improving user experience across the platform."
      ],
      technologies: ["ASP.NET", "C#", "JavaScript", "jQuery", "MS SQL Server"],
      color: "purple",
      icon: "fa-building"
    },
    {
      id: "shopr",
      company: "ShopR",
      position: "Software Engineer",
      location: "Richmond, VA",
      startDate: "Jun 2024",
      endDate: "Aug 2025",
      isCurrent: false,
      description: "Led full redesign using React & MUI, boosting user engagement by 40% and mobile traffic by 30%.",
      highlights: [
        "Led full redesign using React & MUI, boosting user engagement by 40% and mobile traffic by 30%.",
        "Architected REST APIs, cutting feature deployment time by 50%.",
        "Mentored junior developers and formalized code-review practices, raising code quality by 35%."
      ],
      technologies: ["React", "Material-UI", "PostgreSQL"],
      color: "blue",
      icon: "fa-shopping-cart"
    },
    {
      id: "statestreet",
      company: "State Street Corporation",
      position: "Software Engineering Intern",
      location: "Boston, MA",
      startDate: "Jan 2022",
      endDate: "Jun 2022",
      isCurrent: false,
      description: "Built Chaos Engineering tests reducing failure-related downtime by 15%.",
      highlights: [
        "Built Chaos Engineering tests reducing failure-related downtime by 15%.",
        "Optimized SQL queries improving response times by 30%."
      ],
      technologies: ["Java", "SQL"],
      color: "gray",
      icon: "fa-chart-line"
    },
    {
      id: "chitramanch",
      company: "Chitramanch",
      position: "Founder & CTO",
      location: "Vadodara, India",
      startDate: "Jan 2021",
      endDate: "Jul 2022",
      isCurrent: false,
      description: "Built photography marketplace from scratch with advanced search and portfolio views.",
      highlights: [
        "Built photography marketplace from scratch with advanced search and portfolio views.",
        "Drove 50% increase in client inquiries and 15% higher user satisfaction within 6 months."
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      color: "purple",
      icon: "fa-camera"
    }
  ],
  projects: [
    {
      id: "mri",
      title: "Ensemble Learning for Multi-Modal MRI Classification",
      shortTitle: "MRI Classification",
      category: "ML • Healthcare",
      description: "Deep learning pipelines combining multiple MRI modalities using ensemble methods to improve tumor classification accuracy.",
      technologies: ["PyTorch", "Computer Vision"],
      github: "https://github.com/RudramVyas/Ensemble_Learning_for_Multi-Modal_MRI_Image_Classification",
      color: "pink",
      icon: "fa-brain"
    },
    {
      id: "snapsolutions",
      title: "Snap-Solutions (Chitramanch)",
      shortTitle: "Snap-Solutions",
      category: "Marketplace",
      description: "Photography marketplace with real-time interactions and polished portfolio browsing, connecting clients with photographers.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/RudramVyas/Snap-Solutions-aka-Chitramanch",
      color: "blue",
      icon: "fa-images"
    },
    {
      id: "pothole",
      title: "Pothole Detection System",
      shortTitle: "Pothole Detection",
      category: "Computer Vision",
      description: "Real-time computer-vision system detecting road potholes from video feeds to improve road maintenance and safety.",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/RudramVyas/Pothole-Detection",
      color: "green",
      icon: "fa-road"
    },
    {
      id: "lampt",
      title: "LAMPT Social Network",
      shortTitle: "LAMPT Social Network",
      category: "Full-Stack",
      description: "Social platform built on LAMP stack plus TypeScript, featuring profiles, posts, and timelines.",
      technologies: ["Linux", "MySQL", "PHP"],
      github: "https://github.com/RudramVyas/LAMPT-Social-Networking-Site",
      color: "purple",
      icon: "fa-users"
    },
    {
      id: "workspace",
      title: "Workspace Network System",
      shortTitle: "Workspace Network",
      category: "Networking",
      description: "Cisco Packet Tracer simulation of large-scale enterprise network with routing, switching, and security.",
      technologies: ["Cisco PT", "Networking"],
      github: "https://github.com/RudramVyas/Workspace-Network-System",
      color: "yellow",
      icon: "fa-network-wired"
    },
    {
      id: "omr",
      title: "OMR Sheet Evaluator",
      shortTitle: "OMR Evaluator",
      category: "Automation",
      description: "Optical Mark Recognition tool that scans and grades multiple-choice exam sheets, reducing manual work.",
      technologies: ["Python", "Image Processing"],
      github: "https://github.com/RudramVyas/OMR_Sheet_Evaluator",
      color: "orange",
      icon: "fa-clipboard-check"
    }
  ],
  skills: {
    languages: [
      { name: "C#", highlighted: true },
      { name: "JavaScript", highlighted: true },
      { name: "Python", highlighted: false },
      { name: "Java", highlighted: false },
      { name: "TypeScript", highlighted: false },
      { name: "SQL", highlighted: true }
    ],
    frameworks: [
      { name: "ASP.NET", highlighted: true },
      { name: "jQuery", highlighted: true },
      { name: "React", highlighted: false },
      { name: "Spring Boot", highlighted: false },
      { name: "Node.js", highlighted: false }
    ],
    databases: [
      { name: "PostgreSQL", highlighted: false },
      { name: "MongoDB", highlighted: false },
      { name: "MySQL", highlighted: false },
      { name: "SQL Server", highlighted: false }
    ],
    cloud: [
      { name: "AWS", highlighted: false },
      { name: "Docker", highlighted: false },
      { name: "Jenkins", highlighted: false },
      { name: "Azure", highlighted: false }
    ],
    tools: [
      { name: "Git", highlighted: false },
      { name: "Agile", highlighted: false },
      { name: "Scrum", highlighted: false },
      { name: "CI/CD", highlighted: false }
    ],
    soft: [
      { name: "Leadership", highlighted: false },
      { name: "Mentoring", highlighted: false },
      { name: "Communication", highlighted: false }
    ]
  },
  education: [
    {
      id: "masters",
      degree: "M.S. in Computer Science",
      school: "University of Massachusetts Lowell",
      location: "Lowell, MA",
      startDate: "Aug 2022",
      endDate: "May 2024",
      gpa: "3.8/4.0",
      coursework: ["Algorithms", "Machine Learning", "Database Systems", "Computer Networks"],
      highlights: [
        "Graduate Course Assistant for Algorithms",
        "Student Support Analyst at IT Services"
      ],
      color: "purple",
      icon: "fa-graduation-cap"
    },
    {
      id: "bachelors",
      degree: "B.Tech in Computer Science",
      school: "Nirma University",
      location: "Ahmedabad, India",
      startDate: "Aug 2018",
      endDate: "May 2022",
      gpa: null,
      coursework: ["Data Structures", "Operating Systems", "Software Engineering", "Web Development"],
      highlights: [
        "Founded Chitramanch startup during studies",
        "Completed internship at State Street Corporation"
      ],
      color: "blue",
      icon: "fa-university"
    }
  ],
  gameSkills: [
    { name: "C#", fact: "Primary language at AllianceHCM for enterprise HCM platform", color: 0xa855f7, icon: "fa-hashtag", points: 100 },
    { name: "JavaScript", fact: "Used across 500+ pages at AllianceHCM with jQuery", color: 0xf7df1e, icon: "fa-js", points: 100 },
    { name: "React", fact: "Led ShopR redesign, boosting engagement by 40%", color: 0x61dafb, icon: "fa-react", points: 120 },
    { name: "Python", fact: "Built ML models for MRI classification at UMass Lowell", color: 0x3776ab, icon: "fa-python", points: 100 },
    { name: "SQL Server", fact: "Optimized complex payroll queries for 2.5M+ users", color: 0xcc2927, icon: "fa-database", points: 110 },
    { name: "ASP.NET", fact: "Core framework for AllianceHCM's HCM platform", color: 0x512bd4, icon: "fa-server", points: 120 },
    { name: "Node.js", fact: "Backend for Chitramanch photography marketplace", color: 0x339933, icon: "fa-node-js", points: 100 },
    { name: "MongoDB", fact: "NoSQL database for Chitramanch platform", color: 0x47a248, icon: "fa-leaf", points: 90 },
    { name: "jQuery", fact: "Enhanced UI components across enterprise platform", color: 0x0769ad, icon: "fa-code", points: 80 },
    { name: "Java", fact: "Used at State Street for Chaos Engineering tests", color: 0xf89820, icon: "fa-java", points: 100 },
    { name: "PostgreSQL", fact: "Database expertise from ShopR development", color: 0x336791, icon: "fa-database", points: 90 },
    { name: "AWS", fact: "Cloud infrastructure for scalable deployments", color: 0xff9900, icon: "fa-aws", points: 110 },
    { name: "Docker", fact: "Containerization for consistent dev environments", color: 0x2496ed, icon: "fa-docker", points: 100 },
    { name: "Git", fact: "Version control across all professional projects", color: 0xf05032, icon: "fa-git-alt", points: 80 },
    { name: "TypeScript", fact: "Type-safe JavaScript for LAMPT social network", color: 0x3178c6, icon: "fa-code", points: 100 }
  ],
  arcadeData: {
    experience: [
      {
        id: "alliancehcm",
        title: "AllianceHCM",
        subtitle: "Software Engineer • Houston, TX • Sept 2025 – Present",
        content: "Developed and enhanced full-stack features across a 500+ page ASP.NET Web Forms (C#, JS/jQuery) HCM platform serving 2.5M+ active users and 10K+ client companies. Built new modules and optimized existing functionalities using ASP.NET C#, jQuery, and MS SQL Server.",
        tags: ["ASP.NET", "C#", "JavaScript", "jQuery", "SQL Server"],
        icon: "fa-building",
        link: "#experience"
      },
      {
        id: "shopr",
        title: "ShopR",
        subtitle: "Software Engineer • Richmond, VA • Jun 2024 – Aug 2025",
        content: "Led full redesign using React & MUI, boosting user engagement by 40% and mobile traffic by 30%. Architected REST APIs, cutting feature deployment time by 50%. Mentored junior developers and formalized code-review practices.",
        tags: ["React", "Material-UI", "PostgreSQL", "REST APIs"],
        icon: "fa-shopping-cart",
        link: "#experience"
      },
      {
        id: "statestreet",
        title: "State Street Corporation",
        subtitle: "Software Engineering Intern • Boston, MA • Jan – Jun 2022",
        content: "Built Chaos Engineering tests reducing failure-related downtime by 15%. Optimized SQL queries improving response times by 30%.",
        tags: ["Java", "SQL", "Chaos Engineering"],
        icon: "fa-chart-line",
        link: "#experience"
      },
      {
        id: "chitramanch",
        title: "Chitramanch",
        subtitle: "Founder & CTO • Vadodara, India • Jan 2021 – Jul 2022",
        content: "Built photography marketplace from scratch with advanced search and portfolio views. Drove 50% increase in client inquiries and 15% higher user satisfaction within 6 months.",
        tags: ["React", "Node.js", "MongoDB", "Startup"],
        icon: "fa-camera",
        link: "#experience"
      }
    ],
    projects: [
      {
        id: "mri",
        title: "MRI Classification",
        subtitle: "Machine Learning • Healthcare",
        content: "Deep learning pipelines combining multiple MRI modalities using ensemble methods to improve tumor classification accuracy. Built with PyTorch and computer vision techniques.",
        tags: ["PyTorch", "Computer Vision", "Deep Learning"],
        icon: "fa-brain",
        link: "https://github.com/RudramVyas/Ensemble_Learning_for_Multi-Modal_MRI_Image_Classification"
      },
      {
        id: "snapsolutions",
        title: "Snap-Solutions",
        subtitle: "Full-Stack • Marketplace",
        content: "Photography marketplace with real-time interactions and polished portfolio browsing, connecting clients with photographers seamlessly.",
        tags: ["React", "Node.js", "MongoDB"],
        icon: "fa-images",
        link: "https://github.com/RudramVyas/Snap-Solutions-aka-Chitramanch"
      },
      {
        id: "pothole",
        title: "Pothole Detection",
        subtitle: "Computer Vision • Safety",
        content: "Real-time computer-vision system detecting road potholes from video feeds to improve road maintenance and safety.",
        tags: ["Python", "OpenCV", "Image Processing"],
        icon: "fa-road",
        link: "https://github.com/RudramVyas/Pothole-Detection"
      },
      {
        id: "lampt",
        title: "LAMPT Social Network",
        subtitle: "Full-Stack • Social",
        content: "Social platform built on LAMP stack plus TypeScript, featuring profiles, posts, and timelines.",
        tags: ["Linux", "MySQL", "PHP", "TypeScript"],
        icon: "fa-users",
        link: "https://github.com/RudramVyas/LAMPT-Social-Networking-Site"
      }
    ],
    skills: [
      { id: "csharp", title: "C#", subtitle: "Primary Language", content: "Core language for enterprise ASP.NET development at AllianceHCM. Used for backend logic, data processing, and integration.", tags: ["Backend", "Enterprise"], icon: "fa-hashtag" },
      { id: "javascript", title: "JavaScript", subtitle: "Frontend & Backend", content: "Extensive use across 500+ pages, from DOM manipulation to complex UI interactions and Node.js backends.", tags: ["Frontend", "Backend", "Full-Stack"], icon: "fa-js" },
      { id: "react", title: "React", subtitle: "UI Framework", content: "Led complete redesign at ShopR, implementing modern component architecture and state management.", tags: ["Frontend", "UI/UX"], icon: "fa-react" },
      { id: "python", title: "Python", subtitle: "ML & Scripting", content: "Used for machine learning projects including MRI classification and computer vision applications.", tags: ["ML", "Data Science"], icon: "fa-python" },
      { id: "sql", title: "SQL Server", subtitle: "Database", content: "Optimized complex payroll queries and stored procedures handling millions of records.", tags: ["Database", "Enterprise"], icon: "fa-database" },
      { id: "aws", title: "AWS", subtitle: "Cloud Platform", content: "Cloud infrastructure knowledge for scalable application deployments and services.", tags: ["Cloud", "DevOps"], icon: "fa-aws" }
    ],
    education: [
      {
        id: "masters",
        title: "M.S. Computer Science",
        subtitle: "UMass Lowell • GPA: 3.8/4.0 • Aug 2022 – May 2024",
        content: "Focused on Algorithms, Machine Learning, Database Systems, and Computer Networks. Served as Graduate Course Assistant for Algorithms and Student Support Analyst at IT Services.",
        tags: ["Algorithms", "Machine Learning", "Databases"],
        icon: "fa-graduation-cap",
        link: "#skills"
      },
      {
        id: "bachelors",
        title: "B.Tech Computer Science",
        subtitle: "Nirma University • India • Aug 2018 – May 2022",
        content: "Strong foundation in Data Structures, Operating Systems, Software Engineering, and Web Development. Founded Chitramanch startup and completed internship at State Street during studies.",
        tags: ["Data Structures", "OS", "Software Engineering"],
        icon: "fa-university",
        link: "#skills"
      }
    ],
    contact: [
      { id: "email", title: "Email", subtitle: "Direct Contact", content: "Reach out directly for opportunities, collaborations, or just to chat about tech!", tags: ["rudram.vyas@gmail.com"], icon: "fa-envelope", link: "mailto:rudram.vyas@gmail.com" },
      { id: "linkedin", title: "LinkedIn", subtitle: "Professional Network", content: "Connect with me on LinkedIn for professional updates and networking.", tags: ["linkedin.com/in/rudram-vyas"], icon: "fa-linkedin", link: "https://linkedin.com/in/rudram-vyas" },
      { id: "github", title: "GitHub", subtitle: "Code Repository", content: "Check out my open-source contributions and personal projects on GitHub.", tags: ["github.com/rudramvyas"], icon: "fa-github", link: "https://github.com/rudramvyas" }
    ]
  }
};

