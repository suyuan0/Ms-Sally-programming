import request from '@/utils/request'

/**
 * 获取分类列表
 * @param data
 * @returns {AxiosPromise}
 */
export const getCategoryListAPI = (data) => {
  return request({
    url: '/category',
    method: 'GET',
    data
  })
}

/**
 * 推荐商品
 * @param data
 * @returns {AxiosPromise}
 */
export const appCategortItemAPI = (data) => {
  return request({
    url: '/app_category_item/list',
    method: 'GET',
    data
  })
}
