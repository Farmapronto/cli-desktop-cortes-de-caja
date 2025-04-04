import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/Home.vue'
import NotFoundView from '@/views/404NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashboardView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
