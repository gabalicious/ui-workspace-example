const addHeaderCss = (variant: string) => {
  interface HeaderStyles {
    [key: string]: {
      container: string;
      headerContent: string;
      leftSlot: string;
      centerSlot: string;
      rightSlot: string;
    };
  }
  const headerStyles: HeaderStyles = {
    default: {
      container:
        "relative top-0 left-0 flex items-center w-full h-20 px-5 text-gray-cool-900 bg-white dark:bg-gray-cool-850 dark:text-gray-cool-300",
      headerContent: "grid w-full grid-cols-4",
      leftSlot: "flex items-center justify-start gap-4",
      centerSlot: "col-span-2 flex items-center justify-center gap-4",
      rightSlot: "flex items-center justify-end",
    },
  };
  const result = headerStyles[variant];
  return result;
};

export const addPageHeaderCss = (variant: string) => {
  interface HeaderStyles {
    [key: string]: {
      container: string;
      headerContent: string;
      leftSlot: string;
      centerSlot: string;
      rightSlot: string;
    };
  }
  const headerStyles: HeaderStyles = {
    default: {
      container:
        "flex items-center justify-between px-5 py-4 my-auto bg-white drop-shadow-lg border-t-2 border-gray-cool-200 dark:border-gray-cool-900 dark:bg-gray-cool-850 dark:text-gray-cool-300",
      headerContent: "grid w-full grid-cols-4",
      leftSlot: "flex items-center justify-start gap-4",
      centerSlot: "col-span-2 flex items-center justify-center gap-4",
      rightSlot: "flex items-center justify-end",
    },
  };
  const result = headerStyles[variant];
  return result;
};

export default addHeaderCss;
