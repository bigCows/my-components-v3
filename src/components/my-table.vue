<script setup lang='ts'>

export interface isShowType {
  sortShow: boolean
  selectionShow: boolean
  detailShow: boolean
}

export interface Props {
  tableData: Array<any>
  tableHeader: Array<any>
  isShow: isShowType
  limit: number
  pageNum: number
  pagination: string
  pageSizes: Array<number>
  dataTotal: number
  }

  const props = withDefaults(defineProps<Props>(), {
    tableData: () => [],
    tableHeader: () => [],
    isShow:() => ({sortShow: false,selectionShow: false,detailShow: false}),
    limit: 2,
    pageNum: 1,
    pagination: "total, sizes, prev, pager, next, jumper",
    pageSizes: () => [1,5,10,20,50],
    dataTotal: 0,
    
  })

  const emit = defineEmits(['selectChange','rowDetail','pagination'])

  const pageSize = ref(props.limit)
  const currentPage = ref(props.pageNum) 
  const ACT_COLOR = ref( '#61afef')
  const INACT_COLOR = ref('#ccc')
  const loading = ref(false)

  const rowDetail = (data: any) => {
    emit('rowDetail',data)
  }
  // 多选框
  const handleSelectionChange = (val: any) => {
    console.log(val,'handleselectionchange');
    
    emit('selectChange',val)
  }
  // switch开关
  const changeStatus = (val:boolean) => {
    // console.log(val);
  }
  const currentChange = (val:number) => {
    currentPage.value = val
    emit('pagination',{pageNum:val,pageSize:pageSize.value})
  }
  const sizeChange = (val:number) => {
    pageSize.value = val
    emit('pagination',{pageSize:val,pageNum:currentPage.value})
  }

</script>

<template>
  <div>
    <el-table
    ref="myTable"
    class="my-table"
    style="width: 100%"
    border
    :data="tableData"
    @selection-change="handleSelectionChange"
    v-loading="loading"
    >
      <el-table-column type="selection" v-if="isShow.selectionShow" />
      
      <el-table-column type="index" v-if="isShow.sortShow" label="序号" width="70"/>
      <!-- 渲染表格内容 -->
        <el-table-column v-for="item in tableHeader" :key="item.key"  :label="item.label" :prop="item.key" :show-overflow-tooltip="true" >
          <!-- <template #default="scope">
            {{scope.row[scope.column.property]}}  
            
          </template> -->
          <!-- 自定义插槽列 -->
      <!-- <el-table-column v-if="item.soltName">
        <template #default="scope">
          <slot :name="item.soltName" :row="scope.row" :index="scope.$index" :column="scope.column"></slot>
        </template>
      </el-table-column> -->
        </el-table-column>
      
        <el-table-column label="启用状态" >
          <template v-slot="scope">
            <el-switch
              v-model="scope.row.ifUse"
              :active-color="ACT_COLOR"
              :inactive-color="INACT_COLOR"
              @change="changeStatus(scope.row)"
              >
            </el-switch>
          </template>
        </el-table-column>
      <el-table-column label="操作" v-if="isShow.detailShow" width="120">
        <template v-slot="{row,$index,column}">
          <el-link :underline="false" @click="rowDetail(row)">详情</el-link>
        </template>
      </el-table-column>
      <!-- 自定义插槽列 -->
      <!-- <el-table-column v-if="soltName">
        <template #default="scope">
          <slot :name="soltName" :row="scope.row" :index="scope.$index" :column="scope.column"></slot>
        </template>
      </el-table-column> -->
    </el-table>
    <div class="pagination">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :small="true"
        :layout="pagination"
        :total="dataTotal"
        @size-change="sizeChange"
        @current-change="currentChange"
      />  
    </div>
  </div>
</template>

<style scoped>
.pagination {
  float: right; 
  margin-top: 20px;
}
</style>
