import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import VcTag from "./VcTag.vue";

describe("VcTag.vue", () => {
  it("should show an x icon if removable prop is set to true", () => {
    const removable = true;
    const text = "";

    const wrapper = mount(VcTag, {
      props: {
        removable,
        text,
      },
    });

    const closeIcon = wrapper.find(".tag__close");

    expect(closeIcon.exists()).toBeTruthy();
  });

  it("should contain a text provided by prop text", () => {
    const testText = "Test text";

    const wrapper = mount(VcTag, {
      props: {
        text: testText,
      },
    });

    const textContent = wrapper.find(".tag").text();

    expect(textContent).toBe(testText);
  });

  it("should have background color given provided by prop color if prop filled=true", async () => {
    const testColor = "orange";
    const filled = true;
    const testText = "";

    const wrapper = mount(VcTag, {
      props: {
        filled,
        color: testColor,
        text: testText,
      },
    });

    const componentStyles = wrapper.attributes().style;

    expect(componentStyles).toContain(`background-color: ${testColor}`);
  });

  it("should emit an event 'onRemove' if the x icon is clicked", async () => {
    const removable = true;
    const text = "";

    const wrapper = mount(VcTag, {
      props: {
        removable,
        text,
      },
    });

    const closeIcon = wrapper.find(".tag__close");
    await closeIcon.trigger("click");

    expect(wrapper.emitted("onRemove")).toBeTruthy();
  });
});
