<template>
  <span class="loader" :style="styles"></span>
</template>
<script setup>
import { toRef, computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: false,
    default: "#1971c2",
  },
  size: {
    type: String,
    required: false,
    default: "60px",
  },
});

const color = toRef(props, "color");
const size = toRef(props, "size");

const styles = computed(() => {
  return {
    backgroundColor: color.value,
    width: size.value,
    height: size.value,
  };
});
</script>
<styles lang="scss" scoped>
.loader {
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  -webkit-mask: conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box;
  mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: animation 1s infinite linear;
}
@keyframes animation {
  to {
    transform: rotate(1turn);
  }
}
</styles>
