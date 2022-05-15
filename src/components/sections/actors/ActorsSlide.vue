<template>
  <div
    class="hero-card"
    :style="{ backgroundImage: `url('images/heroes/${photo}')` }"
  >
    <div class="hero-card__info-box">
      <div class="hero-card__base-info">
        <p class="hero-card__character-name">{{ heroName }}</p>
        <p class="hero-card__actor-name">{{ actorName }}</p>
      </div>
      <p class="hero-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "swiper/swiper-bundle.min.css";

export default defineComponent({
  name: "ActorsSlide",
  props: {
    photo: {
      type: String,
      required: true,
    },
    heroName: {
      type: String,
      required: true,
    },
    actorName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.hero-card {
  position: relative;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    display: block;
    width: 100%;
    padding-top: 130%;
    content: "";

    @media (min-width: $md) {
      padding-top: 142%;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(#000, 0.4) 0%,
      rgba(#000, 0.8) 100%
    );
    content: "";
    opacity: 0;
    transition: opacity $default-transition;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &__info-box {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    transform: translateY(100%);
    transition: transform $default-transition;

    @media (min-width: $md) {
      padding: 16px 16px 24px;
    }

    @media (min-width: $lg) {
      padding: 24px 24px 32px;
    }

    .hero-card:hover & {
      transform: translateY(0);
    }
  }

  &__base-info {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 24px;
    transform: translateY(-100%) translateY(-31px);
    transition: transform $default-transition;

    @media (min-width: $md) {
      font-size: 20px;
      line-height: 28px;
      transform: translateY(-100%) translateY(-42px);
    }

    @media (min-width: $lg) {
      font-size: 24px;
      line-height: 32px;
      transform: translateY(-100%) translateY(-56px);
    }

    .hero-card:hover & {
      transform: translateY(0);
    }
  }

  &__character-name {
    margin-bottom: 0;
    font-weight: 600;

    @media (min-width: $md) {
      margin-bottom: 4px;
    }
  }

  &__actor-name {
    margin-bottom: 0;
  }

  &__description {
    max-width: 220px;
    margin-bottom: 0;
  }
}
</style>
