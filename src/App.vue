<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header"><RouterLink to="/">Mori Cocinema</RouterLink></header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer class="footer">
    <p class="footer__text">Test Task, 2024</p>
    <address>
      <a class="address__text phone" href="tel:518-363-2171">518-363-2171</a>
      <p class="address__text">91 Park St. Fairhope, AL 36532</p>
    </address>
  </footer>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
