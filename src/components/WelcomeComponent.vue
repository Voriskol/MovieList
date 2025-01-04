<script setup lang="ts">
import TheCarousel from './TheCarousel.vue'
</script>
<template>
  <section class="welcome">
    <h1>All free movies based here. <br />You are welcome!</h1>
    <h2>BEST RATING</h2>
    <TheCarousel />
  </section>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: max-content;
  padding-bottom: 10px;
  background-image: url('@/assets/theater.png');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-top: 2px solid #702bfe;
  border-bottom: 2px solid #702bfe;
}

.welcome h1 {
  font-size: 60px;
  color: white;
  padding: 15px;
}

.welcome h2 {
  margin: 0 auto;
  color: white;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #702bfe;
  margin: 0 auto;
}
</style>
