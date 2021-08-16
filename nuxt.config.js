const { API_KEY, API_URL } = process.env
import axios from 'axios'

export default {
  publicRuntimeConfig: {
    apiUrl: API_URL
  },
  privateRuntimeConfig: {
    apiKey: API_KEY
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + process.env.npm_package_name
    },
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'j290d128IB5GtyMJlnSv_D7NRq0HSrIUM3LD494WoI4' },
      { property: 'og:site_name', content: 'minecraft-movies' },
      { property: 'og:locale', content: 'ja_JP' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@webbingstudio' },
      { name: 'twitter:creator', content: '@webbingstudio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/echo.min.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/getUsedTags.js',
    '~/plugins/formatDate.js',
    '~/plugins/markdown.js',
    '~/plugins/shuffle.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://minecraft.webbingstudio.net',
    routes(callback) {
      axios.get(`${API_URL}/movies?limit=15&orders=-publishedAt`,
        {
          headers: { 'X-API-KEY': API_KEY }
        }
      )
      .then((res) => {
        const routes = res.data.contents.map((movie) => {
          return {
            url: '/post/' + movie.id, 
            lastmod: movie.createdAt
          }
        })
        callback(null, routes)
      })
      .catch(callback)
    },
    gzip: true,
    exclude: [
      '/login/**',
      '/admin/**'
    ]
  }

}
