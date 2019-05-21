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
    "revision": "03b5c55639d06497d27b868031aba649"
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
    "url": "assets/js/11.141b27b9.js",
    "revision": "e2a5ca60d8da1e14e86c14df87869a96"
  },
  {
    "url": "assets/js/12.2a1322e7.js",
    "revision": "e05437b97c3e88bb88ef3600da679bb7"
  },
  {
    "url": "assets/js/13.8f29efa9.js",
    "revision": "e6bbd053e42b648b992b87d33c9c6c8d"
  },
  {
    "url": "assets/js/14.9f5e045a.js",
    "revision": "dc060aa1e96284aad66ef8af9ead18d5"
  },
  {
    "url": "assets/js/15.164536c0.js",
    "revision": "92175b502c37ff86d1db01e1308c5d1c"
  },
  {
    "url": "assets/js/16.610000d7.js",
    "revision": "08d73995fb24e89b1dbbecf528b8fbd8"
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
    "url": "assets/js/22.4be49433.js",
    "revision": "c512f89436408c27227f9eefde92d85c"
  },
  {
    "url": "assets/js/23.6a5b40f8.js",
    "revision": "5cba60fedd6faf71e557a8b3dcbf3f94"
  },
  {
    "url": "assets/js/24.e4ded2be.js",
    "revision": "486b870e6fe1c840d849a20af7cf19bf"
  },
  {
    "url": "assets/js/25.676bbbb2.js",
    "revision": "3d7b20b529a25be317b01523babce391"
  },
  {
    "url": "assets/js/26.404467ad.js",
    "revision": "c9cc31f333270938eefcf630241ceeca"
  },
  {
    "url": "assets/js/27.7c5b86a5.js",
    "revision": "40fd59d6fb5679b98e7e13413c39e366"
  },
  {
    "url": "assets/js/28.2a5f5489.js",
    "revision": "84ad2d0cc5c4dc30f0ef4425652cef7a"
  },
  {
    "url": "assets/js/29.50fa7968.js",
    "revision": "b77bf925c9b67c599ea9b7e5c627c8d7"
  },
  {
    "url": "assets/js/3.2dc16b8f.js",
    "revision": "658cbbecc062e3c369f1572d0e9f0ae5"
  },
  {
    "url": "assets/js/30.3c8831ac.js",
    "revision": "1f78300a39ca95057572ead468944942"
  },
  {
    "url": "assets/js/31.b6c16f6b.js",
    "revision": "b0432c35d8fe30138ed5177f40590e39"
  },
  {
    "url": "assets/js/32.552e080b.js",
    "revision": "1fe48cb26a7d98c74745ec7e9d9e687c"
  },
  {
    "url": "assets/js/33.16137eea.js",
    "revision": "a45c450e9254aa340561964b3bdd1be2"
  },
  {
    "url": "assets/js/34.4f61fe1c.js",
    "revision": "e285d880aa32357736f607297206fccd"
  },
  {
    "url": "assets/js/35.b52d2f5c.js",
    "revision": "bc078a6ec88cb5dfeb30466b0d0b8630"
  },
  {
    "url": "assets/js/36.84964243.js",
    "revision": "970053f27c4c02ca4c8b3482f61fbcd1"
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
    "url": "assets/js/8.430a408f.js",
    "revision": "4a4c5e31c0a01588329b096c61f90c82"
  },
  {
    "url": "assets/js/9.fd2949d1.js",
    "revision": "b76b170d581b37e35cea418fc8c4b225"
  },
  {
    "url": "assets/js/app.17cf3b57.js",
    "revision": "06e078aea06b8902f776dd855ac76b79"
  },
  {
    "url": "closing/index.html",
    "revision": "e02638ea8cc4782dfaf5dc8bed1021fe"
  },
  {
    "url": "cover/index.html",
    "revision": "905525bfde92db236bcd1a17c98e14a1"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "7afdf8dff67bf08c450d88e34b0b8ae7"
  },
  {
    "url": "es2015/index.html",
    "revision": "06b08cca2fc02b860226f957aee2b062"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "18ef3dfbabf570dd39042f3f67d3ffa5"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "59498129e303ea9098539f2996cd7df4"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "68b8f3f53877e8d73f2d333f7e82f2ad"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "47b9c306a730b21e560e959081bc2148"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "c663a43fd55944d9d7575a332375f7aa"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "f25710e9a75402df042492fc4b97b4d7"
  },
  {
    "url": "faq/index.html",
    "revision": "a50f8680d6d01adfd7e05b365e6abc11"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "d56af3cde236ce2dc5a527bbcc0b62be"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "420ba9d517af10d97d894c0f4e4818fd"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "d50d056a71b358a055ab1d7e5a47c673"
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
    "revision": "af6ba7972e91123fffdc454d1168e281"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "9e2875281f60f974b90e17727d909128"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "47856dc1863a7906cd11411f9cdb0580"
  },
  {
    "url": "mentions/index.html",
    "revision": "53d9c34bbce70900f08b10af0aee8996"
  },
  {
    "url": "modules/index.html",
    "revision": "b7c83a6e2d01522df0d5e1d2d86f26af"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "1f2bef791db24a6d66ea509fe81f43a5"
  },
  {
    "url": "packaging/index.html",
    "revision": "5558a2edf04876c21ad2e38714a5042a"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "5bf0a5cb8594d60a0c5647111d706736"
  },
  {
    "url": "portals/index.html",
    "revision": "d3cae488c9e5866121e80eb9e0bf7845"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "be6b8be384572e9b503de75921402966"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "294532830080e2f18a3779d1780f1767"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "6b10e15ccd7cdb774e57825a8599ebad"
  },
  {
    "url": "shape/example/index.html",
    "revision": "886f65930fb4501af58753fbc9208693"
  },
  {
    "url": "shape/index.html",
    "revision": "b277b6be932ed9c1bc24b88241505cab"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "7a9f31da5688bbaa43a5a886c7c1b57e"
  },
  {
    "url": "start/index.html",
    "revision": "bf631e9ec63fdb18080dab5873312be5"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "0bbfd6966012da631648a46472129dcb"
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
