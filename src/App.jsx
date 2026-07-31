import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DeferredMount from "./components/DeferredMount";

const About = lazy(() => import("./components/About"));
const ProfessionalSummary = lazy(() => import("./components/ProfessionalSummary"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <Suspense fallback={null}>
            <About />
            <ProfessionalSummary />
            <Experience />
            <Tech />
            <Works />
          </Suspense>

          <Suspense fallback={null}>
            <DeferredMount rootMargin="300px" minHeight={400}>
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </DeferredMount>
          </Suspense>
        </div>
      </LazyMotion>
    </BrowserRouter>
  );
};

export default App;
