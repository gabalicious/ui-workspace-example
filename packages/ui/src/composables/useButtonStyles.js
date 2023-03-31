import { onMounted, watch, ref, inject } from "vue";
import getThemeClasses from "@utils/getThemeClasses";

export function useButtonStyles(props) {
  const injectedTheme = inject("theme", "default");
  const classes = ref("");

  const generateClasses = async () => {
    const theme = props.theme ?? injectedTheme;

    // Todo separate all these into their own composables
    // get theme classes
    const {
      baseButton = "",
      variants = {},
      disabledVariants = {},
      sizes = {},
      fonts = {},
      rounded = {},
      shadows = {},
    } = await getThemeClasses(theme, "Button");

    // get default theme classes as fallback only if theme is not default
    const {
      baseButton: defaultBaseButton = "",
      variants: defaultVariants = {},
      disabledVariants: defaultDisabledVariants = {},
      sizes: defaultSizes = {},
      fonts: defaultFonts = {},
      rounded: defaultRounded,
      shadows: defaultShadows,
    } = await getThemeClasses("default", "Button");

    let newClass = "";
    // let newClassTest = baseButton ?? defaultBaseButton;
    // console.log(newClassTest);
    // Determine the base classes based on disabled prop
    const outline = props.outline ? "Outline" : "";
    let enabledClass = variants?.[props.variant + outline]
      ? variants[props.variant + outline]
      : defaultVariants[props.variant + outline];

    newClass = enabledClass ? enabledClass : "";

    let disabledClass = disabledVariants?.[props.variant]
      ? disabledVariants[props.variant]
      : defaultDisabledVariants[props.variant];

    newClass = props.disabled && disabledClass ? disabledClass : newClass;

    // Determine the size class based on size prop
    let sizeClass = sizes[props.size || "md"];
    newClass = sizeClass ? `${newClass} ${sizeClass}` : newClass;

    // Try to find custom rounding or use default tailwind rounding
    let roundedClass =
      rounded[props?.rounded] ?? defaultRounded[props?.rounded];

    newClass = roundedClass
      ? `${newClass} ${roundedClass}`
      : `${newClass} ${props.rounded}`;

    // Try to find custom shadow or use default tailwind shadow
    let shadowClass = "";
    // If its colored it will use the variant color
    if (props.shadow === "colored" && !props.disabled) {
      shadowClass = shadows[props.variant] ?? defaultShadows[props.variant];
    } else if (props.shadow) {
      shadowClass = shadows[props.shadow] ?? defaultShadows[props.shadow];
    }

    newClass = shadowClass
      ? `${newClass} ${shadowClass}`
      : `${newClass} ${props.shadow || ""}`;

    // Add className prop if it exists
    newClass = props.className ? `${newClass} ${props.className}` : newClass;

    // Set the classes value
    classes.value = newClass;
  };

  onMounted(() => {
    generateClasses();
  });

  watch(
    [
      () => props.variant,
      () => props.size,
      () => props.disabled,
      () => props.theme,
      () => props.rounded,
      () => props.shadow,
      () => props.className,
      () => props.removeClass,
      () => props.outline,
      () => props.font,
      () => props.shadow,
    ],
    () => {
      generateClasses();
    }
  );

  return {
    classes,
  };
}
