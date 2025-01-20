/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#E4E4E7",
      whitelight: "#FFFFFF",
      blue: "#006FEE",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#f97316",
      green: "#13ce66",
      yellow: "#F5A524",
      gold: "#f6c75e",
      black: "#030712",
      gray: "#A1A1AA",
      graybold: "#18181B",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Arial", "serif"],
    },
    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "22rem",
      72: "28rem",
      80: "35rem",
      96: "50rem",
      px: "1px",
      0.5: "0.125rem",
      1.5: "0.375rem",
      2.5: "0.625rem",
      3.5: "0.875rem",
    },
    extend: {
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            current: "#000000",
            primary: {
              DEFAULT: "#f6c75e",
              foreground: "#FFFF",
            },
            focus: "#f6c75e",
          },
        },
      },
    }),
    require("tailwindcss-animate"),
  ],
};
