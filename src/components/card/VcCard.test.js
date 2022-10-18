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

  it("should contain title provided by prop", () => {
    const testTitle = "Test title";

    const wrapper = mount(VcCard, {
      props: {
        title: testTitle,
      },
    });

    const title = wrapper.find(".card__title").text();

    expect(title).toBe(testTitle);
  });

  it("should contain subtitle provided by prop", () => {
    const testSubtitle = "Test subtitle";

    const wrapper = mount(VcCard, {
      props: {
        subtitle: testSubtitle,
      },
    });

    const subtitle = wrapper.find(".card__subtitle").text();

    expect(subtitle).toBe(testSubtitle);
  });

  it("should contain content provided by prop", () => {
    const testContent = "Test content";

    const wrapper = mount(VcCard, {
      props: {
        content: testContent,
      },
    });

    const content = wrapper.find(".card__content").text();

    expect(content).toBe(testContent);
  });
});
