import { createRouter, createWebHistory } from 'vue-router'
import PokeView from '../views/PokeView.vue'
import AboutView from '../views/AboutView.vue'
import RandomView from '../views/RandomView.vue'

const routes = [
  {
    path: '/',
    name: 'pokemon',
    component: PokeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/random',
    name: 'random',
    component: RandomView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
