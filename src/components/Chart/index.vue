<template>
  <div ref="elRef" :style="{ width, height }"></div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue'
import echarts from '@/utils/echarts'
import { useECharts } from '@/hooks/useECharts'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: echarts.EChartsCoreOption
  }>(),
  {
    width: '100%',
    height: 'calc(100vh - 112px)'
  }
)

const elRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const { setOption } = useECharts(elRef as Ref<HTMLDivElement>)
  setOption(props.options)
})
</script>

<style lang="scss" scoped></style>
