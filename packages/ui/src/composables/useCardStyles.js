import { onMounted, watch, ref, inject } from "vue";
import getThemeClasses from "@utils/getThemeClasses";

export function useCardStyles(props) {
  const injectedTheme = inject("theme", "default");
  const classes = ref({});

  const generateClasses = async () => {
    const theme = props.theme ?? injectedTheme;
    const themeClasses = await getThemeClasses(theme, "Card");

    let layout = `${themeClasses.variants[props.variant]}`;
    let font = `${themeClasses.font[props.variant]}`;
    classes.value.layout = layout;
    classes.value.font = font;
    classes.value.cardContent = themeClasses.cardContent;
    classes.value.avatarStyles = themeClasses.avatarStyles;
  };

  onMounted(() => {
    generateClasses();
  });

  watch([() => props.variant], () => {
    generateClasses();
  });

  return classes;
}
