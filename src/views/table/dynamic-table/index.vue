<template>
  <el-tabs type="border-card">
    <el-tab-pane label="固定表头">
      <fixed-thead />
    </el-tab-pane>
    <el-tab-pane label="不固定表头">
      <unfixed-thead />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import FixedThead from './components/FixedThead.vue'
import UnfixedThead from './components/UnfixedThead.vue'
</script>

<style lang="scss" scoped></style>
