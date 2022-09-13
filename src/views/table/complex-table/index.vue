<template>
  <div class="app-container">
    <el-card>
      <el-form
        ref="filterFormRef"
        :model="filterForm"
        :rules="filterFormRules"
        inline
        label-width="80px"
      >
        <el-form-item label="name" prop="name">
          <el-input v-model="filterForm.name" />
        </el-form-item>
        <el-form-item label="account">
          <el-input v-model="filterForm.account" />
        </el-form-item>
        <el-form-item label="status">
          <el-select v-model="filterForm.status" placeholder="Select">
            <el-option
              v-for="item in statusOpts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchForm">查询</el-button>
          <el-button type="primary" @click="editorTableRow({}, EDialogType.add)">添加</el-button>
          <el-button type="primary" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-table
      class="mt20"
      ref="complexTable"
      :data="tableData"
      v-loading="loading"
      row-key="id"
      border
      style="width: 100%"
    >
      <el-table-column label="序号" align="center" type="index" width="70" />

      <el-table-column class-name="avatar-column" prop="avatar" label="avatar" width="70">
        <template #default="scope">
          <el-avatar :src="scope.row.avatar" />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" label="name" />

      <el-table-column align="center" prop="account" label="account" />
      <el-table-column align="center" prop="phone" label="phone" />
      <el-table-column width="250" align="center" prop="email" label="email" />
      <el-table-column align="center" prop="city" label="city" />
      <el-table-column width="100" align="center" label="status">
        <template #default="scope">
          <el-tag v-if="scope.row.status === false" type="danger" effect="light"> 禁用 </el-tag>
          <el-tag v-if="scope.row.status === true" type="success" effect="light"> 正常 </el-tag>
        </template>
      </el-table-column>
      <el-table-column width="200" align="center" label="action">
        <template #default="scope">
          <el-button type="primary" @click="editorTableRow(scope.row, EDialogType.editor)">
            编辑
          </el-button>
          <el-button type="danger" @click="deleteTableRow(scope.row.id)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination
      class="mt20"
      v-if="total > 0"
      v-model:page="query.page"
      v-model:limit="query.limit"
      :total="total"
      @pagination="handlePageChange"
    />

    <el-dialog v-model="dialogFormVisible" :title="dialogTitle">
      <el-form ref="dialogFormRef" :model="dialogForm" label-width="80px" :rules="dialogFormRules">
        <el-form-item label="name" prop="name">
          <el-input v-model="dialogForm.name" />
        </el-form-item>
        <el-form-item label="account" prop="account">
          <el-input v-model="dialogForm.account" />
        </el-form-item>
        <el-form-item label="phone" prop="phone">
          <el-input v-model="dialogForm.phone" />
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model="dialogForm.email" />
        </el-form-item>
        <el-form-item label="city" prop="city">
          <el-input v-model="dialogForm.city" />
        </el-form-item>
        <el-form-item label="status" prop="status">
          <el-radio-group v-model="dialogForm.status" class="ml-4">
            <el-radio :label="true">正常</el-radio>
            <el-radio :label="false">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmEditorDialog">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ComplexTable'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import Pagination from '@/components/Pagination/index.vue'

// hook
import useFilterForm from './useFilterForm'
import useDialogForm from './useDialogForm'
import usePagination from '@/hooks/usePagination'

// typing
import type { Article } from '@/api/models/articleModel'
import { EDialogType } from '../typing'

// api
import { getList, updateItem, addItem, deleteItem } from '@/api/article'

import { formatParams } from '@/utils/formatParams'

const statusOpts = [
  {
    label: '正常',
    value: 'true'
  },
  {
    label: '已禁用',
    value: 'false'
  }
]

const loading = ref(false)
const tableData = ref<Article[]>([])

const { total, query } = usePagination()
const { filterForm, filterFormRef, filterFormRules, search } = useFilterForm()

const {
  dialogType,
  dialogFormRef,
  dialogFormVisible,
  dialogTitle,
  dialogForm,
  dialogFormRules,
  editorTableRow,
  confirmEditorDialogForm
} = useDialogForm()

const fetchList = async () => {
  loading.value = true

  const res = await getList({ ...query, ...formatParams(filterForm) })
  tableData.value = res.data.list
  total.value = res.data.total
  loading.value = false
}

const searchForm = () => search(filterFormRef.value, fetchList)

const resetSearch = () => {
  query.limit = 10
  query.page = 1
  filterForm.name = ''
  filterForm.account = ''
  filterForm.status = ''
  searchForm()
}

const deleteTableRow = async (id: string | number) => {
  const res = await deleteItem(id)

  if (res.code !== '90001')
    return ElMessage({
      message: res.msg,
      type: 'error'
    })

  ElMessage({
    message: res.msg,
    type: 'success'
  })

  fetchList()
}

const handlePageChange = () => {
  fetchList()
}

const confirmEditorDialog = () =>
  confirmEditorDialogForm(dialogFormRef.value, async () => {
    let res
    if (dialogType.value === EDialogType.editor) {
      res = await updateItem(dialogForm)
    } else {
      res = await addItem(formatParams(dialogForm))
    }

    if (res.code !== '90001')
      return ElMessage({
        message: res.msg,
        type: 'error'
      })

    ElMessage({
      message: res.msg,
      type: 'success'
    })
    await fetchList()
  })

fetchList()
</script>

<style lang="scss">
.avatar-column .cell {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100%;
}
</style>
