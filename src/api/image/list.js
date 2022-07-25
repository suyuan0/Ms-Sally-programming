/**
 * 图片接口模块
 */
import request from '@/utils/request'
// 获取图片列表
export const imageListAPI = (current, id) => {
  return request({
    url: `/image_class/${id}/image/${current}`,
    method: 'GET'
  })
}
// 图片分类接口
export const imgageClassAPI = (current) => {
  return request({
    url: `/image_class/${current}`,
    method: 'GET'
  })
}
