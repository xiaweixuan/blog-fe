import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import('../views/Life/Life.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos/Photos.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting/Setting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
