<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { data } from '@/api/data'
import MovieCard from './MovieCard.vue'
import type { IMovie } from '@/interfaces'

const carouselConfig = {
  autoplay: 2000,
  wrapAround: true,
  itemsToShow: 3,
}
const bestFilms = ref<Array<IMovie>>()
const findBestFilms = () => {
  bestFilms.value = data.items.filter((item) => item.rating > 6)
}
onMounted(findBestFilms)
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="movie in bestFilms" :key="movie.id">
      <div class="carousel__item">
        <img :src="movie.poster" alt="" />
      </div>
    </Slide>
  </Carousel>
</template>

<style scoped>
.carousel__item img {
  border: 5px solid white;
}
</style>
