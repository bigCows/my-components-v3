<template>
    <div>
        <el-button type="warning" @click="warnFn">单例模式消息提示</el-button>
    </div>
</template>

<script setup lang='ts'>

const { appContext } = getCurrentInstance()! 
const { singleMessage } = appContext.config.globalProperties

const obj1 = {
  name: 'zs',
  age: 18
}

const obj2 = ref({...obj1})
obj2.value.name = 'ls'

const warnFn = () => {
  singleMessage({
    message: 'This is a single message',
    type: 'warning'
  }) 
}

</script>

<style scoped>

</style>
