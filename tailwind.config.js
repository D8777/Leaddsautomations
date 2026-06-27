/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0B0B',
          charcoal: '#121212',
          surface: '#181818',
          card: '#151515',
          border: '#2A2A2A',
        },
        accent: {
          DEFAULT: '#D4AF37',
          purple: '#2B0D3D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
