/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "var(--primaryDark)",
        primaryLight: "var(--primaryLight)",
        primaryMid: "var(--primaryMid)",
        primaryBlue: "var(--primaryBlue)",
        secondaryBlue: "var(--secondaryBlue)",
        accentBlue: "var(--accentBlue)",
        primaryGreen: "var(--primaryGreen)",
        secondaryGreen: "var(--secondaryGreen)",
        accentGreen: "var(--accentGreen)",
        monopolyRoyalBlue: '#2A4F88',
        monopolyBoard: '#DFF3E3',
      },
      textShadow: {
        'outline': '1px 1px 2px black',  // You can customize this value
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          textShadow: '2px 2px 4px black',
        },
      });
    },
  ],
};
