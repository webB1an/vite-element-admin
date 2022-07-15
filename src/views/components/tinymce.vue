<template>
  <editor
    v-model="content"
    :api-key="apiKey"
    :plugins="['advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus table template textpattern visualblocks visualchars wordcount']"
    :toolbar="['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen']"
    language="zh_CN"
  />
  <!-- <Tinymce v-model="content" /> -->
  <el-card class="rich-text mt20">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="content"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import Tinymce from '@/components/Tinymce/index.vue'
import Editor from '@/components/Tinymces/index'

const apiKey = 'h98ls0ygp0wt8cr09l7qjiygrjfd8bqitqawd4rfh1ngujni'
const content = ref(`
<h1 style="text-align: center;">WOW Welcome Tinymce Demo</h1>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
`)

// watch(content, () => {
//   console.log(content.value)
// })
</script>

<style>
.rich-text {
  min-height: 400px;
  padding: 10px;
}
</style>
