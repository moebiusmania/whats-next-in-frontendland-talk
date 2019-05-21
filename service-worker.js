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
    "revision": "a5e45619572f18fa75596c671c515b84"
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
    "url": "assets/js/28.db2d6023.js",
    "revision": "a301e47602d03ec4c9dfa76e7310a944"
  },
  {
    "url": "assets/js/29.26ee6776.js",
    "revision": "d31c11b37a576f715edbd484946ad58f"
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
    "url": "assets/js/38.0edfb282.js",
    "revision": "e476407191975aaa73e812f8157411fa"
  },
  {
    "url": "assets/js/39.5123b28a.js",
    "revision": "ddf97e1ae941f100483bfb21248b19a0"
  },
  {
    "url": "assets/js/4.34020875.js",
    "revision": "9c6d73aaccbbc054b222768128103b17"
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
    "url": "assets/js/app.1889edc6.js",
    "revision": "0dde66eb2fb6aeef9d7a5e43ca788d49"
  },
  {
    "url": "closing/index.html",
    "revision": "faeccaa156b9dfa75be6fbe6d856de35"
  },
  {
    "url": "cover/index.html",
    "revision": "d03ec949eb9040b460b31450fe547a98"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "4dc519e09fe3db4fe439682839aa96bf"
  },
  {
    "url": "es2015/index.html",
    "revision": "d9698455bfdb08e7d853ac0f4b7ad25e"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "27f2ce760da602c5104a81b3556b9398"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "86765f972a794670e7844a0fbf1163dd"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "b55d0c8fdcda1069ffd2497c8d22fb48"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "5f97d42b20dd12ff10d2474884ca91a5"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "fe237b33e21d32dcf68089efc7f39baf"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "87e6da38fc9266b0029b801aeb6272c7"
  },
  {
    "url": "faq/index.html",
    "revision": "39a7cc25317796e6430d26b7b6948160"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "4209a026bc539bf46f1b9c6cb0acc4d3"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "ba1f91f610150f77c60b4fda98644493"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "1d62c1adf2ccda7b03756b3fc65c26ed"
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
    "revision": "dbbcd4b07cd494cc3d809a48b46a896a"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "3a5dd25e361527f1904d928380635f36"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "8264fb3ef4cb08b5e25c6cb17bc853d8"
  },
  {
    "url": "mentions/index.html",
    "revision": "eeb86269d10b7a3db0ea4772d2e93fd9"
  },
  {
    "url": "modules/index.html",
    "revision": "d61c7b23122c916ca1e120ff53a2fd4b"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "d9a27f00aa95f237c7c3d8697a8dcf2d"
  },
  {
    "url": "packaging/index.html",
    "revision": "cc22999289934e651fccb7e6d1a6a8fd"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "8ef8aca8e0120ecd2d98d350875d49f7"
  },
  {
    "url": "portals/index.html",
    "revision": "7aa30569df5e90922f01668de8ec6e26"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "c9f9e4be578bff7b39e285c1319fdcb4"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "2b0c392e829e61b566597ec62ee81b5c"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "694660a1668b0d149e26e4f61cecbe7e"
  },
  {
    "url": "shape/example/index.html",
    "revision": "ebfa29c4111d7b80a90c3c38d92eeefe"
  },
  {
    "url": "shape/index.html",
    "revision": "2fe9b4c33fba0b50e76c89d1cd15ab5c"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "cbdc1bbd74a019bb46b954995a0c8b77"
  },
  {
    "url": "start/index.html",
    "revision": "a738d7c5e18ffabcc914d2313de312ff"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "5cd61ea269a3c3ec399691e9257cda57"
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
