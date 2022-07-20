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
    meta: { icon: 'component', title: '组件' },
    children: [
      {
        path: 'tinymce',
        name: 'Tinymce',
        component: () => import('@/views/components/tinymce/index.vue'),
        meta: { title: '富文本编辑器' }
      },
      {
        path: 'markdown',
        name: 'Markdown',
        component: () => import('@/views/components/markdown.vue'),
        meta: { title: 'Markdown' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    meta: { icon: 'nested', title: '嵌套' },
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: () => import('@/views/nested/menu1/index.vue'),
        meta: { title: '菜单 1' }
      },
      {
        path: 'menu2',
        name: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        meta: { title: '菜单 2' },
        children: [
          {
            path: 'menu2-1',
            name: 'menu2-1',
            component: () => import('@/views/nested/menu2/menu2-1/index.vue'),
            meta: { title: '菜单 2-1' }
          },
          {
            path: 'menu2-2',
            name: 'menu2-2',
            component: () => import('@/views/nested/menu2/menu2-2/index.vue'),
            meta: { title: '菜单 2-2' },
            children: [
              {
                path: 'menu2-2-1',
                name: 'menu2-2-1',
                component: () => import('@/views/nested/menu2/menu2-2/menu2-2-1/index.vue'),
                meta: { title: '菜单 2-2-1' }
              },
              {
                path: 'menu2-2-2',
                name: 'menu2-2-2',
                component: () => import('@/views/nested/menu2/menu2-2/menu2-2-2/index.vue'),
                meta: { title: '菜单 2-2-2' }
              }
            ]
          }
        ]
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
