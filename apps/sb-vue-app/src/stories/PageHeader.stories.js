import { PageHeader } from "ui";

export default {
  title: "Components/PageHeader",
  component: PageHeader,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark"],
    },
  },
};

const Template = (args) => ({
  components: { PageHeader },
  setup() {
    return { args };
  },
  template: `<PageHeader v-bind="args" >
  
  <template #left-content>${args.leftContent ?? ""}</template>
  <template #center-content>${args.centerContent ?? ""}</template>
  <template #right-content>${args.rightContent ?? ""}</template>
  </PageHeader>`,
});

export const Base = Template.bind({});
Base.args = {
  leftContent: `
<button class="text-15 ">< Go Back</button>
`,
  centerContent: `
<h4 class="text-15 ">Route Name or something</h4>
`,
  rightContent: `
<button class="text-15 ">Action Button</button>
`,
};
