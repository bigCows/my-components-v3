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


const app = createApp(App)

app.directive('height', {
 mounted(el, binding, vnode, preVnode) {
//  console.log(binding, 'binding');
//  console.log(vnode, 'vnode');
//  console.log(preVnode, 'preVnode');
 
//  el.style.height = binding.value + 'px'
//  el.innerText = binding.value + 'px' 
 el.innerText = binding.value ? binding.value.split('').reverse().join('') : '';
}  
})
app.directive('myText', {
 mounted(el, binding, vnode, preVnode) {
 console.log(binding, 'binding');
//  console.log(vnode, 'vnode');
//  console.log(preVnode, 'preVnode');
 
//  el.style.height = binding.value + 'px'
//  el.innerText = binding.value + 'px' 
 el.innerText = binding.value ? binding.value.name.split('').reverse().join('') : '无法识别';
    }  
})

// 单例模式消息提示
app.config.globalProperties.singleMessage = singleMessage

const pinia = createPinia()
pinia.use(resetStore)

app.use(ElementPlus, {locale})
app.use(pinia)
app.use(router)

app.mount('#app')


