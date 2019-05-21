/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "94af66cb5f60a89826ca64dd49edf99f"
  },
  {
    "url": "assets/css/0.styles.17ced472.css",
    "revision": "4312d98e21cef665d304b09c71766758"
  },
  {
    "url": "assets/img/portals.9bb69d00.gif",
    "revision": "9bb69d00df33d49f4837d0d8bb16f175"
  },
  {
    "url": "assets/img/state_of_js.db56d6d6.png",
    "revision": "db56d6d6c1993f71c1fd890d89338430"
  },
  {
    "url": "assets/js/10.7f657917.js",
    "revision": "55e0311dc8c99772d58c9f9566433b70"
  },
  {
    "url": "assets/js/11.8c0be215.js",
    "revision": "9183fe9c6f14fd42ae8c64a7c7d52ede"
  },
  {
    "url": "assets/js/12.b89ea7e4.js",
    "revision": "41c41ccce11d0921a65189410ff58370"
  },
  {
    "url": "assets/js/13.cf7f7c4d.js",
    "revision": "2fb532d08fc48ec772d7d9a5bd9c725e"
  },
  {
    "url": "assets/js/14.950a975f.js",
    "revision": "3d417a744ec11982dc1f04a37cec3361"
  },
  {
    "url": "assets/js/15.a15dd460.js",
    "revision": "e7f02d9333b1f450672adda6d8b64220"
  },
  {
    "url": "assets/js/16.6e9292ca.js",
    "revision": "7a233101f03ec7130eaf624c154170b3"
  },
  {
    "url": "assets/js/17.a3a76f12.js",
    "revision": "a13a63084fd77bc0a995b31b9d6f7a3e"
  },
  {
    "url": "assets/js/18.4cdb4a29.js",
    "revision": "c72dbfef5d18d9b6a2866ef517376481"
  },
  {
    "url": "assets/js/19.18fd791e.js",
    "revision": "878ae52893162a459cb11a7e0dcef0c4"
  },
  {
    "url": "assets/js/2.3876cc59.js",
    "revision": "19f5e57540f658dca575c7288d528966"
  },
  {
    "url": "assets/js/20.6bf1cf89.js",
    "revision": "3dd1ac9a69a183022948e9c63cc1a5c1"
  },
  {
    "url": "assets/js/21.1cf5370a.js",
    "revision": "c5027fafe80860042230a2683647b5ec"
  },
  {
    "url": "assets/js/22.14bfcd6c.js",
    "revision": "5f9f48a76f68ce1cbd23e9d3edc9b303"
  },
  {
    "url": "assets/js/23.0245f3bb.js",
    "revision": "c3738c0398da6b4693891d4a1fe10164"
  },
  {
    "url": "assets/js/24.1202fcba.js",
    "revision": "61a3b54ee04e002b469fbd328b430124"
  },
  {
    "url": "assets/js/25.54c433e1.js",
    "revision": "da321eb9b26461c53ebed103b630fa31"
  },
  {
    "url": "assets/js/26.49390b64.js",
    "revision": "b4766f27e5d2cb44f018748f7d156022"
  },
  {
    "url": "assets/js/27.8c0dee16.js",
    "revision": "04002fa5b62c5b4ac8225dab6e75409e"
  },
  {
    "url": "assets/js/28.aa09fba1.js",
    "revision": "98fee3e61d722f1e04396aa1ae784c87"
  },
  {
    "url": "assets/js/29.8a51ba43.js",
    "revision": "066204be680c68e90cbd97204c84edd5"
  },
  {
    "url": "assets/js/3.f7f1d015.js",
    "revision": "e99f0f35692f290651f434dd9b3a8d63"
  },
  {
    "url": "assets/js/30.c564c511.js",
    "revision": "73acd89e2298d56c93c35d43ec502da9"
  },
  {
    "url": "assets/js/31.73ea1c43.js",
    "revision": "447473308437495ecdd6b530b92c596b"
  },
  {
    "url": "assets/js/32.c5f96727.js",
    "revision": "4445c7624c493a4d983c1d4953c0797a"
  },
  {
    "url": "assets/js/33.fb4253b9.js",
    "revision": "ea62eee7c7e1cdf9c3787bf00b42fe47"
  },
  {
    "url": "assets/js/34.a492e5e7.js",
    "revision": "e14428a28fadeeb782cd80a2c2903cb2"
  },
  {
    "url": "assets/js/35.234503d8.js",
    "revision": "7b83038cb1d0056b4151534208ea9f64"
  },
  {
    "url": "assets/js/36.553c33aa.js",
    "revision": "1fbee09d603605cf3d5a4b872f0b8589"
  },
  {
    "url": "assets/js/37.bdc43746.js",
    "revision": "c7022277b5024ba5bd19e4a284c9d7f1"
  },
  {
    "url": "assets/js/38.ea3f28d7.js",
    "revision": "3d4a426f34271bb50d429bb9ad7dbe90"
  },
  {
    "url": "assets/js/39.b2a7bae4.js",
    "revision": "6e388355c61e5c6dbb280d71b230b6eb"
  },
  {
    "url": "assets/js/4.af2bb4bc.js",
    "revision": "7bd386f5ee4fcbd4a5f9932b1e0cd194"
  },
  {
    "url": "assets/js/40.ac5aef97.js",
    "revision": "e71dd70ac2725d6998c0d05044b4417c"
  },
  {
    "url": "assets/js/5.acf23d33.js",
    "revision": "c8bd7cee8d233c422727b7985ce4a805"
  },
  {
    "url": "assets/js/6.2bad5ed6.js",
    "revision": "3e2cceb7e0711682ea82182115b263e7"
  },
  {
    "url": "assets/js/7.8c49de1a.js",
    "revision": "625924f6031c7e5e62ecb4f934f0673f"
  },
  {
    "url": "assets/js/8.d3179562.js",
    "revision": "b6596fde8909ee1935819a0591fccb20"
  },
  {
    "url": "assets/js/9.3b981aa6.js",
    "revision": "8d792af6a76cd73c07452162e9f09ed6"
  },
  {
    "url": "assets/js/app.c20752cb.js",
    "revision": "529b3ee22446ece0faa2bcabbeac78d5"
  },
  {
    "url": "closing/index.html",
    "revision": "ef4d4251cd9d2e0ac535f5f0a82e1992"
  },
  {
    "url": "cover/index.html",
    "revision": "4e12a2b07e695b5e8ce8123779407475"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "ff057f64010c9e6a5e538321d9b95a87"
  },
  {
    "url": "es2015/index.html",
    "revision": "7b6d7b42e76e66c6431ee9c32d92c7fb"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "999aef898ec1c97bf825e67713ccf8c3"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "8a2e7cf1c62ca43cd76f3a407a57560b"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "760aaaa451e045df2a72f1632af9dde9"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "556bfb02783f343d7a993658175545e7"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "8ef9b2ad3311293b11325eeb010de779"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "75b1d421acddf953d93b00be5dd6f34e"
  },
  {
    "url": "faq/index.html",
    "revision": "59af888a4c1a23349d9b8b17397bdb4b"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "4d0ab02825b4c3ad3c8c6e7914fb4401"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "632607abe9e969cae9860ac14112fa2c"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "7e43a22ec00db02abb393ee2298bb136"
  },
  {
    "url": "index.html",
    "revision": "53022938ec41a493e0c6eada6a029d16"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "974e7c954cc245f014297df700586d99"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "ae3f6559decab7feaed3595a0a4c2409"
  },
  {
    "url": "mentions/index.html",
    "revision": "cc6eb95ff14be103859b2e06a8d7edba"
  },
  {
    "url": "modules/index.html",
    "revision": "9701d3dafc64db9b14b4b4a7fb39d930"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "bff20294efd31672434fcf5b728e1bb1"
  },
  {
    "url": "packaging/index.html",
    "revision": "86dce31d686617a281cfe1d2ea05c359"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "b82eaf3d01acb787e2c27ac9fdc21645"
  },
  {
    "url": "portals/index.html",
    "revision": "c5fe16e0a2a18e77d1fd978935986584"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "3ddb0ba2f1d8c31ab8141022579ddbb7"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "4badb4d891a01fdbf5a00d6c948b2b40"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "18e7d9030839d7ffe9e6fd17e8237a70"
  },
  {
    "url": "shape/example/index.html",
    "revision": "9319e466485d713fc983cd6f337e5616"
  },
  {
    "url": "shape/index.html",
    "revision": "09d8795f47998afba4f9b03c7814f69c"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "cc0cbe347e9b254d8353e91679c8d161"
  },
  {
    "url": "start/index.html",
    "revision": "81f9b63f5d9117a7a3d12c890f97f422"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "6f167f86b75b95ed35d455d6b013cae2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
