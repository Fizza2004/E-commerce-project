/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Include .jsx, .tsx files for React
  ],
  theme: {
    extend: {
      zIndex: {
        1: '1', // Add custom z-1
      },
      objectFit: ['responsive']
    },
  },
  plugins: [],
}

