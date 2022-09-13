<template>
  <div class="app-container">
    <custom-tip class="mb20" type="primary">
      功能基于 Sheetjs 实现，更多详见
      <a href="https://docs.sheetjs.com/docs/demos/vue/" type="primary">文档</a>
    </custom-tip>
    <el-card>
      <el-form :inline="true" :model="form">
        <el-form-item label="文件名称">
          <el-input
            v-model="form.filename"
            size="small"
            style="width: 300px"
            placeholder="请输入名称（默认export-list）"
          />
        </el-form-item>
        <el-form-item label="自动宽度">
          <el-radio-group v-model="form.autoWidth" size="small">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="导出格式" size="small">
          <el-select v-model="form.bookType" placeholder="选择导出格式">
            <el-option
              v-for="(key, value) in BookTypeOpts"
              :label="key"
              :value="value"
              :key="value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleExport">导出</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-table class="mt20" :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="id" label="id" width="50" />
      <el-table-column align="center" prop="date" label="date" />
      <el-table-column align="center" prop="content" label="content" />
      <el-table-column align="center" prop="star" label="star">
        <template #default="scope">
          <el-rate v-model="scope.row.star" disabled />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="reading" label="reading" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref, reactive } from 'vue'
import { useExportExcel } from '@/hooks/useExcel'
import { BookType } from 'xlsx'

const BookTypeOpts = {
  xlsx: 'xlsx',
  csv: 'csv',
  txt: 'txt'
}

const form = reactive({
  filename: '',
  autoWidth: true,
  bookType: BookTypeOpts.xlsx
})

const tableData = ref([
  {
    id: 1,
    date: '2022-07-20 15:36:20',
    content: 'Cddsfdfdada',
    star: 3,
    reading: 1233
  },
  {
    id: 2,
    date: '2022-07-20 15:36:20',
    content: 'BfdfFfdgf',
    star: 5,
    reading: 2030
  },
  {
    id: 3,
    date: '2022-07-20 15:36:20',
    content: 'Asdfsdffds',
    star: 2,
    reading: 4566
  },
  {
    id: 4,
    date: '2022-07-20 15:36:20',
    content: 'Asdfsdffds',
    star: 2,
    reading: 4566
  }
])

const handleExport = () => {
  useExportExcel({
    ...form,
    data: unref(tableData),
    opts: {
      bookType: form.bookType as BookType
    }
  })
}
</script>

<style lang="scss"></style>
