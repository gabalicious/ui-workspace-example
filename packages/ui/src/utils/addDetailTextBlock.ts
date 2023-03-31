const addBlockStyles = function (variant: string) {
  interface TextBlockStyles {
    [key: string]: {
      container: string;
      label: string;
      text: string;
    };
  }
  const blockStyles: TextBlockStyles = {
    row: {
      container: "flex items-center justify-between w-full",
      label: "font-bold text-gray-900 text-15 ",
      text: "font-bold text-gray-900 text-15 ",
    },
    column: {
      container: "flex flex-col items-start justify-start",
      label: "font-bold text-15 text-gray-400",
      text: "font-bold text-15 text-gray-900",
    },
  };

  const variantClass = blockStyles[variant];
  return variantClass;
};

export default addBlockStyles;
