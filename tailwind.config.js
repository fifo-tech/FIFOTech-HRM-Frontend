import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        "base-200": "#d7d7d7",
        background: "#f0f2f8",
        foreground: "#4a4a4a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#4a4a4a",
        },
        primary: {
          DEFAULT: "#7267EF",
          foreground: "#303030",
        },
        secondary: {
          DEFAULT: "#6c757d",
          foreground: "#f8f9fa",
        },
        accent: {
          DEFAULT: "#7267EF",
          foreground: "#303030",
        },
        neutral: {
          DEFAULT: "#1f2937",
          foreground: "#303030",
        },
        info: {
          DEFAULT: "#3b82f6",
          foreground: "#303030",
        },
        success: {
          DEFAULT: "#10b981",
          foreground: "#303030",
        },
        warning: {
          DEFAULT: "#f59e0b",
          foreground: "#303030",
        },
        error: {
          DEFAULT: "#ef4444",
          foreground: "#303030",
        },
        light: {
          DEFAULT: "#ffffff",
          foreground: "#4a4a4a",
        },
        dark: {
          DEFAULT: "#303030",
          foreground: "#d7d7d7",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff",
          "base-200": "#d7d7d7",
          primary: "#7267EF",
          secondary: "#6c757d",
          accent: "#7267EF",
          neutral: "#1f2937",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};
