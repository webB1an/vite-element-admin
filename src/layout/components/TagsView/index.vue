<template>
  <el-scrollbar>
    <div id="tags-view-container" class="tags-view-container">
      <div
        v-for="item in visitedViews"
        @click="toLink(item)"
        @contextmenu.prevent="openMenu(item, $event)"
        :key="item.path"
        :class="{ 'tags-view-active': item.path === route.path }"
        class="tags-view"
      >
        {{ item.meta?.title }}
        <span v-if="!isAffix(item)" @click.stop="closeSelectedTag(item)" class="tags-view-close">
          ×
        </span>
      </div>
    </div>
  </el-scrollbar>

  <Teleport to="body">
    <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOtherTags(selectedTag)">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash-es'
import path from 'path-browserify'
import tagsView from '@/store/tagsView'
import { asyncRoutes } from '@/router/index'
// import type { RouteRecordRaw } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tagsViewStore = tagsView()
const { visitedViews } = storeToRefs(tagsViewStore)

const visible = ref(false)
const left = ref(0)
const top = ref(0)
const affix = ref<RouteLocationNormalizedLoaded[]>([])
const selectedTag = ref<RouteLocationNormalizedLoaded>({} as RouteLocationNormalizedLoaded)

const toLink = (tag: RouteLocationNormalizedLoaded) => router.push({ path: tag.path })

const isAffix = (tag: RouteLocationNormalizedLoaded) => !!tag.meta?.affix

const filterAffixTags = (routes: RouteRecordRaw[], basePath = '/') => {
  let tags: RouteLocationNormalizedLoaded[] = []
  routes.forEach((item) => {
    if (item.meta && item.meta?.affix) {
      const tagPath = path.resolve(basePath, item.path)
      tags.push({
        fullPath: tagPath,
        hash: '',
        matched: [],
        meta: { ...item.meta },
        name: item.name,
        params: {},
        path: tagPath,
        query: {},
        redirectedFrom: undefined
      })
    }

    if (item.children) {
      const childTag = filterAffixTags(item.children, item.path)
      if (childTag.length >= 1) {
        tags = [...tags, ...childTag]
      }
    }
  })
  return tags
}

const initTags = () => {
  const affixTags = (affix.value = filterAffixTags(asyncRoutes))

  for (const tag of affixTags) {
    if (tag.name) {
      tagsViewStore.addVisitedView(tag)
    }
  }
}

const addView = () => {
  // deep clone
  if (route.name) {
    tagsViewStore.addView(cloneDeep(route))
  }
}

const openMenu = (tag: RouteLocationNormalizedLoaded, e: MouseEvent) => {
  const menuWidth = 80
  visible.value = true

  const target = e.target as Element
  const { width: targetWidth, left: targetOffsetLeft } = target.getBoundingClientRect()

  left.value = targetOffsetLeft + targetWidth / 2 - menuWidth / 2
  top.value = e.clientY

  selectedTag.value = tag
}

const closeMenu = () => {
  visible.value = false
}

const isActiveTag = (tag: RouteLocationNormalizedLoaded) => {
  return tag.path === route.path
}

const toLastVisitedView = (visitedViews: RouteLocationNormalizedLoaded[]) => {
  const len = visitedViews.length
  if (len > 0) {
    router.push({
      path: visitedViews[len - 1].fullPath
    })
  } else {
    router.push('/')
  }
}

const refreshSelectedTag = (tag: RouteLocationNormalizedLoaded) => {
  tagsViewStore.delCachedView(tag).then(() => {
    nextTick(() => {
      router.replace({
        path: '/redirect' + tag.fullPath
      })
    })
  })
}

const closeSelectedTag = (tag: RouteLocationNormalizedLoaded) => {
  tagsViewStore.delView(tag).then(({ visitedViews }) => {
    if (isActiveTag(tag)) {
      toLastVisitedView(visitedViews)
    }
  })
}

const closeOtherTags = (tag: RouteLocationNormalizedLoaded) => {
  tagsViewStore.delOtherViews(tag)
}

const closeAllTags = (tag: RouteLocationNormalizedLoaded) => {
  tagsViewStore.delAllViews().then(({ visitedViews }) => {
    if (affix.value.some((v) => v.path === tag.path)) {
      return router.push({
        path: tag.path
      })
    }

    toLastVisitedView(visitedViews)
  })
}

initTags()

watch(
  route,
  () => {
    addView()
  },
  {
    immediate: true
  }
)

watch(visible, (value) => {
  if (value) {
    document.addEventListener('click', closeMenu)
  } else {
    document.removeEventListener('click', closeMenu)
  }
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  display: flex;
  align-items: center;
  height: 32px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  background-color: #fff;

  .tags-view {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 26px;
    padding: 0 8px;
    font-size: 12px;
    line-height: 28px;
    margin-left: 6px;
    border: 1px solid #d9d9d9;
    cursor: pointer;

    &:hover {
      .tags-view-close {
        color: #fff;
        border-radius: 50%;
        background-color: #ccc;
      }
    }

    &-active {
      color: #409eff;
      background-color: #d9ecff;
    }

    &-close {
      width: 10px;
      height: 10px;
      font-size: 12px;
      text-align: center;
      line-height: 10px;
      margin-left: 4px;
    }
  }
}

.contextmenu {
  position: absolute;
  width: 80px;
  font-size: 12px;
  padding: 6px 0;
  border-radius: 4px;
  list-style-type: none;
  background-color: #fff;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);
  z-index: 999;

  li {
    cursor: pointer;
    padding-left: 10px;
    height: 24px;
    line-height: 24px;

    &:hover {
      background-color: #efefef;
    }
  }
}
</style>
