<template>
  <custom-tip type="primary">
    JSON 编辑器基于
    <a href="https://codemirror.net/" type="primary">CodeMirror</a> 简单开发，更多
    <a
      href="https://www.raresportan.com/how-to-make-a-code-editor-with-codemirror6/"
      type="primary"
    >
      示例
    </a>
    参考
  </custom-tip>
  <el-card class="box-card mt20">
    <template #header>
      <div class="card-header">
        <span>JSON 编辑器</span>
        <el-button @click="getJSON" class="button" type="primary">获取 JSON</el-button>
      </div>
    </template>
    <json-editor v-model="json" :height="400" :theme="appStore.isDarkTheme ? 'dark' : ''" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import app from '@/store/app'
import JsonEditor from '@/components/JsonEditor/index.vue'

const appStore = app()

const json = ref(`{
  "name": "vite-element-admin"
}`)

const getJSON = () => {
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
