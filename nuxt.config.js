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
        content: 'Contributte packages are first class extensions for Nette Framework.'
      },      {
        hid: 'keywords',
        name: 'keywords',
        content: 'contributte, nette, symfony, extensions, mvc, application, http, security, utils, database'
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    'highlight.js/styles/agate.css',
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
    extractCSS: true,
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
  },
  render: {
    resourceHints: false,
  }
};
