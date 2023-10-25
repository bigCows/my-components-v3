<template>
  <div class="greateElemnt">
    <el-form :model="dynamicForm">
      <el-row :gutter="20">
        <!-- 此处直接循环列，宽度不够会自动换行展示 -->
        <el-col v-for="element in elements" :key="element.id" :span="element.columnSpan">
          <el-form-item :label="element.label" :prop="element.prop">
            <component 
              :is="element.component"
              v-bind="element.formItem" 
              v-model="dynamicForm[element.prop]" 
              v-on="element.formItem.events"
              >
              <component 
                :is="'el-option'"
                v-for="item in element.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
              <component 
                :is="'el-radio'"
                v-for="item in element.radioValue"
                :key="item"
                :label="item"
              />
                <slot v-if="element.slotName" >{{ element.slotContent }}</slot>
            <!-- 递归子元素 -->
                <template v-for="child in element.children" :key="child.id">
                  <GerateElement :element="child" />
                </template>
            </component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GerateElement'
}

</script>

<script setup lang='ts'>

interface elementsType {
  elements: Array<any>,
  detailVal?: Array<any>
}
const props = withDefaults(defineProps<elementsType>(),{
  elements: () => [],
  detailVal: () => []
})

const dynamicForm = reactive<any>({})

const handleVmodel = () => {
  props.elements.forEach((element: any) => {
    if (element.prop) {
      props.detailVal!.forEach((detail: any) => {
        if(detail[element.prop]) dynamicForm[element.prop] = detail[element.prop]
      })
    }
  })
  console.log(dynamicForm,'handleVmodel');
}

onMounted(() => {
  handleVmodel()
})

</script>
<style scoped lang="scss">
.greateElemnt {
  :deep(.el-form-item__label){
    width: 100px;
  }
}
</style>