import { createRouter, createWebHistory } from 'vue-router'
import AboutMovieView from '../views/AboutMovieView.vue'
import MovieListView from '../views/MovieListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieListView,
    },
    { path: '/movie/:id', name: 'movie', component: AboutMovieView, props: true },
  ],
})

export default router
