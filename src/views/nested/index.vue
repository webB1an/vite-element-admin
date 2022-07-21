<template> 1 </template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.matched)
</script>

<style lang="scss" scoped></style>
