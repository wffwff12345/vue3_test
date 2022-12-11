const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8088,
    open: true,
    proxy: {
      '/admin': {
        "target": "http://127.0.0.1:9001/", //源地址
        changeOrigin: true, //改变源
        pathRewrite: {
          '^/admin': '/'
        }
      }
    }
  }
})
