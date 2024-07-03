import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Documents from '../views/Documents.vue'
import Tasks from '../views/Tasks.vue'
import Clients from '../views/Clients.vue'
import Employers from '../views/Employers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/documents',
      component: Documents
    },
    {
      path: '/tasks',
      component: Tasks
    },
    {
      path: '/clients',
      component: Clients,
    },
    {
      path: '/employers',
      component: Employers
    }
  ]
})

export default router
