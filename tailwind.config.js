/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#E60012',    // Rouge Persona 5 signature
      secondary: '#FF2D95',  // Rose flashy Persona 5
      accent: '#FF9500',     // Orange vif pour accents
      background: '#000000', // Noir absolu Persona 5
      surface: '#1A1A1A',    // Gris très sombre
      highlight: '#FFFFFF',  // Blanc pur pour contrastes
      error: '#FF0000',      // Rouge pur pour erreurs
      text: '#FFFFFF',       // Blanc pur pour texte
      'p5-red': '#E60012',   // Rouge Persona 5 principal
      'p5-dark': '#0A0A0A',  // Noir Persona 5
      'p5-accent': '#FF2D95', // Rose Persona 5
    },
    extend: {
      fontFamily: {
        'p5': ['Orbitron', 'monospace'], // Police futuriste pour Persona 5
        'display': ['Orbitron', 'monospace'],
      },
      animation: {
        'p5-glow': 'p5-glow 2s ease-in-out infinite alternate',
        'p5-slide': 'p5-slide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'p5-bounce': 'p5-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        'p5-glow': {
          '0%': { boxShadow: '0 0 5px #E60012, 0 0 10px #E60012, 0 0 15px #E60012' },
          '100%': { boxShadow: '0 0 10px #E60012, 0 0 20px #E60012, 0 0 30px #E60012' },
        },
        'p5-slide': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'p5-bounce': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
