<template>
  <div id="hamburger-container" class="hamburger-container">
    <svg
      :class="{ active: siderbar.active }"
      class="hamburger"
      t="1655886946936"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5096"
      width="128"
      height="128"
      @click="toggle"
    >
      <!-- eslint-disable-next-line max-len -->
      <path
        d="M908.70574649 831.22148693H134.16925867v-52.07344924h774.54813867v52.07344924zM531.80092872 442.96292125H130.86041885V390.889472h400.94050987zM531.80092872 634.17075485H130.86041885v-52.05597298h400.94050987zM901.4996992 245.91801458H126.9690368v-52.06762383h774.54231325v52.06762383zM669.95081672 518.02348658l225.4205383-150.2609408v300.53353244z"
        p-id="5097"
      />
    </svg>
  </div>
</template>
<!-- Hamburger -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import app from '@/store/app'

const appStore = app()

const { siderbar } = storeToRefs(appStore)

const toggle = () => appStore.toggleSidebar()
</script>
<style lang="scss">
@import '@/style/variable.scss';

.hamburger-container {
  width: $navbarHeight;
  height: $navbarHeight;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .hamburger {
    width: 20px;
    height: 20px;
    color: blue;
    transform: rotate(180deg);

    &.active {
      transform: rotate(0);
    }
  }
}
</style>
