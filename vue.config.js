module.exports = {
  devServer: {
    disableHostCheck: true
  },

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}
