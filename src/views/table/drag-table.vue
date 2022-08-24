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
  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// @ts-ignore
import Sortable from 'sortablejs'

import type { ElTable } from 'element-plus'
import type { NormalTableData } from './typing'

const tableData = ref<NormalTableData[]>([
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

const dragTable = ref<InstanceType<typeof ElTable>>()

onMounted(() => {
  const el = dragTable.value?.$el.querySelectorAll('.el-table__body-wrapper table tbody')[0]
  Sortable.create(el, {
    ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
    setData(dataTransfer: any) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '')
    },
    onEnd: (evt: any) => {
      const targetRow = tableData.value.splice(evt.oldIndex, 1)[0]
      tableData.value.splice(evt.newIndex, 0, targetRow)

      // // for show the changes, you can delete in you code
      // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
      // this.newList.splice(evt.newIndex, 0, tempIndex)
    }
  })
})
</script>

<style lang="scss">
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>
