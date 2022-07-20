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
/**
 * 添加 修改
 * @param data
 * @returns {AxiosPromise}
 */
export const addSkusAPI = (data) => {
  const url = data.id ? `/skus/${data.id}` : '/skus'
  return request({
    url,
    method: 'POST',
    data
  })
}
