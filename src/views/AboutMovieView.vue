<script setup lang="ts">
import AboutMovie from '@/components/AboutMovie.vue'
defineProps<{
  id: number
}>()
</script>

<template>
  <main>
    <AboutMovie :id="id" />
  </main>
</template>

<style></style>
