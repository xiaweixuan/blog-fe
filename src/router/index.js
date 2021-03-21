import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import('../views/Life')
  },
  {
    path: '/articleDetail/:id',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetail')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos')
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
