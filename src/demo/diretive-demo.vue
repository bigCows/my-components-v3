
<template>
  <div>
    <input type="text" v-focus="'120'" />
    <p v-height="'100'"></p>
    <p v-myText:bar.stop="obj">p标签</p>
    <el-button v-auth="'btnAuth1'">按钮权限</el-button>
    <el-button v-auth="['edit','btnAuth1']">按钮权限arr/err</el-button>
    <el-button v-auth="['btnAuth1','btnAuth2']">按钮权限arr/success</el-button>
  </div>
</template>

<script setup lang='ts'>

const obj = ref({
  name: '张三',
  age: 18
})

// 自定义指令
const vFocus = {
  mounted(el: HTMLElement) {
    
    el.focus()
    el.classList.add('my-height')
    el.style.color = 'red'
    el.setAttribute('value','我是value')
  }
}

</script>

<style scoped>
.my-height {
  height: 100px;
}

</style>
