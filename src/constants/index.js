import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    docker,
    reactjs,
    redux,
    tailwind,
    typescript,
    vue,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    silk,
    shopify,
    pixelpier,
    learngpt,
    pitch,
    wefogit,
    jobit,
    tripguide,
    threejs,
    signalboosters,
    versaCreative,
    wallisbank,
    satpon,
    versaCreativeSite,
    geospace,
    tagHouston
  } from "../assets";
  
  import celltower from "../assets/celltower.png";
  import briefly from "../assets/briefly.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "summary",
      title: "Summary",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Engineer",
      icon: reactjs,
    },
    {
      title: "AI & Automation Developer",
      icon: creator,
    },
    {
      title: "Cloud & API Specialist",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "vue",
      icon: vue,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Versa Creative",
      icon: versaCreative,
      iconBg: "#383E56",
      date: "Oct 2025 - Present",
      points: [
        "Manage and build client sites on WordPress ecosystems using Webflow, Divi, and Elementor.",
        "Ship responsive landing pages and campaign microsites with performance-first setups, including lazy loading and optimized media; typical Lighthouse perf scores land at 90+.",
        "Maintain and extend theme configurations, custom CSS/JS, and plugin stacks to keep multi-brand experiences consistent, accessible, and easy to update",
        "Coordinate content updates and QA with design and marketing stakeholders to deliver pixel-accurate releases on schedule; routinely turn around 5–8 pages per sprint."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Silk Worldwide LLC",
      icon: silk,
      iconBg: "#383E56",
      date: "Sept 2023 - Oct 2025",
      points: [
        "Led development of global e-commerce platform, achieving 25% increase in sales through optimized user experience and performance improvements.",
        "Implemented responsive design and navigation enhancements, resulting in 40,000 additional monthly mobile users and 15% lower bounce rate.",
        "Developed and integrated Mapbox GL JS tool for real-time cell tower location visualization, enhancing network coverage analysis capabilities.",
        "Executed comprehensive SEO optimization strategy, achieving top 5 Google rankings for key pages and driving 10,000+ monthly organic visitors.",
        "Created engaging web pages and blogs for product launches, attracting 25,000+ new visitors during release periods."
      ],
    },
    {
      title: "UI/UX Developer",
      company_name: "Pixel Pier",
      icon: pixelpier,
      iconBg: "#383E56",
      date: "September 2020 - Feb 2023",
      points: [
        "Spearheaded UI/UX development initiatives across IoT, Fintech, and E-commerce projects, delivering innovative solutions for diverse client needs.",
        "Engineered an Angular-based inventory management system for automotive clients, streamlining parts tracking and reducing inventory loss.",
        "Developed Vue.js employee feedback system, reducing report generation time by 40% and improving engagement metrics by 15%.",
        "Built financial analysis platform using Python, JavaScript, and D3.js, enabling dynamic data visualization and real-time analysis.",
        "Implemented real-time order processing system using AWS Lambda and API Gateway, achieving 30% faster processing and 70% fewer sync errors."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Herby proved me wrong.",
    //   name: "Weezy",
    //   designation: "Young Moolah",
    //   company: "Young Money",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lil_Wayne.jpg/1024px-Lil_Wayne.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Herby does.",
    //   name: "Chris Brown",
    //   designation: "Breezy",
    //   company: "Lightskin crew",
    //   image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-08/220802-chris-brown-jm-1301-c21d47.jpg",
    // },
    // {
    //   testimonial:
    //     "After Fitzherbert optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "John Wick",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://www.indiewire.com/wp-content/uploads/2020/04/tilezoom.jpeg",
    // },
  ];
  
  const projects = [
    {
      name: "GPTLearn",
      description:
        "I built an interactive app that helps people practice prompt engineering with hands-on examples, exercises, and feedback.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "chatgpt",
          color: "pink-text-gradient",
        },
      ],
      image: learngpt,
      source_code_link: "https://github.com/romeoxt/chatgpt-learn",
    },
    {
      name: "Cellular Path",
      description:
        "I turned a pitch deck into a web-first investor experience, guiding new product ideas through an interactive story.",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: pitch,
      source_code_link: "https://cellularpath.com/",
    },
    {
      name: "We Fog It",
      description:
        "I launched a WordPress site for a disinfecting company with clear service messaging and conversion-focused layouts.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: wefogit,
      source_code_link: "https://wefogit.com/",
    },
    {
      name: "Cell Tower Finder",
      description:
        "I built a Mapbox GL JS map that lets users locate nearby 4G/5G towers and optimize reception with a simple search.",
      tags: [
        {
          name: "mapbox",
          color: "blue-text-gradient",
        },
        {
          name: "geolocation",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: celltower,
      source_code_link: "https://www.wilsonamplifiers.com/blog/finding-cell-tower-locations-the-complete-guide/",
    },
    {
      name: "Briefly AI Meeting Briefs",
      description:
        "I built an AI meeting brief service that turns email threads into concise decisions and action items automatically.",
      tags: [
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "email-processing",
          color: "green-text-gradient",
        },
        {
          name: "automation",
          color: "pink-text-gradient",
        },
      ],
      image: briefly,
      source_code_link: "https://www.briefed.dev/",
    },
    {
      name: "SignalBoosters",
      description:
        "I led the UX and ecommerce build for signal boosters, adding product finders, rich category navigation, and tailored solutions for homes, vehicles, offices, and commercial spaces.",
      tags: [
        {
          name: "e-commerce",
          color: "blue-text-gradient",
        },
        {
          name: "telecommunications",
          color: "green-text-gradient",
        },
        {
          name: "user experience",
          color: "pink-text-gradient",
        },
      ],
      image: signalboosters,
      source_code_link: "https://www.signalboosters.com/",
    },
    {
      name: "Wallis Bank",
      description:
        "I refreshed the banking site with responsive layouts, clear product pathways, and compliance-friendly blocks that keep pages easy to update.",
      tags: [
        { name: "wordpress", color: "blue-text-gradient" },
        { name: "divi", color: "green-text-gradient" },
        { name: "accessibility", color: "pink-text-gradient" },
      ],
      image: wallisbank,
      source_code_link: "https://wallisbank.com/",
    },
    {
      name: "Satterfield & Pontikes (S&P)",
      description:
        "I built a portfolio-first experience for S&P that highlights each market sector with fast media, intuitive navigation, and structured case study templates.",
      tags: [
        { name: "webflow", color: "blue-text-gradient" },
        { name: "seo", color: "green-text-gradient" },
        { name: "performance", color: "pink-text-gradient" },
      ],
      image: satpon,
      source_code_link: "https://satpon.com/",
    },
    {
      name: "Versa Creative",
      description:
        "I ship landing pages and site refinements that align web, creative, and digital marketing offerings with fast-loading Divi builds and consistent brand components.",
      tags: [
        { name: "divi", color: "blue-text-gradient" },
        { name: "wordpress", color: "green-text-gradient" },
        { name: "performance", color: "pink-text-gradient" },
      ],
      image: versaCreativeSite,
      source_code_link: "https://versacreative.com/",
    },
    {
      name: "Geospace Technologies",
      description:
        "I produced a technical catalog for geophysical products with structured navigation and optimized imagery to keep complex content clear.",
      tags: [
        { name: "wordpress", color: "blue-text-gradient" },
        { name: "elementor", color: "green-text-gradient" },
        { name: "b2b", color: "pink-text-gradient" },
      ],
      image: geospace,
      source_code_link: "https://www.geospace.com/",
    },
    {
      name: "Texas Association of Governments (TAG Houston)",
      description:
        "I maintain an event and membership site with modular blocks that spotlight sponsors, programs, and frequent content updates.",
      tags: [
        { name: "wordpress", color: "blue-text-gradient" },
        { name: "backbone", color: "green-text-gradient" },
        { name: "content-updates", color: "pink-text-gradient" },
      ],
      image: tagHouston,
      source_code_link: "https://taghouston.org/",
    },
  ];
  
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", proficiency: 90 },
        { name: "Python", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Java", proficiency: 75 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React.js", proficiency: 90 },
        { name: "Vue.js", proficiency: 85 },
        { name: "Angular", proficiency: 80 },
        { name: "Django", proficiency: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "AWS", proficiency: 80 },
        { name: "Docker", proficiency: 75 },
        { name: "Git", proficiency: 90 },
        { name: "MongoDB", proficiency: 85 }
      ]
    }
  ];
  
  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "certification-link"
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2023",
      link: "certification-link"
    }
  ];
  
  const achievements = [
    {
      title: "Code Performance",
      metric: "30%",
      description: "Average improvement in application performance"
    },
    {
      title: "User Engagement",
      metric: "25k+",
      description: "Monthly active users across projects"
    },
    {
      title: "Technical Leadership",
      metric: "15+",
      description: "Successfully delivered projects"
    }
  ];
  
  const blogPosts = [
    {
      title: "Building Scalable Applications with AWS",
      date: "2024",
      link: "blog-link",
      description: "Deep dive into AWS architecture best practices"
    },
    {
      title: "Modern Frontend Performance Optimization",
      date: "2024",
      link: "blog-link",
      description: "Techniques for optimizing React applications"
    }
  ];
  
  const education = [
    {
      degree: "Bachelor of Science in Biotechnology",
      institution: "University of Houston - Downtown",
      date: "Graduation Year",
      highlights: [
        "Relevant coursework: Data Structures, Algorithms, Software Engineering",
        "GPA: 2.8",
        "Notable projects or research"
      ]
    }
  ];
  
  const professionalSummary = {
    title: "Professional Summary",
    points: [
      "6+ years of experience in full-stack development",
      "Proven success in building scalable, secure web platforms",
      "Strong focus on UI/UX, performance optimization, and accessibility",
      "Experience in AI integration, automation, and cloud infrastructure",
      "Skilled in agile methodologies and cross-functional collaboration"
    ]
  };



  const socialLinks = {
    github: [
      { username: "romeoxt", url: "https://github.com/romeoxt" },
      { username: "flegall100", url: "https://github.com/flegall100" }
    ],
    linkedin: { username: "flegall100", url: "https://linkedin.com/in/flegall100" },
    twitter: { username: "", url: "" } // Add if needed
  };
  
  export { 
    services, 
    technologies, 
    experiences, 
    testimonials, 
    projects, 
    skills, 
    certifications,
    professionalSummary,
    socialLinks
  };
  
