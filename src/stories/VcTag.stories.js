import VcTag from "../components/tag/VcTag.vue";

export default {
  title: "VcTag",
  component: VcTag,
  argTypes: {
    text: "String",
    color: "String",
    filled: "Boolean",
    removable: "Boolean",
  },
};
const Template = (args) => ({
  components: { VcTag },
  setup() {
    return { args };
  },
  template: "<VcTag v-bind='args' />",
});

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  text: "Some tag",
};

export const ColoredTag = Template.bind({});
ColoredTag.args = {
  text: "Some tag",
  color: "green",
};

export const FilledTag = Template.bind({});
FilledTag.args = {
  text: "Some tag",
  color: "green",
  filled: true,
};

export const RemovableTag = Template.bind({});
RemovableTag.args = {
  text: "Some tag",
  removable: true,
};
