<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <transition name="fade-transform" mode="out-in">
          <!-- div to fix transition error, detail see: -->
          <!-- https://stackoverflow.com/questions/65553121/vue-3-transition-renders-non-element-root-node-that-cannot-be-animated -->
          <div :key="key" :class="key">
            <component :is="Component" :key="key" />
          </div>
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import tagsView from '@/store/tagsView'

const tagsViewStore = tagsView()
const { cachedViews } = storeToRefs(tagsViewStore)

const route = useRoute()

const key = computed(() => route.path)
</script>
<style lang="scss">
.app-main {
  margin: 10px;
  padding: 10px;
  // background-color: #fff;
}
</style>
