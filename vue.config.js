const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 跨域
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_API]: ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
