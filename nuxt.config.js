module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Contributte - First class extensions for Nette Framework',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Contributte packages aref irst class extensions for Nette Framework.'
      },
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32'},
      {rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '~/assets/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
   * Enabled modules
   */
  modules: [
    'bootstrap-vue/nuxt',
  ],
  /*
   * Enabled plugins
   */
  plugins: [
    {src: '~/plugins/markdownit.js'}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
