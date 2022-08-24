<template>
  <div id="json-editor" ref="el" :style="{ height: `${height}px` }"></div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useJsonEditor } from '@/hooks/useJsonEditor'

const props = withDefaults(defineProps<{ modelValue?: string; height?: number }>(), {
  modelValue: `{}`,
  height: 300
})

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

const el = ref<HTMLDivElement | null>(null)

onMounted(() => {
  useJsonEditor(el.value!, value)
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
