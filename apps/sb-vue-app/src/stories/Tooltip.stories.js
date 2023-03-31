import { Tooltip } from "ui";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  parameters: {
    layout: "centered",
    fullscreen: true,
    padded: 100,
  },
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    darkMode: {
      control: { type: "select" },
      options: [true, false],
    },
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Tooltip },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Tooltip v-bind="args" />',
});

export const DarkMode = Template.bind({});
DarkMode.args = {
  label: "Dark Mode",
  darkMode: true,
};

export const Top = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Top.args = {
  label: "Tooltip",
  position: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  label: "Tooltip",
  position: "bottom",
};

export const Left = Template.bind({});
Left.args = {
  label: "Tooltip",
  position: "left",
};

export const Right = Template.bind({});
Right.args = {
  label: "Tooltip",
  position: "right",
};
