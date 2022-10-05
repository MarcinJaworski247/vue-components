<template>
  <div class="pl-4 pt-4">
    <vue-comp-button
      text="Click me!"
      class="mr-2"
    />
    <vue-comp-button
      text="Click me!"
      disabled
      class="mr-2"
    />
    <vue-comp-button
      text="Click me!"
      type="primary"
      class="mr-2"
    />
    <vue-comp-button
      text="Click me!"
      type="primary"
      disabled
      class="mr-2"
    />
    <vue-comp-button
      text="Click me!"
      type="danger"
      class="mr-2"
    />
    <vue-comp-button
      text="Click me!"
      type="danger"
      disabled
      class="mr-2"
    />
  </div>
</template>

<script setup>
import "./styles/main.scss";
import VueCompButton from "@/components/button/VueCompButton.vue";
</script>
