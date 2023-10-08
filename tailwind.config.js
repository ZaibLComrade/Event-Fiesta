/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors: {
        "custom-grey-1": "#CCCCCC",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0A4F6D",
          "secondary": "#CCCCCC",
          "accent": "#DC143C",
          "neutral": "#FFB6C1",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

