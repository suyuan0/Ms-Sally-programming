import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 创建axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    NProgress.start()
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    NProgress.done()
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done()
    // 对响应数据做点什么
    return response
  },
  (error) => {
    NProgress.done()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 统一传参
const request = (data) => {
  data.params =
    data.method.toLowerCase() === 'get' ? (data.params = data.data) : {}
  return instance(data)
}

export default request
