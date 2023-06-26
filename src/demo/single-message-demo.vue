<template>
    <div>
        <el-button type="warning" @click="warnFn">警告</el-button>
    </div>
    <component :is="num > 0.5 ? com.oneComponentVue : com.twoComponentVue"></component>
    <el-button type="success" @click="useCounter.increment()">state++</el-button>
    <p>
      usecounter.count：{{ useCounter.count }}
    </p>
    <p>
      usecounter.doubleCount：{{ useCounter.doubleCount }}
    </p>
    <p>
      useUser.uName：{{ useUser.uName }}
    </p>
    <el-button type="success" @click="useUser.changeName('用户2')">ChangeName</el-button>
    <p>
      <el-button type="success" @click="reset()">resetStore</el-button>
    </p>
</template>

<script setup lang='ts'>
import * as com from '@/components/nameSpace'
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';

const slots = useSlots()
const attrs = useAttrs()
console.log(slots,attrs);


const { appContext } = getCurrentInstance()! 
const { singleMessage } = appContext.config.globalProperties

const useCounter = useCounterStore()
console.log(useCounter,'usecounter');


const useUser = useUserStore()

const reset = () => {
  useUser.$reset()
  useCounter.$reset()
}


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
