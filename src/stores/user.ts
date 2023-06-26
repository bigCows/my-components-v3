
export const useUserStore = defineStore('user', () => {
    const uName = ref('用户1')
    const changeName = (name: string) => {
        uName.value = name
    }

    return { uName, changeName}
})