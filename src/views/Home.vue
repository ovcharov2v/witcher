<template>
  <Hero />
  <Actors />
  <Gallery />
  <Map />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/sections/Hero.vue";
import Actors from "@/components/sections/actors/Actors.vue";
import Gallery from "@/components/sections/Gallery.vue";
import Map from "@/components/sections/Map.vue";

export default defineComponent({
  name: "Home",
  components: {
    Map,
    Gallery,
    Actors,
    Hero,
  },
});
</script>
