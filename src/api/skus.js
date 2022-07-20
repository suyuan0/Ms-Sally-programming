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
