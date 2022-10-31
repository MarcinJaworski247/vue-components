<template>
  <div class="pl-4 pt-4">
    <div class="mb-4 flex">
      <vc-button text="Click me!" />
      <vc-button text="Click me!" disabled />
      <vc-button text="Click me!" type="primary" />
      <vc-button text="Click me!" type="primary" disabled />
      <vc-button text="Click me!" type="danger" />
      <vc-button text="Click me!" type="danger" disabled />
    </div>
    <div class="mb-4 flex">
      <vc-card
        img="https://picsum.photos/400/200"
        title="Some title"
        subtitle="Some subtitle"
        img-alt="Some random photo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        dolorum odit, omnis esse."
      />
      <vc-card
        title="Some title"
        subtitle="Some subtitle"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        dolorum odit, omnis esse."
      />
      <vc-card
        img="https://picsum.photos/200/300"
        img-alt="Some random photo"
        title="Some title"
        subtitle="Some subtitle"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        dolorum odit,"
        wide
      />
    </div>
    <div class="mb-4 flex">
      <vc-tag text="Some tag" />
      <vc-tag text="Some tag" color="green" filled />
      <vc-tag
        v-if="tagVisible"
        text="Some tag"
        :removable="true"
        @onRemove="onTagRemove"
      />
    </div>
    <div class="mb-4 flex">
      <vc-avatar />
      <vc-avatar
        initials="HP"
        border-color="#127676"
        background-color="#ade4e4"
        text-color="#645858"
      />
      <vc-avatar border-color="red" />
      <vc-avatar size="medium" />
      <vc-avatar size="medium" initials="AG" />
      <vc-avatar size="large" />
      <vc-avatar size="large" initials="MJ" />
    </div>
    <div class="mb-4 flex">
      <vc-button text="Show modal" @click="showModal" />
      <vc-modal
        title="Modal title"
        width="30%"
        :visible="modalVisible"
        @onClose="closeModal"
      >
        <img src="https://picsum.photos/200/100" loading="lazy" />
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          similique qui adipisci facilis repellat optio ut praesentium obcaecati
          repudiandae unde. Modi voluptatum tempore totam inventore in officia
          maiores repellendus nihil!
        </p>
      </vc-modal>
    </div>
    <div class="mb-4 flex">
      <vc-loader />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import "./styles/main.scss";
import VcButton from "@/components/button/VcButton.vue";
import VcCard from "@/components/card/VcCard.vue";
import VcTag from "@/components/tag/VcTag.vue";
import VcAvatar from "@/components/avatar/VcAvatar.vue";
import VcModal from "@/components/modal/VcModal.vue";
import VcLoader from "@/components/loader/VcLoader.vue";

let tagVisible = ref(true);

function onTagRemove() {
  tagVisible.value = false;
}

let modalVisible = ref(false);

function showModal() {
  modalVisible.value = true;
}

function closeModal() {
  modalVisible.value = false;
}
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
