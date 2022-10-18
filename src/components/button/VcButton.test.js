import { mount } from "@vue/test-utils";
import { describe, it, expect, test } from "vitest";
import VcButton from "./VcButton.vue";

describe("VcButton.vue", () => {
  it("should have proper class if prop type=normal", () => {
    const testType = "normal";

    const wrapper = mount(VcButton, {
      props: {
        type: testType,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["button--normal"])
    );
  });

  it("should have proper class if prop type=primary", () => {
    const testType = "primary";

    const wrapper = mount(VcButton, {
      props: {
        type: testType,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["button--primary"])
    );
  });

  it("should have proper class if prop type=danger", () => {
    const testType = "danger";

    const wrapper = mount(VcButton, {
      props: {
        type: testType,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["button--danger"])
    );
  });

  it("should not emit onClick event if disabled", async () => {
    const testDisabled = true;

    const wrapper = mount(VcButton, {
      props: {
        disabled: testDisabled,
      },
    });

    await wrapper.trigger("click");

    expect(wrapper.emitted("onClick")).toBeFalsy();
  });
});
