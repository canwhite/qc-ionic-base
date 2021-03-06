import { createRouter, createWebHistory } from '@ionic/vue-router';
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // component: Home
    component: () => import('@/views/Home.vue')
  },
  {
    path:"/new",
    name:"NewItem",
    component: () => import('@/views/NewItem.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
