import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// import Home from '@/views/home/index.vue'
import Layout from '@/layout/index.vue'
import DashBoard from '@/views/dashboard/index.vue'

export type RouterConfig = RouteRecordRaw & { hidden?: boolean }

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/index'
  },
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  }
]

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'DashBoard',
        component: DashBoard,
        meta: { icon: 'dashboard', title: '首页', affix: true }
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
        meta: { icon: 'documentation', title: '文档', affix: true }
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
  },
  {
    path: '/table',
    component: Layout,
    meta: { icon: 'table', title: 'Table' },
    children: [
      {
        path: 'dynamic-table',
        name: 'DynamicTable',
        component: () => import('@/views/table/dynamic-table/index.vue'),
        meta: { title: '动态 Table' }
      },
      {
        path: 'drag-table',
        name: 'DragTable',
        component: () => import('@/views/table/drag-table.vue'),
        meta: { title: '拖拽 Table' }
      },
      {
        path: 'inline-edit-table',
        name: 'InlineEditTable',
        component: () => import('@/views/table/inline-edit-table.vue'),
        meta: { title: 'Table 内编辑' }
      },
      {
        path: 'complex-table',
        name: 'ComplexTable',
        component: () => import('@/views/table/complex-table/index.vue'),
        meta: { title: '综合 Table' }
      }
    ]
  },
  {
    path: '/tabs',
    // name: 'Components',
    component: Layout,
    redirect: '/components/index',
    children: [
      {
        path: 'index',
        name: 'tabs',
        component: () => import('@/views/tabs/index.vue'),
        meta: { icon: 'tabs', title: 'Tab' }
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

router.beforeEach((to, from, next) => {
  const title = to.meta?.title

  if (title) {
    document.title = `${title}-Vite Element Admin`
  }
  next()
})

export default router
