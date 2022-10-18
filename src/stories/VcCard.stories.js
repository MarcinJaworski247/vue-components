import VcCard from "../components/card/VcCard.vue";

export default {
  title: "VcCard",
  component: VcCard,
  argTypes: {
    wide: "Boolean",
    img: "String",
    imgAlt: "String",
    title: "String",
    subtitle: "String",
    content: "String",
  },
};

const Template = (args) => ({
  components: { VcCard },
  setup() {
    return { args };
  },
  template: "<VcCard v-bind='args' />",
});

export const NormalCard = Template.bind({});
NormalCard.args = {
  wide: false,
  img: "https://picsum.photos/400/200",
  title: "Some title",
  subtitle: "Some subtitle",
  imgAlt: "Some random photo",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit.",
};

export const WideCard = Template.bind({});
WideCard.args = {
  wide: true,
  img: "https://picsum.photos/200/300",
  title: "Some title",
  subtitle: "Some subtitle",
  imgAlt: "Some random photo",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit.",
};
