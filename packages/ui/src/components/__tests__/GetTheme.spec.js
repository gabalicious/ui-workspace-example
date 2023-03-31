import getThemeClasses from "src/utils/getThemeClasses";

describe("getThemeClasses", () => {
  it("returns the correct styles for the given theme and component", async () => {
    const styles = await getThemeClasses("default", "Button");
    expect(styles).toBeDefined();
    // console.log(styles);

    // Test Variant Base styles
    expect(styles.variants.primary).toContain("bg-blue-700");
    expect(styles.variants.secondary).toContain("bg-pink-500");

    // Test Base disabled  variants

    expect(styles.disabledVariants.primary).toContain(
      "bg-gray-100 text-gray-500 cursor-not-allowed"
    );
    expect(styles.disabledVariants.secondary).toContain(
      "bg-gray-100 text-gray-500 cursor-not-allowed"
    );

    // Test  sizes

    expect(styles.sizes.none).toContain("p-0");
    expect(styles.sizes.xs).toContain("px-1");
    expect(styles.sizes.xs).toContain("py-1");

    expect(styles.sizes.sm).toContain("px-2");
    expect(styles.sizes.sm).toContain("py-3");

    // expect(styles.bgColor).toContain("#ffffff");
    // expect(styles.textColor).toContain("#333333");
    // expect(styles.fontSize).toContain("16px");
  });
});
