<template>
  <div class="app-container">
    <custom-tip type="primary">
      对新手进行引导，功能基于
      <a href="https://github.com/kamranahmedse/driver.js" type="primary">driver.js</a>
    </custom-tip>

    <el-button class="mt20" type="primary" @click.prevent.stop="guide">开始引导</el-button>
  </div>
</template>

<script lang="ts" setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

import steps from './steps'

const driver = new Driver({
  nextBtnText: '下一个',
  prevBtnText: '上一个',
  doneBtnText: '完成',
  closeBtnText: '关闭'
})

const guide = () => {
  driver.defineSteps(steps)
  driver.start()
}
</script>

<style lang="scss" scoped></style>
