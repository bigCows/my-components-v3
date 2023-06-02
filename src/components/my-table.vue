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

  const emit = defineEmits(['selectChange','pagination'])

  const pageSize = ref(props.limit)
  const currentPage = ref(props.pageNum) 
  const loading = ref(false)

  // 多选框
  const handleSelectionChange = (val: any) => {
    console.log(val,'handleselectionchange');
    
    emit('selectChange',val)
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
      
      <template v-for="item in tableHeader" :key="item.key">
        <el-table-column  :label="item.label" :prop="item.key" :show-overflow-tooltip="true" :width="item.width" >
          <template #default="scope" v-if="item.slotName">
             <!-- 自定义插槽列 -->
             <slot name="columnSlot" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>


      <el-table-column label="操作" v-if="isShow.detailShow">
        <template #default="scope">
          <slot name="operation" :scope="scope"></slot>

        </template>
      </el-table-column>
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
