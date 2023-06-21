import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css';

import { singleMessage } from '@/components/single-message'

const app = createApp(App)

// 单例模式消息提示
app.config.globalProperties.singleMessage = singleMessage

app.use(ElementPlus, {locale})
app.use(createPinia())
app.use(router)

app.mount('#app')


