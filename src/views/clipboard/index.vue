<template>
  <el-tabs v-model="avtive">
    <el-tab-pane label="Native JS" name="nativeJs">
      <el-input v-model="input1" placeholder="请输入内容" style="width: 500px" />
      <el-button @click="useCopyTextToClipboard(input1)" type="primary">copy</el-button>
    </el-tab-pane>
    <el-tab-pane label="Vue Use" name="vueUse">
      <el-input v-model="input2" placeholder="请输入内容" style="width: 500px" />
      <el-button @click="copy(input2)" type="primary">copy</el-button>

      <p>
        Current copied: <code>{{ text || 'none' }}</code>
      </p>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

import { useCopyTextToClipboard } from '@/hooks/useCopyTextToClipboard'

const avtive = ref('nativeJs')
const input1 = ref('https://github.com/webB1an/vite-element-admin')
const input2 = ref('https://vueuse.org/core/useClipboard/#demo')

const { text, copy } = useClipboard()
</script>

<style lang="scss" scoped></style>
