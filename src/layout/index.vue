<template>
  <div class="app-warpper" :class="{'open-siderbar': openSiderbar, 'hide-siderbar': hideSiderbar}">
    <side-bar />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import app from '@/store/app'
import SideBar from '@/layout/components/SideBar/index.vue'
import AppMain from '@/layout/components/AppMain.vue'
import Navbar from './components/Navbar/index.vue'

const appStore = app()
const openSiderbar = computed(() => appStore.siderbar.active)
const hideSiderbar = computed(() => !appStore.siderbar.active)
</script>

<style lang="scss">
@import "@/style/variable.scss";

.app-warpper {
  width: 100%;
  height: 100%;

  .main-container {
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
    transition: width $sideTransitionTime;

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
    transition: margin-left $sideTransitionTime;
  }
}
</style>
