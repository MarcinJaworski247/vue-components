import VcModal from "../components/modal/VcModal.vue";

export default {
  title: "VcModal",
  component: VcModal,
  argTypes: {
    visible: "Boolean",
    title: "String",
    width: "String",
    onClose: {},
  },
};

const Template = (args) => ({
  components: { VcModal },
  setup() {
    return { args };
  },
  template: `<VcModal v-bind='args'>
    <img src="https://picsum.photos/200/100" loading="lazy" />
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          similique qui adipisci facilis repellat optio ut praesentium obcaecati
          repudiandae unde. Modi voluptatum tempore totam inventore in officia
          maiores repellendus nihil!
        </p>
    </VcModal>`,
});

export const ModalWithSlot = Template.bind({});
ModalWithSlot.args = {
  title: "Modal title",
  visible: true,
  width: "40%",
};
