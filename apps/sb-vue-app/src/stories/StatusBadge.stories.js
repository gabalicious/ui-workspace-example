import { StatusBadge } from "ui";

export default {
  title: "Components/StatusBadge",
  component: StatusBadge,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "info", "warning", "error", "critical"],
    },
    text: { default: "status text", control: { type: "text" } },
  },
};

const Template = (args) => ({
  components: { StatusBadge },
  setup() {
    return { args };
  },
  template: '<StatusBadge v-bind="args" />',
});

export const Info = Template.bind({});
Info.args = {
  status: "default",
  text: "Text here",
};
