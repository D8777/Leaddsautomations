/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0A',
          charcoal: '#111111',
          surface: '#1A1A1A',
          card: '#1C1C1C',
          border: '#2A2A2A',
        },
        accent: {
          DEFAULT: '#3B82F6',
          muted: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
