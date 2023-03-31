import { AccordionSection } from "ui";

export default {
  title: "Components/AccordionSection",
  component: AccordionSection,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark"],
    },
  },
};

const Template = (args) => ({
  components: { AccordionSection },
  setup() {
    return { args };
  },
  template: `<AccordionSection v-bind="args" >
 <template #section-content>${args.sectionContent ?? ""}</template>
  </AccordionSection>`,
});

export const Base = Template.bind({});
Base.args = {
  showSection: true,
  sectionHeader: "Test Section",
};
