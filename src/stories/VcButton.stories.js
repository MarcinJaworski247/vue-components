import VcButton from "../components/button/VcButton.vue";

export default {
  title: "VcButton",
  component: VcButton,
  argTypes: {
    text: "String",
    disabled: "Boolean",
    type: {
      control: { type: "select" },
      options: ["normal", "primary", "danger"],
    },
  },
};

const Template = (args) => ({
  components: { VcButton },
  setup() {
    return { args };
  },
  template: "<VcButton v-bind='args' />",
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: "primary",
  text: "Click me!",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  type: "danger",
  text: "Click me!",
};

export const NormalButton = Template.bind({});
NormalButton.args = {
  type: "normal",
  text: "Click me!",
};
