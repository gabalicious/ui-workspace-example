import { Card } from "ui";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: { control: { type: "select" }, options: ["square", "row"] },
    backgroundColor: { control: "color" },
    titleColor: { control: "color" },
    rounded: {
      control: { type: "select" },
      options: ["rounded-full", "rounded-md", "rounded-none"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Card },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Card v-bind="args">${args.default}</Card>`,
});

export const Square = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Square.args = {
  variant: "square",
  title: "Card Title",
  rounded: "rounded-md",
};

export const Row = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Row.args = {
  variant: "row",
  title: "Card Title",
  rounded: "rounded-md",
};
