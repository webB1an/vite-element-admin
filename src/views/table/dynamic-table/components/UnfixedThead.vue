<template>
  <el-checkbox-group v-model="checkBoxVal">
    <el-checkbox v-for="opt in opts" :key="opt" :label="opt" />
  </el-checkbox-group>

  <el-table
    :data="tableData"
    border
    class="mt20"
    style="width: 100%;"
  >
    <el-table-column prop="name" label="fruit" />
    <el-table-column v-for="item in checkBoxVal" :prop="item" :label="item" />
  </el-table>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

interface ITable {
  name: string,
  apple: string,
  banana: string,
  orange: string
}

const opts: string[] = ['apple', 'banana', 'orange']
const defaultThead: string[] = ['apple']

const tableData: ITable[] = [
  {
    name: 'fruit-1',
    apple: 'apple-10',
    banana: 'banana-10',
    orange: 'orange-10'
  },
  {
    name: 'fruit-2',
    apple: 'apple-20',
    banana: 'banana-20',
    orange: 'orange-20'
  }
]

const checkBoxVal = ref<string[]>(defaultThead)
</script>

<style lang='scss' scoped>
</style>
