<template>
  <el-alert title="对新手进行操作引导" type="info" :closable="false" />

  <el-button class="mt20" type="primary" @click.prevent.stop="guide">开始引导</el-button>
</template>

<script lang="ts" setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

const driver = new Driver({
  nextBtnText: '下一个',
  prevBtnText: '上一个',
  closeBtnText: '关闭'
})

const guide = () => {
  driver.defineSteps([
    {
      element: '#hamburger-container',
      popover: {
        title: '侧边栏控制',
        description: '打开或关闭侧边栏',
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
  ])
  driver.start()
}
</script>

<style lang="scss" scoped></style>
