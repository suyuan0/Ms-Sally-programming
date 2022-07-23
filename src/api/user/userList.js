import request from '@/utils/request'
// 获取用户列表
export const userListAPI = (data) => {
  const query = {}
  for (const key in data) {
    if (data[key]) {
      query[key] = data[key]
    }
  }
  return request({
    url: `/user/${data.current}`,
    method: 'GET',
    data: query
  })
}
// 添加用户 || 修改用户
export const addUserListAPI = (data) => {
  const url = data.id ? `/user/${data.id}` : '/user'
  return request({
    url,
    method: 'POST',
    data
  })
}
