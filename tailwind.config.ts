import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"], // New Luxury Serif Default
        display: ["var(--font-cinzel)", "serif"], // New Luxury Display
        "old-serif": ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"], // Preserved for Hero
      },
      colors: {
        rich: {
          50: "#f2fcf5",
          100: "#e1f8e8",
          200: "#cef2d7", // Your Primary Light Green
          300: "#afe5be",
          400: "#86d29e",
          500: "#5ab679",
          600: "#465c4d", // Your Secondary Dark Green (Mapped to 600 for contrast)
          700: "#384b3e",
          800: "#2f3d33",
          900: "#26322b",
        },
      },
      backgroundImage: {
        "rich-gradient": "linear-gradient(180deg, #f2fcf5 0%, #cef2d7 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
