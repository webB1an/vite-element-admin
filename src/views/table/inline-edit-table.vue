<template>
  <el-table ref="dragTable" :data="tableData" row-key="id" border style="width: 100%">
    <el-table-column align="center" prop="id" label="id" width="50" />
    <el-table-column align="center" prop="date" label="date" />
    <el-table-column align="center" prop="content" label="content" />
    <el-table-column align="center" prop="star" label="star">
      <template #default="scope">
        <el-rate v-model="scope.row.star" disabled />
      </template>
    </el-table-column>
    <el-table-column align="center" prop="reading" label="reading" />
    <el-table-column width="100" align="center" label="action">
      <template #default="scope">
        <el-button type="primary" @click="editor(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ITable {
  id: number
  date: string
  content: string
  star: number
  reading: number
}

const tableData = ref<ITable[]>([
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

const editor = (row: ITable) => {
  console.log(row)
}
</script>

<style lang="scss" scoped></style>
