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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: creator,
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
      title: "Frontend Developer",
      company_name: "Silk Worldwide LLC",
      icon: silk,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Lead the continuous development of the company's e-commerce website, using HTML and CSS to craft responsive, user-friendly interfaces that streamline customer interactions and enhance the online shopping experience.",
        "Collaborate closely with the marketing and product teams to design and implement targeted web pages and blogs that support new product launches and promotional campaigns.",
        "Conducted daily web performance analysis using Google Analytics and SEMrush, identifying trends and anomalies to optimize user experience and search engine rankings.",
        "Participated in revamp of marquee website using HTML, CSS, and JavaScript to make it easier to navigate and more visually appealing, which kept visitors engaged and more likely to return.",
        "Engineered a Vue.js-based interactive product quiz to direct traffic to key products, enhancing customer engagement and contributing to a targeted increase in sales."
      ],
    },
    {
      title: "UI/UX Developer",
      company_name: "Pixel Pier",
      icon: pixelpier,
      iconBg: "#383E56",
      date: "September 2020 - Feburary 2023",
      points: [
        "Implemented an inventory management system for an automotive dealership, enabling real-time inventory updates and search functionalities with AngularJS.",
        "Built a comprehensive supply chain management dashboard using Vue.js, integrating with IoT devices to track real-time inventory and logistics data.",
        "Developed an employee feedback and performance tracking system using Vue.js, streamlining feedback collection and reporting processes.",
        "Developed a comprehensive financial analysis and reporting website for a fintech client using Python  and JavaScript. Integrated D3.js for dynamic data visualization, enhancing the interactivity and real-time data processing capabilities.",
        "Developed a real-time order processing system using AWS Lambda and API Gateway. Integrated with external payment and inventory APIs via webhooks, automating order updates and inventory synchronization across platforms.",
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
        "An engaging and interactive web application designed to help users master the art of AI prompt engineering. Through the platform, users can access a diverse array of examples, enabling them to practice their skills, test their understanding of crucial concepts, and receive valuable feedback.",
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
      name: "Product Demo Site",
      description:
        "Engineered an interactive website tailored for pitching new product ideas to investors, transforming the traditional pitch deck into a fully functional, web-based presentation platform",
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
      source_code_link: "http://socasite.s3-website.us-east-2.amazonaws.com/index.html",
    },
    {
      name: "We Fog It",
      description:
        "A comprehensive website for a disinfecting company using BioProtect to Fog Mold, Mildew, Bacteria and Fungus.",
      tags: [
        {
          name: "wordpresss",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  