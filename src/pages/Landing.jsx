import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Composant de particules flottantes Persona 5
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="p5-particles">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="p5-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

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

  // Animations Persona 5
  const p5CardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        delay: i * 0.2,
        type: "spring",
        stiffness: 100
      },
    }),
  };

  const maskVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, type: "spring", stiffness: 50 }
    }
  };

  // === ABOUT DATA ===
  const aboutItems = [
    {
      title: "Parcours académique",
      icon: "🎓",
      color: "border-p5-red",
      bgColor: "bg-p5-red/10",
      text: "4 ans à Luminy en biochimie avant de me réorienter vers l'informatique et le développement.",
    },
    {
      title: "Formation",
      icon: "⚡",
      color: "border-p5-accent",
      bgColor: "bg-p5-accent/10",
      text: "Étudiant en 2e année d'informatique à Ynov Aix Campus, spécialisation développement logiciel et web.",
    },
    {
      title: "Passions & Loisirs",
      icon: "🎮",
      color: "border-accent",
      bgColor: "bg-accent/10",
      text: "Développement, jeux vidéo, apprentissage des langues, collection de cartes à jouer.",
    },
    {
      title: "Expérience & Compétences",
      icon: "🚀",
      color: "border-highlight",
      bgColor: "bg-highlight/10",
      text: "Stages HOMEPERF (ASP.NET, VB.NET), La Poste (travail d'équipe), Ynov (Full-stack, Unity, UE5, etc.).",
    },
  ];

  // === PROJECTS DATA ===
  const projects = [
    {
      name: "Portfolio React",
      tech: "React, Tailwind, Framer Motion",
      desc: "Site personnel pour présenter mon profil et mes projets.",
      icon: "⚛️"
    },
    {
      name: "Jeu Unity",
      tech: "C#, Unity Engine",
      desc: "Prototype de jeu 2D avec mécaniques de plateforme.",
      icon: "🎯"
    },
    {
      name: "Application Web ASP.NET",
      tech: "ASP.NET, VB.NET, SQL Server",
      desc: "Projet en stage pour la gestion de documents internes.",
      icon: "🌐"
    },
    {
      name: "Clone Netflix",
      tech: "Next.js, TMDB API",
      desc: "Application de streaming avec recherche et filtres.",
      icon: "🎬"
    },
  ];

  // === CONTACT DATA ===
  const contactItems = [
    {
      name: "Email",
      value: "enzo.dev.contact@gmail.com",
      icon: "✉️",
      bgColor: "bg-p5-red/10",
      link: "mailto:enzo.dev.contact@gmail.com"
    },
    {
      name: "LinkedIn",
      value: "Enzo Dev",
      icon: "💼",
      bgColor: "bg-p5-accent/10",
      link: "https://www.linkedin.com/in/enzo-dev/"
    },
    {
      name: "GitHub",
      value: "EnzoDev",
      icon: "👾",
      bgColor: "bg-highlight/10",
      link: "https://github.com/EnzoDev"
    },
    {
      name: "Twitter",
      value: "@EnzoDev",
      icon: "🐦",
      bgColor: "bg-p5-red/10",
      link: "https://twitter.com/EnzoDev"
    },
  ];

  return (
    <>
      <div style={{ height: scrollWidth + windowHeight }}>
        <div
          ref={containerRef}
          className="fixed top-0 left-0 flex flex-row w-max h-screen"
        >
          {/* Section Landing Persona 5 */}
          <div className="w-screen h-screen flex items-center justify-center flex-shrink-0 bg-background relative overflow-hidden">
            {/* Particules flottantes */}
            <FloatingParticles />
            
            {/* Motif de fond Persona 5 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E60012' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Masque Persona 5 flottant */}
            <motion.div
              className="absolute top-20 right-20 w-32 h-32 opacity-30"
              variants={maskVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="w-full h-full bg-p5-red rounded-full relative p5-mask">
                <div className="absolute inset-2 bg-background rounded-full"></div>
                <div className="absolute top-1 left-1/2 w-1 h-1 bg-p5-red rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-3 left-1/2 w-3 h-1 bg-p5-red rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-5 left-1/2 w-5 h-1 bg-p5-red rounded-full transform -translate-x-1/2"></div>
              </div>
            </motion.div>

            {/* Titre principal avec style Persona 5 */}
            <div className="relative z-10 text-center">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="w-24 h-1 bg-p5-red mx-auto mb-4 p5-glow"></div>
                <div className="w-16 h-1 bg-p5-accent mx-auto mb-4"></div>
                <div className="w-8 h-1 bg-accent mx-auto"></div>
              </motion.div>
              
              <motion.h1
                className="text-8xl font-p5 font-black text-highlight tracking-wider mb-6 p5-text-glow"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
              >
                ENZO
              </motion.h1>
              
              <motion.p
                className="text-2xl font-p5 font-bold text-p5-accent tracking-widest uppercase"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Développeur Full-Stack
              </motion.p>
              
              {/* Sous-titre avec effet de glitch */}
              <motion.p
                className="text-lg font-p5 text-accent mt-4 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                "Take Your Heart" - Persona 5
              </motion.p>
            </div>

            {/* Indicateur de scroll Persona 5 */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1 h-16 bg-gradient-to-b from-p5-red to-transparent p5-glow"></div>
            </motion.div>
          </div>

          {/* Transition Persona 5 avec motif de masque */}
          <div className="w-40 h-screen flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-p5-red"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E60012' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>

          {/* Section About Persona 5 */}
          <div className="w-[200vw] min-h-screen bg-p5-red text-text flex justify-center items-center p-12 relative overflow-hidden">
            {/* Motif de fond */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 8L56 0h2L40 18v-2zm0 8L64 8h2L40 26v-2zm0 8L72 16h2L40 34v-2zm0 8L80 24h2L40 42v-2zm0 8L80 32h2L40 50v-2zm0 8L80 40h2L40 58v-2zm0 8L80 48h2L40 66v-2zm0 8L80 56h2L40 74v-2zm0 8L80 64h2L40 82v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Effet visuel Persona 5 pour About */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Cadrillage Persona 5 */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.9'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm0-20h1l-1 1V0zm0 2l2-2h1l-3 3V2zm0 2l4-4h1L20 5V4zm0 4l8-8h1L20 9V8zm0 4l12-12h1L20 13v-1zm0 4l16-16h1L20 17v-1zm0 4l20-20h1L20 21v-1zm0 4l20-16h1L20 25v-1zm0 4l20-12h1L20 29v-1zm0 4l20-8h1L20 33v-1zm0 4l20-4h1L20 37v-1zm0 4l20 0h1L20 41v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Morgana - Personnage iconique de Persona 5 */}
              <motion.div
                className="absolute bottom-8 right-8 w-32 h-32 opacity-30"
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-2xl shadow-blue-500/30 flex items-center justify-center">
                  <span className="text-6xl">🐱</span>
                </div>
                {/* Effet de lueur Persona 5 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full animate-pulse"></div>
              </motion.div>
              
              {/* Lignes géométriques animées */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {/* Ligne diagonale principale */}
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-p5-accent via-white to-p5-accent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                
                {/* Ligne horizontale */}
                <motion.div
                  className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-p5-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1 }}
                />
                
                {/* Points lumineux */}
                <motion.div
                  className="absolute top-20 left-20 w-6 h-6 bg-p5-accent rounded-full shadow-lg shadow-p5-accent/50"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div
                  className="absolute bottom-20 right-20 w-5 h-5 bg-white rounded-full shadow-lg shadow-white/50"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
                />
                
                <motion.div
                  className="absolute top-1/2 right-20 w-6 h-6 bg-p5-accent rounded-full shadow-lg shadow-p5-accent/50"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </div>

            <div className="relative w-full flex items-center justify-center">
              {/* Ligne horizontale stylisée */}
              <motion.div
                className="absolute top-1/2 left-0 h-2 w-full -translate-y-1/2"
                style={{
                  background: "repeating-linear-gradient(to right, #FFFFFF 0 20px, transparent 20px 40px)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
              />

              {/* Cartes Persona 5 */}
              <div className="grid grid-cols-4 gap-8 w-[200vw] px-16 flex items-center justify-center">
                {aboutItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`relative w-full max-w-[400px] bg-background p-8 rounded-none shadow-2xl border-l-8 ${item.color} ${
                      i % 2 === 0 ? "mb-64" : "mt-64"
                    } transform hover:scale-105 transition-transform duration-300 p5-card-hover`}
                    variants={p5CardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4 }}
                    custom={i}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(230, 0, 18, 0.5)"
                    }}
                  >
                    {/* Icône stylisée */}
                    <div className={`text-4xl mb-4 ${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    
                    <h2 className={`text-3xl font-p5 font-bold mb-4 text-highlight tracking-wider`}>
                      {item.title}
                    </h2>
                    <p className="text-lg leading-relaxed font-p5">{item.text}</p>
                    
                    {/* Bordure décorative */}
                    <div className={`absolute bottom-0 left-0 h-1 w-full ${item.color.replace('border-', 'bg-')}`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Transition inverse */}
          <div className="w-40 h-screen flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-background to-p5-red"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E60012' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>

          {/* Section Projects Persona 5 */}
          <div className="w-[100vw] min-h-screen bg-background text-text flex justify-center items-center p-12 relative overflow-hidden">
            {/* Motif de fond subtil */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E60012' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Titre de section Projects */}
            <motion.div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-10"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl font-p5 font-black text-p5-red tracking-wider mb-4 p5-text-glow">
                PROJETS
              </h2>
              <div className="w-32 h-1 bg-p5-red mx-auto"></div>
            </motion.div>

            {/* Grille des projets en disposition originale */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Projet 1 - Grande carte centrale */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-surface p-8 rounded-none shadow-2xl border-l-8 border-p5-red z-20"
                variants={p5CardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={0}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(230, 0, 18, 0.3)"
                }}
              >
                <div className="text-4xl mb-4 bg-p5-red/10 w-16 h-16 rounded-full flex items-center justify-center">
                  {projects[0].icon}
                </div>
                <h2 className="text-3xl font-p5 font-bold text-p5-red tracking-wider mb-4">
                  {projects[0].name}
                </h2>
                <p className="text-p5-accent font-p5 font-semibold mb-4 tracking-wider uppercase">
                  {projects[0].tech}
                </p>
                <p className="text-lg font-p5 leading-relaxed mb-6">{projects[0].desc}</p>
                <motion.button
                  className="px-6 py-3 bg-p5-red text-white font-p5 font-bold tracking-wider uppercase hover:bg-p5-accent transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.button>
              </motion.div>

              {/* Projet 2 - Carte en haut à gauche */}
              <motion.div
                className="absolute left-16 top-16 w-72 bg-surface p-6 rounded-none shadow-2xl border-l-8 border-p5-accent transform -rotate-12"
                variants={p5CardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={1}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  boxShadow: "0 0 40px rgba(255, 45, 149, 0.3)"
                }}
              >
                <div className="text-3xl mb-3 bg-p5-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {projects[1].icon}
                </div>
                <h3 className="text-2xl font-p5 font-bold text-p5-accent tracking-wider mb-3">
                  {projects[1].name}
                </h3>
                <p className="text-sm font-p5 font-semibold text-accent tracking-wider uppercase mb-3">
                  {projects[1].tech}
                </p>
                <p className="text-base font-p5 leading-relaxed mb-4">{projects[1].desc}</p>
                <motion.button
                  className="px-4 py-2 bg-p5-accent text-white font-p5 font-bold tracking-wider uppercase hover:bg-accent transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.button>
              </motion.div>

              {/* Projet 3 - Carte en bas à droite */}
              <motion.div
                className="absolute right-16 bottom-16 w-72 bg-surface p-6 rounded-none shadow-2xl border-l-8 border-accent transform rotate-12"
                variants={p5CardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={2}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  boxShadow: "0 0 40px rgba(255, 149, 0, 0.3)"
                }}
              >
                <div className="text-3xl mb-3 bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {projects[2].icon}
                </div>
                <h3 className="text-2xl font-p5 font-bold text-accent tracking-wider mb-3">
                  {projects[2].name}
                </h3>
                <p className="text-sm font-p5 font-semibold text-highlight tracking-wider uppercase mb-3">
                  {projects[2].tech}
                </p>
                <p className="text-base font-p5 leading-relaxed mb-4">{projects[2].desc}</p>
                <motion.button
                  className="px-4 py-2 bg-accent text-white font-p5 font-bold tracking-wider uppercase hover:bg-highlight transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.button>
              </motion.div>

              {/* Projet 4 - Carte flottante en haut à droite */}
              <motion.div
                className="absolute right-32 top-24 w-64 bg-surface p-5 rounded-none shadow-2xl border-l-8 border-highlight transform -rotate-6"
                variants={p5CardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={3}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.3)"
                }}
              >
                <div className="text-2xl mb-3 bg-highlight/10 w-10 h-10 rounded-full flex items-center justify-center">
                  {projects[3].icon}
                </div>
                <h3 className="text-xl font-p5 font-bold text-highlight tracking-wider mb-2">
                  {projects[3].name}
                </h3>
                <p className="text-xs font-p5 font-semibold text-p5-accent tracking-wider uppercase mb-2">
                  {projects[3].tech}
                </p>
                <p className="text-sm font-p5 leading-relaxed mb-3">{projects[3].desc}</p>
                <motion.button
                  className="px-3 py-2 bg-highlight text-background font-p5 font-bold tracking-wider uppercase hover:bg-white transition-colors duration-300 text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.button>
              </motion.div>

              {/* Lignes de connexion entre les projets */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 400,300 Q 600,200 800,150"
                  fill="none"
                  stroke="#E60012"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M 400,300 Q 600,400 800,450"
                  fill="none"
                  stroke="#FF2D95"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.path
                  d="M 400,300 Q 600,250 800,200"
                  fill="none"
                  stroke="#FF9500"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2 }}
                />
              </svg>
            </div>
          </div>

          {/* Transition vers Contact */}
          <div className="w-40 h-screen flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-p5-red"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E60012' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>

          {/* Section Contact Persona 5 - Disposition en cercle */}
          <div className="w-[100vw] min-h-screen bg-p5-red text-text flex justify-center items-center p-12 relative overflow-hidden">
            {/* Motif de fond */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E60012' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Titre de section Contact */}
            <motion.div
              className="absolute top-12 left-12 text-left z-10"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl font-p5 font-black text-white tracking-wider mb-4 p5-text-glow">
                CONTACT
              </h2>
              <div className="w-32 h-1 bg-white"></div>
            </motion.div>

            {/* Disposition en cercle des contacts */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Carte centrale avec message */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-background p-8 rounded-none shadow-2xl border-4 border-white text-center z-30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-p5 font-bold text-white tracking-wider mb-4">
                  Prêt à collaborer !
                </h3>
                <p className="text-lg font-p5 text-p5-accent tracking-wider">
                  "Ensemble, créons l'avenir du web"
                </p>
              </motion.div>

              {/* Contact Email - Position 12h avec chevauchement subtil */}
              <motion.div
                className="absolute left-1/2 top-12 transform -translate-x-1/2 w-68 bg-background p-6 rounded-none shadow-2xl border-l-8 border-white z-20"
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, zIndex: 40, boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)" }}
              >
                <div className="text-3xl mb-3 bg-p5-red/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {contactItems[0].icon}
                </div>
                <h3 className="text-xl font-p5 font-bold text-white tracking-wider mb-2">
                  {contactItems[0].name}
                </h3>
                <p className="text-sm font-p5 font-semibold text-p5-accent tracking-wider uppercase mb-3">{contactItems[0].value}</p>
                <motion.a
                  href={contactItems[0].link}
                  className="inline-block px-4 py-2 bg-white text-p5-red font-p5 font-bold tracking-wider uppercase hover:bg-p5-accent hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer un email
                </motion.a>
              </motion.div>

              {/* Contact LinkedIn - Position 3h avec chevauchement subtil */}
              <motion.div
                className="absolute right-16 top-1/2 transform -translate-y-1/2 w-68 bg-background p-6 rounded-none shadow-2xl border-l-8 border-white z-20"
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, zIndex: 40, boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)" }}
              >
                <div className="text-3xl mb-3 bg-p5-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {contactItems[1].icon}
                </div>
                <h3 className="text-xl font-p5 font-bold text-white tracking-wider mb-2">
                  {contactItems[1].name}
                </h3>
                <p className="text-sm font-p5 font-semibold text-p5-accent tracking-wider uppercase mb-3">{contactItems[1].value}</p>
                <motion.a
                  href={contactItems[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-p5-red font-p5 font-bold tracking-wider uppercase hover:bg-p5-accent hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le profil
                </motion.a>
              </motion.div>

              {/* Contact GitHub - Position 6h avec chevauchement subtil */}
              <motion.div
                className="absolute left-1/3 bottom-12 transform -translate-x-1/2 w-68 bg-background p-6 rounded-none shadow-2xl border-l-8 border-white z-20"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, zIndex: 40, boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)" }}
              >
                <div className="text-3xl mb-3 bg-highlight/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {contactItems[2].icon}
                </div>
                <h3 className="text-xl font-p5 font-bold text-white tracking-wider mb-2">
                  {contactItems[2].name}
                </h3>
                <p className="text-sm font-p5 font-semibold text-p5-accent tracking-wider uppercase mb-3">{contactItems[2].value}</p>
                <motion.a
                  href={contactItems[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-p5-red font-p5 font-bold tracking-wider uppercase hover:bg-p5-accent hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le profil
                </motion.a>
              </motion.div>

              {/* Contact Twitter - Position 9h avec chevauchement subtil */}
              <motion.div
                className="absolute left-16 top-1/2 transform -translate-y-1/2 w-68 bg-background p-6 rounded-none shadow-2xl border-l-8 border-white z-20"
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, zIndex: 40, boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)" }}
              >
                <div className="text-3xl mb-3 bg-p5-red/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {contactItems[3].icon}
                </div>
                <h3 className="text-xl font-p5 font-bold text-white tracking-wider mb-2">
                  {contactItems[3].name}
                </h3>
                <p className="text-sm font-p5 font-semibold text-p5-accent tracking-wider uppercase mb-3">{contactItems[3].value}</p>
                <motion.a
                  href={contactItems[3].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-p5-red font-p5 font-bold tracking-wider uppercase hover:bg-p5-accent hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le profil
                </motion.a>
              </motion.div>

              {/* Lignes de connexion en cercle avec effet de profondeur */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="200"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="20,10"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1 }}
                />
                {/* Lignes de connexion vers la carte centrale */}
                <motion.path
                  d="M 50%,12 L 50%,35"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <motion.path
                  d="M 84%,50 L 70%,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.7 }}
                />
                <motion.path
                  d="M 50%,88 L 50%,65"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.9 }}
                />
                <motion.path
                  d="M 16%,50 L 30%,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 2.1 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
