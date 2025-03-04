import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sixtyfour-convergence': ['"Sixtyfour Convergence"', 'sans-serif'],
        'orbitron': ['"Orbitron"', 'sans-serif'],
        'bungee-hairline': ['"Bungee Hairline"', 'sans-serif'],
        'jura': ['"Jura"', 'sans-serif'], // Added Jura font
      },
    },
  },
  plugins: [],
} satisfies Config;
