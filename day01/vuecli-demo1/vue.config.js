const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { 
    host: '127.0.0.1',
    // 自定义服务配置
    port: 3000,
    // 自动打开浏览器
    open: true, 
  },
  // 关闭eslint检查
  lintOnSave: false
})
