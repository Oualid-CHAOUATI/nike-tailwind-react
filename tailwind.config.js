/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
      ".5em": ".5em",
      "1em": "1em",
      "1.2em": "1.2em",
      "1.4em": "1.4em",
      "1.5em": "1.5em",
      "1.7em": "1.7em",
      "2em": "2em",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        ".1em": ".1em",
        ".2em": ".2em",
        ".3em": ".3em",
        ".5em": ".5em",
        "1em": "1em",
        "1.2em": "1.2em",
        "1.4em": "1.4em",
        "1.5em": "1.5em",
        "1.7em": "1.7em",
        "2em": "2em",
        "2.2em": "2.2em",
        "2.5em": "2.5em",
        "3em": "3em",
      },

      colors: {
        primary: "#ECEEFF",
        "cstm-coral-red": "#FF6452",
        "cstm-slate-gray": "#6D6D6D",
        "cstm-pale-blue": "#F5F6FF",
        "cstm-white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
        wlg: "1225px",
      },
    },
  },
  plugins: [],
};
