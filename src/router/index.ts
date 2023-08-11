import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'


export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/demo/index.vue'),
    children: [
      {
        path: '/single-message',
        name: 'singleMessage',
        component: () => import('@/demo/single-message-demo.vue')
      },
      {
        path: '/my-table',
        name: 'myTable',
        component: () => import('@/demo/my-table-demo.vue')
      },
      {
        path: '/pinia',
        name: 'pinia',
        component: () => import('@/demo/pinia-demo.vue')
      },
      {
        path: '/components-namespaces',
        name: 'componentsNamespaces',
        component: () => import('@/demo/components-namespaces-demo.vue')
      },
      {
        path: '/diretive',
        name: 'diretive',
        component: () => import('@/demo/diretive-demo.vue')
      },
    ]
  },
  
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login.vue')
  // },
  // {
  //   path: '/404',
  //   name: 'NotFound',
  //   component: () => import('@/views/404.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*', 
  //   name: 'NotMatch',
  //   redirect: {name: 'NotFound'},
  // },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export const asyncRoutes = [
  {
    path: '/a',
    name: 'a',
    component: () => import('@/views/a.vue'),
  },
  {
    path: '/b', 
    name: 'b',
    component: () => import('@/views/b.vue')
  }
]

const whiteList = ['/login']


// router.addRoute({
//   path: '/b', 
//   name: 'b',
//   component: () => import('@/views/b.vue')
// })
// console.log(router, 'router');

// router.beforeEach((to, from, next) => {
//   console.log(to, 'to');
//   const useUser = useUserStore()
//   if (useUser.token) {
//     if(to.path === '/login') {
//       next('/')
//     } else {
//       if(!useUser.userInfo.name) {
//           const user = { name: '张三',age:30, role: ['a']}
//           useUser.changeUserInfo(user)  
//           localStorage.setItem('userInfo',JSON.stringify(user))
//           const userRoutes = useUser.filterRoutes(user.role)
//           userRoutes.forEach(item => {
//             router.addRoute(item)
//           })
//           next()
//       } else {
//         next()
//       }
//     }
//   } else {
//     if(whiteList.includes(to.path)) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  const useUser = useUserStore()
  if(!useUser.userInfo.name) {
    const user = { name: '张三',age:30, role: ['a']}
    useUser.changeUserInfo(user)  
    localStorage.setItem('userInfo',JSON.stringify(user))
    const userRoutes = useUser.filterRoutes(user.role)
    userRoutes.forEach(item => {
      router.addRoute(item)
    })
    next()
    // router.addRoute({ 
    //   path: '/a', 
    //   name: 'a',
    //   component: () => import('@/views/a.vue')
    // })
    console.log(router, 'router');
  }
  next()
})

export default router
