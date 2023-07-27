<script setup lang='ts'>

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

</script>

<template>
  <div>
    <input type="text" v-focus />
    <p v-height="'123'"></p>
    <p v-myText:bar.stop="obj">p标签</p>
 
  </div>
</template>

<style scoped>
.my-height {
  height: 100px;
}

</style>
