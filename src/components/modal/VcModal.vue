<template>
  <div v-if="visible" class="modal-wrapper">
    <section class="modal" :style="styles">
      <header class="modal__header">
        <span> {{ title }} </span>
        <span class="modal__close-icon" @click="closeModal">&times;</span>
      </header>
      <div class="modal__content">
        <slot></slot>
      </div>
    </section>
  </div>
</template>
<script setup>
import { toRef, computed } from "vue";

const emit = defineEmits(["onClose"]);

const props = defineProps({
  visible: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  width: {
    type: String,
    required: false,
    default: "40%",
  },
});

const width = toRef(props, "width");

const styles = computed(() => {
  return {
    width: width.value,
  };
});

function closeModal() {
  emit("onClose");
}
</script>
<style lang="scss" scoped>
.modal-wrapper {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: fixed;
  z-index: 999;
}
.modal {
  background-color: #f8f9fa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  padding: 24px;
  margin: 5% auto;
  border-radius: 7px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    font-size: 2rem;
  }

  &__close-icon {
    cursor: pointer;
    font-size: 36px;
  }

  &__content {
  }
}
</style>
