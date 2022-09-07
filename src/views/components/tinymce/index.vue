<template>
  <custom-tip class="mb20" type="primary">
    富文本编辑器，Demo 基于官方项目简单改造，免去 api-key 环节，更多详情见
    <a href="https://www.tiny.cloud/docs/tinymce/6/" type="primary">文档</a>
  </custom-tip>
  <editor
    v-model="content"
    :toolbar="toolbar"
    :plugins="plugins"
    language="zh-Hans"
    :tinymce-script-src="TinymceScriptSrc"
    :theme="appStore.isDarkTheme ? 'dark' : ''"
  />
  <el-card class="rich-text mt20">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="content"></div>
  </el-card>
</template>

<script lang="ts">
export default {
  name: 'Tinymce'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import path from 'path-browserify'
import Editor from '@/components/Tinymce/index'
import toolbar from './toolbar'
import plugins from './plugins'
import app from '@/store/app'

const appStore = app()

const TinymceScriptSrc = ref(
  path.join(import.meta.env.VITE_APP_PUBLIC_URL, '/tinymce/tinymce.min.js')
)

const content = ref(`
<h1 style="text-align: center;">WOW Welcome Tinymce Demo</h1>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
`)
</script>

<style>
.rich-text {
  min-height: 400px;
  padding: 10px;
}
</style>
