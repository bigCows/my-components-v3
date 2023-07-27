<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';


const useCounter = useCounterStore()

const useUser = useUserStore()

const reset = () => {
  useUser.$reset()
  useCounter.$reset()
}

</script>

<template>
  <div>
    <el-button type="success" @click="useCounter.increment()">state++</el-button>
    <p>
      usecounter.count：{{ useCounter.count }}
    </p>
    <p>
      usecounter.doubleCount：{{ useCounter.doubleCount }}
    </p>
    <p>
      useUser.uName：{{ useUser.uName }}
    </p>
    <el-button type="success" @click="useUser.changeName('用户2')">ChangeName</el-button>
    <p>
      <el-button type="success" @click="reset()">resetStore</el-button>
    </p>
 
  </div>
</template>

<style scoped>

</style>
