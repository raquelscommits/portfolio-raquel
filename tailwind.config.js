const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Sistema de diseño del portfolio.
 * La paleta parte de los rosas originales (rose / pink de Tailwind),
 * reducida a un papel cálido, una tinta ciruela y un único color de acción.
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FFF8F7', // fondo general: blanco roto con un punto rosado
          deep: '#FCEEF1', // superficies y franjas alternas
        },
        ink: {
          DEFAULT: '#2B1721', // texto principal: casi negro ciruela
          soft: '#5E4350', // texto secundario
          faint: '#8A6B79', // solo metadatos grandes o decorativos
        },
        line: '#EED3DC', // filetes y bordes
        blush: '#FBCFE8', // pink-200: subrayado de marcador y resaltes
        accent: {
          DEFAULT: '#E11D48', // rose-600: botones (blanco encima 4,7:1) y textos grandes
          deep: '#BE123C', // rose-700: hover y textos pequeños de acento (6:1 sobre paper)
          light: '#FDA4AF', // rose-300: acentos sobre fondo oscuro
        },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans Variable"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 15vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        closing: ['clamp(2.75rem, 11vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        section: ['clamp(2.25rem, 5.5vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
