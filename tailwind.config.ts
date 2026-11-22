import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fa",
          100: "#dbe7f2",
          200: "#bbd2e5",
          300: "#8eb6d3",
          400: "#5c94bd",
          500: "#3d79a5",
          600: "#2d6088",
          700: "#244d6e",
          800: "#1f405c",
          900: "#17324D", // Official Primary Navy
          950: "#0f2032",
        },
        gold: {
          50: "#faf7f2",
          100: "#f3ede0",
          200: "#e7d9be",
          300: "#dac198",
          400: "#cda05f", // Official Elegant Gold
          500: "#b98845",
          600: "#9c6e35",
          700: "#7c542c",
          800: "#654429",
          900: "#533924",
        },
        sage: {
          50: "#f4f7f5",
          100: "#e5ece7",
          200: "#ccdbd0",
          300: "#a7c2b0",
          400: "#7fa58b", // Official Sage Green
          500: "#63896f",
          600: "#4c6e56",
          700: "#3d5745",
          800: "#33473a",
          900: "#2b3b31",
        },
        cream: {
          50: "#fcfbf9",
          100: "#f8f6f1", // Official Warm Cream
          200: "#ede7da",
          300: "#dfd4be",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        urdu: ["var(--font-urdu)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(23, 50, 77, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(23, 50, 77, 0.08)',
        'soft-lg': '0 16px 32px -6px rgba(23, 50, 77, 0.1)',
        'soft-xl': '0 24px 48px -12px rgba(23, 50, 77, 0.12)',
        'glow-gold': '0 0 25px -5px rgba(205, 160, 95, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
