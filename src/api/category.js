/**
 * 分类模块
 */
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
 * 添加分类
 * @param data
 * @returns {AxiosPromise}
 */
export const addCategoryAPI = (data) => {
  return request({
    url: '/category',
    method: 'POST',
    data
  })
}
/**
 * 修改
 * @param data
 * @returns {AxiosPromise}
 */
export const editCategoryAPI = (data) => {
  return request({
    url: `/category/${data.id}`,
    method: 'POST',
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
/**
 * 修改状态
 * @param data
 * @returns {AxiosPromise}
 */
export const updateStatusAPI = (id, data) => {
  return request({
    url: `/category/${id}/update_status`,
    method: 'POST',
    data
  })
}
/**
 * 删除分类
 * @param id
 * @returns {AxiosPromise}
 */
export const deleteCategoryAPI = (id) => {
  return request({
    url: `/category/${id}/delete`,
    method: 'POST'
  })
}
