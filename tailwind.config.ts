import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wivoo-primary": "#451dc7",
        "wivoo-light": "#d6cbf8",
        "wivoo-dark": "#2d1385",
      },
      boxShadow: {
        "wivoo-sm": "0 2px 8px -2px rgba(69, 29, 199, 0.12)",
        "wivoo-md": "0 4px 16px -4px rgba(69, 29, 199, 0.16)",
        "wivoo-lg": "0 12px 32px -8px rgba(69, 29, 199, 0.2)",
        "wivoo-xl": "0 24px 48px -12px rgba(69, 29, 199, 0.24)",
        "wivoo-glow": "0 0 32px rgba(69, 29, 199, 0.4), 0 0 64px rgba(69, 29, 199, 0.2)",
        "wivoo-glow-lg": "0 0 48px rgba(69, 29, 199, 0.5), 0 0 96px rgba(69, 29, 199, 0.3)",
      },
      backgroundImage: {
        "gradient-wivoo": "linear-gradient(135deg, #451dc7 0%, #6b46d8 100%)",
        "gradient-wivoo-light": "linear-gradient(135deg, #d6cbf8 0%, #e8e1fc 100%)",
        "gradient-wivoo-radial": "radial-gradient(circle at top right, #451dc7, #2d1385)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-wivoo-animated": "linear-gradient(270deg, #451dc7, #6b46d8, #8b5cf6, #6b46d8, #451dc7)",
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-up-delayed": "slide-up 0.8s ease-out 0.2s backwards",
        "scale-in": "scale-in 0.5s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(69, 29, 199, 0.4), 0 0 40px rgba(69, 29, 199, 0.2)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(69, 29, 199, 0.6), 0 0 80px rgba(69, 29, 199, 0.3)",
            transform: "scale(1.02)",
          },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(69, 29, 199, 0.2)" },
          "50%": { borderColor: "rgba(69, 29, 199, 0.6)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
