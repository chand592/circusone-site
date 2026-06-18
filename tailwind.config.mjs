/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — all swappable from this single file.
        cream: {
          DEFAULT: '#F5F2EC',
          50: '#FBFAF7',
          100: '#F5F2EC',
          200: '#EDE8DF',
          300: '#E0D9CB',
        },
        deepred: {
          DEFAULT: '#5C1A20',
          light: '#7A2530',
          dark: '#3D1015',
        },
        gold: {
          DEFAULT: '#C8A96A',
          light: '#D9C089',
          dark: '#A88A4E',
        },
        terracotta: {
          DEFAULT: '#8B3A2F',
          light: '#A64A3C',
          dark: '#6E2A20',
        },
        heritage: {
          DEFAULT: '#615F5B',
          light: '#7E7C77',
          dark: '#4A4845',
        },
      },
      fontFamily: {
        // Editorial serif for display; neutral sans for body.
        display: ['"Fraunces"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      borderRadius: {
        // Quiet, crafted corners — not the AI default of 2xl.
        '2xs': '2px',
        xs: '3px',
        sm: '4px',
      },
      boxShadow: {
        none: 'none',
        hairline: 'inset 0 0 0 1px rgba(92, 26, 32, 0.10)',
      },
    },
  },
  plugins: [],
};
