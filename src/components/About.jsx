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
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    tiltReverse={true}
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
        I'm a Full Stack Developer with over six years of experience building scalable, data-driven web applications across industries like e-commerce, fintech, IoT, and healthcare. I specialize in React, Next.js, Node.js, and Python, with hands-on expertise in cloud services (AWS), geospatial visualization (Mapbox), and intelligent automation using LLMs and tools like n8n. My background in biotechnology deepens my interest in health-focused innovation, and I thrive in collaborative, remote environments where performance, clean architecture, and user experience are top priorities.
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
