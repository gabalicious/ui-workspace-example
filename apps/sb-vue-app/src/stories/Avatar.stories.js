import { Avatar } from "ui";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
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
  components: { Avatar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Avatar v-bind="args">${args.default}</Avatar>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: "primary",
  default: "Avatar",
};

export const Secondary = Template.bind({});
Secondary.args = {
  default: "Avatar",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  default: "Avatar",
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  default: "Avatar",
  variant: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  default: "Avatar",
  variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
  default: "Avatar",
  variant: "info",
};

export const Light = Template.bind({});
Light.args = {
  default: "Avatar",
  variant: "light",
};
