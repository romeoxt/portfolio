import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    perspective={1200}
    scale={1.01}
    transitionSpeed={250}
    tiltReverse={false}
    gyroscope={false}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[260px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center leading-tight'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]'
      >
        I’m a Full Stack Software Developer with 6+ years of experience building scalable, data-driven web applications across e-commerce, fintech, IoT, and healthcare. I specialize in JavaScript, React, Next.js, Node.js, and Python, developing front-end interfaces, RESTful APIs, and backend services with a focus on performance, scalability, and maintainability.
        <br /><br />
        I have hands-on experience with AWS cloud services, serverless and containerized deployments, geospatial data visualization using Mapbox, and workflow automation using LLMs, OpenAI APIs, and n8n. With a background in biotechnology, I’m particularly interested in health tech, clinical data platforms, and data-intensive applications. I thrive in remote, collaborative environments that value clean architecture, code quality, and user-centered design.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-6 sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
