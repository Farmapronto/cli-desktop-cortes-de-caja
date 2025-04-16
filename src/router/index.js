import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/Home.vue'
import NotFoundView from '@/views/404NotFoundView.vue'
import AjustesView from '../views/AjustesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashboardView
  },
  {
    path: '/newcorte',
    name: 'NewCorte',
    component: () => import('@/views/NewCorteMultiStepForm.vue')
  },
  {
    path: '/cortes',
    name: 'Cortes',
    component: () => import('@/views/CortesView.vue')
  },
  {
    path:'/cortedetallado',
    name: 'CortesDetallados',
    component: () => import('@/views/CortesDetailView.vue')
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    component: AjustesView
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
