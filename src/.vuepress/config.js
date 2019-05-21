module.exports = {
  title: 'What\'s next in frontend-land',
  head: [
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['script', { async: true, src: '/particles/particles.min.js' }],
    ['script', { async: true, src: 'https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/caniuse-embed.min.js' }],
  ],
  themeConfig: {
    navbar: false,
    sidebar: [
      '/',
      '/start/',
      '/es2015/',
      '/state-of-js/',
      '/cover/',
      '/cover/toc/',
      '/lazy-loading/js/',
      '/lazy-loading/images/',
      '/portals/',
      '/portals/gif/',
      '/packaging/',
      '/modules/',
      '/modules/single-file/',
      '/shadow-parts/',
      '/shadow-parts/selector/',
      '/shadow-parts/theme/',
      '/shape/',
      '/shape/example/',
      '/shape/toolkit/',
      '/esnext-bites/',
      '/esnext-bites/spread/',
      '/esnext-bites/finally/',
      '/esnext-bites/flat/',
      '/esnext-bites/from-entries/',
      '/mentions/',
      '/faq/',
      '/faq/locandina/',
      '/faq/controller/',
      '/faq/slide/',
      '/faq/repo/',
      '/closing/',
    ]
  },
  plugins: [
    ['@vuepress/pwa', {
      'serviceWorker': true,
      'updatePopup': true,
    }]
  ]
}