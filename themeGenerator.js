const data = {
  name: "Theme1",
  colors: [
    {
      name: "Porcelain",
      hex: "#f1f2f3",
    },
    {
      name: "Iron",
      hex: "#e7e8e9",
    },
    {
      name: "Iron",
      hex: "#d2d3d6",
    },
    {
      name: "Silver Sand",
      hex: "#babcc0",
    },
    {
      name: "Gray Chateau",
      hex: "#989ea5",
    },
    {
      name: "Pale Sky",
      hex: "#6f757d",
    },
    {
      name: "Abbey",
      hex: "#575c62",
    },
    {
      name: "Mako",
      hex: "#3f4447",
    },
    {
      name: "Shark",
      hex: "#27282a",
    },
    {
      name: "Solitude",
      hex: "#dee8ff",
    },
    {
      name: "Solitude",
      hex: "#dee8ff",
    },
    {
      name: "Malibu",
      hex: "#8cb4ff",
    },
    {
      name: "Malibu",
      hex: "#6399ff",
    },
    {
      name: "Royal Blue",
      hex: "#3471e6",
    },
    {
      name: "Denim",
      hex: "#1b58cb",
    },
    {
      name: "Tory Blue",
      hex: "#1148b0",
    },
    {
      name: "Torea Bay",
      hex: "#0d3f9b",
    },
    {
      name: "Deep Sapphire",
      hex: "#092b6d",
    },
    {
      name: "Serenade",
      hex: "#ffede4",
    },
    {
      name: "Romantic",
      hex: "#ffd3bc",
    },
    {
      name: "Hit Pink",
      hex: "#ffb78f",
    },
    {
      name: "Atomic Tangerine",
      hex: "#fd965c",
    },
    {
      name: "Jaffa",
      hex: "#f38142",
    },
    {
      name: "Red Damask",
      hex: "#d8743a",
    },
    {
      name: "Copper",
      hex: "#ba6636",
    },
    {
      name: "Desert",
      hex: "#aa5624",
    },
    {
      name: "Russet",
      hex: "#843f1b",
    },
    {
      name: "Granny Apple",
      hex: "#d8f6df",
    },
    {
      name: "Madang",
      hex: "#c1efd0",
    },
    {
      name: "Chinook",
      hex: "#a2e5b4",
    },
    {
      name: "Vista Blue",
      hex: "#89d29c",
    },
    {
      name: "Fern",
      hex: "#63bc7b",
    },
    {
      name: "Mountain Meadow",
      hex: "#1ead68",
    },
    {
      name: "Genoa",
      hex: "#17965a",
    },
    {
      name: "Salem",
      hex: "#038749",
    },
    {
      name: "Dark Fern",
      hex: "#0a4018",
    },
    {
      name: "Cinderella",
      hex: "#fddedd",
    },
    {
      name: "Your Pink",
      hex: "#ffc3c1",
    },
    {
      name: "Mona Lisa",
      hex: "#ff9c9b",
    },
    {
      name: "Salmon",
      hex: "#fe7a77",
    },
    {
      name: "Carnation",
      hex: "#f45752",
    },
    {
      name: "Pomegranate",
      hex: "#f04038",
    },
    {
      name: "Red",
      hex: "#e10c05",
    },
    {
      name: "Milano Red",
      hex: "#b4100c",
    },
    {
      name: "Dark Burgundy",
      hex: "#6f0905",
    },
    {
      name: "Peach Cream",
      hex: "#fff0dc",
    },
    {
      name: "Frangipani",
      hex: "#fee1b8",
    },
    {
      name: "Peach Orange",
      hex: "#ffd294",
    },
    {
      name: "Koromiko",
      hex: "#ffc36e",
    },
    {
      name: "Yellow Orange",
      hex: "#ffad39",
    },
    {
      name: "Carrot Orange",
      hex: "#ed981d",
    },
    {
      name: "Tahiti Gold",
      hex: "#d98309",
    },
    {
      name: "Indochine",
      hex: "#c27507",
    },
    {
      name: "Cola",
      hex: "#442800",
    },
  ],
};
// Choose when to start new mapping
const totalSubColors = 9;
const prefix = "";
const mappingColorNames = [
  "gray",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
];

// For each color i need to create a new mapping compatible with tailwind

let colorMappingNumber = 0;
let subColorMappingNumber = 0;
const result = {};
data.colors.forEach((color, index) => {
  const colorNameWithPrefix = `${prefix}${
    mappingColorNames[colorMappingNumber]
  }-${(subColorMappingNumber + 1) * 100}`;
  if (subColorMappingNumber === totalSubColors - 1) {
    colorMappingNumber++;
    subColorMappingNumber = 0;
  } else {
    subColorMappingNumber++;
  }
  const colorHex = color.hex;
  result[colorNameWithPrefix] = colorHex;
});

console.log(result);
