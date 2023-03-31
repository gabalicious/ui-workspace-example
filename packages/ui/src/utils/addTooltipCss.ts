const validPositions = ["top", "right", "bottom", "left"];

const addTooltipCss = function (position: string, darkMode: boolean) {
  if (!validPositions.includes(position)) {
    throw new Error(`Invalid position: ${position}`);
  }
  interface PositionDictionary {
    [key: string]: {
      className: string;
    };
  }
  const positionDictionary: PositionDictionary = {
    top: {
      className: " top-0 ",
    },
    right: {
      className: "right-0",
    },
    left: {
      className: "left-0 ",
    },
    bottom: {
      className: "top-0",
    },
  };
  interface ChevronPositionDictionary {
    [key: string]: {
      className: string;
    };
  }
  const chevronPositionDictionary: ChevronPositionDictionary = {
    top: {
      className: "right-[8px] bottom-[-5px] border-l-0 border-t-0 ",
    },
    right: {
      className: "right-[-6px] bottom-[15px] border-b-0 border-l-0",
    },
    left: {
      className: "left-[-6px] bottom-[15px] border-t-0 border-r-0",
    },
    bottom: {
      className: "right-[8px] top-[-5px] border-r-0 border-b-0",
    },
  };

  const colorThemeStyles = darkMode
    ? "bg-slate-800 text-slate-300 border-slate-700 shadow-lg "
    : `bg-white text-slate-800 border-slate-200 shadow-lg `;

  const classNameResult = {
    position: positionDictionary[position].className,
    theme: colorThemeStyles,
    chevronPosition: chevronPositionDictionary[position].className,
  };

  return classNameResult;
};

export default addTooltipCss;
