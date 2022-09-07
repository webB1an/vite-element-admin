<template>
  <custom-tip>
    Websocket 链接白嫖于
    <a href="https://www.piesocket.com/websocket-tester# ">piesocket</a>，若链接失效可重新替换
  </custom-tip>
  <el-row class="mt20" :gutter="20">
    <el-col :span="8">
      <el-card>
        <div class="title">
          连接状态：
          <el-tag v-if="status === 'CONNECTING'">CONNECTING</el-tag>
          <el-tag v-if="status === 'OPEN'" type="success">OPEN</el-tag>
          <el-tag v-if="status === 'CLOSED'" type="info">CLOSED</el-tag>
        </div>

        <el-divider />

        <el-input
          v-model="wss"
          placeholder="输入服务地址"
          :disabled="status === 'CONNECTING' || status === 'OPEN'"
        >
          <template #prepend>服务地址</template>
          <template #append>
            <el-button v-if="status === 'CLOSED'" @click="openWSS"> 开启连接 </el-button>
            <el-button v-if="status === 'CONNECTING' || status === 'OPEN'" @click="closeWss">
              关闭连接
            </el-button>
          </template>
        </el-input>

        <div class="title" style="padding-top: var(--el-card-padding)">设置</div>
        <el-divider />

        <el-input
          v-model="msg"
          :autosize="{ minRows: 2 }"
          type="textarea"
          placeholder="需要发送到服务器的内容"
        />
        <el-button
          :disabled="status === 'CLOSED'"
          @click="sendWss"
          class="mt20"
          type="primary"
          style="width: 100%"
        >
          发送
        </el-button>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card style="height: 332px">
        <div class="title">消息记录：</div>
        <el-divider />
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="content" style="height: 224px; overflow-y: scroll"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, unref, watch } from 'vue'
import { useWebSocket } from '@vueuse/core'

const wss = ref(
  'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
)

const msg = ref('')
const content = ref('')

const { status, data, send, open, close } = useWebSocket(unref(wss), {
  immediate: false
  // heartbeat: {
  //   message: 'heartbeat',
  //   interval: 2000
  // }
})

watch(data, (value) => {
  content.value =
    unref(content) +
    `<div class="mt20">
      <div style="color: blue">服务器</div>
      <div>${value}</div>
    </div>`
})

function openWSS() {
  open()
}

function closeWss() {
  close()
}

function sendWss() {
  const message = unref(msg)
  if (!message) return

  send(message)

  content.value =
    unref(content) +
    `<div class="mt20">
      <div style="color: red">你</div>
      <div>${message}</div>
    </div>`
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
