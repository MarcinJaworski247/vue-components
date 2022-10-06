<template>
  <div class="pl-4 pt-4">
    <div class="mb-4 flex">
      <vc-button text="Click me!" />
      <vc-button
        text="Click me!"
        disabled
      />
      <vc-button
        text="Click me!"
        type="primary"
      />
      <vc-button
        text="Click me!"
        type="primary"
        disabled
      />
      <vc-button
        text="Click me!"
        type="danger"
      />
      <vc-button
        text="Click me!"
        type="danger"
        disabled
      />
    </div>
    <div class="mb-4 flex">
      <vc-card
        img="https://picsum.photos/400/200"
        title="Some title"
        sub-title="Some subtitle"
        img-alt="Some random photo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        dolorum odit, omnis esse."
      />
      <vc-card
        title="Some title"
        sub-title="Some subtitle"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        dolorum odit, omnis esse."
      />
      <vc-card
        img="https://picsum.photos/200/300"
        img-alt="Some random photo"
        title="Some title"
        sub-title="Some subtitle"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        dolorum odit,"
        wide
      />
    </div>
  </div>
</template>

<script setup>
import "./styles/main.scss";
import VcButton from "@/components/button/VcButton.vue";
import VcCard from "@/components/card/VcCard.vue";
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  column-gap: 32px;
  row-gap: 32px;
  align-items: flex-start;
  flex: 0 0 auto;
  flex-wrap: wrap;
}
</style>
