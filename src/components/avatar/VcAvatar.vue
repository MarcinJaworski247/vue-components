<template>
  <div
    class="avatar"
    :class="{
      'avatar--small': size === 'small',
      'avatar--medium': size === 'medium',
      'avatar--large': size === 'large',
    }"
    :style="dynamicStyles"
  >
    <img v-if="!initials" :src="img" :alt="imgAlt" class="avatar__img" />
    <span v-if="initials" class="avatar__initials">
      {{ initials }}
    </span>
  </div>
</template>
<script setup>
import { onMounted, toRef } from "vue";
import { computed } from "@vue/reactivity";

const props = defineProps({
  img: {
    type: String,
    required: false,
    default: "src/assets/avatar-placeholder.png",
  },
  imgAlt: {
    type: String,
    required: false,
    default: "Avatar photo",
  },
  initials: {
    type: String,
    required: false,
    default: "",
  },
  size: {
    type: String,
    required: false,
    default: "small",
  },
  borderColor: {
    type: String,
    required: false,
    default: "",
  },
  backgroundColor: {
    type: String,
    required: false,
    default: "#fff",
  },
  textColor: {
    type: String,
    required: false,
    default: "inherit",
  },
});

const borderColor = toRef(props, "borderColor");
const backgroundColor = toRef(props, "backgroundColor");
const textColor = toRef(props, "textColor");

const dynamicStyles = computed(() => {
  let styles = {};
  if (borderColor.value) {
    styles.border = `2px solid ${borderColor.value}`;
  }
  styles.backgroundColor = backgroundColor.value;
  styles.color = textColor.value;
  return styles;
});

onMounted(() => {
  console.log(textColor.value);
});
</script>
<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  overflow: hidden;

  &__img {
    max-width: 100%;
    max-height: 100%;
  }

  &__initials {
    font-weight: 500;
  }

  &--small {
    width: 60px;
    height: 60px;
    font-size: 2.4rem;
  }

  &--medium {
    width: 85px;
    height: 85px;
    font-size: 3rem;
  }

  &--large {
    width: 115px;
    height: 115px;
    font-size: 3.6rem;
  }
}
</style>
