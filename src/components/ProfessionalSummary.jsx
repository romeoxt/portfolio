import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { professionalSummary } from "../constants";

const ProfessionalSummary = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Career Overview</p>
        <h2 className={styles.sectionHeadText}>{professionalSummary.title}</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl leading-[30px]"
      >
        <div className="mt-5 flex flex-col gap-3 sm:gap-4">
          {professionalSummary.points.map((point, index) => (
            <div
              key={`summary-point-${index}`}
              className="flex items-start sm:items-center gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0 w-2 h-2 bg-[#915EFF] rounded-full mt-2 sm:mt-0" />
              <p className="text-white-100 text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px]">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ProfessionalSummary, "summary"); 
