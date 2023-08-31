<script setup lang='ts'>
import commonApi from '@/service/api'
import type { pagenationType, tableDataType } from '@/types/my-table.d'

const isShow = reactive({sortShow: true,selectionShow: true,detailShow: true})
const currentPage = ref(1)
const limit = ref(2)
const tableHeader = ref([
      { label: '编号', key: 'id', width:'70px' },
      { label: '姓名', key: 'name', width:'150px', slotName:'slotName' },
      { label: '性别', key: 'sex', width:'150px', slotName: 'slotSex' },
      { label: '权限描述', key: 'description', slotName:'slotDes' },
])
// const tableData = ref([
//       {
//         "id":221,
//         "name": "西药开立权限",
//         "sex": "1",
//         "description": "医生对西药处方权限",
//         "is_use":"0",
//       },
//       {
//         "id":222,
//         "name": "草药开立权限",
//         "sex": "0",
//         "description": "医生对草药处方权限",
//         "is_use":"0",
//       },
//       {
//         "id":223,
//         "name": "成药开立权限",
//         "sex": "1",
//         "description": "医生对成药处方权限",
//         "is_use":"0"
//       }, 
//       {
//         "id":224,
//         "name": "麻醉开立权限",
//         "sex": "0",
//         "description": "医生对麻醉处方权限",
//         "is_use":"0"
//       },
//       {
//         "id":225,
//         "name": "精一开立权限",
//         "sex": "1",
//         "description": "医生对精一处方权限",
//         "is_use":"0"
//       }
// ])
const tableData = ref<Array<tableDataType>>([])
const selectChange = (val: tableDataType) => {
  console.log(val,'selectChange');
}
const detailRow = (data: tableDataType) => {
  console.log(data,'detailRow');
}
const delRow = (data: tableDataType) => {
  console.log(data,'delRow');
}
let total = ref(0)
// 获取最新页码，重新请求数据
const getListFn = async (val:pagenationType) => {
  limit.value = val.pageSize
  currentPage.value = val.pageNum
  const res = await commonApi.getList(val) as { list: Array<tableDataType>, total: number }
  
  // 返回数据格式
  // "data": {
  //     "list": [
  //         {
  //             "id": "540000197902259888",
  //             "name": "萧杰",
  //             "sex": 0,
  //             "description": "先上重备样引设那机正理装收一及长低权。",
  //             "is_use": false
  //         },
  //     ],
  //     "total": "150"
  // }


  tableData.value = res.list
  total.value = Number(res.total)
}
onMounted(() => {
  getListFn({pageSize:limit.value,pageNum:currentPage.value})
})
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
        :dataTotal="total"
        @selectChange="selectChange"
        @paginationFn="getListFn"
      >
      <!-- 自定义插槽列 -->
      <template #columnSlot="{scope}">
        <el-switch
          v-model="scope.row.is_use"
          v-if="scope.column.property === 'description'"
          :active-color="'#61afef'"
          :inactive-color="'#ccc'"
          @change="changeStatus(scope.row)"
          >
        </el-switch>
        <span class="column-text" v-if="!(scope.column.property === 'sex')">
          {{scope.row[scope.column.property]}}
        </span>
        

        <span v-if="scope.column.property === 'sex'">
          {{ scope.row[scope.column.property] === '1' ? '男' : '女'  }}
        </span>

      </template>

      <!-- 操作列：详情、删除等功能 -->
      <template #operation="{scope}">
          <el-link class="opreate" :underline="false"  type="primary" @click="detailRow(scope.row)">详情</el-link>
          <el-link class="opreate" :underline="false" type="danger" @click="delRow(scope.row)">删除</el-link>
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
    .column-text {
      margin-left: 20px;
    }
    .opreate {
      font-size: 12px;
      padding-right: 20px;
    }
  }

</style>
