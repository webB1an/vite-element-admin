<template>
  <svg-icon name="svg-1"></svg-icon>
  <svg-icon name="svg-todo"></svg-icon>
</template>

<script lang="ts" setup>
console.log(import.meta.globEager('../../icons/svg/**/*.svg'))
const svg = import.meta.globEager('../../icons/svg/**/*.svg')
Object.keys(svg).map(item => console.log(item))
</script>

<style>
.one {
  font-size: 200px;
  color: red;
}
</style>
