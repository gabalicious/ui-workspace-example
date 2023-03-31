const addInputCss = function (type: string) {
  interface StylesDictionary {
    [key: string]: {
      label: string;
      input: string;
      errMessage: string;
    };
  }
  const baseStyles = {
    label: "block mb-2 text-15 font-bold ",
    input:
      "border pl-1  border-gray-300 min-h-[3.6rem] min-w-[250px] rounded-lg",
  };
  const stylesDictionary: StylesDictionary = {
    base: {
      label: baseStyles.label,
      input: baseStyles.input,
      errMessage: "hidden",
    },
    error: {
      label: baseStyles.label,
      input: baseStyles.input,
      errMessage:
        "ml-2 p-0 relative z-50 block w-max bg-white  -mt-[.9rem] text-red-800 font-bold ml-1 shadow-xs shadow-[rgba(0,0,0,.08)",
    },
  };

  const variantClass = stylesDictionary[type];

  return variantClass;
};

export default addInputCss;
