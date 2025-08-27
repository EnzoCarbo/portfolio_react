/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#E60012',    // rouge vif pour accents et hover (style Persona 5)
      secondary: '#800080',  // violet foncé pour titres et hover
      accent: '#FF2D95',     // rose flashy pour actions importantes
      background: '#0D0D0D', // fond noir profond
      surface: '#1A1A1A',    // surfaces secondaires
      highlight: '#FF9500',  // orange pour éléments lumineux
      error: '#EF4444',      // rouge pour erreurs
      text: '#F3F3F3',       // texte clair sur fond sombre
    },
    extend: {},
  },
  plugins: [],
}
