<template>
  <el-button type="primary" @click="toExtantLink('https://github.com/webB1an/vite-element-admin')">
    Github Repository
  </el-button>
</template>

<script lang="ts">
export default {
  name: 'Documentation'
}
</script>

<script lang="ts" setup>
const toExtantLink = (url: string) => window.open(url)
</script>
