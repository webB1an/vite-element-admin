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
        name: 'DashBoard',
        component: DashBoard,
        meta: { icon: 'dashboard', title: '首页' }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        name: 'Documentation',
        component: () => import('@/views/documentation/index.vue'),
        meta: { icon: 'documentation', title: '文档' }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    redirect: '/icon/index',
    children: [
      {
        path: 'index',
        name: 'Icon',
        component: () => import('@/views/icon/index.vue'),
        meta: { icon: 'icon', title: '图标' }
      }
    ]
  },
  {
    path: '/components',
    // name: 'Components',
    component: Layout,
    redirect: '/components/tinymce',
    meta: { icon: 'icon', title: '富文本编辑器' },
    children: [
      {
        path: 'tinymce',
        name: 'Tinymce',
        component: () => import('@/views/components/tinymce.vue'),
        meta: { title: '富文本编辑器' }
      },
      {
        path: 'icon',
        name: 'Icon1',
        component: () => import('@/views/icon/index.vue'),
        meta: { title: '图标' }
      }
    ]
  }
  // {
  //   path: '/todo',
  //   component: Layout,
  //   redirect: '/todo/list',
  //   meta: { icon: 'todo', name: 'Todo' },
  //   children: [
  //     {
  //       path: 'list',
  //       // hidden: true,
  //       component: () => import('@/views/todo/list.vue'),
  //       meta: { icon: 'todo', name: 'List' }
  //     }, {
  //       path: 'detail',
  //       // hidden: true,
  //       component: () => import('@/views/todo/detail.vue'),
  //       meta: { name: 'Detail' }
  //     }, {
  //       path: 'nest',
  //       redirect: '/todo/nest/list',
  //       meta: { name: 'nest' },
  //       component: Layout,
  //       children: [
  //         {
  //           path: 'list',
  //           // hidden: true,
  //           component: () => import('@/views/todo/list.vue'),
  //           meta: { icon: 'todo', name: 'List' }
  //         }, {
  //           path: 'detail',
  //           // hidden: true,
  //           component: () => import('@/views/todo/detail.vue'),
  //           meta: { name: 'Detail' }
  //         }
  //       ]
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes]
})

export default router
