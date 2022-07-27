<template>
  <el-tag>mountend Times: {{ createTimes }}</el-tag>

  <el-tabs class="mt20" type="border-card" v-model="activeName">
    <el-tab-pane v-for="opt in tabsOpts" :label="opt.label" :name="opt.key" :key="opt.key">
      <keep-alive>
        <tab-pane v-if="activeName === opt.key" @create="showCreatedTimes" />
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TabPane from './component/TabPane.vue'

const activeName = ref('1')
const createTimes = ref(0)

const tabsOpts = [
  {
    label: 'User',
    key: '1'
  },
  {
    label: 'Config',
    key: '2'
  },
  {
    label: 'Role',
    key: '3'
  },
  {
    label: 'Task',
    key: '4'
  }
]

const route = useRoute()
const router = useRouter()

watch(activeName, () => {
  router.push(`${route.path}?tab=${activeName.value}`)
})

const tab = route.query.tab as string

if (tab) {
  activeName.value = tab
} else {
  activeName.value = '1'
}

const showCreatedTimes = () => {
  createTimes.value = createTimes.value + 1
}
</script>

<style lang="scss" scoped></style>
