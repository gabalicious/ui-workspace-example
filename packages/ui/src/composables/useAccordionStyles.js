import { onMounted, watch, ref, inject } from "vue";
import getThemeClasses from "@utils/getThemeClasses";

export function useAccordionStyles(props) {
  const injectedTheme = inject("theme", "default");
  const classes = ref({});

  const generateClasses = async () => {
    const theme = props.theme ?? injectedTheme;

    const themeClasses = await getThemeClasses(theme, "Accordion");
    const containerClass = themeClasses.container[props.variant];
    const titleClass = themeClasses.title[props.variant];

    let result = { ...themeClasses };
    result.container = containerClass;
    result.title = titleClass;

    classes.value = result;
  };

  onMounted(() => {
    generateClasses();
  });

  watch([() => props], () => {
    generateClasses();
  });

  return classes;
}
