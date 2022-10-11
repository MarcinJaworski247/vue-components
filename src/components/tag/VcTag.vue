<template>
  <div class="tag" :style="colors">
    {{ text }}
    <span v-if="removable" @click="onRemove" class="ml-1 tag__close"
      >&#10006;</span
    >
  </div>
</template>
<script setup>
import { toRef } from "vue";
import { computed } from "@vue/reactivity";

const emit = defineEmits(["onRemove"]);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: "#1971c2",
  },
  filled: {
    type: Boolean,
    required: false,
    default: false,
  },
  removable: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const color = toRef(props, "color");
const filled = toRef(props, "filled");

const colors = computed(() => {
  if (filled.value) {
    return {
      color: "#fff",
      backgroundColor: color.value,
      borderColor: color.value,
    };
  } else {
    return { color: color.value, borderColor: color.value };
  }
});

function onRemove() {
  emit("onRemove");
}
</script>
<style lang="scss" scoped>
.tag {
  display: inline-block;
  background-color: white;
  padding: 4px 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 7px;

  &__close {
    cursor: pointer;
  }
}
</style>
