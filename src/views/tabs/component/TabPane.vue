<template>
  {{ random }}
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { nanoid } from 'nanoid'

const emit = defineEmits<{
  (e: 'create'): void
}>()

const random = ref('')

onMounted(() => {
  random.value = nanoid()
  emit('create')
})
</script>

<style lang="scss" scoped></style>
