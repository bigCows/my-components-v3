<script setup lang='ts'>
import type {isShowType} from '../types/my-table.d'

// https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props, defineProps语法限制Props整体类型不能使用外部导入的复杂类型
 interface Props {
  tableData: Array<any>
  tableHeader: Array<any>
  isShow: isShowType
  limit: number
  pageNum: number
  pagination: string
  pageSizes: Array<number>
  dataTotal: number
  }


  const props  = withDefaults(defineProps<Props>(), {
    tableData: () => [],
    tableHeader: () => [],
    isShow:() => ({sortShow: false,selectionShow: false,detailShow: false}),
    limit: 2,
    pageNum: 1,
    pagination: "total, sizes, prev, pager, next, jumper",
    pageSizes: () => [1,5,10,20,50],
    dataTotal: 0,
    
  })
  console.log(props,'props');

  const emits = defineEmits(['selectChange','paginationFn'])

  // const pageSize = ref(props.limit)
  // const currentPage = ref(props.pageNum) 

  const pageSize = computed({
    get: () => props.limit,
    set: (val) => {
      console.log(props.tableData,'tableData');
      
      pageSize.value = val
    }
  })
  const currentPage = computed({
    get: () => props.pageNum,
    set: (val) => {
      console.log(props.tableData,'tableData');

      currentPage.value = val
    }
  })


  // 多选框
  const handleSelectionChange = (val: any) => {
    console.log(val,'handleselectionchange');
    
    emits('selectChange',val)
  }
  const currentChange = (val:number) => {
    // currentPage.value = val
    emits('paginationFn',{pageNum:val,pageSize:pageSize.value})
  }
  const sizeChange = (val:number) => {
    // pageSize.value = val
    emits('paginationFn',{pageSize:val,pageNum:currentPage.value})
  }

</script>

<template>
  <div>
    <el-table
    ref="myTable"
    class="my-table"
    v-on="$attrs"
    style="width: 100%"
    border
    :data="tableData"
    @selection-change="handleSelectionChange"
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

      <template #empty>
        <el-empty description="暂无数据" />
      </template>
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
@/components/types/my-table../types/my-table