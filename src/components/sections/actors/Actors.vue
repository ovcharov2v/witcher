<template>
  <!-- Actors section -->
  <section class="actors">
    <div class="container">
      <div class="actors__header">
        <h2 class="h2 actors__title">Актерский состав</h2>
        <!-- Slider nav -->
        <div class="slider-nav">
          <button
            class="slider-nav__btn slider-nav__btn--prev"
            aria-label="Назад"
          >
            <SvgIcon name="arrow-left" classString="slider-nav__arrow" />
          </button>
          <button
            class="slider-nav__btn slider-nav__btn--next"
            aria-label="Вперед"
          >
            <SvgIcon name="arrow-left" classString="slider-nav__arrow" />
          </button>
        </div>
      </div>
      <!-- Slider progress bar -->
      <div class="slider-progress">
        <div class="slider-progress__indicator"></div>
      </div>
      <!-- Slider -->
      <swiper
        class="slider"
        :slides-per-view="1.5"
        :space-between="16"
        :pagination="{
          el: '.slider-progress',
          type: 'progressbar',
          progressbarFillClass: 'slider-progress__indicator',
        }"
        :navigation="{
          nextEl: '.slider-nav__btn--next',
          prevEl: '.slider-nav__btn--prev',
        }"
        :modules="modules"
        :grab-cursor="true"
        :breakpoints="{
          768: {
            slidesPerView: 2.38,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }"
      >
        <swiper-slide v-for="slide in slides" :key="slide.heroName">
          <ActorsSlide
            :photo="slide.photo"
            :heroName="slide.heroName"
            :actorName="slide.actorName"
            :description="slide.description"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import "swiper/swiper-bundle.min.css";
import ActorsSlide from "@/components/sections/actors/ActorsSlide.vue";

export default defineComponent({
  name: "Actors",
  components: {
    ActorsSlide,
    SvgIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
      slides: [
        {
          photo: "geralt.jpg",
          heroName: "Геральт",
          actorName: "Генри Кавилл",
          description:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },
        {
          photo: "jaskier.jpg",
          heroName: "Лютик",
          actorName: "Джои Бэти",
          description:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },
        {
          photo: "yennefer.jpg",
          heroName: "Йеннифэр",
          actorName: "Аня Чалотра",
          description:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },
        {
          photo: "ciri.jpg",
          heroName: "Цири",
          actorName: "Фрейя Аллан",
          description:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },
        {
          photo: "emhyr.jpg",
          heroName: "Эмгыр вар Эмрейс",
          actorName: "Барт Эдвардс",
          description:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.actors {
  padding-top: 16px;
  padding-bottom: 16px;
  overflow: hidden;

  @media (min-width: $md) {
    padding-top: 65px;
    padding-bottom: 36px;
  }

  @media (min-width: $lg) {
    padding-top: 72px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;

    @media (min-width: $md) {
      margin-bottom: 24px;
    }
  }

  &__title {
    margin-bottom: 0;
  }
}

.slider-nav {
  display: flex;
  margin: 0 -6px;

  @media (min-width: $md) {
    margin: 0 -12px;
  }

  &__btn {
    margin: 0 6px;
    padding: 0;
    border-width: 0;
    background-color: $color-transparent;
    color: $color-red;
    transition: color $default-transition;

    @media (min-width: $md) {
      margin: 0 12px;
    }

    &:disabled {
      color: rgba($color-white, 0.3);
      cursor: default;
    }

    &:not(:disabled):hover {
      color: $color-red-hover;
    }
  }

  &__arrow {
    width: 28px;
    height: 28px;
    transition: filter $default-transition;

    @media (min-width: $md) {
      width: 32px;
      height: 32px;
    }

    .slider-nav__btn--next & {
      transform: scalex(-1);
    }

    .slider-nav__btn:not(:disabled):hover & {
      filter: drop-shadow(0 2px 12px $color-red-hover);
    }
  }
}

.slider {
  overflow: visible;
}
</style>

<style lang="scss">
.slider-progress {
  position: relative;
  height: 2px !important;
  margin-bottom: 24px;

  @media (min-width: $md) {
    margin-bottom: 22px;
  }

  @media (min-width: $lg) {
    margin-bottom: 32px;
  }

  &__indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $color-red;
    transform: scale(0);
    transform-origin: left top;
  }
}
</style>
