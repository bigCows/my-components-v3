<template>
  <div>
    <el-form :model="dynamicForm">
      <el-row :gutter="20">
        <!-- 此处直接循环列，宽度不够会自动换行展示 -->
        <el-col v-for="element in elements" :key="element.id" :span="element.columnSpan">
          <el-form-item :label="element.label" :prop="element.props">
            <component :is="element.component" v-bind="element.props" v-model="element.vModel">
              <slot v-if="element.slotName" name="content">{{ element.slotContent }}</slot>
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
  elements: Array<any>
}
withDefaults(defineProps<elementsType>(),{
  elements: () => []
})

const dynamicForm = {}

</script>

<style scoped>

</style>
