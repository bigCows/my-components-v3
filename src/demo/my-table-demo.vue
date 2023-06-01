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
      
        },
        {
          label: '姓名',
          key: 'name',
      
        },
        {
          label: '权限描述',
          key: 'description',
        
        }
  ])
  const tableData = ref([
        {
          "id":221,
          "name": "西药开立权限",
          "description": "医生对西药处方权限",
          "ifUse":"0"
        },
        {
          "id":222,
          "name": "草药开立权限",
          "description": "医生对草药处方权限",
          "ifUse":"0"
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
  const rowDetail = (data: tableDataType) => {
    console.log(data,'rowDetail');
  }
  // 获取最新页码，重新请求数据
  const getList = (val:{pageSize:number,pageNum:number}) => {
    const {pageSize,pageNum} = val
    limit.value = pageSize
    currentPage.value = pageNum
    console.log(val,'getlist');
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
        @rowDetail="rowDetail"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<style scoped>

.layout-container {
    width: 100%;
    height: 100%;
  }

  .lc-table {
    width: 50%;
    border: 1px solid red;
    padding-bottom: 50px;
  }

</style>
