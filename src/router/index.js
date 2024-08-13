import { createWebHistory, createRouter } from 'vue-router'

import Home from '../view/Home.vue'
import About from '../view/About.vue'

const routes = [
  {
    path: '/',
    name:'home',
    component: Home
  },
  {
    path: '/about',
    name:'about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router