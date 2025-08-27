import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import About from "./About";

export default function Landing() {
  const containerRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth;
      setScrollWidth(totalWidth - window.innerWidth);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${scrollY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: scrollWidth + windowHeight }}>
        <div
          ref={containerRef}
          className="fixed top-0 left-0 flex flex-row w-max h-screen"
        >
          {/* Section Landing */}
          <div className="w-screen h-screen flex items-center justify-center flex-shrink-0 bg-background">
            <motion.h1
              className="text-7xl font-extrabold text-primary drop-shadow-[4px_4px_0_#000] uppercase"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Bienvenue
            </motion.h1>
          </div>

          {/* Transition dégradé horizontal avec points */}
<div className="w-40 h-screen flex-shrink-0 relative overflow-hidden">
  {/* Dégradé */}
  <div className="absolute inset-0 bg-gradient-to-r from-background to-primary"></div>

  {/* Points style Persona 5 */}
  <div
    className="absolute inset-0 opacity-40"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(0, 0, 0, 0.5) 1px, transparent 2px)",
      backgroundSize: "8px 8px",
    }}
  ></div>
</div>



          {/* Section About */}
<div className="w-[200vw] h-screen flex-shrink-0 bg-primary text-text flex items-center justify-center">
  <About />
</div>

        </div>
      </div>
    </>
  );
}
