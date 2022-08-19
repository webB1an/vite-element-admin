<template>
  <div class="navbar-container">
    <hamburger />
    <breadcrumb />
  </div>
</template>
<script setup lang="ts">
import Hamburger from './Hamburger.vue'
import Breadcrumb from './Breadcrumb.vue'

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
  background-color: #fff;
  height: $navbarHeight;
}
</style>
