<script setup lang='ts'>
import router from '@/router';

</script>

<template>
  <div class="my-container">
    <header class="my-header"></header>
    <main class="my-main">
      <el-button type="success" @click="router.push('/single-message')">singleMessageDemo</el-button>
      <el-button type="success" @click="router.push('/pinia')">piniademo</el-button>
      <el-button type="success" @click="router.push('/components-namespaces')">componentsNamespacesDemo</el-button>
      <el-button type="success" @click="router.push('/diretive')">directiveDemo</el-button>
      <el-button type="success" @click="router.push('/my-table')">myTableDemo</el-button>

      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="less">
.my-container {
  height: 100vh;
  .my-header{
    width: 100vw;
    height: 50px;
    border-bottom: 2px solid #ccc;
  }
  
  .my-main {
    width: 100vw;
    padding-top: 20px;

  }
}
</style>
