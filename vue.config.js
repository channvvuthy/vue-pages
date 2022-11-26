module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: "http://localhost:8080",
    overlay: {
      warnings: true,
      errors: false,
    },
  },
  publicPath: "/dist/",
};
