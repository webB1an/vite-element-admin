import type { Step } from 'driver.js'

const steps: Step[] = [
  {
    element: '#hamburger-container',
    popover: {
      title: '侧边栏控制',
      description: '打开或关闭侧边栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '导航',
      description: '指示当前页面位置',
      position: 'bottom'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: '页面历史',
      description: '切换浏览页面',
      position: 'bottom'
    }
  }
]

export default steps
