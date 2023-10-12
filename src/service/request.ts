import service from '@/service/interceptors'

export interface apiResult<T> {
    code: number,
    message: string,
    data: T
}

export const httpReq = {
  get: <T>(url:string,config?:any):Promise<T> => {
    return service.get(url,config)
  }
}

export async function get<T>(url: string, params?: any): Promise<apiResult<T>> {
  const response = await service.get<apiResult<T>>(url, { params });
  return response.data;
}
export async function post<T>(url: string, data?: any): Promise<apiResult<T>> {
  const response = await service.post<apiResult<T>>(url, data);
  return response.data;
}
   
export async function put<T>(url: string, data?: any): Promise<apiResult<T>> {
  const response = await service.put<apiResult<T>>(url, data);
  return response.data;
}

export async function del<T>(url: string, params?: any): Promise<apiResult<T>> {
  const response = await service.delete<apiResult<T>>(url, { params });
  return response.data;
}
