<template>
  <div id="json-editor" ref="el" :style="{ height: `${height}px` }"></div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, watch, onMounted, unref } from 'vue'
import { useJsonEditor } from '@/hooks/useJsonEditor'

const props = withDefaults(
  defineProps<{ modelValue?: string; height?: number; theme?: string }>(),
  {
    modelValue: `{}`,
    height: 300,
    theme: ''
  }
)

const { theme } = toRefs(props)

let change: Function

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): string
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(val: string) {
    emit('update:modelValue', val)
  }
})

watch(
  theme,
  (val) => {
    change && change(val)
  },
  {
    immediate: true
  }
)

const el = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const { changeTheme } = useJsonEditor(el.value!, value, unref(theme))
  change = changeTheme
})
</script>

<style lang="scss" scoped>
#json-editor {
  background: #fff;
}
</style>

<style>
.cm-editor {
  height: 100%;
}
</style>
