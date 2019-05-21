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
    "revision": "0de269fa6018c81d1df86dbb1d5bb44e"
  },
  {
    "url": "assets/css/0.styles.17ced472.css",
    "revision": "4312d98e21cef665d304b09c71766758"
  },
  {
    "url": "assets/js/10.8f760a25.js",
    "revision": "4c8ad8ffe2e82dcad360023826bd5fcb"
  },
  {
    "url": "assets/js/11.a735721b.js",
    "revision": "da032cd96e10f1f8a14d85655b7d5576"
  },
  {
    "url": "assets/js/12.bb6ea6bf.js",
    "revision": "9414520cb3f836e43df765a256d2670c"
  },
  {
    "url": "assets/js/13.5c18dcbf.js",
    "revision": "8087731cc816f0864dd5e57fbd682bc9"
  },
  {
    "url": "assets/js/14.7c697f26.js",
    "revision": "26fb59af75a068fb7dcd60eb884c753f"
  },
  {
    "url": "assets/js/15.e6febb0d.js",
    "revision": "c298faf509358a371ddefb932158b2f8"
  },
  {
    "url": "assets/js/16.db0943c0.js",
    "revision": "1cb618cdc4aeb4805a3dc6aa36577295"
  },
  {
    "url": "assets/js/17.55bbb0ab.js",
    "revision": "44e785a79171193c8cf5f8028e6f126b"
  },
  {
    "url": "assets/js/18.066f3a9b.js",
    "revision": "78d413437e69d728d15afe37843f98c0"
  },
  {
    "url": "assets/js/19.6b4b5c5f.js",
    "revision": "18299a5ed67f0e66836021d58be07c6c"
  },
  {
    "url": "assets/js/2.d7504ef7.js",
    "revision": "afdc20847bb7d32599e7c957d692c4d9"
  },
  {
    "url": "assets/js/20.d37a43e9.js",
    "revision": "b597b8b87b64f35bb8a791489f27a2c0"
  },
  {
    "url": "assets/js/21.48602e4c.js",
    "revision": "945f36164102cf15604a96f0e7ac86c7"
  },
  {
    "url": "assets/js/22.c07e893b.js",
    "revision": "4069a565fb292dd1b42e9e6b4ffb2a56"
  },
  {
    "url": "assets/js/23.ece7b314.js",
    "revision": "38971df3ab63a37aa73e2bf4524d3470"
  },
  {
    "url": "assets/js/24.7fdddd45.js",
    "revision": "1e205b975a292650bb1a02b22778ae49"
  },
  {
    "url": "assets/js/25.e38ca3e4.js",
    "revision": "3db0a86f3ec363ec5315398d26ed9d46"
  },
  {
    "url": "assets/js/26.8becfe37.js",
    "revision": "28a32b675913ab04b8e53d2b316dca26"
  },
  {
    "url": "assets/js/27.7c28b94a.js",
    "revision": "a7973666293873cbce6d623b068f1560"
  },
  {
    "url": "assets/js/28.f7fadf39.js",
    "revision": "41175664b56fe4af932590e59681dac0"
  },
  {
    "url": "assets/js/29.a985ec40.js",
    "revision": "292b02a91e8ecb8b2ce941c2c58e2c5c"
  },
  {
    "url": "assets/js/3.2dc16b8f.js",
    "revision": "658cbbecc062e3c369f1572d0e9f0ae5"
  },
  {
    "url": "assets/js/30.02e41125.js",
    "revision": "4926e6792458c85dd487c7646301a4b6"
  },
  {
    "url": "assets/js/31.7608e83f.js",
    "revision": "687561aeeb9b82e91702c6eb0017ca9e"
  },
  {
    "url": "assets/js/32.ed7f9e5f.js",
    "revision": "5d67acf689e02e68a9b329ee83d320fb"
  },
  {
    "url": "assets/js/33.4090864f.js",
    "revision": "851f40d92d127a86ccb9f8400782a4a3"
  },
  {
    "url": "assets/js/34.3d94c30e.js",
    "revision": "bd918bd025304779b03b794a82d4ba59"
  },
  {
    "url": "assets/js/35.b55196a2.js",
    "revision": "da72b96cf7aeba7f26eb391645df2972"
  },
  {
    "url": "assets/js/36.f20900b8.js",
    "revision": "55d0e192131f2d6a378b9406e3b7d455"
  },
  {
    "url": "assets/js/37.293f4a58.js",
    "revision": "deecc1f9411bf42966416ca7cdf9b886"
  },
  {
    "url": "assets/js/38.b3814612.js",
    "revision": "c5944ecba1286f2247df39e5bd12d022"
  },
  {
    "url": "assets/js/39.5123b28a.js",
    "revision": "ddf97e1ae941f100483bfb21248b19a0"
  },
  {
    "url": "assets/js/4.ff6b772f.js",
    "revision": "266f95987a897dd66a04cfff7f541d0c"
  },
  {
    "url": "assets/js/40.ac5aef97.js",
    "revision": "e71dd70ac2725d6998c0d05044b4417c"
  },
  {
    "url": "assets/js/5.5fbdb1f6.js",
    "revision": "63ee600418bbd90bc2d74286e587c10e"
  },
  {
    "url": "assets/js/6.942a9563.js",
    "revision": "08dcb765ebf9645b65f5d433a8059d44"
  },
  {
    "url": "assets/js/7.1a521c26.js",
    "revision": "ea0c50ca13301aa2835241efd5f584f2"
  },
  {
    "url": "assets/js/8.6e5f2687.js",
    "revision": "b76b0476eb526bdb8166e63c35704bd6"
  },
  {
    "url": "assets/js/9.57778ec0.js",
    "revision": "eddc5dfa3c1399c0dfa0b9454f6c37d9"
  },
  {
    "url": "assets/js/app.bae08b0a.js",
    "revision": "baf4f675f50f2d1f40ed89692535870a"
  },
  {
    "url": "closing/index.html",
    "revision": "e440febcc662f3007a187a15c44dbe0c"
  },
  {
    "url": "cover/index.html",
    "revision": "646c61d63334e07599ac8da2a88e873a"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "fe92bda1d88bb80343b396e0f4c8fa07"
  },
  {
    "url": "es2015/index.html",
    "revision": "2f7aab6a81c497b5f26ae04555b3ec7f"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "042830c60f561322490b1107fac0e2b7"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "6bd80c7d3b86cb29ca6c166495b525d2"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "e3af95c621ff971a2f54d24ee45dcc5b"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "53eeec44e14c139826740f3ff1983255"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "19631cbd30f4380aad8e1d31df149ffd"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "94090a134f3433aac8358999bd459cba"
  },
  {
    "url": "faq/index.html",
    "revision": "632b43e44f904dcd4d9ec933daa84d4c"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "491cf9ed3d293d73eaa3948071ea1b0b"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "781314c5e8609ea3b2aae65fbdcbf51a"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "8997e3bca6bf9909f0356dbe688a08d7"
  },
  {
    "url": "img/portals.gif",
    "revision": "9bb69d00df33d49f4837d0d8bb16f175"
  },
  {
    "url": "img/state_of_js.png",
    "revision": "db56d6d6c1993f71c1fd890d89338430"
  },
  {
    "url": "index.html",
    "revision": "7089c37fb6b76fa2c8e3d0a840908675"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "85ff8ecc6cdbb70cba3a45dbde48046a"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "0940eff8625ba96380de6a5565073acb"
  },
  {
    "url": "mentions/index.html",
    "revision": "cc0b764c644759fae3800ab1b543e228"
  },
  {
    "url": "modules/index.html",
    "revision": "78b5f665b8a3440a8e0166f42c5f9d69"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "c7773f9af2719394936b59bdab84d2a9"
  },
  {
    "url": "packaging/index.html",
    "revision": "5091fcecc9d56fc8504f855e1162e8c2"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "5e46ce1feed7a3a029c2717eb197133e"
  },
  {
    "url": "portals/index.html",
    "revision": "a24cf3dc7f5151468098ecdd46daafab"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "c14f412bca3c69b007c7472a4f1a1e1d"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "96cacbf6d2f85bca43ec084d9e28fd64"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "2094d318f935b6adff0ad8fb4ae91b85"
  },
  {
    "url": "shape/example/index.html",
    "revision": "1280591f786ab19ec1088fe486debb01"
  },
  {
    "url": "shape/index.html",
    "revision": "3c61713b97c8d7d91ebcac6cf0911c19"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "3a3c63d0a6ac25deab5df71b578ca412"
  },
  {
    "url": "start/index.html",
    "revision": "8e45f49d6bded15eda52a4df81b2a59e"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "5a605d58412c820c10ee70927c257ec9"
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
