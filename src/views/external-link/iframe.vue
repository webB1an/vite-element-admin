<template>
  <iframe class="extermal-link" :src="link" @load="load"></iframe>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElLoading } from 'element-plus'

const route = useRoute()

const loadingInstance: { close: () => void } = ElLoading.service({
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)'
})

const link = computed(() => route.meta.link as string)

const load = () => {
  loadingInstance.close()
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
