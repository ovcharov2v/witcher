<template>
  <section class="hero">
    <div class="container">
      <h1 class="h1">Сериал Ведьмак</h1>
      <p class="hero__text">
        Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
        идет навстречу своей судьбе в неспокойном мире, где люди часто
        оказываются куда коварнее чудовищ.
      </p>
      <router-link to="/watch" class="button button--red hero__button">
        Смотреть сериал
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  z-index: 1;
  padding-top: 56px;
  padding-bottom: 73px;

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(#000, 0.4) 0%,
      rgba(#000, 0) 51.53%
    );
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
    content: "";
  }

  &::after {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/images/hero/bg.jpg");
    background-position: 77% 31%;
    background-size: 328% auto;
    background-repeat: no-repeat;
    opacity: 0.8;
    content: "";

    @media (min-width: $md) {
      background-position: 89% 23%;
      background-size: 154% auto;
    }

    @media (min-width: $lg) {
      background-position: 99% 23%;
      opacity: 0.68;
    }

    @media (min-width: 1700px) {
      background-size: cover;
    }
  }

  @media (min-width: $md) {
    padding-top: 60px;
    padding-bottom: 76px;
  }

  @media (min-width: $lg) {
    padding-top: 104px;
    padding-bottom: 100px;
  }

  &__text {
    max-width: 260px;
    margin-bottom: 32px;

    @media (min-width: $md) {
      max-width: 344px;
    }

    @media (min-width: $lg) {
      max-width: 424px;
      margin-bottom: 40px;
    }
  }

  &__button {
    width: 100%;
    max-width: 186px;

    @media (min-width: $md) {
      max-width: 200px;
    }

    @media (min-width: $lg) {
      max-width: 204px;
    }
  }
}
</style>
