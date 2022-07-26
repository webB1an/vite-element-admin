<template>
  <el-table ref="inlineEditTable" :data="tableData" row-key="id" border style="width: 100%">
    <el-table-column align="center" prop="id" label="id" width="50" />
    <el-table-column align="center" prop="date" label="date" />
    <el-table-column align="center" prop="content" label="content" width="400">
      <template #default="scope">
        <span v-if="!scope.row.editor">
          {{ scope.row.content }}
        </span>
        <el-row justify="space-around" v-else>
          <el-col :span="16">
            <el-input v-model="scope.row.content" />
          </el-col>
          <el-col :span="4">
            <el-button class="fr" type="primary" @click="cancelEditor(scope.row)"> 取消 </el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="star" label="star">
      <template #default="scope">
        <el-rate v-model="scope.row.star" disabled />
      </template>
    </el-table-column>
    <el-table-column align="center" prop="reading" label="reading" />
    <el-table-column width="100" align="center" label="action">
      <template #default="scope">
        <el-button v-if="!scope.row.editor" type="primary" @click="editor(scope.row)">
          编辑
        </el-button>
        <el-button v-else type="primary" @click="confirmEditor(scope.row)">确认</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

import type { NormalTableData } from './typing'

const tableData = ref<NormalTableData[]>([
  {
    id: 1,
    date: '2022-07-20 15:36:20',
    originCtn: 'Cddsfdfdada',
    content: 'Cddsfdfdada',
    star: 3,
    reading: 1233
  },
  {
    id: 2,
    date: '2022-07-20 15:36:20',
    originCtn: 'BfdfFfdgf',
    content: 'BfdfFfdgf',
    star: 5,
    reading: 2030
  },
  {
    id: 3,
    date: '2022-07-20 15:36:20',
    originCtn: 'Asdfsdffds',
    content: 'Asdfsdffds',
    star: 2,
    reading: 4566
  },
  {
    id: 4,
    date: '2022-07-20 15:36:20',
    originCtn: 'Asdfsdffds',
    content: 'Asdfsdffds',
    star: 2,
    reading: 4566
  }
])

const editor = (row: NormalTableData) => {
  row.editor = !row.editor
}
const confirmEditor = (row: NormalTableData) => {
  row.editor = !row.editor
}

const cancelEditor = (row: NormalTableData) => {
  if (row.originCtn) {
    row.content = row.originCtn
  }
  row.editor = false
  ElMessage({
    message: '取消编辑',
    type: 'warning'
  })
}
</script>

<style lang="scss">
.el-rate__item {
  display: flex;
  align-items: center;
}
</style>
