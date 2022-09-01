import { unref, Ref } from 'vue'
import { tryOnUnmounted, useResizeObserver, useDebounceFn } from '@vueuse/core'

import echarts from '@/utils/echarts'

export function useECharts(elRef: Ref<HTMLDivElement>) {
  let chartInstance: echarts.ECharts | null = null

  useResizeObserver(document.body, () => {
    useDebounceFn(() => {
      resize()
    }, 200)
  })

  function initChart() {
    const el = unref(elRef)

    if (!el) return

    chartInstance = echarts.init(el)
  }

  function setOption(opt: echarts.EChartsCoreOption) {
    if (!chartInstance) {
      initChart()
    }

    chartInstance?.setOption(opt)
  }

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn'
      }
    })
  }

  tryOnUnmounted(() => {
    if (!chartInstance) return
    chartInstance?.dispose()
    chartInstance = null
  })

  return {
    setOption,
    echarts
  }
}
