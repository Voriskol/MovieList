<script setup lang="ts">
import BadgeItem from './BadgeItem.vue'

defineProps<{
  id: number
  poster: string
  name: string
  description: string
  rating: number
  genre: string
  duration: string
}>()
</script>

<template>
  <article class="card" v-if="id">
    <div class="img__wrapper">
      <img class="card__img" :src="poster" alt="" />
    </div>
    <div class="card__textblock">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="badge__container">
      <BadgeItem id="rating" image="./icons/Star.png" :text="rating" />
      <BadgeItem id="genre" image="./icons/Film.png" :text="genre" />
      <BadgeItem id="duration" image="./icons/Clock.png" :text="duration" />
    </div>
  </article>
</template>

<style scoped>
.card {
  cursor: pointer;
  position: relative;
  width: 300px;
  height: 460px;
  padding: 12px;
  border-radius: 16px;
  background-color: #292d32;
  color: white;
  transition: all 0.3s;
  border: 1px solid #702bfe;
}

.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  transition: all 0.3s;
  z-index: -1;
}

.card:hover {
  transform: translate(-10px, -10px);
}

.card:hover::after {
  transform: translate(10px, 10px);
  background-color: #9747ff2a;
}

.img__wrapper {
  display: flex;
  justify-content: center;
}

.card__img {
  max-width: 200px;
  border-radius: 5px;
}

.card__textblock {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card__textblock h3 {
  font-size: 28px;
  font-weight: 700;
}

.card__textblock p {
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  overflow: hidden;
}

.badge__container {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}
</style>
