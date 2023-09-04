
<template>
  <div>
    <input type="text" v-focus="'120'" />
    <p v-height="'100'"></p>
    <p v-myText:bar.stop="obj">p标签</p>
 
  </div>
</template>

<script setup lang='ts'>

const obj = ref({
  name: '张三',
  age: 18
})

// 自定义指令
const vFocus = {
  mounted(el: HTMLElement, binding: any) {
    console.log(el,'el');
    console.log(binding,'binding');
    
    el.focus()
    el.classList.add('my-height')
    el.style.color = 'red'
    // console.log(el.attributes
    // ,'el.attributes');
    el.setAttribute('value','我是value')
  }
}

</script>

<style scoped>
.my-height {
  height: 100px;
}

</style>
