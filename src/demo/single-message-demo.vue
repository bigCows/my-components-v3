<template>
    <div>
        <el-button type="warning" @click="warnFn">警告</el-button>
    </div>
    <component :is="num > 0.5 ? com.oneComponentVue : com.twoComponentVue"></component>
</template>

<script setup lang='ts'>
import * as com from '@/components/nameSpace'

import type { ComponentInternalInstance } from 'vue'
const {appContext} = getCurrentInstance() as ComponentInternalInstance
const singleMessage = appContext.config.globalProperties.singleMessage 


const warnFn = () => {
  singleMessage({
  message: 'This is a single message',
  type: 'warning'
}) 
}

const num = ref(0)
num.value = Math.random()
</script>

<style scoped>

</style>
