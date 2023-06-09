/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBgStart: "#ECEDEE",
        lightBgEnd: "#FBEDE7",
        darkBgStart: "#1D2328",
        darkBgEnd: "#28221D",
        cardBgStart: "#2B3B48",
        cardBgEnd: "#252D34",
        "shadow-border": "rgba(0,0,0,0.19)",
        "dark-shadow-border": "rgba(0,0,0,0.38)",
        "primary-100": "#fcf5f2",
        "primary-200": "#f0e0d9",
        "primary-300": "#f2cbba",
        "primary-400": "#f9a985",
        "primary-500": "#f47942",
        "primary-600": "#ed6628",
        "primary-700": "#d35317",
        "primary-800": "#b0381e",
        "primary-900": "#691a0f",
        "secondary-100": "#ffeee4",
        "secondary-200": "#ffd3bb",
        "secondary-300": "#ffb78e",
        "secondary-400": "#fd965c",
        "secondary-500": "#f38142",
        "secondary-600": "#d9733a",
        "secondary-700": "#ba6636",
        "secondary-800": "#aa5625",
        "secondary-900": "#83401b",
        "gray-cool-100": "#ecedee",
        "gray-cool-200": "#e5e7e8",
        "gray-cool-300": "#d3d8dc",
        "gray-cool-400": "#b8bfc3",
        "gray-cool-500": "#929ba2",
        "gray-cool-600": "#62707c",
        "gray-cool-700": "#535f6a",
        "gray-cool-800": "#3c4750",
        "gray-cool-850": "#252D34",
        "gray-cool-900": "#1D2328",
        "gray-warm-100": "#f8f7f7",
        "gray-warm-200": "#f0ecea",
        "gray-warm-300": "#ddd9d8",
        "gray-warm-400": "#c1bfbf",
        "gray-warm-500": "#a8a4a3",
        "gray-warm-600": "#7a7574",
        "gray-warm-700": "#636363",
        "gray-warm-800": "#585454",
        "gray-warm-900": "#3e3e3e",
      },
    },
  },
  plugins: [],
};
