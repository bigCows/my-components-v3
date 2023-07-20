<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
  const router = useRouter()
  const useUser = useUserStore()
  const login = () => {
    useUser.setToken('123')
    router.push('/')
  }
</script>

<template>
  <div>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<style scoped>

</style>
