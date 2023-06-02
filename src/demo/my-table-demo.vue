<script setup lang='ts'>
  interface tableDataType {
    id:number,
    name:string,
    description:string,
    ifUse:string
  }
  const isShow = reactive({sortShow: true,selectionShow: true,detailShow: true})
  const currentPage = ref(1)
  const limit = ref(2)
  const tableHeader = ref([
        {
          label: '编号',
          key: 'id',
          width:'70px'
      
        },
        {
          label: '姓名',
          key: 'name',
          width:'150px',
          slotName:'bbb'
      
        },
        {
          label: '权限描述',
          key: 'description',
          width:'150px',
          slotName:'aaa'
          
        },
  ])
  const tableData = ref([
        {
          "id":221,
          "name": "西药开立权限",
          "description": "医生对西药处方权限",
          "ifUse":"0",
        },
        {
          "id":222,
          "name": "草药开立权限",
          "description": "医生对草药处方权限",
          "ifUse":"0",
        },
        {
          "id":223,
          "name": "成药开立权限",
          "description": "医生对成药处方权限",
          "ifUse":"0"
        }, 
        {
          "id":224,
          "name": "麻醉开立权限",
          "description": "医生对麻醉处方权限",
          "ifUse":"0"
        },
        {
          "id":225,
          "name": "精一开立权限",
          "description": "医生对精一处方权限",
          "ifUse":"0"
        }
  ])
  const selectChange = (val: tableDataType) => {
    console.log(val,'selectChange');
  }
  const rowInfo = (data: tableDataType,e:Event) => {
    (e.currentTarget! as HTMLButtonElement).blur()
    console.log(data,'rowInfo');
  }
  // 获取最新页码，重新请求数据
  const getList = (val:{pageSize:number,pageNum:number}) => {
    const {pageSize,pageNum} = val
    limit.value = pageSize
    currentPage.value = pageNum
    console.log(val,'getlist');
  }

  const changeStatus =(rowInfo: tableDataType) => {
    console.log(rowInfo,'changeStatus');
    
  }

</script>

<template>
  <div class="layout-container">
    <h1>my-table</h1>
    <div class="lc-table">
      <my-table 
        :tableData="tableData" 
        :tableHeader="tableHeader"    
        :isShow="isShow"
        :pageNum="currentPage"
        :limit="limit"
        :pageSizes="[1,2,3,4]"
        :dataTotal="tableData.length"
        @selectChange="selectChange"
        @pagination="getList"
      >
      <!-- 自定义插槽列 -->
      <template #columnSlot="{scope}">
      {{scope.row[scope.column.property]}}
        <el-switch
          v-model="scope.row.ifUse"
          v-if="scope.column.property === 'description'"
          :active-color="'#61afef'"
          :inactive-color="'#ccc'"
          @change="changeStatus(scope.row)"
          >
        </el-switch>

        <el-button v-if="scope.column.property === 'name'">name列插槽</el-button>
      
  
      </template>

      <!-- 操作列：详情、删除等功能 -->
      <template #operation="{scope}">
          <el-link :underline="false" type="primary" style="padding-right: 20px;"  @click="rowInfo(scope.row,$event)">详情</el-link>
          <el-link :underline="false" type="danger"  @click="rowInfo(scope.row,$event)">删除</el-link>
      </template>

      </my-table>
    
    </div>
  </div>
</template>

<style scoped>

.layout-container {
    width: 100%;
    height: 100%;
  }

  .lc-table {
    width: 1000px;
    border: 1px solid red;
    padding-bottom: 50px;
  }

</style>
