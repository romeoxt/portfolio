import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
      {technologies.map((technology) => {
        const isThree = technology.icon?.includes?.("threejs");
        return (
          <div
            key={technology.name}
            className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-tertiary border border-white/5 tech-icon-float"
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              loading="lazy"
              decoding="async"
              width={64}
              height={64}
              className={`w-12 h-12 sm:w-16 sm:h-16 object-contain ${isThree ? "invert" : ""}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
