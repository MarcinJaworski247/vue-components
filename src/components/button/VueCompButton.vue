<template>
  <button
    :disabled="disabled"
    class="button"
    :class="{
      'button--normal': type === 'normal',
      'button--primary': type === 'primary',
      'button--danger': type === 'danger',
    }"
  >
    {{ text }}
  </button>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
    required: false,
    default: "",
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: "normal",
  },
});
</script>
<style lang="scss" scoped>
@mixin boxShadow($color: rgba(0, 0, 0, 0.25)) {
  box-shadow: 0 0.2rem 0.2rem $color;
}

@mixin disabled {
  cursor: default;
  box-shadow: none;
}

@mixin active {
  box-shadow: none;
}

.button {
  height: 3.2rem;
  min-width: 6.4rem;
  padding: 1rem 1.6rem;
  border-radius: 0.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-flex;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  @include boxShadow;

  &--normal {
    background-color: #f1f3f5;
    color: #2d3436;

    &:hover {
      background-color: #e9ecef;
      @include boxShadow(#e9ecef);
    }

    &:disabled {
      background-color: #f1f3f5;
      color: #868e96;
      @include disabled;
    }

    &:active {
      @include active;
    }
  }

  &--primary {
    background-color: #1c7ed6;
    color: #fff;

    &:hover {
      background-color: #1971c2;
      @include boxShadow(rgba(25, 113, 194, 0.325));
    }

    &:disabled {
      background-color: #74c0fc;
      @include disabled;
    }

    &:active {
      @include active;
    }
  }

  &--danger {
    background-color: #f03e3e;
    color: #fff;

    &:hover {
      background-color: #e03131;
      @include boxShadow(rgba(224, 49, 49, 0.325));
    }

    &:disabled {
      background-color: #ffa8a8;
      @include disabled;
    }

    &:active {
      @include active;
    }
  }
}
</style>
