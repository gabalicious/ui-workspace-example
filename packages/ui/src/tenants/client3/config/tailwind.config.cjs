/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      gridTemplateRows: {
        auto: "auto",
      },
      gridTemplateColumns: {
        auto: "auto",
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      colors: {
        "shadow-border": "rgba(0,0,0,0.19)",
        "dark-shadow-border": "rgba(0,0,0,0.38)",
        "client3-primary-100": "#fcf5f2",
        "client3-primary-200": "#f0e0d9",
        "client3-primary-300": "#f2cbba",
        "client3-primary-400": "#f9a985",
        "client3-primary-500": "#f47942",
        "client3-primary-600": "#ed6628",
        "client3-primary-700": "#d35317",
        "client3-primary-800": "#b0381e",
        "client3-primary-900": "#691a0f",
        "client3-secondary-100": "#ffeee4",
        "client3-secondary-200": "#ffd3bb",
        "client3-secondary-300": "#ffb78e",
        "client3-secondary-400": "#fd965c",
        "client3-secondary-500": "#f38142",
        "client3-secondary-600": "#d9733a",
        "client3-secondary-700": "#ba6636",
        "client3-secondary-800": "#aa5625",
        "client3-secondary-900": "#83401b",
        "client3-teal-100": "#d5f5ff",
        "client3-teal-200": "#a9ebff",
        "client3-teal-300": "#81d9f3",
        "client3-teal-400": "#5cc0de",
        "client3-teal-500": "#42a3c0",
        "client3-teal-600": "#2d88a3",
        "client3-teal-700": "#237289",
        "client3-teal-800": "#125568",
        "client3-teal-900": "#0b3d4a",
        "client3-blue-100": "#d8edff",
        "client3-blue-200": "#bee1ff",
        "client3-blue-300": "#85c6ff",
        "client3-blue-400": "#2b99f8",
        "client3-blue-500": "#0275d8",
        "client3-blue-600": "#0368be",
        "client3-blue-700": "#0057a3",
        "client3-blue-800": "#004683",
        "client3-blue-900": "#00325e",
        "client3-success-100": "#dfffde",
        "client3-success-200": "#c2f0cd",
        "client3-success-300": "#91e5a9",
        "client3-success-400": "#7edc98",
        "client3-success-500": "#59c576",
        "client3-success-600": "#47a160",
        "client3-success-700": "#2d8c47",
        "client3-success-800": "#186f30",
        "client3-success-900": "#0b5420",
        "client3-danger-100": "#fddedd",
        "client3-danger-200": "#ffc3c1",
        "client3-danger-300": "#ff9d9b",
        "client3-danger-400": "#fe7a76",
        "client3-danger-500": "#f45752",
        "client3-danger-600": "#ef3f39",
        "client3-danger-700": "#e10803",
        "client3-danger-800": "#b4100a",
        "client3-danger-900": "#5b0a09",
        "client3-warning-100": "#fef1db",
        "client3-warning-200": "#fee1b8",
        "client3-warning-300": "#ffd293",
        "client3-warning-400": "#ffc36e",
        "client3-warning-500": "#ffad3a",
        "client3-warning-600": "#ee981c",
        "client3-warning-700": "#d98309",
        "client3-warning-800": "#965d0d",
        "client3-warning-900": "#614215",
        "client3-gray-cool-100": "#ecedee",
        "client3-gray-cool-200": "#e5e7e8",
        "client3-gray-cool-300": "#d3d8dc",
        "client3-gray-cool-400": "#b8bfc3",
        "client3-gray-cool-500": "#929ba2",
        "client3-gray-cool-600": "#62707c",
        "client3-gray-cool-700": "#535f6a",
        "client3-gray-cool-800": "#3c4750",
        "client3-gray-cool-900": "#262f36",
        "client3-gray-warm-100": "#f8f7f7",
        "client3-gray-warm-200": "#f0ecea",
        "client3-gray-warm-300": "#ddd9d8",
        "client3-gray-warm-400": "#c1bfbf",
        "client3-gray-warm-500": "#a8a4a3",
        "client3-gray-warm-600": "#7a7574",
        "client3-gray-warm-700": "#636363",
        "client3-gray-warm-800": "#585454",
        "client3-gray-warm-900": "#3e3e3e",
      },

      fontSize: {
        xs: ".75rem",
        13: "1.3rem",
        14: "1.4rem",
        15: "1.5rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2rem",
        24: "2.4rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      spacing: {
        35: "35rem",
        40: "40rem",
        45: "45rem",
      },
    },
  },

  plugins: [],
};
