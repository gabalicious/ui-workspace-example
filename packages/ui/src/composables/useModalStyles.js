import { onMounted, watch, ref, inject } from "vue";
import getThemeClasses from "@utils/getThemeClasses";

export function useModalStyles(props) {
  const injectedTheme = inject("theme", "default");
  const classes = ref({});

  const generateClasses = async () => {
    const theme = props.theme ?? injectedTheme;
    const themeClasses = await getThemeClasses(theme, "Modal");
    let containerStyle = `${themeClasses.container} ${
      themeClasses.variants[props.variant]
    }`;
    let titleStyle = themeClasses.title[props.variant];
    classes.value.container = containerStyle;
    classes.value.header = themeClasses.header;
    classes.value.title = titleStyle;
    classes.value.button = themeClasses.button;
  };

  onMounted(() => {
    generateClasses();
  });

  watch([() => props.variant], () => {
    generateClasses();
  });

  return classes;
}
