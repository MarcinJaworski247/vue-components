import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import VcAvatar from "./VcAvatar.vue";

describe("VcAvatar.vue", () => {
  it("should have proper class if prop size=small", () => {
    const testSize = "small";

    const wrapper = mount(VcAvatar, {
      props: {
        size: testSize,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["avatar--small"])
    );
  });

  it("should have proper class if prop size=medium", () => {
    const testSize = "medium";

    const wrapper = mount(VcAvatar, {
      props: {
        size: testSize,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["avatar--medium"])
    );
  });

  it("should have proper class if prop size=large", () => {
    const testSize = "large";

    const wrapper = mount(VcAvatar, {
      props: {
        size: testSize,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["avatar--large"])
    );
  });

  it("should contain initials provided by prop", () => {
    const testInitials = "VC";

    const wrapper = mount(VcAvatar, {
      props: {
        initials: testInitials,
      },
    });

    const initialsContainer = wrapper.find(".avatar__initials");
    const initials = initialsContainer.text();

    expect(initialsContainer).toBeDefined();
    expect(initials).toBe(testInitials);
  });

  it("should contain max 2 characters long initials", () => {
    const testInitials = "initials";

    const wrapper = mount(VcAvatar, {
      props: {
        initials: testInitials,
      },
    });

    const initialsLength = wrapper.find(".avatar__initials").text().length;

    expect(initialsLength).toBe(2);
  });
});
