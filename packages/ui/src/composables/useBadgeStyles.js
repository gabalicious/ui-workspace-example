import { onMounted, watch, ref, inject } from "vue";
import getThemeClasses from "@utils/getThemeClasses";

export function useBadgeStyles(props) {
  const injectedTheme = inject("theme", "default");
  const classes = ref("");

  const generateClasses = async () => {
    const theme = props.theme ?? injectedTheme;
    const themeClasses = await getThemeClasses(theme, "StatusBadge");

    let result = `${themeClasses.baseBadge} ${
      themeClasses.variants[props.status]
    }`;
    classes.value = result;
  };

  onMounted(() => {
    generateClasses();
  });

  watch([() => props.status], () => {
    generateClasses();
  });

  return classes;
}
