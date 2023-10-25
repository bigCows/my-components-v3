
<template>
  <div>
    <input type="text" v-focus="'120'" />
    <p v-height="'100'"></p>
    <p v-myText:bar.stop="obj">p标签</p>
    <el-button v-auth="'btnAuth1'">单个权限按钮权限</el-button>
    <el-button v-auth="['edit','btnAuth1']">按钮权限arr/err</el-button>
    <el-button v-auth="['btnAuth1','btnAuth2']">数组类型按钮权限arr/success</el-button> <br>
    <el-input v-model="data" placeholder="请输入内容" style="width: 500px; margin-top:20px;">
        <template #append>
          <el-button v-copy="data"> 复制 </el-button>
        </template>
    </el-input>
  </div>
</template>

<script setup lang='ts'>

const data = ref('输入框被复制的内容')
const obj = ref({
  name: '文字翻转指令',
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
