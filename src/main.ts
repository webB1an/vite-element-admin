import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'

import '@/style/reset.css'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'

import SvgIcon from '@/components/SvgIcon.vue'

import loading from '@/components/Loading/index'

const app = createApp(App)
const pinia = createPinia()

app.component('SvgIcon', SvgIcon)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(loading)
app.mount('#app')
