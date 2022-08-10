<template>
  <div
    class="app-warpper"
    :class="{ 'open-siderbar': openSiderbar, 'hide-siderbar': hideSiderbar }"
  >
    <side-bar />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import app from '@/store/app'
import SideBar from '@/layout/components/SideBar/index.vue'
import Navbar from './components/Navbar/index.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from '@/layout/components/AppMain.vue'

const appStore = app()
const openSiderbar = computed(() => appStore.siderbar.active)
const hideSiderbar = computed(() => !appStore.siderbar.active)
</script>

<style lang="scss">
@import '@/style/variable.scss';

.app-warpper {
  width: 100%;
  height: 100%;
  background-color: #e9ebf0;

  .main-container {
    background-color: #e9ebf0;
    margin-left: $sideWidth;
    transition: margin-left $sideTransitionTime;
  }
}

.open-siderbar {
  .sidebar-container {
    width: $sideWidth;
    transition: width $sideTransitionTime;
  }
}

.hide-siderbar {
  .sidebar-container {
    width: $sideCollapseWidth;

    .el-menu {
      width: $sideCollapseWidth;

      .el-menu-item {
        justify-content: center;
      }

      .el-sub-menu__title {
        justify-content: center;
      }
    }
  }

  .main-container {
    margin-left: $sideCollapseWidth;
  }
}
</style>
