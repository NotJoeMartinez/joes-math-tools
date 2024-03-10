import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import IsRefPage from '@/pages/IsRefPage.vue'
import IsReducedRefPage from '@/pages/isReducedRefPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage 
    },
    {
        path: '/isRef',
        name: 'IsRef',
        component: IsRefPage 
    },
    {
        path: '/isrref',
        name: 'IsRref',
        component: IsReducedRefPage
    }
  ]
})

export default router
