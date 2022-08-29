<template>
  <custom-tip type="primary"> 使用 import.meta.globEager 实现 </custom-tip>

  <el-card class="mt20">
    <el-row>
      <el-col v-for="icon in icons" :key="icon" class="icons-wapper" :span="4">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="geTooltipContent(icon)"
          placement="top"
        >
          <svg-icon class="icons" :name="`svg-${icon}`" />
        </el-tooltip>

        <div class="title">{{ icon }}</div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const icons = ref<string[]>([])

Object.keys(import.meta.globEager('../../icons/svg/**.svg')).map((item) =>
  icons.value.push(item.replace(/.+svg\/|.svg/g, ''))
)

const geTooltipContent = (icon: string): string => `<svg-icon name="svg-${icon}" />`
</script>

<style scoped lang="scss">
.icons-wapper {
  cursor: pointer;
  padding-top: 20px;
  text-align: center;

  .icons {
    font-size: 26px;
  }

  svg {
    outline: unset;
  }

  .title {
    margin: 10px 0 20px;
  }
}
</style>
