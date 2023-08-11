import axios from 'axios'
import type { AxiosInstance } from 'axios'

const service:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4523',
    timeout: 5000
})


export default service