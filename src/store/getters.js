export default {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  menus: (state) => state.user.userInfo.menus,
  isCollapse: (state) => state.menu.isCollapse,
  tagsView: (state) => state.tagsView.tags,
  loading: (state) => state.loading.loading
}
