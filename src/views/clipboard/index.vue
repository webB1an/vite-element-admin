<template>
  <el-input v-model="input" placeholder="请输入内容" style="width: 500px" />
  <el-button @click="useCopyTextToClipboard(input)" type="primary">copy</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCopyTextToClipboard } from '@/hooks/useCopyTextToClipboard'
const input = ref('https://github.com/webB1an/vite-element-admin')
</script>

<style lang="scss" scoped></style>
