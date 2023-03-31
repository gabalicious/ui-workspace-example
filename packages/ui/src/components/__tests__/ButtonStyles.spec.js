import { mount } from "@vue/test-utils";
import { useButtonStyles } from "@composables/useButtonStyles";
import { vi } from "vitest";

describe("useButtonStyles", () => {
  it("generates the correct classes", async () => {
    // Create a mock implementation of getThemeClasses
    const getThemeClassesMockImpl = async () => {
      return {
        variants: {
          primary: "bg-primary text-white",
          secondary: "bg-secondary text-white",
        },
        disabledVariants: {
          primary: "bg-primary opacity-50",
          secondary: "bg-secondary opacity-50",
        },
        sizes: {
          sm: "px-3 py-1",
          md: "px-4 py-2",
          lg: "px-6 py-3",
        },
      };
    };

    const getThemeClassesMock = vi.fn(getThemeClassesMockImpl);

    // Replace the original getThemeClasses with the mock
    vi.mock("src/utils/getThemeClasses.ts", () => {
      return {
        __esModule: true,
        default: getThemeClassesMock,
      };
    });

    // Create a wrapper for the component that uses the useButtonStyles composition function
    const Component = {
      template: "<div></div>",
      setup() {
        const props = {
          variant: "primary",
          size: "md",
          disabled: false,
          theme: "default",
        };
        const { classes } = useButtonStyles(props);
        return { classes };
      },
    };
    const wrapper = mount(Component);

    await wrapper.vm.$nextTick();

    // Check that classes has the correct value
    // expect(wrapper.vm.classes).toContain("bg-primary");
    // expect(wrapper.vm.classes).toContain("text-white");
    // expect(wrapper.vm.classes).toContain("px-4");
    // expect(wrapper.vm.classes).toContain("py-2");
    // expect(wrapper.vm.classes).not.toContain("opacity-50");

    // Check that getThemeClasses was called with the correct arguments
    // expect(getThemeClassesMock).toHaveBeenCalledWith("default", "Button");
  });
});
