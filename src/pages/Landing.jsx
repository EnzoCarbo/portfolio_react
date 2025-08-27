import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

  // Animations réutilisables
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  // === ABOUT DATA ===
  const aboutItems = [
    {
      title: "Parcours académique",
      border: "border-background",
      color: "text-background",
      text: "4 ans à Luminy en biochimie avant de me réorienter vers l’informatique et le développement.",
    },
    {
      title: "Formation",
      border: "border-accent",
      color: "text-accent",
      text: "Étudiant en 2e année d’informatique à Ynov Aix Campus, spécialisation développement logiciel et web.",
    },
    {
      title: "Passions & Loisirs",
      border: "border-secondary",
      color: "text-secondary",
      text: "Développement, jeux vidéo, apprentissage des langues, collection de cartes à jouer.",
    },
    {
      title: "Expérience & Compétences",
      border: "border-highlight",
      color: "text-highlight",
      text: "Stages HOMEPERF (ASP.NET, VB.NET), La Poste (travail d’équipe), Ynov (Full-stack, Unity, UE5, etc.).",
    },
  ];

  // === PROJECTS DATA ===
  const projects = [
    {
      name: "Portfolio React",
      tech: "React, Tailwind, Framer Motion",
      desc: "Site personnel pour présenter mon profil et mes projets.",
    },
    {
      name: "Jeu Unity",
      tech: "C#, Unity Engine",
      desc: "Prototype de jeu 2D avec mécaniques de plateforme.",
    },
    {
      name: "Application Web ASP.NET",
      tech: "ASP.NET, VB.NET, SQL Server",
      desc: "Projet en stage pour la gestion de documents internes.",
    },
    {
      name: "Clone Netflix",
      tech: "Next.js, TMDB API",
      desc: "Application de streaming avec recherche et filtres.",
    },
  ];

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
            <div className="absolute inset-0 bg-gradient-to-r from-background to-primary"></div>
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
          <div className="w-[200vw] min-h-screen bg-primary text-text flex justify-center items-center p-12">
            <div className="relative w-full flex items-center justify-center">
              {/* Ligne horizontale */}
              <motion.div
                className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, black 0 10px, transparent 10px 20px)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
              />

              {/* Cartes */}
              <div className="grid grid-cols-4 gap-8 w-[200vw] px-16 flex items-center justify-center">
                {aboutItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`relative w-full max-w-[400px] bg-surface p-8 rounded-2xl shadow-lg border-t-8 ${item.border} ${
                      i % 2 === 0 ? "mb-64" : "mt-64"
                    }`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4 }}
                    custom={i}
                  >
                    <h2 className={`text-3xl font-bold mb-4 ${item.color}`}>
                      {item.title}
                    </h2>
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

                    <div className="w-40 h-screen flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-background to-primary"></div>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.5) 1px, transparent 2px)",
                backgroundSize: "8px 8px",
              }}
            ></div>
          </div>

          {/* Section Projects */}
          <div className="w-[100vw] min-h-screen bg-background text-text flex justify-center items-center p-12">
            <div className="grid grid-cols-2 gap-12 w-[1600px]">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="bg-surface p-8 rounded-2xl shadow-xl border-l-8 border-primary"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  custom={i}
                >
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {project.name}
                  </h2>
                  <p className="text-accent font-semibold mb-2">
                    {project.tech}
                  </p>
                  <p className="text-lg">{project.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
