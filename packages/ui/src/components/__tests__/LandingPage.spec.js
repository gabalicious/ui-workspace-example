import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LandingPage from "../composites/LandingPage.vue";

describe("Landing Page Composite", () => {
  it("Renders ok", async () => {
    expect(LandingPage).toBeTruthy();
    const wrapper = mount(LandingPage, {
      props: {
        variant: "default",
      },
    });
    const pageContainer = wrapper.find({ ref: "landing-page" });
    const searchInput = wrapper.find("#search-input");
    const searchButton = wrapper.find("#search-button");
    expect(searchInput.element.value).toBe("");
    expect(pageContainer.text()).toContain("App Header");
    expect(searchButton.text()).toContain("Search");
  });
  it("Toggles Modal", async () => {
    expect(LandingPage).toBeTruthy();
    const wrapper = mount(LandingPage, {
      props: {
        variant: "default",
      },
    });

    const showButton = wrapper.find("#open-modal");
    await showButton.trigger("click");
    const modalText = wrapper.find("#modal-text");
    expect(modalText.text()).toBe("You have opened the modal.");
    const closeButton = wrapper.find("#close-modal");
    await closeButton.trigger("click");
  });
});
