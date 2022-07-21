/**
 * 优惠券模块
 */

import request from '@/utils/request'

/**
 * 优惠券列表
 * @param current
 * @returns {AxiosPromise}
 */
export const couponListAPI = (current) => {
  return request({
    url: `/coupon/${current}`,
    method: 'GET'
  })
}
