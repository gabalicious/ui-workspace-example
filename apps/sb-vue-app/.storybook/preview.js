// .storybook/preview.js

import "../src/index.css"; // replace with the name of your tailwind css file
import { withThemeByDataAttribute } from "@storybook/addon-styling";

let ThemeNames = [
  "client1",
  "client2",
  "client3",
  // "client4",
  // "client5",
  // "client6",
];
ThemeNames.sort();
ThemeNames.unshift("default");

export const globalTypes = {
  clientTheme: {
    name: "Client Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: ThemeNames,
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
