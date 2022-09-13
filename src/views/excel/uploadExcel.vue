<template>
  <div class="app-container">
    <el-upload drag action="#" :show-file-list="false" :http-request="handleUpload">
      <svg-icon class="upload-icon" name="svg-upload" />
      <div class="el-upload__text"> Drop file here or <em>click to upload</em> </div>
    </el-upload>

    <el-table class="mt20" :data="tableData" border style="width: 100%">
      <el-table-column v-for="item in headers" :prop="item" :label="item" :key="item" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadRequestOptions } from 'element-plus'
import { useUploadExcel } from '@/hooks/useExcel'

const tableData = ref<any>([])
const headers = ref<string[]>([])

const handleUpload = async ({ file }: UploadRequestOptions) => {
  const { data, header } = await useUploadExcel(file)
  tableData.value = data
  headers.value = header
}
</script>

<style lang="scss" scoped>
.upload-icon {
  color: #e0e0e0;
  font-size: 50px;
}
</style>
