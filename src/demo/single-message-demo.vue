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

    <input type="text" v-focus />
    <p v-height="'123'"></p>
    <p v-myText:bar.stop="obj">p标签</p>
    <el-button type="success">新增按钮111</el-button>
</template>

<script setup lang='ts'>
import * as com from '@/components/nameSpace'
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';


const obj1 = {
  name: 'zs',
  age: 18
}

const obj2 = ref({...obj1})
// console.log(obj2,'obj2');
obj2.value.name = 'ls'
// console.log(obj2,'obj2edit');

// console.log(obj1,'obj1');

// onMounted(() => {
//   obj2.value = {...obj1}
//   console.log(obj2,'obj222');
  
// })


const slots = useSlots()
const attrs = useAttrs()
// console.log(slots,attrs);


const { appContext } = getCurrentInstance()! 
const { singleMessage } = appContext.config.globalProperties

const useCounter = useCounterStore()
// console.log(useCounter,'usecounter');


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

const obj = ref({
  name: '张三',
  age: 18
})

// 自定义指令
const vFocus = {
  mounted(el: HTMLElement) {
    // console.log(el,'el');
    el.focus()
    el.classList.add('my-height')
    el.style.color = 'red'
    // console.log(el.attributes
    // ,'el.attributes');
    el.setAttribute('value','我是value')
  }
}

const num = ref(0)
num.value = Math.random()


</script>

<style scoped>
.my-height {
  height: 100px;
}

</style>
