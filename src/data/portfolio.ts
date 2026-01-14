export const portfolioData = {
  personal: {
    name: "Abhishek Kumar Mishra",
    role: "Full Stack Developer | Software Engineer",
    location: "Uttar Pradesh, India (Open to Remote & Relocation)",
    email: "abhishekkumarmishra82077@gmail.com",
    phone: "+91 8207768304",
    linkedin: "https://www.linkedin.com/in/abhishekmishra82077/",
    github: "https://github.com/Abhishekmishra-04",
    portfolio: "https://67876254430dfcbcdde008e4--gilded-babka-f11d75.netlify.app/", // Current one, maybe replace with new one later
  },
  summary:
    "Full Stack Developer with expertise in building scalable SaaS applications using Next.js, React, TypeScript, and Node.js.",
  techStack: {
    frontend: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Redux",
      "Context API",
      "Responsive Design",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Query Optimization",
    ],
    devops: ["AWS", "Vercel", "Git", "GitHub", "CI/CD Awareness"],
    engineering: [
      "Performance Optimization",
      "Debugging",
      "Clean Code Practices",
      "Documentation",
      "Agile Collaboration",
      "API Integration",
    ],
  },
  experience: [
    {
      company: "Future Interns",
      role: "Full Stack Intern",
      duration: "Dec 2024 – Present",
      description: [
        "Architecting responsive UI and robust backend logic for dynamic web applications.",
        "Writing clean, secure REST APIs to support new features.",
        "Fixing cross-browser compatibility issues to ensure a consistent user experience.",
      ],
    },
    {
      company: "GrowthLink",
      role: "Frontend Web Development Intern",
      duration: "Nov 2024 – Mar 2025",
      description: [
        "Refactored heavy React components, which noticeably improved page load times.",
        "Implemented real-time data updates so users don't have to manually refresh.",
        "Collaborated with the team to ship features on time and debugged issues as they appeared.",
      ],
    },
    {
      company: "Qveto Technologies",
      role: "Web Development Intern",
      duration: "Jul 2024 – May 2025",
      description: [
        "Built the Job Listing module from the ground up using React and Node.js.",
        "Optimized slow database queries by adding proper indexes, which sped up search results.",
        "Created interactive dashboards that made it easier for users to visualize data.",
        "Maintained a clean codebase and used Git for version control.",
      ],
    },
  ],
  education: [
    {
      institution: "Galgotias University, Greater Noida, India",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2020 – Jun 2024",
      result: "CGPA: 8.28",
    },
    {
      institution: "M.J.K High School, West Champaran, Bihar",
      degree: "Class XII (Science) – BSEB",
      period: "May 2018 – Jun 2020",
      result: "Percentage: 72.4%",
    },
    {
      institution: "Utkramit M.S. School, West Champaran, Bihar",
      degree: "Class X – BSEB",
      period: "2017 – 2018",
      result: "Percentage: 65%",
    },
  ],
  projects: [
    {
      title: "Job Portal Web Application",
      tech: ["React", "Node.js", "Express", "MySQL", "MongoDB"],
      live: "https://github.com/Abhishekmishra-04",
      github: "https://github.com/Abhishekmishra-04",
      description:
        "I built this platform to connect job seekers with employers. Initially, complex queries slowed down the search, so I split the architecture: MySQL for structured data and MongoDB for logging. This approach kept the main application fast while still tracking all user activity.",
      features: [
        "Hybrid database setup (MySQL + MongoDB) for better performance.",
        "Advanced search filters for candidates and jobs.",
        "Role-based access control to keep user data secure.",
      ],
      outcome:
        "Built a functional MVP that handles complex user flows and data relationships effectively.",
    },
    {
      title: "AI-Powered Portfolio Website",
      tech: ["React", "Tailwind CSS", "OpenAI API"],
      live: "https://67876254430dfcbcdde008e4--gilded-babka-f11d75.netlify.app/",
      github: "https://github.com/Abhishekmishra-04",
      description:
        "I integrated an AI assistant to help recruiters quickly find details about my experience. I constrained the AI's context to my actual portfolio data to ensure it answers questions accurately without making things up.",
      features: [
        "Integrated OpenAI API for answering questions.",
        "Clean, responsive design using Tailwind CSS.",
        "Fast rendering performance using React best practices.",
      ],
      outcome:
        "Created a helpful tool that allows visitors to interact with my portfolio data naturally.",
    },
    {
      title: "Netflix Clone",
      tech: ["React", "TMDB API", "CSS"],
      live: "https://netflix-clone-t264.vercel.app/",
      github: "https://abhishekmishra-04.github.io/Netflix-clone/",
      description:
        "I wanted to understand how large streaming sites handle media layouts. The main challenge was fetching and displaying high-resolution images without blocking the UI. I implemented lazy loading and efficient API caching to keep the scrolling smooth.",
      features: [
        "Fetches real-time movie data from TMDB API.",
        "Replicates complex UI elements like carousels and hero banners.",
        "Fully responsive layout that works on all devices.",
      ],
      outcome:
        "Gained a deeper understanding of CSS layouts and handling external API data.",
    },
    {
      title: "Expense Tracker System",
      tech: ["JavaScript", "HTML/CSS", "LocalStorage"],
      live: "https://abhishekmishra-04.github.io/Expense-Tracker/",
      github: "https://github.com/Abhishekmishra-04",
      description:
        "A simple tool for tracking personal finances. I used LocalStorage so users don't lose their data on refresh. It’s a straightforward, zero-latency app that does one thing well.",
      features: [
        "Calculates balance and transaction history instantly.",
        "Saves data locally so it persists after closing the browser.",
        "Simple, intuitive interface for quick data entry.",
      ],
      outcome:
        "Built a reliable utility tool with zero latency.",
    },
    {
      title: "Task Management System",
      tech: ["React", "Node.js", "MySQL"],
      live: "https://github.com/Abhishekmishra-04",
      github: "https://github.com/Abhishekmishra-04",
      description:
        "I built this to practice full-stack CRUD operations. It handles task tracking and status updates. The focus was on designing a clean relational database schema to manage user-task associations effectively.",
      features: [
        "Full Create, Read, Update, Delete functionality for tasks.",
        "Task status tracking (To Do, In Progress, Done).",
        "Efficient database design for user-task relationships.",
      ],
      outcome:
        "Developed a complete full-stack application that demonstrates core development skills.",
    },
    {
      title: "Language Detection Using NLP",
      tech: ["Python", "NLP", "Machine Learning"],
      live: "https://github.com/Abhishekmishra-04/Natural-Language-Using-NLP",
      github: "https://github.com/Abhishekmishra-04/Natural-Language-Using-NLP",
      description:
        "I was curious about NLP, so I trained a model to identify languages. It takes text input and predicts the language with high accuracy. It was a great way to learn the basics of text preprocessing and model evaluation.",
      features: [
        "NLP pipeline for cleaning and processing text.",
        "Trained model for accurate language identification.",
        "Supports detection of multiple languages.",
      ],
      outcome:
        "Applied machine learning concepts to solve a practical text classification problem.",
    },
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/abhishekkumarmishra82077/",
    },
    {
      platform: "CodeChef",
      url: "https://www.codechef.com/users/akmishra_24",
    },
    {
      platform: "HackerEarth",
      url: "https://www.hackerearth.com/@abhishekkumarmishra82077/",
    },
    {
      platform: "StackOverflow",
      url: "https://stackoverflow.com/users/31574882/abhishek-mishra",
    },
  ],
  certifications: [
    "AWS Academy – Data Engineering",
    "Frontend Development with React – Udemy",
    "JavaScript Programming – Udemy",
    "TypeScript Fundamentals",
    "Node.js REST API Development",
    "C++ Programming – Coding Ninjas",
    "SQL & Database Fundamentals – Oracle",
  ],
  whyHireMe: [
    {
      title: "Full-Stack Ownership",
      description:
        "I can take a feature from database design to UI implementation.",
    },
    {
      title: "Reliable Code",
      description:
        "I test my own code and handle errors gracefully instead of hoping for the best.",
    },
    {
      title: "Problem Solver",
      description:
        "I don't just write code; I debug production issues and fix them.",
    },
    {
      title: "Continuous Learner",
      description:
        "I'm comfortable picking up new tools as needed to get the job done.",
    },
  ],
};
