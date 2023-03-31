import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseInput from "../BaseInput.vue";

describe("BaseInput tests", () => {
  it("Renders with no value, no error", async () => {
    expect(BaseInput).toBeTruthy();

    const wrapper = mount(BaseInput, {
      props: {
        label: "Hello there!",
        hasError: false,
      },
    });
    const inputLabel = wrapper.find({ ref: "input-label" });
    const input = wrapper.find({ ref: "base-input" });

    expect(inputLabel.text()).toContain("Hello there!");
    expect(input.element.value).toBe("");
    expect(wrapper.find({ ref: "error-message" }).exists()).toBe(false);
  });

  it("Gets correct value from input", async () => {
    expect(BaseInput).toBeTruthy();

    const wrapper = mount(BaseInput, {
      props: {
        label: "Email",
        hasError: false,
      },
    });
    const inputLabel = wrapper.find({ ref: "input-label" });
    const input = wrapper.find({ ref: "base-input" });

    expect(inputLabel.text()).toBe("Email");
    expect(input.element.value).toBe("");
    await input.setValue("my@mail.com");
    expect(input.element.value).toBe("my@mail.com");
  });

  it("Displays correct error message on error", async () => {
    expect(BaseInput).toBeTruthy();

    const wrapper = mount(BaseInput, {
      props: {
        label: "Email",
        hasError: true,
        errMessage: "Please enter a valid email",
      },
    });
    const inputLabel = wrapper.find({ ref: "input-label" });
    const input = wrapper.find({ ref: "base-input" });
    const errorMessage = wrapper.find({ ref: "error-message" });

    expect(inputLabel.text()).toBe("Email");
    expect(input.element.value).toBe("");
    expect(errorMessage.text()).toBe("Please enter a valid email");
  });
});
