import { AppSidebar } from "ui";
export default {
  title: "Components/AppSidebar",
  component: AppSidebar,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark"],
    },
  },
};

const Template = (args) => ({
  components: { AppSidebar },
  setup() {
    return { args };
  },
  template: `<AppSidebar v-bind="args" ><template #sidebar-content>${args.sidebarContent}</template></AppSidebar>`,
});

export const Base = Template.bind({});
Base.args = {
  title: "The Sidebar",
  sidebarContent: `<div class='flex flex-col items-center justify-center h-[100px] w-[400px] mx-auto px-4'> 
        <h4 class='text-center'>This is a div. The modal should expand to fit this content </h4>
        <button class='bg-blue-500 text-white w-1/3 mx-auto'>Click Me</button>
  </div>`,
  show: true,
};

export const Dark = Template.bind({});
Dark.args = {
  title: "The Sidebar",
  variant: "dark",
  sidebarContent: `<div class='flex flex-col items-center justify-center h-[100px] w-[400px] mx-auto px-4'> 
        <h4 class='text-center text-[1rem] text-slate-200'>This is a div. The modal should expand to fit this content </h4>
        <button class='bg-blue-500 text-white w-1/3 mx-auto'>Click Me</button>
  </div>`,
};
