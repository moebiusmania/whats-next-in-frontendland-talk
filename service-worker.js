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
    "revision": "0df8055f5876d89dfdd0230168ff908c"
  },
  {
    "url": "assets/css/0.styles.17ced472.css",
    "revision": "4312d98e21cef665d304b09c71766758"
  },
  {
    "url": "assets/js/10.97fd6473.js",
    "revision": "3a8167928cc3ab4ee7c3691c40c4bba2"
  },
  {
    "url": "assets/js/11.0f34a72a.js",
    "revision": "5063eeeb141df64a829d79c1fd88258d"
  },
  {
    "url": "assets/js/12.b2723595.js",
    "revision": "01a24f4d72ca416d62eacde64c9c1ee6"
  },
  {
    "url": "assets/js/13.27d93c1f.js",
    "revision": "ac3b98c229d8c0526c9993d753ea32a1"
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
    "url": "assets/js/18.70280f03.js",
    "revision": "9b05c58a48b2fc74c3da6528fa8e0e87"
  },
  {
    "url": "assets/js/19.63d17a14.js",
    "revision": "f8278ead14425253e9325edf354a9cbc"
  },
  {
    "url": "assets/js/2.d7504ef7.js",
    "revision": "afdc20847bb7d32599e7c957d692c4d9"
  },
  {
    "url": "assets/js/20.3c723266.js",
    "revision": "c327452e8c5af296c3c6f05d8a3ef455"
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
    "url": "assets/js/9.485291d9.js",
    "revision": "0bde12cbeed9f7886361d7b9fb669cde"
  },
  {
    "url": "assets/js/app.376e9c16.js",
    "revision": "947a2bb02625a81cc051397e974fd8e1"
  },
  {
    "url": "closing/index.html",
    "revision": "1b3e27898d30f8877ead3435bbe2d72b"
  },
  {
    "url": "cover/index.html",
    "revision": "edd03190bcfe61b808e34068b2d0b499"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "eb2dd1222ec31eb1d5643a541e6c4060"
  },
  {
    "url": "es2015/index.html",
    "revision": "541a778692c129150ae8d8f8b6718bb7"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "3a9b2c34d573a5b39e0f4b4bc2dce22f"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "ef0cb177672030b1836f3df8a0c58be9"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "b9657a9b6fa30a32dd2ab9b8cb13ffe0"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "e6b81ec6296b5b8a3390ff920dd6da15"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "467d3a0b69ddbbe4157891ee5054d01b"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "8440256c75a816396e2d2ebe6afbf7ac"
  },
  {
    "url": "faq/index.html",
    "revision": "0cc7baeb71d48beec3c2e50cc86afd50"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "e8e0e64f9970368d7602cd9041244e4c"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "d1a7078024511aa631b449228e48759b"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "84828cb82543e30ad836646267fd1638"
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
    "revision": "c2076215da34f181f792d47bd22e6c80"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "5eb0c91a8014b4ef7e2466cf69d3f431"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "57ecc3ad52d89ce64b0cbdec4bf6a918"
  },
  {
    "url": "mentions/index.html",
    "revision": "4fe091fffd76ac916b248115204430cf"
  },
  {
    "url": "modules/index.html",
    "revision": "12e39d9062df96d2c9c63b669dd26f0a"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "3604fac742b45ea616aceb11d74fce37"
  },
  {
    "url": "packaging/index.html",
    "revision": "2b5b1c288e2f473a3b1920d2e1cf0a2f"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "d3113c1ba364d1e146c4b7419417d9ad"
  },
  {
    "url": "portals/index.html",
    "revision": "9feb47aefac5460056551c59c4fa12f6"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "40b219b3c9e36a7ebc2028f506fda56e"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "ae2dd1c76bd3bbc216549e8e3b49a396"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "b2b86a0b7dbaabcb6021e297f6b2b048"
  },
  {
    "url": "shape/example/index.html",
    "revision": "60b3f344cfc44bdfbb6955ce44cc6deb"
  },
  {
    "url": "shape/index.html",
    "revision": "e0a25ce933f0dab3945ea5c594fd98d7"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "7aeb310f4cacbaee79f81d0987902855"
  },
  {
    "url": "start/index.html",
    "revision": "973e8fdc3eb86e3e990e42a200c642fb"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "a02a36381ed7a7a9dc5f8b433b9c84e6"
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
