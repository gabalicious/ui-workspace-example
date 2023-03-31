import { mount } from "@vue/test-utils";
import { vi } from "vitest";
import AccordionSection from "../AccordionSection.vue";

describe("AccordionSection functions properly", () => {
  it("Is hidden by default", () => {
    const wrapper = mount(AccordionSection, {});

    expect(wrapper.find("#accordion-section-0").exists()).toBe(true);
  });

  it(" Displays with correct title if(show)", async () => {
    const wrapper = mount(AccordionSection, {
      props: {
        sectionHeader: "Correct title",
        showSection: true,
        index: 0,
      },
    });
    await vi.dynamicImportSettled();
    const props = wrapper.props();
    expect(wrapper.find(`#accordion-section-${props.index}`).exists()).toBe(
      true
    );

    expect(wrapper.find(`#section-title-${props.index}`).text()).toBe(
      "Correct title"
    );
    expect(wrapper.find(`#section-title-${props.index}`).classes()).toContain(
      "font-bold"
    );
    expect(wrapper.find(`#section-title-${props.index}`).classes()).toContain(
      "text-slate-800"
    );
  });

  it(" Emits the 'toggle' event", () => {
    const wrapper = mount(AccordionSection, {
      props: {
        title: "Correct title",
        showSection: true,
      },
    });
    wrapper.find("#toggle-section-0").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("toggle");
  });
});
