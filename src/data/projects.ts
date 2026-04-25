import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'plinko',
    title: 'Plinko: Provably Fair Gaming',
    tagline: 'A deterministic gaming engine ensuring transparency through cryptographic verification.',
    description: 'Built a provably fair Plinko simulation with a commit-reveal protocol and real-time trajectory replay.',
    longDescription: 'Developed to address the need for transparency in digital gaming, this system uses SHA256 fairness and Xorshift PRNG to ensure every outcome is mathematically verifiable. The engine features real-time simulation and an interactive proof verification system for end-users.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Web Crypto'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/pong.jpg', // Placeholder, user can update
    featured: true,
    year: 2026,
    status: 'live',
    highlights: [
      'Implemented SHA256 fairness and Xorshift PRNG for verifiable randomness.',
      'Built a deterministic Plinko simulation engine with commit-reveal protocol.',
      'Developed real-time trajectory replay and proof verification system.',
      'Engineered with a focus on high-performance cryptographic verification.'
    ],
    color: '#FF6B6B'
  },
  {
    id: 'knowledge-base-graph',
    title: 'Knowledge-Base-Graph',
    tagline: 'Scalable browser-based graph platform for real-time knowledge mapping.',
    description: 'A dynamic graph engine for visualizing relational data with real-time synchronization.',
    longDescription: 'Identified limitations in traditional knowledge mapping tools and built a scalable platform using Cytoscape.js. It features robust state management with Zustand, real-time sync, and a radar/minimap for navigating large datasets.',
    techStack: ['Next.js', 'TypeScript', 'Cytoscape.js', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'Dagre'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: true,
    year: 2026,
    status: 'live',
    highlights: [
      'Built a dynamic graph engine with node-edge CRUD and local storage persistence.',
      'Implemented a radar/minimap for enhanced navigation of complex datasets.',
      'Optimized layout performance using the Dagre algorithm.',
      'Designed a responsive UI for seamless knowledge visualization.'
    ],
    color: '#4ECDC4'
  },
  {
    id: 'code-debugging-assistant',
    title: 'AI Code Debugging Assistant',
    tagline: 'RAG-powered AI assistant for detecting and fixing code errors with high accuracy.',
    description: 'A low-latency AI tool built with LangChain and Groq to detect, explain, and fix bugs instantly.',
    longDescription: 'Engineered a RAG-powered assistant to overcome the context-awareness limitations of traditional debugging tools. Using FastAPI and FAISS for vector storage, the system provides one-click fixes and optimized error classification with high confidence scoring.',
    techStack: ['FastAPI', 'React', 'LangChain', 'Groq (LLaMA-3)', 'FAISS', 'Tailwind CSS', 'Python'],
    category: 'ai',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: true,
    year: 2026,
    status: 'live',
    highlights: [
      'Implemented RAG logic for high-accuracy error detection and fixes.',
      'Optimized for low-latency using LLaMA-3 and Groq inference.',
      'Developed one-click fix integration and error classification logic.',
      'Built with FAISS vector database for efficient context retrieval.'
    ],
    color: '#A78BFA'
  },
  {
    id: 'api-monitoring-system',
    title: 'SaaS API Monitoring Platform',
    tagline: 'Scalable observability platform for real-time API telemetry and traffic tracking.',
    description: 'A full-stack monitoring system using Node.js SDK to capture and visualize API telemetry.',
    longDescription: 'Designed a high-performance observability platform featuring API key authentication, async tracking, and rate limiting. The system uses a microservices architecture with RabbitMQ for message queuing and WebSocket dashboards for zero-latency logging.',
    techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'WebSockets'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2026,
    status: 'live',
    highlights: [
      'Engineered a scalable microservices architecture for high-volume telemetry.',
      'Implemented real-time WebSocket dashboards for instant observability.',
      'Built async tracking and rate limiting for optimized API performance.',
      'Integrated RabbitMQ for reliable background processing of metrics.'
    ],
    color: '#3B82F6'
  },
  {
    id: 'linear-regression-visualizer',
    title: 'ML: Linear Regression Visualizer',
    tagline: 'Interactive machine learning tool for visualizing cost functions and gradient descent.',
    description: 'A Python-based visualizer for exploring MSE, parameter tuning, and loss landscapes.',
    longDescription: 'Created to simplify the understanding of fundamental ML concepts like residuals and gradient descent. Built using Streamlit and Plotly, it provides real-time simulations and interactive loss landscape plots for parameter optimization.',
    techStack: ['Python', 'Streamlit', 'NumPy', 'Plotly'],
    category: 'ai',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2026,
    status: 'live',
    highlights: [
      'Developed real-time simulations for gradient descent and optimization.',
      'Implemented interactive MSE visualization and loss landscape plots.',
      'Optimized data visualization using Plotly and NumPy.',
      'Simplified complex ML concepts through intuitive interactive design.'
    ],
    color: '#10B981'
  },
  {
    id: 'yoursplit',
    title: 'YourSplit: Expense Management',
    tagline: 'Full-stack platform optimizing peer-to-peer settlements using graph algorithms.',
    description: 'A Next.js application that reduces transactions and optimizes cash flow between peers.',
    longDescription: 'Identified inefficiencies in traditional expense splitting systems and built a solution that uses graph algorithms to minimize debt chains. Built with Prisma and PostgreSQL for high reliability and consistent REST API performance.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2026,
    status: 'live',
    highlights: [
      'Implemented graph algorithms to minimize and optimize P2P settlements.',
      'Built a robust expense tracking and balance calculation engine.',
      'Designed a clean, intuitive UI for managing shared finances.',
      'Ensured high reliability with Prisma ORM and PostgreSQL.'
    ],
    color: '#F59E0B'
  },
  {
    id: 'propwise-ai',
    title: 'PropWise-AI',
    tagline: 'ML-driven property price prediction system using Random Forest models.',
    description: 'Predictive analytics platform for real estate factors and property valuation.',
    longDescription: 'Developed a machine learning model to predict property prices based on multiple real estate factors. Used Random Forest models and Scikit-learn for high-accuracy batch predictions and feature importance analysis.',
    techStack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Streamlit', 'matplotlib', 'seaborn'],
    category: 'ai',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2026,
    status: 'live',
    highlights: [
      'Built a high-accuracy price prediction model using Random Forest.',
      'Implemented comprehensive feature engineering and data preprocessing.',
      'Developed an interactive Streamlit web app for real-time predictions.',
      'Analyzed feature importance to provide market insights.'
    ],
    color: '#6366F1'
  },
  {
    id: 'tournasphere',
    title: 'TournaSphere',
    tagline: 'Full-stack tournament platform with dynamic bracket engines and leaderboards.',
    description: 'A scalable platform featuring role-based access, scheduling, and scoring systems.',
    longDescription: 'Created to solve the lack of scalability and role-based control in tournament management systems. Built with React and FastAPI, featuring a dynamic bracket engine and real-time leaderboards with JWT-based secure authentication.',
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Tailwind CSS', 'Docker', 'JWT'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2026,
    status: 'live',
    highlights: [
      'Developed a dynamic bracket engine for automated tournament logic.',
      'Implemented secure JWT-based authentication and role-based access.',
      'Built real-time leaderboards and automated scoring systems.',
      'Optimized deployment with Docker and PostgreSQL.'
    ],
    color: '#8B5CF6'
  },
  {
    id: 'alphapowerzone',
    title: 'AlphaPowerZone - APZ',
    tagline: 'Full-stack e-commerce app for fitness equipment with advanced admin controls.',
    description: 'E-commerce platform featuring cart management, CRUD operations, and Cloudinary integration.',
    longDescription: 'Built a comprehensive e-commerce ecosystem for fitness products. Features a robust admin dashboard for inventory management, secure JWT authentication, and seamless media uploads via Cloudinary.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma', 'SQL', 'JWT'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2025,
    status: 'live',
    highlights: [
      'Built a full-featured cart and checkout system with inventory sync.',
      'Developed an admin dashboard for real-time product management.',
      'Integrated Cloudinary for optimized media handling and uploads.',
      'Implemented secure JWT-based sessions and RESTful API architecture.'
    ],
    color: '#EC4899'
  },
  {
    id: 'volunteer-connect',
    title: 'Volunteer-Connect',
    tagline: 'Full-stack platform connecting volunteers and organizations for seamless participation.',
    description: 'Features event CRUD, signup management, and organizer dashboards with analytics.',
    longDescription: 'Identified gaps in volunteer tracking and event discovery. Built a platform to bridge these gaps, featuring automated attendance tracking and a data-driven dashboard for organizers using SQLite and Prisma.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma ORM', 'SQLite', 'JWT'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2025,
    status: 'live',
    highlights: [
      'Engineered an organizer dashboard with real-time event analytics.',
      'Implemented automated attendance tracking and signup management.',
      'Built a responsive UI for seamless event discovery and participation.',
      'Ensured secure user management with JWT and Prisma ORM.'
    ],
    color: '#F97316'
  },
  {
    id: 'mind-sparks',
    title: 'Mind Sparks',
    tagline: 'Web-based idea generation platform providing actionable project roadmaps.',
    description: 'Single Page Application (SPA) for category-based filtering and step-by-step guidance.',
    longDescription: 'Created to solve the problem of idea discovery and lack of guidance for creators. This SPA provides curated project ideas with detailed roadmaps and smart content rendering for maximum clarity.',
    techStack: ['React', 'JavaScript (ES6)', 'HTML', 'CSS'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/gitxpriyanshu',
    imageUrl: '/assets/images/projects/yt-hub.jpg', // Placeholder
    featured: false,
    year: 2025,
    status: 'live',
    highlights: [
      'Developed a smart content rendering engine for actionable roadmaps.',
      'Implemented category-based filtering for efficient idea discovery.',
      'Built a high-performance SPA with modular component structure.',
      'Focused on clean typography and intuitive navigation flows.'
    ],
    color: '#06B6D4'
  },
  {
    id: 'youtube-creator-hub',
    title: 'YouTube Creator Hub',
    tagline: 'Centralized dashboard for creator workflow management and growth strategies.',
    description: 'Features reusable UI components, clean navigation, and resource organization.',
    longDescription: 'Addressed the challenge of managing content ideas and learning resources. Built a centralized dashboard platform with modular structure to support growth strategies for emerging YouTube creators.',
    techStack: ['React', 'JavaScript', 'Responsive UI Design', 'Modular CSS'],
    category: 'web',
    liveUrl: 'https://youtube-creator-hub.vercel.app',
    githubUrl: 'https://github.com/gitxpriyanshu/youtube-creator-hub',
    imageUrl: '/assets/images/projects/yt-hub.jpg',
    featured: false,
    year: 2024,
    status: 'live',
    highlights: [
      'Built a centralized dashboard to support content planning and growth.',
      'Designed structured sections and reusable UI components.',
      'Optimized navigation flows for improved creator usability.',
      'Implemented a fully responsive, modular frontend architecture.'
    ],
    color: '#E11D48'
  }
];
