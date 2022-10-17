import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import VcCard from "./VcCard.vue";

describe("VcCard.vue", () => {
  it("should render the correct style for prop wide=true", () => {
    const wide = true;

    const wrapper = mount(VcCard, {
      props: {
        wide,
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(["card--wide"]));
  });

  it("should render the correct style for prop wide=false", () => {
    const wide = false;

    const wrapper = mount(VcCard, {
      props: {
        wide,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.not.arrayContaining(["card--wide"])
    );
  });
});
