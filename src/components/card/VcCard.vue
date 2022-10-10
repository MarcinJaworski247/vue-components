<template>
  <article class="card" :class="{ 'card--wide': wide }">
    <div class="card__image">
      <img :src="img" :alt="imgAlt" loading="lazy" />
    </div>
    <div class="px-2">
      <header>
        <h2 class="card__title">{{ title }}</h2>
        <span class="card__subtitle">{{ subTitle }}</span>
      </header>
      <div class="card__content">
        {{ content }}
      </div>
      <footer class="card__footer"></footer>
    </div>
  </article>
</template>
<script setup>
defineProps({
  wide: {
    type: Boolean,
    required: false,
    default: false,
  },
  img: {
    type: String,
    required: false,
    default: "src/assets/img-placeholder.jpg",
  },
  imgAlt: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  subTitle: {
    type: String,
    required: false,
    default: "",
  },
  content: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.card {
  width: 250px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 9px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;

  &--wide {
    display: flex;
    width: 560px;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.3);
    img {
      transform: scale(1.2);
    }
  }

  &__image {
    width: 250px;
    overflow: hidden;

    img {
      transition: 1s ease;
      height: auto;
      max-width: 100%;
      filter: opacity(80%);
      display: block;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: 1.2px;
    padding-top: 12px;
  }

  &__subtitle {
    color: #868e96;
    padding-top: 8px;
    display: inline-block;
  }

  &__content {
    padding-top: 12px;
    overflow: hidden;
    padding-bottom: 12px;
  }
}
</style>
