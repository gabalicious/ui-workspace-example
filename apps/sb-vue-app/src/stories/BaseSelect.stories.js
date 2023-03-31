import { BaseSelect } from "ui";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Components/BaseSelect",
  component: BaseSelect,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  decorators: [() => ({ template: '<div class="mx-8 w-full"><story/></div>' })],
};

const Template = (args) => ({
  components: { BaseSelect },
  setup() {
    return { args };
  },
  template: `<BaseSelect v-bind="args" />`,
});

export const Base = Template.bind({});
Base.args = {
  label: "Role",
  modelValue: "",
  options: [
    { label: "User", value: "User" },
    { label: "Admin", value: "Admin" },
  ],
};

export const Alt = Template.bind({});
Alt.args = {
  label: "Role",
  modelValue: "",
  options: ["User", "Admin"],
};

export const UserSelected = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const selectInput = canvas.getByTestId("select-input", {
      selector: "input",
    });

    await userEvent.click(selectInput);
    const userOption = canvas.getByTestId("User");
    userEvent.click(userOption);
  },
};
UserSelected.args = {
  label: "Role",
  modelValue: "",
  options: ["User", "Admin"],
};
