import baseStyles from "./BaseStyles.json";
import fontStyles from "./FontStyles.json";

const Styles = {
  backdrop: "absolute top-0 left-0 z-30 w-full h-full bg-[rgba(0,0,0,0.3)]",
  container:
    "absolute z-50 flex flex-col min-w-[20rem] items-start justify-start h-auto border rounded-lg shadow-2xl drop-shadow-2xl",
  variants: baseStyles,
  header:
    "relative flex items-center justify-center w-full py-3 mb-3 border-b-2  text-18",
  title: fontStyles,
  button: "absolute right-[-5px] px-2 shadow-sm",
};

export { Styles };
