const client1TailwindConfig = require("ui/src/tenants/client1/config/tailwind.config.cjs");
const client2TailwindConfig = require("ui/src/tenants/client2/config/tailwind.config.cjs");
const client3TailwindConfig = require("ui/src/tenants/client3/config/tailwind.config.cjs");
const defaultTailwindConfig = require("ui/src/tenants/default/config/tailwind.config.cjs");
/** @type {import('tailwindcss').Config} */
const path = require("path");

const colors = Object.assign(
  client1TailwindConfig.theme.extend.colors,
  client2TailwindConfig.theme.extend.colors,
  client3TailwindConfig.theme.extend.colors,
  defaultTailwindConfig.theme.extend.colors
);
const fontSize = Object.assign(client3TailwindConfig.theme.extend.fontSize);
module.exports = {
  // This makes tailwind resolve relative to where the tailwind.config.js file is located.
  relative: true,

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx,css,cjs}",
    path.join(
      path.dirname(require.resolve("ui")),
      "**/*.{vue,js,ts,jsx,tsx,mdx,json}"
    ),
  ],
  darkMode: ["class", '[data-mode="dark"]'],

  theme: {
    extend: {
      colors: colors,
      fontSize: fontSize,
    },
  },
  plugins: [],
  // If for some reason Tailwind CSS is not purging your styles, you can add a safelist to tell it to ignore certain classes.
  safelist: [
    "rounded",
    // "text-3xl",
    // {
    //   pattern:
    //     /bg-(**)-(100|200|300|400|500|600|700|800|900)/,
    // },
    {
      pattern: /rounded/,
    },
    {
      pattern: /shadow/,
    },
  ],

  // prefix: "ui-",
};
