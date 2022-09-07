<template>
  <router-view />
</template>

<script setup lang="ts">
import { unref, watch } from 'vue'
import { useDocumentVisibility } from '@vueuse/core'
import { ElNotification } from 'element-plus'
import app from '@/store/app'

const appStore = app()
const visibility = useDocumentVisibility()

watch(
  visibility,
  () => {
    if (unref(visibility) === 'visible' && appStore.welcomeStatus) {
      ElNotification({
        type: 'success',
        title: '欢迎回来！',
        message: '每天都要努力加油哦~'
      })
    }
  },
  {
    immediate: true
  }
)
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
