import { BaseInput } from "ui";

export default {
  title: "Components/BaseInput",
  component: BaseInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: { default: "Label Here", control: { type: "text" } },
  },
};

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: '<BaseInput v-bind="args" />',
});

export const Base = Template.bind({});
Base.args = {
  label: "Username or Email",
  errMessage: "This is a required field",
};
