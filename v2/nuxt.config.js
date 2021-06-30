export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Calliv',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/papa-parse.js', mode: 'client' },
    { src: '~/plugins/apexchart.js', mode: 'client' },
    { src: '~/plugins/lodash.js' },
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
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // '@nuxtjs/firebase',
  ],
  // firebase: {
  //   config: {
  //     apiKey: 'AIzaSyClJNaUwwL7Fd3E0etC2LNh6sPr4elN_Vw',
  //     authDomain: 'calliv-44c81.firebaseapp.com',
  //     projectId: 'calliv-44c81',
  //     storageBucket: 'calliv-44c81.appspot.com',
  //     messagingSenderId: '1074643316666',
  //     appId: '1:1074643316666:web:03fc89716215f588693783',
  //     measurementId: 'G-E8V3CY5D45',
  //   },
  //   services: {
  //     auth: true,
  //     firestore: true,
  //     functions: true,
  //     storage: true,
  //     database: true,
  //     messaging: true,
  //     performance: true,
  //     analytics: true,
  //     remoteConfig: true,
  //   },
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // SourceDir: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir
  srcDir: 'src/',
}
