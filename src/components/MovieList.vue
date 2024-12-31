<script setup lang="ts">
import { ref } from 'vue'
import { data } from '../api/data'
import MovieCard from './MovieCard.vue'
import router from '@/router'
const movies = ref<any>(data.items)

const goToMovie = async (id: number) => {
  await router.push({
    name: 'movie',
    params: {
      id: id,
    },
  })
}
</script>

<template>
  <MovieCard
    @click="goToMovie(movie.id)"
    v-for="(movie, index) in movies"
    :key="index"
    :id="movie.id"
    :poster="movie.poster"
    :name="movie.name"
    :description="movie.description"
  />
</template>
