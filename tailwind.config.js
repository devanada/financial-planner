/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0D1117",
        "dark-2": "#161B22",
        "dark-3": "#21262d",
        light: "#f7f9f9",
        glass: "#1e1e2d80",
      },
      minHeight: {
        navbar: "4rem",
        footer: "8rem",
      },
      fontSize: {
        dynamic: "clamp(1rem, 10vw, 2rem)",
      },
    },
  },
  plugins: [],
};
