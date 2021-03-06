import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
