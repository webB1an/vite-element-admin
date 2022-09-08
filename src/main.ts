import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'

import '@/style/index.scss'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import SvgIcon from '@/components/SvgIcon.vue'
import CustomTip from '@/components/CustomTip/index.vue'

import loading from '@/components/Loading/index'

const app = createApp(App)
const pinia = createPinia()

app.component('SvgIcon', SvgIcon)
app.component('CustomTip', CustomTip)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(loading)
app.mount('#app')
