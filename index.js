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
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Silk Worldwide LLC",
      icon: silk,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Spearheaded the development and ongoing maintenance of the company's e-commerce website, employing HTML and CSS to create a responsive, user-friendly interface, enhancing the customer experience and facilitating seamless online transactions.",
        "Collaborated closely with marketing and product teams to design and implement visually appealing web pages for new product launches and promotional campaigns, contributing significantly to increased web traffic and customer engagement.",
        "Optimized website performance and accessibility by implementing advanced CSS techniques and Python scripts, ensuring fast load times, smooth navigation, and compliance with web accessibility standards, thus expanding the customer base.",
        "Initiated and drove the development of an interactive Vue-based quiz application for customer engagement, enhancing user interaction and providing valuable insights into customer preferences and behavior.",
        "Conducted extensive QA on the website’s frontend, analyzing data and user feedback to identify and troubleshoot issues, leading to improved user experience and a measurable reduction in customer-reported issues. Performed daily site health checks for broken links and site errors."
      ],
    },
    {
      title: "UI/UX Developer",
      company_name: "Pixel Pier",
      icon: pixelpier,
      iconBg: "#383E56",
      date: "September 2020 - Feburary 2023",
      points: [
        "Spearheaded the design and implementation of user-friendly web applications, focusing on optimizing user engagement and satisfaction. Utilized React.js and other front-end technologies to build interactive interfaces that are both aesthetically pleasing and functional.",
        "Worked closely with product managers, designers, and developers to ensure a seamless user experience from concept to deployment. Facilitated brainstorming sessions and workshops to define user flows and discuss design enhancements, ensuring that all stakeholder and user needs were met.",
        "Conducted extensive user research and usability testing to gather insights and identify pain points in the user journey. Applied findings to refine designs and iteratively improve the products, significantly reducing user drop-off rates and increasing satisfaction metrics.",
        "Led a team of junior developers and designers, providing guidance and mentorship in best practices for UX/UI development. Reviewed team contributions for adherence to design standards and code quality, fostering a culture of excellence and continuous improvement",
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
  