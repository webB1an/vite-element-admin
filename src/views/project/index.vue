<template>
  <div class="app-container">
    <custom-tip class="mb20" type="primary">
      项目部分动态数据来自
      <a href="https://mockapi.io/" type="primary">mockapi.io</a>
    </custom-tip>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>项目信息</span>
        </div>
      </template>
      <el-descriptions :column="3" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">名称</div>
          </template>
          {{ name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">版本</div>
          </template>
          {{ version }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">最后编译时间</div>
          </template>
          {{ lastBuildTime }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">GITHUB</div>
          </template>
          <el-link :href="GITHUB_REPOSITORY_URL" :underline="false" type="primary">
            vite-element-admin
          </el-link>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">预览地址</div>
          </template>
          <el-link :href="WEB_SITE_URL" :underline="false" type="primary">去预览</el-link>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card class="mt20">
      <template #header>
        <div class="card-header">
          <span>生产环境依赖</span>
        </div>
      </template>
      <el-descriptions :column="3" border>
        <el-descriptions-item v-for="(value, key) in dependencies" :key="key">
          <template #label>
            <div class="cell-item">{{ key }}</div>
          </template>
          {{ value }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card class="mt20">
      <template #header>
        <div class="card-header">
          <span>开发环境依赖</span>
        </div>
      </template>
      <el-descriptions :column="3" border>
        <el-descriptions-item v-for="(value, key) in devDependencies" :key="key">
          <template #label>
            <div class="cell-item">{{ key }}</div>
          </template>
          {{ value }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { GITHUB_REPOSITORY_URL, WEB_SITE_URL } from '@/settings/siteSetting'

const { pkg, lastBuildTime } = __APP_INFO__
const { name, version, dependencies, devDependencies } = pkg
</script>

<style lang="scss" scoped></style>
