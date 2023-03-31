import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppSidebar from "../AppSidebar.vue";

describe("AppSidebar functions properly", () => {
  it("Is hidden by default", () => {
    const wrapper = mount(AppSidebar, {});

    expect(wrapper.find("#sidebar-container").exists()).toBe(false);
  });

  it(" Displays with correct title if(show)", () => {
    const wrapper = mount(AppSidebar, {
      props: {
        title: "Correct title",
        show: true,
      },
    });
    expect(wrapper.find("#sidebar-container").exists()).toBe(true);
    expect(wrapper.find("#sidebar-title").text()).toBe("Correct title");
  });

  it(" Emits the 'hide' event", () => {
    const wrapper = mount(AppSidebar, {
      props: {
        title: "Correct title",
        show: true,
      },
    });
    wrapper.find("#close-sidebar").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("hide");
  });
});
