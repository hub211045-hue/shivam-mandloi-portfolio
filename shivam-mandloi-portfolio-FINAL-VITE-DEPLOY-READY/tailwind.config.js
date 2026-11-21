/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        cream: '#FAF7F2',
        sand: '#F2ECE1',
        ivory: '#FFFDF9',
        forest: '#0F3428',
        forestSoft: '#194D3C',
        emeraldBrand: '#059669',
        ink: '#1A241F',
        moss: '#4A5B52',
      },
    },
  },
  plugins: [],
};
