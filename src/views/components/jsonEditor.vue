<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>JSON 编辑器</span>
        <el-button @click="getJSON" class="button" type="primary">获取 JSON</el-button>
      </div>
    </template>
    <json-editor v-model="json" :height="400" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import { ElMessage } from 'element-plus'

import JsonEditor from '@/components/JsonEditor/index.vue'

const json = ref(`{
  "name": "vite-element-admin"
}`)

const getJSON = () => {
  console.log(unref(json))
  ElMessage.success('获取成功，请在控制台查看！')
}
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
