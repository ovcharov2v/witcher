<template>
  <section class="map">
    <div class="container">
      <h2 class="h2">Магазины мерча ведьмака</h2>
    </div>
    <div class="container map__container">
      <picture>
        <source srcset="images/map/map.webp" type="image/webp" />
        <img src="images/map/map.png" alt="" class="map__img" />
      </picture>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Map",
});
</script>

<style lang="scss" scoped>
.map {
  padding-top: 20px;

  @media (min-width: $md) {
    padding-top: 30px;
  }

  @media (min-width: $lg) {
    padding-top: 36px;
    padding-bottom: 96px;
  }

  &__container {
    height: 400px;
    @media (max-width: $lg) {
      max-width: 100%;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: $lg) {
      height: 540px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
