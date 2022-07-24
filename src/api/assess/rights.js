/**
 * 权限管理模块
 */

import request from '@/utils/request'
// 获取权限列表
export const getRulesAPI = () => {
  return request({
    url: '/rule/1',
    method: 'GET'
  })
}
