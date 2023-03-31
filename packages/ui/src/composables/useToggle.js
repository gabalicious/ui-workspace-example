import { ref } from "vue";

export const useToggle = (isShowing) => {
  const showing = ref(isShowing ?? false);
  const toggle = () => {
    showing.value = !showing.value;
  };
  const show = () => {
    showing.value = true;
  };
  const hide = () => {
    showing.value = false;
  };

  return {
    showing,
    toggle,
    show,
    hide,
  };
};
