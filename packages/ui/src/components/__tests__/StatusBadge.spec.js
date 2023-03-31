import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StatusBadge from "../StatusBadge.vue";

describe("Status Badge works under all conditions", () => {
  it("Renders 'Default' badge correctly", async () => {
    expect(StatusBadge).toBeTruthy();

    const wrapper = mount(StatusBadge, {
      props: {
        text: "Default",
      },
    });
    // const badgeText = wrapper.find({ ref: "badge-text" });
    // expect(badgeText.classes()).toContain("text-gray-900");
    // expect(wrapper.attributes("data-test")).toBe("badge-container");
    expect(wrapper.text()).toContain("DEFAULT");
    // expect(wrapper.classes()).toContain("bg-gray-400");
  });

  it("Renders 'Info' badge correctly", async () => {
    expect(StatusBadge).toBeTruthy();

    const wrapper = mount(StatusBadge, {
      props: {
        status: "info",
        text: "Info",
      },
    });
    // const badgeText = wrapper.find({ ref: "badge-text" });
    // expect(badgeText.classes()).toContain("text-blue-800");
    // expect(wrapper.attributes("data-test")).toBe("badge-container");
    expect(wrapper.text()).toContain("INFO");
    // expect(wrapper.classes()).toContain("bg-blue-200");
  });

  it("Renders 'Warning' badge correctly", async () => {
    expect(StatusBadge).toBeTruthy();

    const wrapper = mount(StatusBadge, {
      props: {
        status: "warning",
        text: "Warning",
      },
    });
    // const badgeText = wrapper.find({ ref: "badge-text" });
    // expect(badgeText.classes()).toContain("text-yellow-900");
    // expect(wrapper.attributes("data-test")).toBe("badge-container");
    expect(wrapper.text()).toContain("WARNING");
    // expect(wrapper.classes()).toContain("bg-yellow-200");
  });

  it("Renders 'error' badge correctly", async () => {
    expect(StatusBadge).toBeTruthy();

    const wrapper = mount(StatusBadge, {
      props: {
        status: "error",
        text: "error",
      },
    });
    const badgeText = wrapper.find({ ref: "badge-text" });

    // expect(wrapper.attributes("data-test")).toBe("badge-container");
    expect(wrapper.text()).toContain("ERROR");
    // expect(wrapper.classes()).toContain("bg-red-100");
    // expect(badgeText.classes()).toContain("text-red-900");
  });

  it("Renders 'critical' badge correctly", async () => {
    expect(StatusBadge).toBeTruthy();

    const wrapper = mount(StatusBadge, {
      props: {
        status: "critical",
        text: "critical",
      },
    });
    const badgeText = wrapper.find({ ref: "badge-text" });

    // expect(wrapper.attributes("data-test")).toBe("badge-container");
    expect(wrapper.text()).toContain("CRITICAL");
    // expect(wrapper.classes()).toContain("bg-red-200");
    // expect(badgeText.classes()).toContain("text-red-800");
  });
});
