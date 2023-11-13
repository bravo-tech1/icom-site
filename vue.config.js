module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: "@use '@/../src/m-labs/sass/m' as *;",
      },
    },
  },
};
