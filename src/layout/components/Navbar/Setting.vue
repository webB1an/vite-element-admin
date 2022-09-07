<template>
  <div class="setting-container" @click="appStore.toggleSetting('open')">
    <svg-icon name="svg-setting" />
  </div>
</template>

<script lang="ts" setup>
import app from '@/store/app'

const appStore = app()
</script>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.setting-container {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: $navbarHeight;
  font-size: 20px;
  text-align: center;
  line-height: $navbarHeight;
  cursor: pointer;

  &:hover {
    background-color: var(---custom-icon-hover-color);
  }

  svg {
    color: var(--custom-icon-color);
  }
}
</style>
