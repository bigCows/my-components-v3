import axios from 'axios';
import type { AxiosError,AxiosResponse,InternalAxiosRequestConfig,AxiosInstance } from "axios";

const service:AxiosInstance = axios.create({
  // baseURL: 'http://localhost:4523',
  baseURL: 'http://127.0.0.1:4523/m1/2897880-0-default',
  timeout: 5000
});

let loadingInstance:any = null;

service.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  loadingInstance = ElLoading.service({ fullscreen: true });
  return config;
},(error:AxiosError) => {
  return Promise.reject(error);
});

service.interceptors.response.use((response:AxiosResponse) => {
  loadingInstance.close();
  const {data,message,code} = response.data;
  if(code === 0){
    return data
  } else {
    ElMessage.error(message);
    return Promise.reject(message);
  }
},(error:any) => {
  loadingInstance.close();
  return Promise.reject(error);
});

export default service;