const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
  },
  // 关闭eslint检查
  lintOnSave: false
})
