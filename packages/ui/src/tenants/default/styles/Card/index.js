import baseStyles from "./BaseStyles.json";
import fontStyles from "./FontStyles.json";

const Styles = {
  variants: baseStyles,
  font: fontStyles,
  cardContent: "flex items-center justify-start gap-8 px-4",
  avatarStyles:
    "flex items-center justify-center w-[4.4rem] h-[4.4rem] px-2 text-black bg-white dark:bg-gray-cool-600 dark:text-gray-cool-300 border rounded-full shadow filter cursor-pointer hover:drop-shadow-lg",
};

export { Styles };
