<script setup lang='ts'>
import router from '@/router';

const obj = reactive({
  name: 'zhangsan',
  age: 18
})

const titles = ref(['标题1', '标题2', '标题3', '标题4', '标题5', '标题6', '标题7', '标题8', '标题9'],)  // 标题数组
const maxTitlesToShow = ref(4) // 最多显示的标题数量

const truncatedTitles = computed(() => {
  // return titles.value.slice(0, maxTitlesToShow.value)
  if (titles.value.length <= maxTitlesToShow.value) {
        return titles.value;
      } else {
        return titles.value.slice(0, maxTitlesToShow.value);
      }
})

const showEllipsis = computed(() => {
  return titles.value.length > maxTitlesToShow.value;
})


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

      <div class="my-log">
        <img src="../assets/logo-vue.svg" alt="">
      </div>

      <div v-for="(value,key) in obj">
        <h1>{{ value }}</h1>
        <h2>{{key}}</h2>
      </div>

      <div v-for="(title, index) in truncatedTitles" :key="index" class="title">{{ title }}</div>
      <div v-if="showEllipsis" class="title">...</div>

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

    .my-log {
      width: 200px;
      height: 200px;
      margin: 20px 0;
    }
  }
}
</style>
