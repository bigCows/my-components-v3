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

      <el-input v-model="data" placeholder="请输入内容" style="width: 500px">
        <template #append>
          <el-button v-copy="data"> 复制 </el-button>
        </template>
      </el-input>

      <RouterView />
    </main>
  </div>
</template>

<script setup lang='ts'>
import GerateElement from '@/components/GerateElement.vue';
import router from '@/router';

const data = ref('我是复制的内容')

const elementJson = [
  {
    id: '1',
    component: 'ElButton',
    columnSpan: 8,
    label: '按钮',
    prop: 'button',
    formItem: {
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
    prop: 'select',
    columnSpan: 8,
    formItem: {
      type: 'text',
      size: 'mini',
      plachoder: '请选择',
      events: {
        change: (val: any) => {
          console.log(val);
        },
        visibleChange: (val: any) => {
          console.log(val);
        }
      }
    },
    options: [
      {label: '选项1', value: '1'},
      {label: '选项2', value: '2'},
    ]
  },
  {
    id: 'input2',
    component: 'ElInput',
    label: '输入框2',
    prop: 'input',
    columnSpan: 8,
    formItem: {
      type: 'text',
      size: 'large',
      placeholder: '请输入内容',
      style: {width: '200px'}
    }
  },
  {
    id: 'input-Id',
    component: 'ElInput',
    label: '输入框',
    prop: 'input1',
    columnSpan: 8,
    formItem: {
      type: 'text',
      size: 'large',
      placeholder: '请输入内容1',
      style: {width: '200px'},
      events:{
        blur: () => {
          console.log('blur');
        }
      }
    },
  },
  {
    id:'radio',
    component: 'ElRadioGroup',
    label: '单选框',
    prop: 'radio',
    columnSpan: 8,
    formItem: {
      type: 'text',
      size: 'large',
      placeholder: '请输入内容',
      events:{
        change: (val: any) => {
          console.log(val);
        }
      }
    },
    radioValue: [1,2,3]
  },
  {
    id:'date-picker-12',
    component: 'ElDatePicker',
    label: '日期选择器',
    prop: 'datePicker',
    columnSpan: 8,
    formItem: {
      type: 'date',
      placeholder: '请选择时间',
      events:{
        change: (val: any) => {
          console.log(val,'change');
        }
      }
    }
  }
]
 
</script>

<style scoped lang="scss">
.my-container {
  height: 100vh;
  .my-header{
    width: 100vw;
    height: 50px;
    border-bottom: 2px solid #cccccc;
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
