<template>
    <div>
        <el-button type="warning" @click="warnFn">警告</el-button>
    </div>
</template>

<script setup lang='ts'>
import { ComponentInternalInstance } from 'vue'
const {appContext} = getCurrentInstance() as ComponentInternalInstance
const singleMessage = appContext.config.globalProperties.singleMessage 

const warnFn = () => {
  singleMessage({
  message: 'This is a single message',
  type: 'warning'
}) 
}

</script>

<style scoped>

</style>
