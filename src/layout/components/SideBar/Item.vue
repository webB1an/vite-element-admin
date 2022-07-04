<template>
  <el-menu-item :index="url">
    <svg-icon
      v-if="route.meta?.icon"
      class="el-icon"
      :name="`svg-${route.meta?.icon}`"
    />
    <template #title>{{ route.meta?.name }}</template>
  </el-menu-item>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
// import path from 'path-browserify'

interface Props {
  url: string,
  route: RouteRecordRaw
}

const props = defineProps<Props>()
// const resolve = (url: string): string => path.resolve(props.baseUrl, url)
</script>
