<template>
  <el-alert title="对新手进行操作引导" type="info" :closable="false" />

  <el-button class="mt20" type="primary" @click.prevent.stop="guide">开始引导</el-button>
</template>

<script lang="ts" setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

import steps from './steps'

const driver = new Driver({
  nextBtnText: '下一个',
  prevBtnText: '上一个',
  closeBtnText: '关闭'
})

const guide = () => {
  driver.defineSteps(steps)
  driver.start()
}
</script>

<style lang="scss" scoped></style>
