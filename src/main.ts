import './style/common.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css';
import 'normalize.css/normalize.css'

import { singleMessage } from '@/components/single-message'
import resetStore from '@/stores/reset-stroe'
import directives from '@/directive/index'


const app = createApp(App)

// 注册全局指令
app.use(directives)

// 单例模式消息提示
app.config.globalProperties.singleMessage = singleMessage

const pinia = createPinia()
pinia.use(resetStore)

app.use(ElementPlus, {locale})
app.use(pinia)
app.use(router)

app.mount('#app')


