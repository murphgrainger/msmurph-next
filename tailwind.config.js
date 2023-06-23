/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'tilt': ['TiltWarp-Regular', 'sans-serif'],
        'neon': ['TiltNeon-Regular', 'sans-serif'],
        'figtree': ['Figtree-VariableFont_wght', 'sans-serif']
      }
    }
  },
  plugins: [],
}
