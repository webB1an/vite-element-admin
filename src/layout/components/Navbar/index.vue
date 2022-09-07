<template>
  <div class="navbar-container">
    <hamburger />
    <breadcrumb v-if="appStore.breadcrumbStatus" />
    <div class="right-nav">
      <setting />
    </div>
  </div>
</template>
<script setup lang="ts">
import Hamburger from './Hamburger.vue'
import Breadcrumb from './Breadcrumb.vue'
import Setting from './Setting.vue'
import app from '@/store/app'

const appStore = app()

// interface Props {
//   isActive: boolean,
//   toggleSidebar: () => void
// }

// withDefaults(defineProps<Props>(), {
//   isActive: false,
//   toggleSidebar: () => {}
// })
</script>
<style lang="scss">
@import '@/style/variable.scss';

.navbar-container {
  background-color: var(--custom-el-bg-color);
  height: $navbarHeight;

  .right-nav {
    float: right;
    height: $navbarHeight;
  }
}
</style>
