import React from "react";
import { m } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const isGithubRepo = source_code_link.includes("github.com");

  return (
    <m.div
      variants={fadeIn("up", "tween", Math.min(index * 0.08, 0.4), 0.45)}
      className="h-full"
    >
      <div className="bg-tertiary p-4 sm:p-5 rounded-2xl sm:w-[360px] w-full max-w-[320px] sm:max-w-none flex flex-col h-full min-h-[560px] overflow-hidden hover:-translate-y-1 transition-transform duration-200">
        <div
          className={`w-full h-full flex flex-col ${!isGithubRepo ? "cursor-pointer" : ""}`}
          onClick={!isGithubRepo ? () => window.open(source_code_link, "_blank") : undefined}
        >
          <div className="relative w-full h-[200px] sm:h-[230px]">
            <img
              src={image}
              alt={`${name} screenshot`}
              loading="lazy"
              decoding="async"
              width={360}
              height={230}
              className="w-full h-full object-cover rounded-2xl"
            />

            {isGithubRepo && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    width={20}
                    height={20}
                    loading="lazy"
                    decoding="async"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex-1 flex flex-col gap-4">
            <div>
              <h3 className="text-white font-display font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px]">
                {name}
              </h3>
              <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-[21px] sm:leading-[23px] min-h-[92px]">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[12px] sm:text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="flex items-center gap-1 text-sm font-semibold text-accent hover:text-white transition"
              >
                {isGithubRepo ? "View repo" : "View site"}
                <span aria-hidden="true" className="text-[12px]">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

const Works = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </m.div>

      <div className="w-full flex">
        <m.p
          variants={fadeIn("", "tween", 0.1, 0.5)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
        >
          Selected builds with live outcomes: performance, conversion, and delivery under real client constraints. Each card links to the repo or live site.
        </m.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-5 sm:gap-7 items-stretch">
        {projects.slice().reverse().map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
