import VcAvatar from "../components/avatar/VcAvatar.vue";

export default {
  title: "VcAvatar",
  component: VcAvatar,
  argTypes: {
    img: "String",
    imgAlt: "String",
    initials: "String",
    size: "String",
    borderColor: "String",
    textColor: "String",
    backgroundColor: "String",
  },
};
const Template = (args) => ({
  components: { VcAvatar },
  setup() {
    return { args };
  },
  template: "<VcAvatar v-bind='args' />",
});

export const SmallDefaultAvatar = Template.bind({});
SmallDefaultAvatar.args = {
  size: "small",
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  size: "small",
  img: "https://picsum.photos/400",
};

export const SmallAvatarWithBorder = Template.bind({});
SmallAvatarWithBorder.args = {
  size: "small",
  img: "https://picsum.photos/400",
  borderColor: "green",
};

export const SmallAvatarWithInitials = Template.bind({});
SmallAvatarWithInitials.args = {
  size: "small",
  initials: "MJ",
  backgroundColor: "#ade4e4",
  borderColor: "#127676",
};

export const MediumAvatar = Template.bind({});
MediumAvatar.args = {
  size: "medium",
  img: "https://picsum.photos/400",
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  size: "large",
  img: "https://picsum.photos/200",
};
