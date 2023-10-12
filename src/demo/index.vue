<template>
  <div class="my-container">
    <header class="my-header"></header>
    <main class="my-main">
      <el-button type="success" @click="router.push('/single-message')">singleMessageDemo</el-button>
      <el-button type="success" @click="router.push('/pinia')">piniademo</el-button>
      <el-button type="success" @click="router.push('/components-namespaces')">componentsNamespacesDemo</el-button>
      <el-button type="success" @click="router.push('/diretive')">directiveDemo</el-button>
      <el-button type="success" @click="router.push('/my-table')">myTableDemo</el-button>

      <GerateElement :elements="elementJson"></GerateElement>

      <RouterView />
    </main>
  </div>
</template>

<script setup lang='ts'>
import GerateElement from '@/components/GerateElement.vue';
import router from '@/router';

// const options = [
//   {label: '选项1', value: '1'},
//   {label: '选项2', value: '2'},
// ]
// const iptValue = ref('')  
const elementJson = [
  {
    id: '1',
    component: 'ElButton',
    columnSpan: 8,
    props: {
      type: 'success',
      size: 'default',
      width: '100px',
    },
    slotName: 'buttonSlot',
    slotContent: '按钮',
  
  },
  {
    id: '1',
    component: 'ElButton',
    columnSpan: 24,
    props: {
      type: 'success',
      size: 'default',
      width: '100px',
    },
    slotName: 'buttonSlot',
    slotContent: '按钮',
  
  },
  {
    id: '1',
    component: 'ElButton',
    columnSpan: 8,
    props: {
      type: 'success',
      size: 'default',
      width: '100px',
    },
    slotName: 'buttonSlot',
    slotContent: '按钮',
  
  },
  {
    id: '1',
    component: 'ElButton',
    columnSpan: 8,
    props: {
      type: 'success',
      size: 'default',
      width: '100px',
    },
    slotName: 'buttonSlot',
    slotContent: '按钮',
  },
  {
    id: '2-1',
    component: 'ElSelect',
    label: '下拉框',
    props: {
      type: 'text',
      size: 'mini',
      plachoder: '请选择',
      // options:[
      //   {label: '选项1', value: '1'},
      //   {label: '选项2', value: '2'},]
    },
    columnSpan: 8,
  
  },
  {
    id: 'input2',
    component: 'ElInput',
    label: '输入框2',
    columnSpan: 8,
    vModel: '',
    props: {
      type: 'text',
      size: 'large',
      placeholder: '请输入内容',
      style: {width: '200px'}
    }
  },
  {
    id:'radio',
    component: 'ElRadio',
    label: '单选框',
    columnSpan: 8,
    props: {
      type: 'text',
      size: 'large',
      placeholder: '请输入内容'
    },
  }
]
 
</script>

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
