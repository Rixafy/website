module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Extra Contribution to Nette Framework',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Contributte Website & Docs'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /**
   * Enabled modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
    use: [
      'markdown-it-emoji',
      ['markdown-it-github-headings', {enableHeadingLinkIcons: false}]
    ]
  },
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
