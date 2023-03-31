import { it, describe, expect, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Button from "../Button.vue";
import { watchEffect, createApp } from "vue";

describe("Button", async () => {
  it("passes propsData", async () => {
    const wrapper = mount(Button, {
      propsData: {
        id: "test-button",
        variant: "primary",
        // font: "mono",
        // rounded: "rounded",
        disabled: true,
      },
      global: {
        provide: {
          theme: "default",
        },
      },
    });
    const button = wrapper.find("button");
    // check for variant prop
    expect(wrapper.props("variant")).toBe("primary");
    expect(wrapper.props("disabled")).toBe(true);

    expect(button.attributes("id")).toBe("test-button");
  });

  it("renders slot", async () => {
    // use shallowMount to avoid rendering child components

    const app = createApp({
      template: `
        <div>{{ myValue }}</div>
      `,
      provide: {
        myValue: "expectedValue",
      },
      inject: ["myValue"],
      setup() {
        return { myValue };
      },
    });

    const wrapper = mount(Button, {
      slots: {
        default: "Test Button",
      },

      global: {
        provide: {
          theme: "default",
        },
      },

      propsData: {
        variant: "primary",
      },
      data() {
        return {
          myDataProperty: "myDataValue",
        };
      },
      computed: {
        myComputedProperty() {
          return "computedValue";
        },
      },
    });
    expect(wrapper.text()).toBe("Test Button");
    // console.log(wrapper.vm.myComputedProperty);
  });
});
