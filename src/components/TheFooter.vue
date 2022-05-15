<template>
  <footer class="footer">
    <div class="container footer__container">
      <router-link to="/" class="logo footer__logo" title="На главную">
        <img src="../assets/images/logo.png" alt="Logo" class="logo__image" />
      </router-link>
      <a href="/terms" class="footer__term-link">
        Политика обработки персональных данных
      </a>
      <!-- Social -->
      <div class="footer__social-links social">
        <ul class="social__list">
          <li class="social__item">
            <a
              href="https://instagram.com"
              class="social__link"
              target="_blank"
              rel="nofollow"
              title="Instagram"
            >
              <SvgIcon name="instagram" classString="social__icon" />
            </a>
          </li>
          <li class="social__item">
            <a
              href="https://facebook.com"
              class="social__link"
              target="_blank"
              rel="nofollow"
              title="Facebook"
            >
              <SvgIcon name="facebook" classString="social__icon" />
            </a>
          </li>
          <li class="social__item">
            <a
              href="https://vk.com"
              class="social__link"
              target="_blank"
              rel="nofollow"
              title="Vkontakte"
            >
              <SvgIcon name="vk" classString="social__icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  components: { SvgIcon },
});
</script>

<style scoped lang="scss">
.footer {
  padding: 28px 0 24px;
  background-color: #343338;

  @media (min-width: $md) {
    padding: 42px 0;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    order: 1;
  }

  &__term-link {
    order: 3;
    position: relative;
    width: 100%;
    max-width: 100%;
    margin-top: 26px;
    font-size: 14px;
    line-height: 20px;
    color: rgba($color-white, 0.7);
    text-decoration: underline;
    text-underline-offset: 2.5px;
    transition: color $default-transition;

    @media (min-width: $md) {
      order: 2;
      max-width: 183px;
      margin-top: 0;
      text-align: center;
    }

    @media (min-width: $lg) {
      transform: translateX(5px);
    }

    &:hover {
      color: $color-white;
    }
  }

  &__social-links {
    order: 2;

    @media (min-width: $md) {
      order: 3;
    }
  }
}

.social {
  &__list {
    display: flex;
    margin: 0 -8px;
    padding-left: 0;
    list-style-type: none;

    @media (min-width: $md) {
      margin: 0 -8px;
    }

    @media (min-width: $lg) {
      margin: 0 -10px;
    }
  }

  &__item {
    padding: 0 6px;

    @media (min-width: $md) {
      padding: 0 8px;
    }

    @media (min-width: $lg) {
      padding: 0 10px;
    }
  }

  &__link {
    position: relative;
    z-index: 1;
    display: block;
    width: 32px;
    height: 32px;
    text-decoration: none;
    color: rgba($color-white, 0.8);
    transition: color $default-transition, background-color $default-transition;

    &::before {
      position: absolute;
      z-index: -1;
      top: 1px;
      left: 1px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      content: "";
      transition: background-color $default-transition;
    }

    &:hover {
      color: $color-red-hover;

      &::before {
        background-color: $color-white;
      }
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
  }
}
</style>
