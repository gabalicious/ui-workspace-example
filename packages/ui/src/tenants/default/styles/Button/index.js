import baseStyles from "./BaseStyles.json";
import disabledStyles from "./DisabledStyles.json";
import sizeStyles from "./SizeStyles.json";
import fontStyles from "./FontStyles.json";
import roundedStyles from "./RoundedStyles.json";
import shadowStyles from "./ShadowStyles.json";

const Styles = {
  baseButton: "rounded-lg w-max hover:shadow-lg",
  variants: baseStyles,
  disabledVariants: disabledStyles,
  sizes: sizeStyles,
  fonts: fontStyles,
  rounded: roundedStyles,
  shadows: shadowStyles,
};

export { Styles };
