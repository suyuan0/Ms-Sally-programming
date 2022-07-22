import { ElLoading } from 'element-plus'
// loading
export const loading = (index, text = '加载中...') => {
  let loading
  if (!index) {
    loading = ElLoading.service({
      lock: true,
      text: text,
      background: 'hsla(0,0%,100%,.8)'
    })
  } else {
    loading = ElLoading.service({
      lock: true,
      text: text,
      spinner: 'vab-loading-type' + index,
      background: 'hsla(0,0%,100%,.8)'
    })
  }
  return loading
}
// 多彩loading
export const loadingType = (index, text = '加载中...') => {
  let loading
  if (!index) {
    loading = ElLoading.service({
      lock: true,
      text: text,
      spinner: 'dots-loader',
      background: 'hsla(0,0%,100%,.8)'
    })
  } else {
    switch (index) {
      case 1:
        index = 'dots'
        break
      case 2:
        index = 'gauge'
        break
      case 3:
        index = 'inner-circles'
        break
      case 4:
        index = 'plus'
        break
    }
    loading = ElLoading.service({
      lock: true,
      text: text,
      spinner: index + '-loader',
      background: 'hsla(0,0%,100%,.8)'
    })
  }
  return loading
}
