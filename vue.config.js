module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8336,
    // port: 9000,
    proxy: {
      "/api/": {
        target: "http://localhost:4000/",
        changeOrigin: true
      }
    }
  }
};
