import { BaseModal } from "ui";
export default {
  title: "Components/BaseModal",
  component: BaseModal,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark"],
    },
  },
};

const Template = (args) => ({
  components: { BaseModal },
  setup() {
    return { args };
  },
  template: `<BaseModal v-bind="args" ><template #modal-content>${args.modalContent}</template></BaseModal>`,
});

export const Base = Template.bind({});
Base.args = {
  title: "Modal",
  modalContent: `<div class='flex flex-col min-h-[100px] w-[400px] px-4 py-2'> 
        <h4 class="text-center w-full mb-2">This is a div. The modal should expand to fit this content even if the content happens to be several characters long. But how far can we really take it before it doesn't work good no more? </h4>
        <button class='bg-blue-500 text-white w-1/3 mx-auto'>Click Me</button>
  </div>`,
  show: true,
};
