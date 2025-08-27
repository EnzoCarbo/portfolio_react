import { motion } from "framer-motion";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  const items = [
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

  return (
    <div className="w-[200vw] min-h-screen bg-primary text-text flex justify-center items-center p-12">
      <div className="relative w-full flex items-center justify-center">

        {/* Ligne horizontale ON/OFF */}
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
          {items.map((item, i) => (
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
              <h2 className={`text-3xl font-bold mb-4 ${item.color}`}>{item.title}</h2>
              <p className="text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
