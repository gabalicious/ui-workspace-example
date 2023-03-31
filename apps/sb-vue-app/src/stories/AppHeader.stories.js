import { AppHeader } from "ui";

export default {
  title: "Components/AppHeader",
  component: AppHeader,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark"],
    },
  },
};

const Template = (args) => ({
  components: { AppHeader },
  setup() {
    return { args };
  },
  template: `<AppHeader v-bind="args" >
  <template #leftContent>${args.leftContent ?? ""}</template>
  <template #centerContent>${args.centerContent ?? ""}</template>
  <template #rightContent>${args.rightContent ?? ""}</template>
  </AppHeader>`,
});

export const Base = Template.bind({});
Base.args = {
  leftContent: `
  <div class="rounded-full w-14 h-14 bg-blue-500"></div>
  <h1 class="text-15 ">App Header</h1>
`,
  centerContent: `Route name`,
  rightContent: `
<h1 class="text-15 ">Other Stuff</h1>
`,
};
