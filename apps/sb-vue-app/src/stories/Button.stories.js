// This will be the new way to import the Button component when TS build step is added
import Button from "ui/src/components/Button.vue";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },

    size: {
      control: { type: "radio" },
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: { type: "select" },
      options: [
        "rounded",
        "rounded-sm",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-full",
        "rounded-none",
        "rounded-cross-lb-rt",
        "rounded-cross-lt-rb",
      ],
    },

    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "primaryOutline",
        "secondaryOutline",
        "successOutline",
        "dangerOutline",
        "warningOutline",
        "infoOutline",
        "lightOutline",
        "darkOutline",
      ],
    },
    shadow: {
      control: { type: "select" },
      options: [
        "shadow-sm",
        "shadow",
        "shadow-md",
        "shadow-lg",
        "shadow-xl",
        "shadow-none",
        "colored",
      ],
    },

    disabled: {
      control: { type: "boolean" },
    },
  },

  parameters: {
    docs: {
      source: {
        withScriptSetup: true,
      },
    },
  },
};

const Template = (args, template) => ({
  components: { Button },
  setup() {
    if (template?.globals?.theme) {
      // You need to use a spread operator to merge the theme into the args object
      args = { ...args, theme: template.globals.theme };
    }

    return { args };
  },
  template: `<Button v-bind="args">${args.slot || args.variant}</Button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Danger = Template.bind({});

Danger.args = {
  variant: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
};
