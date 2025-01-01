<script setup lang="ts">
import AboutMovie from '@/components/AboutMovie.vue'
defineProps<{
  id: number
}>()
</script>

<template>
  <AboutMovie :id="id" />
</template>

<style></style>
