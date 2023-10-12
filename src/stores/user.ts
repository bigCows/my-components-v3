
import {asyncRoutes,routes} from '@/router/index'

export const useUserStore = defineStore('user', () => {
  const uName = ref('用户1')
  const userInfo = ref(JSON.parse((localStorage.getItem('userInfo') )as string) ||{})
  const token = ref(localStorage.getItem('token') || '')
  const userRole = ref(JSON.parse((localStorage.getItem('userRole') )as string) || routes)
    
  const changeName = (name: string) => {
    uName.value = name
  }
  const changeUserInfo = <T>(info: T) => {
    userInfo.value = info
  }
  const filterRoutes = (role: string[]) => { 
    const userRoutes = asyncRoutes.filter(item => role.includes(item.name))
    userRole.value = [...userRoutes,...routes]
    localStorage.setItem('userRole',JSON.stringify(userRole.value))
    return userRoutes
  }
  const setToken = (tk:string) => {
    token.value = tk
    localStorage.setItem('token',tk)
  }

  return {
    uName,
    userInfo,
    token,
    userRole,
    changeName,
    changeUserInfo,
    filterRoutes,
    setToken    
  }
})