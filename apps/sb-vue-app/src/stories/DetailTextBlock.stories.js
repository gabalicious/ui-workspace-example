import { DetailTextBlock } from "ui";
export default {
  title: "Components/DetailTextBlock",
  component: DetailTextBlock,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["row", "column"],
    },
  },
  decorators: [() => ({ template: "<div class='mx-4'><story/></div>" })],
};

const Template = (args) => ({
  components: { DetailTextBlock },

  setup() {
    return { args };
  },

  template: '<DetailTextBlock v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  label: "User",
  text: "Jimothy",
  variant: "row",
};
