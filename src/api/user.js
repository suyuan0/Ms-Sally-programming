import request from '@/utils/request'

/**
 * 用户登录
 * @param data
 * @returns {AxiosPromise}
 */
export const loginAPI = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
/**
 * 用户信息
 * @returns {AxiosPromise}
 */
export const userInfoAPI = () => {
  return request({
    url: '/getinfo',
    method: 'POST'
  })
}
/**
 * 退出登录
 * @returns {AxiosPromise}
 */
export const logoutAPI = () => {
  return request({
    url: '/logout',
    method: 'POST'
  })
}
