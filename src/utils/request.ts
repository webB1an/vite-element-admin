import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    /*const res = response.data
    if (!res.code) {
      return res
    } else {
      if (res.code === '90001') {
        return res
      } else {
        return Promise.reject(res)
      }
    }*/
    return response
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 50000
    })
    return Promise.reject(error)
  }
)

interface Result<T = any> {
  code: number
  msg: string
  result: T
}

export function fetch<T>(opts: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<Result>>(opts)
      .then((response: AxiosResponse<Result>) => {
        const res = response.data as unknown as Promise<T>
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default service
