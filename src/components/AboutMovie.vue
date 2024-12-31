<script setup lang="ts">
import { data } from '@/api/data'
import { onMounted, ref } from 'vue'

const choosenMovie = ref<any>()
const { id } = defineProps<{
  id: number
}>()

const getMovieInfo = () => {
  data.items.find((item) => {
    if (item.id == id) {
      choosenMovie.value = item
    }
  })
}

onMounted(getMovieInfo)
</script>
<template>
  {{ choosenMovie }}
</template>
