<script setup lang="ts">
const props = defineProps<{
  id: string
  image: string
  text: string | number
}>()
const choosingClass = () => {
  if (props.id == 'genre') {
    return 'genre'
  } else if (props.id == 'duration') {
    return 'duration'
  } else if (props.id == 'rating') {
    if (typeof props.text == 'number') {
      if (props.text < 5) {
        return 'bad-rating'
      } else if (props.text > 6) {
        return 'good-rating'
      } else {
        return 'normal-rating'
      }
    }
  }
}
</script>

<template>
  <div class="badge" :class="choosingClass()">
    <img v-if="id == 'rating'" src="./icons/Star.png" alt="badge image" />
    <img v-else-if="id == 'genre'" src="./icons/Film.png" alt="badge image" />
    <img v-else-if="id == 'duration'" src="./icons/Clock.png" alt="badge image" />
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 11px;
  width: 65px;
  height: 20px;
  padding: 2px 6px;
  border-radius: 15px;
  background-color: red;
}

.badge img {
  width: 15px;
}

.genre {
  background-color: #2c81fb;
}

.duration {
  background-color: #702bfe;
}

.bad-rating {
  background-color: red;
}

.normal-rating {
  background-color: purple;
}
.good-rating {
  background-color: green;
}
</style>
