<script setup lang="ts">
import { data } from '@/api/data'
import { onMounted, ref } from 'vue'
import type { IMovie } from '@/interfaces'
const choosenMovie = ref<IMovie>()
const { id } = defineProps<{
  id: number
}>()

const getMovieInfo = async () => {
  data.items.find((item) => {
    if (item.id == id) {
      choosenMovie.value = item
    }
  })
}

onMounted(getMovieInfo)
</script>
<template>
  <article v-if="choosenMovie" class="movieTab">
    <div>
      <img :src="choosenMovie.poster" alt="Movie poster" />
    </div>
    <div class="movieInfo">
      <h2>{{ choosenMovie.name }}</h2>
      <p>{{ choosenMovie.description }}</p>
      <div class="movieInfo__shortBlock">
        <p class="first">genre: {{ choosenMovie.genre }}</p>
        <p class="second">duration: {{ choosenMovie.duration }}</p>
        <p class="third">rating: {{ choosenMovie.rating }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.movieTab {
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  color: white;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
}

.movieTab img {
  width: 300px;
  border-radius: 20px;
}
.movieInfo {
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 400px;
}

.movieInfo h2 {
  font-size: 54px;
}

.movieInfo p {
  line-height: 1.7rem;
}

.movieInfo__shortBlock {
  display: flex;
  flex-direction: column;
  padding-right: 20px;
}

.movieInfo__shortBlock p {
  background-color: rgba(28, 27, 27, 0.998);
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(82, 66, 173, 0.2);
  -moz-box-shadow: 0px 0px 5px 1px rgba(82, 66, 173, 0.2);
  box-shadow: 0px 0px 5px 1px rgba(82, 66, 173, 0.2);
  font-weight: bold;
  border: 1px solid #702bfe;
  width: 130px;
}

.first {
  align-self: start;
}
.second {
  align-self: center;
}

.third {
  align-self: end;
}
</style>
