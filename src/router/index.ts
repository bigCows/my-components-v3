import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'singleMessageDemo',
      component: () => import('@/demo/single-message-demo.vue')
    },
    {
      path: '/my-table-demo',
      name: 'myTableDemo',
      component: () => import('@/demo/my-table-demo.vue')
    }
  ]
})

export default router
