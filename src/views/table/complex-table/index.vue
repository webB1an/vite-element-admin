<template>
  <el-card>
    <el-form ref="filterFormRef" :model="filterForm" inline label-width="80px">
      <el-form-item label="内容">
        <el-input v-model="filterForm.content" />
      </el-form-item>
      <el-form-item label="星级">
        <el-select v-model="filterForm.star">
          <el-option
            v-for="opt in starOpts"
            :label="opt.label"
            :value="opt.value"
            :key="opt.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search(filterFormRef)">查询</el-button>
      </el-form-item>
    </el-form>
  </el-card>

  <el-table
    class="mt20"
    ref="complexTable"
    :data="tableData"
    row-key="id"
    border
    style="width: 100%"
  >
    <el-table-column align="center" prop="id" label="id" width="50" />
    <el-table-column align="center" prop="date" label="date" />
    <el-table-column align="center" prop="content" label="content" width="400" />
    <el-table-column align="center" prop="star" label="star">
      <template #default="scope">
        <el-rate v-model="scope.row.star" disabled />
      </template>
    </el-table-column>
    <el-table-column align="center" prop="reading" label="reading" />
    <el-table-column width="100" align="center" label="action">
      <template #default="scope">
        <el-button type="primary" @click="editorTableRow(scope.row)"> 编辑 </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form ref="dialogFormRef" :model="dialogForm" label-width="80px" :rules="dialogFormRules">
      <el-form-item label="date" prop="data">
        <el-date-picker
          v-model="dialogForm.date"
          type="datetime"
          placeholder="Pick a Date"
          format="YYYY-MM-DD hh:mm:ss"
          value-format="YYYY-MM-DD hh:mm:ss"
        />
      </el-form-item>
      <el-form-item label="content" prop="content">
        <el-input v-model="dialogForm.content" />
      </el-form-item>
      <el-form-item label="star" prop="star">
        <el-rate v-model="dialogForm.star" />
      </el-form-item>
      <el-form-item label="reading" prop="reading">
        <el-input v-model="dialogForm.reading" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmEditorDialogForm(dialogFormRef)">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { NormalTableData } from '../typing'

import useFilterForm from './useFilterForm'
import useDialogForm from './useDialogForm'

const origin: NormalTableData[] = [
  {
    id: 1,
    date: '2022-07-20 15:36:20',
    originCtn: 'Cddsfdfdada',
    content: 'Cddsfdfdada',
    star: 1,
    reading: 1233
  },
  {
    id: 2,
    date: '2022-07-20 15:36:20',
    originCtn: 'BfdfFfdgf',
    content: 'BfdfFfdgf',
    star: 2,
    reading: 2030
  },
  {
    id: 3,
    date: '2022-07-20 15:36:20',
    originCtn: 'Asdfsdffds',
    content: 'Asdfsdffds',
    star: 3,
    reading: 4566
  },
  {
    id: 4,
    date: '2022-07-20 15:36:20',
    originCtn: 'Asdfsdffds',
    content: 'Asdfsdffds',
    star: 4,
    reading: 4566
  },
  {
    id: 5,
    date: '2022-07-20 15:36:20',
    originCtn: 'Asdfsdffds',
    content: 'Asdfsdffds',
    star: 5,
    reading: 4566
  }
]
const originTableData = ref<NormalTableData[]>(origin)
const tableData = ref<NormalTableData[]>(origin)

const { starOpts, filterForm, filterFormRef, search } = useFilterForm(tableData, originTableData)

const {
  dialogFormRef,
  dialogFormVisible,
  dialogForm,
  dialogFormRules,
  editorTableRow,
  confirmEditorDialogForm
} = useDialogForm(tableData, originTableData)
</script>

<style lang="scss">
.el-rate__item {
  display: flex;
  align-items: center;
}
</style>
