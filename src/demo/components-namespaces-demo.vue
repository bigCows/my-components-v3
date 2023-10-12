<template>
  <div>
    <component :is="num > 0.5 ? com.oneComponentVue : com.twoComponentVue"></component>
  </div>
</template>

<script setup lang='ts'>
import * as com from '@/components/nameSpace'

const num = ref(0)
num.value = Math.random()
</script>

<style scoped>

</style>
