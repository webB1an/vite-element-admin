<template>
  <el-table ref="inlineEditTable" :data="tableData" row-key="id" border style="width: 100%">
    <el-table-column align="center" prop="id" label="id" width="50" />
    <el-table-column
      class-name="avatar-column"
      align="center"
      prop="avatar"
      label="avatar"
      width="70"
    >
      <template #default="scope">
        <el-avatar :src="scope.row.avatar" />
      </template>
    </el-table-column>
    <el-table-column align="center" prop="name" label="name" />

    <el-table-column align="center" prop="account" label="account" width="400">
      <template #default="scope">
        <span v-if="!scope.row.editor">
          {{ scope.row.account }}
        </span>
        <el-row justify="space-around" v-else>
          <el-col :span="16">
            <el-input v-model="scope.row.account" />
          </el-col>
          <el-col :span="4">
            <el-button class="fr" type="primary" @click="cancelEditor(scope.row)"> 取消 </el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="phone" label="phone" />
    <el-table-column width="250" align="center" prop="email" label="email" />
    <el-table-column align="center" prop="city" label="city" />
    <el-table-column width="100" align="center" label="action">
      <template #default="scope">
        <el-button v-if="!scope.row.editor" type="primary" @click="editor(scope.row)">
          编辑
        </el-button>
        <el-button v-else type="primary" @click="confirmEditor(scope.row)">确认</el-button>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import Pagination from '@/components/Pagination/index.vue'

// hook
import usePagination from '@/hooks/usePagination'

// typing
import type { Article } from '@/api/models/articleModel'

// api
import { getList, updateItem } from '@/api/article'

const { total, query } = usePagination()

const tableData = ref<Article[]>([])

const editor = (row: Article) => {
  row.editor = !row.editor
}

const confirmEditor = async (row: Article) => {
  row.editor = !row.editor
  delete row.editor
  const res = await updateItem(row)
  if (res.code !== '90001')
    return ElMessage({
      message: res.msg,
      type: 'error'
    })

  ElMessage({
    message: res.msg,
    type: 'success'
  })
}

const cancelEditor = (row: Article) => {
  if (row.originAccount) {
    row.account = row.originAccount
  }
  row.editor = false
  ElMessage({
    message: '取消编辑',
    type: 'warning'
  })
}

const fetchList = async () => {
  const res = await getList({ ...query })
  tableData.value = res.data.list
  total.value = res.data.total
}

const handlePageChange = () => {
  fetchList()
}

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
