<template>
  <section class="stills container">
    <h2 class="h2">Кадры со съемок</h2>
    <!-- Gallery -->
    <div class="gallery">
      <div class="gallery__still" v-for="(_, index) in 5" :key="index">
        <picture>
          <source
            :srcset="`images/gallery/photo${index + 1}.webp`"
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source
            :srcset="`images/gallery/photo${index + 1}.jpg`"
            type="image/jpeg"
            media="(min-width: 768px)"
          />
          <source
            :srcset="`images/gallery/photo${index + 1}-mobile.webp`"
            type="image/webp"
            media="(max-width: 767px)"
          />
          <img
            :src="`images/gallery/photo${index + 1}-mobile.jpg`"
            alt=""
            class="gallery__img"
          />
        </picture>
      </div>
    </div>
    <!-- Load more -->
    <button class="button button--outline-red button--block gallery__button">
      Показать еще
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Gallery",
});
</script>

<style lang="scss" scoped>
.stills {
  padding-top: 50px;
  padding-bottom: 28px;

  @media (min-width: $md) {
    padding-top: 26px;
    padding-bottom: 36px;
  }

  @media (min-width: $lg) {
    padding-top: 34px;
    padding-bottom: 36px;
  }
}

.gallery {
  margin-bottom: 24px;

  @media (min-width: $md) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: calc(50% - 8px) repeat(2, calc(25% - 12px));
    grid-gap: 16px;
  }

  @media (min-width: $lg) {
    grid-template-columns: calc(50% - 12px) repeat(2, calc(25% - 18px));
    grid-gap: 24px;
    margin-bottom: 32px;
  }

  &__still {
    position: relative;
    margin-bottom: 16px;

    @media (min-width: $md) {
      margin-bottom: 0;
    }

    &::before {
      display: block;
      padding-top: 64.5%;
      content: "";

      @media (min-width: $md) {
        padding-top: 100%;
      }
    }

    &:first-child {
      @media (min-width: $md) {
        grid-row: 1/3;
      }
    }

    &:nth-child(n + 4) {
      @media (max-width: $md) {
        display: none;
      }
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__button {
    padding: 15px 32px;
  }
}
</style>
