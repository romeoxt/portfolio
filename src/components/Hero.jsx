import { lazy, Suspense, useEffect, useState } from "react";

import { styles } from "../style";
import DeferredMount from "./DeferredMount";

const ChessCanvas = lazy(() => import("./canvas/Chessboard"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="hero-atmosphere absolute inset-0 z-0" aria-hidden="true" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-px sm:h-80 h-40 accent-gradient" />
        </div>

        <div className="mt-1">
          <p className="font-sans text-accent text-[13px] sm:text-[14px] uppercase tracking-[0.22em] mb-3">
            Full Stack Developer
          </p>
          <h1 className={`${styles.heroHeadText}`}>
            Fitzherbert
          </h1>
          <p className={`${styles.heroSubText} mt-5`}>
            I ship WordPress, Webflow, and React experiences that load fast,
            convert clearly, and hold up under real client deadlines.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-primary hover:bg-accent-dim transition-colors"
            >
              View work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 px-6 py-3 text-[15px] font-medium text-white hover:border-accent hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {!isMobile && (
        <DeferredMount className="absolute inset-0 z-[1]" idleMs={2800}>
          <Suspense fallback={null}>
            <ChessCanvas />
          </Suspense>
        </DeferredMount>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary/60 flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-accent mb-1 scroll-cue" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
