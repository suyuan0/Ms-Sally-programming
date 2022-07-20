/**
 * 规格模块
 */
import request from '@/utils/request'

/**
 * 获取规格列表
 * @param current
 * @returns {AxiosPromise}
 */
export const getSkuListAPI = (current) => {
  return request({
    url: `/skus/${current}`,
    method: 'GET'
  })
}
/**
 * 修改状态
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export const updateSkuStatusAPI = (id, data) => {
  return request({
    url: `skus/${id}/update_status`,
    method: 'POST',
    data
  })
}

export const addSkusAPI = (data) => {
  return request({
    url: '/skus',
    method: 'POST',
    data
  })
}
