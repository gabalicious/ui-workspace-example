import ContainerStyles from "./ContainerStyles.json";
import TitleStyles from "./TitleStyles.json";

const Styles = {
  container: ContainerStyles,

  header: "flex items-center justify-between w-full",
  title: TitleStyles,
  button:
    "flex items-center justify-center px-2 border rounded-lg shadow-sm w-14 h-14 dark:border-gray-cool-300 dark:dark-svg",
  content: "w-full py-3 mt-3 border-t",
};

export { Styles };
