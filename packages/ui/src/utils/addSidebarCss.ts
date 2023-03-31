const validVariants = ["default", "dark"];

const addSidebarCss = function (variant: string) {
  if (!validVariants.includes(variant)) {
    throw new Error(`Invalid variant: ${variant}`);
  }
  interface StyleDictionary {
    [key: string]: {
      container: string;
      header: string;
      title: string;
      closeButton: string;
    };
  }
  const styleDictionary: StyleDictionary = {
    default: {
      container:
        "absolute bg-white top-0 right-0 z-20 flex flex-col items-start justify-start px-2 max-w-[31rem] w-1/3 h-full border-l-2 shadow-lg border-gray-cool-600 drop-shadow-lg dark:bg-gray-cool-850",
      header:
        "relative w-full py-3 mb-3 border-b-2 flex items-center justify-between text-18 border-[rgba(0,0,0,0.3)]",
      title:
        "text-center font-bold leading-10 text-gray-cool-900 dark:text-gray-cool-100 ",
      closeButton: "absolute p-2 shadow-sm right-4 dark:dark-svg",
    },
    dark: {
      container:
        "absolute bg-slate-700 top-0 right-0 z-50 flex flex-col items-start justify-start px-2 max-w-[31rem] w-1/3 h-full border-l-2 shadow-sm border-gray-600 drop-shadow-sm",
      header:
        "relative w-full py-3 mb-3 border-b-2 flex items-center justify-between text-18 border-[rgba(0,0,0,0.3)",
      title: "text-center font-bold leading-10 text-slate-200",
      closeButton: "absolute p-2 shadow-sm right-4",
    },
  };

  const modalStyles = styleDictionary[variant];

  return modalStyles;
};

export default addSidebarCss;
