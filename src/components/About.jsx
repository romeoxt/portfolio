import React from "react";
import { m } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <m.div
    variants={fadeIn("right", "tween", index * 0.15, 0.45)}
    className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[260px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
      <img
        src={icon}
        alt={title}
        loading="lazy"
        decoding="async"
        width={64}
        height={64}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />

      <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center leading-tight">
        {title}
      </h3>
    </div>
  </m.div>
);

const About = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </m.div>

      <m.p
        variants={fadeIn("", "tween", 0.1, 0.6)}
        className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
      >
        I’m a Full Stack Software Developer with 6+ years of experience building scalable, data-driven web applications across e-commerce, fintech, IoT, and healthcare. I specialize in JavaScript, React, Next.js, Node.js, and Python, developing front-end interfaces, RESTful APIs, and backend services with a focus on performance, scalability, and maintainability.
        <br /><br />
        I have hands-on experience with AWS cloud services, serverless and containerized deployments, geospatial data visualization using Mapbox, and workflow automation using LLMs, OpenAI APIs, and n8n. With a background in biotechnology, I’m particularly interested in health tech, clinical data platforms, and data-intensive applications. I thrive in remote, collaborative environments that value clean architecture, code quality, and user-centered design.
      </m.p>

      <div className="mt-20 flex flex-wrap justify-center gap-6 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
