import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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
    redirect: '/dashboard/index',
    component: Layout,
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
    redirect: '/documentation/index',
    component: Layout,
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
    path: '/guide',
    redirect: '/guide/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import('@/views/guide/index.vue'),
        meta: { icon: 'guide', title: '引导页', affix: true }
      }
    ]
  },
  {
    path: '/icon',
    redirect: '/icon/index',
    component: Layout,
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
    redirect: '/components/tinymce',
    component: Layout,
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
      },
      {
        path: 'json-editor',
        name: 'JsonEditor',
        component: () => import('@/views/components/jsonEditor.vue'),
        meta: { title: 'JSON 编辑器' }
      }
    ]
  },
  {
    path: '/charts',
    redirect: '/charts/line',
    component: Layout,
    meta: { icon: 'charts', title: '图表' },
    children: [
      {
        path: 'line',
        name: 'LineChart',
        component: () => import('@/views/charts/line.vue'),
        meta: { title: '折线图' }
      },
      {
        path: 'pie',
        name: 'PieChart',
        component: () => import('@/views/charts/pie.vue'),
        meta: { title: '饼图' }
      }
    ]
  },
  {
    path: '/nested',
    redirect: '/nested/menu1',
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
        redirect: '/nested/menu2/menu2-1',
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
            redirect: '/nested/menu2/menu2-2/menu2-2-1',
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
    redirect: '/table/dynamic-table',
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
    path: '/excel',
    redirect: '/excel/custom-export',
    component: Layout,
    meta: { icon: 'excel', title: 'Excel' },
    children: [
      {
        path: 'custom-export',
        name: 'CustomExport',
        component: () => import('@/views/excel/customExport.vue'),
        meta: { title: '导出表格' }
      },
      {
        path: 'upload-excel',
        name: 'UploadExcel',
        component: () => import('@/views/excel/uploadExcel.vue'),
        meta: { title: '上传 Excel' }
      }
    ]
  },
  {
    path: '/tabs',
    redirect: '/components/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Tabs',
        component: () => import('@/views/tabs/index.vue'),
        meta: { icon: 'tabs', title: 'Tab' }
      }
    ]
  },
  {
    path: '/external-link',
    redirect: '/external-link/vue',
    component: Layout,
    meta: { icon: 'external', title: '外部链接' },
    children: [
      {
        path: 'vue',
        name: 'Vue',
        component: () => import('@/views/external-link/iframe.vue'),
        meta: { title: 'Vue', link: 'https://cn.vuejs.org/' }
      },
      {
        path: 'element-ui',
        name: 'ElementUI',
        component: () => import('@/views/external-link/iframe.vue'),
        meta: { title: 'Element UI', link: 'https://element-plus.org/' }
      },
      {
        path: 'github',
        name: 'Github',
        component: () => import('@/views/external-link/iframe.vue'),
        meta: { title: '外链' },
        beforeEnter() {
          window.open('https://github.com/webB1an/vite-element-admin')
          return false
        }
      }
    ]
  },
  {
    path: '/clipboard',
    redirect: '/clipboard/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Clipboard',
        component: () => import('@/views/clipboard/index.vue'),
        meta: { icon: 'copy', title: 'Clipboard', affix: true }
      }
    ]
  },
  {
    path: '/project',
    redirect: '/project/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Project',
        component: () => import('@/views/project/index.vue'),
        meta: { icon: 'info', title: '项目信息' }
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
  NProgress.start()
  const title = to.meta?.title

  if (title) {
    document.title = `${title}-Vite Element Admin`
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
