<script setup lang="ts">
import { ref } from 'vue'
import { data } from '../api/data'
import MovieCard from './MovieCard.vue'
import router from '@/router'
import type { IMovie } from '@/interfaces'
const movies = ref<Array<IMovie>>(data.items)

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
  <h2 class="movieList__title">All Movies</h2>
  <MovieCard
    @click="goToMovie(movie.id)"
    v-for="(movie, index) in movies"
    :key="index"
    :id="movie.id"
    :poster="movie.poster"
    :name="movie.name"
    :description="movie.description"
    :rating="movie.rating"
    :genre="movie.genre"
    :duration="movie.duration"
  />
</template>

<style scoped>
.movieList__title {
  width: 100%;
  font-size: 54px;
  padding-left: 40px;
  color: white;
}
</style>
