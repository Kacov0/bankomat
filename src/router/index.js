import { createRouter, createWebHistory } from 'vue-router'
import StronaWprowadzPin from '../strony/WprowadzPin.vue';
import LoadingScreen from '../strony/LoadingScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'wprowadz-pin',
      component: StronaWprowadzPin,
    },
    {
      path: '/ladowanie',
      name: 'ladowanie',
      component: LoadingScreen,
    },
  ],
})

export default router
