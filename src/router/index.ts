import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// import Home from '@/views/home/index.vue'
import Layout from '@/layout/index.vue'
import DashBoard from '@/views/dashboard/index.vue'

type RouterConfig = RouteRecordRaw & { hidden?: boolean }

export const constantRoutes: RouterConfig[] = [
  {
    path: '/',
    redirect: '/dashboard/index'
  }
]

export const asyncRoutes: RouterConfig[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        component: DashBoard,
        meta: { icon: 'dashboard', name: 'DashBoard' }
      }
    ]
  }, {
    path: '/todo',
    component: Layout,
    redirect: '/todo/list',
    meta: { icon: 'todo', name: 'Todo' },
    children: [
      {
        path: 'list',
        // hidden: true,
        component: () => import('@/views/todo/list.vue'),
        meta: { icon: 'todo', name: 'List' }
      }, {
        path: 'detail',
        // hidden: true,
        component: () => import('@/views/todo/detail.vue'),
        meta: { name: 'Detail' }
      }, {
        path: 'nest',
        redirect: '/todo/nest/list',
        meta: { name: 'nest' },
        component: Layout,
        children: [
          {
            path: 'list',
            // hidden: true,
            component: () => import('@/views/todo/list.vue'),
            meta: { icon: 'todo', name: 'List' }
          }, {
            path: 'detail',
            // hidden: true,
            component: () => import('@/views/todo/detail.vue'),
            meta: { name: 'Detail' }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes]
})

export default router
