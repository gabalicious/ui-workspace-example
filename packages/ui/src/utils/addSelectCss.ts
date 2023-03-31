const addSelectCss = function (type: string) {
  interface StylesDictionary {
    [key: string]: {
      options: string;
      option: string;
    };
  }
  const stylesDictionary: StylesDictionary = {
    base: {
      options:
        "border absolute border-gray-300 min-h-[3.6rem] rounded-lg bg-white w-1/3 z-10 p-1  mt-[-.2rem]",
      option:
        "rounded-lg w-full text-slate-700 cursor-pointer text-15 hover:bg-gray-400  ",
    },
  };

  const variantClass = stylesDictionary[type];

  return variantClass;
};

export default addSelectCss;
