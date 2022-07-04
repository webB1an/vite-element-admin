<template>
  list
  <el-button type="primary" @click="toDetail">click to detil</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toDetail = () => router.push('/todo/detail')
</script>
