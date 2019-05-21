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
      '/toc/',
      '/lazy-loading/js/',
      '/lazy-loading/images/',
      '/portals/',
      '/portals/gif/',
      '/faq/',
      '/faq/locandina/',
      '/faq/controller/',
      '/faq/slides/',
      '/faq/repo/',
      '/closing/',
      // ['/page-b', 'Explicit link text']
    ]
  },
  plugins: [
    ['@vuepress/pwa', {
      'serviceWorker': true,
      'updatePopup': true,
    }]
  ]
}