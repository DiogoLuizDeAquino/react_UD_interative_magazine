/** @type {import('tailwindcss').Config} */
export default {
  // Define os arquivos onde o Tailwind irá buscar classes para gerar o CSS
  content: [
    "./index.html", // arquivo principal HTML
    "./src/**/*.{js,ts,jsx,tsx}", // todos os arquivos JS/TS/JSX/TSX dentro de src
  ],
  theme: {
    extend: {
      // Adiciona animações personalizadas na revista "Deslize para virar a página"
      keyframes: {
        'page-hint': {
          '0%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(8px)' }, // ida lenta
          '100%': { transform: 'translateX(0)' },   // volta rápida
        },
      },
      animation: {
        'page-hint': 'page-hint 1.8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
} 