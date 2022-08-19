<template>
  <iframe class="extermal-link" :src="link" @load="load"></iframe>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const loading = getCurrentInstance()?.proxy?.$loading
loading?.show({ text: '加载中...' })

const link = computed(() => route.meta.link as string)

const load = () => {
  loading?.close()
}

// watch(
//   route,
//   () => {
//     loadingInstance = ElLoading.service({
//       lock: true,
//       text: 'Loading',
//       background: 'rgba(0, 0, 0, 0.7)'
//     })
//   },
//   {
//     immediate: true
//   }
// )
</script>

<style lang="scss" scoped>
.extermal-link {
  width: 100%;
  height: calc(100vh - 112px);
  border: unset;
}
</style>
