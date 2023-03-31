type VariantDictionary = {
  [key: string]: string;
};
const addAvatarCss = function (variant: string) {

  const variantDictionary: VariantDictionary = {
    primary: "bg-blue-500 text-white font-bold py-2 px-4 rounded",
    secondary: "bg-gray-500 text-white font-bold py-2 px-4 rounded",
    success: "bg-green-500 text-white font-bold py-2 px-4 rounded",
    danger: "bg-red-500 text-white font-bold py-2 px-4 rounded",
    warning: "bg-yellow-500 text-white font-bold py-2 px-4 rounded",
    info: "bg-blue-300 text-white font-bold py-2 px-4 rounded",
    light: "bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded",
    dark: "bg-gray-800 text-white font-bold py-2 px-4 rounded",
  };

  const variantClass = variantDictionary[variant];
  return variantClass;
}

export default addAvatarCss;