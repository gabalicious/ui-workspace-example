import { LandingPage } from "ui";

export default {
  title: "Components/Demo/LandingPage",
  component: LandingPage,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark"],
    },
  },
};

const Template = (args) => ({
  components: { LandingPage },
  setup() {
    return { args };
  },
  template: `<LandingPage v-bind="args" >
   
    </LandingPage>`,
});
export const Base = Template.bind({});
