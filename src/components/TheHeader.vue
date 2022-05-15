<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="logo header__logo" title="На главную">
        <img src="../assets/images/logo.png" alt="" class="logo__image" />
      </router-link>
      <router-link
        to="/request"
        class="button button--sm button--outline-red header__button"
      >
        Подключить подписку
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
.header {
  padding: 16px 0;
  background-color: #000;

  @media (min-width: $md) {
    padding: 12px 0;
  }

  @media (min-width: $lg) {
    padding: 20px 0;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    @media (max-width: $md) {
      max-width: 106px;
    }
  }

  &__button {
    width: 100%;
    max-width: 210px;

    @media (min-width: $md) {
      max-width: 220px;
    }
  }
}
</style>
