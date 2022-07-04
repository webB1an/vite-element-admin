<template>
  <div class="sidebar-container">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      unique-opened
      mode="vertical"
      background-color="#30354d"
      text-color="#9699a5"
      active-text-color="#fff"
      router
    >
      <siderbar-item
        v-for="route in asyncRoutes"
        :key="route.path"
        :base-url="route.path"
        :route="route"
      />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// store
import app from '@/store/app'
// component
import SiderbarItem from './SiderbarItem.vue'

// 菜单
import { asyncRoutes } from '@/router/index'

console.log('SiderbarItem', SiderbarItem)

// 获取菜单状态
const appStore = app()
const isCollapse = computed(() => !appStore.siderbar.active)
</script>

<style lang="scss">
@import "@/style/sidebar.scss";
</style>
