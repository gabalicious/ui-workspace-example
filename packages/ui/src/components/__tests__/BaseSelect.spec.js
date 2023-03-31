import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseSelect from "../BaseSelect.vue";

describe("BaseSelect tests", () => {
  it("Renders with no value, no error", async () => {
    expect(BaseSelect).toBeTruthy();

    const wrapper = mount(BaseSelect, {
      props: {
        label: "Do you like magic?",
        options: ["Yes", "No"],
        modelValue: "",
      },
    });
    const selectLabel = wrapper.find({ ref: "select-label" });
    const input = wrapper.find({ ref: "select-input" });

    expect(selectLabel.text()).toContain("Do you like magic?");
    expect(input.element.value).toBe("");
  });
  it("Can select a value", async () => {
    const wrapper = mount(BaseSelect, {
      props: {
        label: "Do you like magic?",
        options: ["Yes", "No"],
        modelValue: "",
      },
    });

    const input = wrapper.find({ ref: "select-input" });
    await input.trigger("click");
    await wrapper.find("#Yes").trigger("click");

    expect(input.element.value).toBe("Yes");
  });
  it("Can select a value with array of objects as options", async () => {
    const wrapper = mount(BaseSelect, {
      props: {
        label: "Do you like magic?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        modelValue: "",
      },
    });

    const input = wrapper.find({ ref: "select-input" });
    await input.trigger("click");
    await wrapper.find("#yes").trigger("click");

    expect(input.element.value).toBe("Yes");
  });
});
