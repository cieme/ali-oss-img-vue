module.exports = {
  devServer: {
    proxy: {
      "/qingqiu": {
        target: "https://iaishou-img.oss-cn-beijing.aliyuncs.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
}