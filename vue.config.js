module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/witcher/" : "/",
  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: "src/assets/icons",
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: "img/icons.[hash:8].svg", // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/main.scss";',
      },
    },
  },
};
