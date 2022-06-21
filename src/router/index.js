import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import Help from '@/views/Help'
import CreateReview from '@/views/CreateReview'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/CreateReview',
    name: 'CreateReview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateReview
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
