import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/posts',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/post/:id',
    name: 'Post-view',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/post/update/:id',
    name: 'Post-update',
    component: () => import('../views/PostUpdate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
