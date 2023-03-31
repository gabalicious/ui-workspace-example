async function getThemeClasses(theme: string, component: string) {
  const themeList = ["default", "client1", "client3", "client2"];
  let chosenTheme = theme;
  if (!themeList.includes(theme)) {
    chosenTheme = "default";
  }
  try {
    const { Styles } = await import(
      `@tenants/${chosenTheme}/styles/${component}/index.js`
    );
    return Styles;
  } catch (error) {
    const { Styles } = await import(
      `@tenants/default/styles/${component}/index.js`
    );
    return Styles;
  }
}

export default getThemeClasses;
