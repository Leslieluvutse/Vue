import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SignupView from '@/views/SignupView.vue'
import CartView from '@/views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
   
    },
    {
    path: '/signup',
    name: 'signup',
    component:SignupView
    },
    {
      path: '/cart',
      name: 'cart',
      component:CartView
      },
      {
        path: '/',
        name: 'signup',
        component:SignupView
        }
  ]
})

export default router
