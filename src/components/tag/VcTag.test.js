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
