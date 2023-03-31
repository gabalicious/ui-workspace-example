const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
    },
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    defaultName: "Documentation",
    autodocs: true,
  },
};

export default config;