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
    "revision": "46e53a82e7ffbb02accf5fe1516b6e95"
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
    "url": "assets/js/14.e5ab20a3.js",
    "revision": "5960934dc23f7c23a26bdc89166d5dde"
  },
  {
    "url": "assets/js/15.9778c21e.js",
    "revision": "a520c7225f4dcb02da7dad3ab7d7caee"
  },
  {
    "url": "assets/js/16.db0943c0.js",
    "revision": "1cb618cdc4aeb4805a3dc6aa36577295"
  },
  {
    "url": "assets/js/17.d8b5c1cd.js",
    "revision": "990819702814a019becccf17fa9e0f3f"
  },
  {
    "url": "assets/js/18.de9da1bd.js",
    "revision": "25713184a3fec0272ad0b9515ccb0af6"
  },
  {
    "url": "assets/js/19.f73e4108.js",
    "revision": "65139e91e34638aa90d6846dec91a921"
  },
  {
    "url": "assets/js/2.d7504ef7.js",
    "revision": "afdc20847bb7d32599e7c957d692c4d9"
  },
  {
    "url": "assets/js/20.0df2c492.js",
    "revision": "ee8503332544b018463ae4e8a13c23da"
  },
  {
    "url": "assets/js/21.eb4c2a92.js",
    "revision": "a27ea6cdf3675dd754e47383703c5f20"
  },
  {
    "url": "assets/js/22.2b5dd472.js",
    "revision": "152f2f88e92b6df7b6e0f075087b6cad"
  },
  {
    "url": "assets/js/23.02e316cc.js",
    "revision": "a5939676784ed329e3efd46d10681771"
  },
  {
    "url": "assets/js/24.e4ded2be.js",
    "revision": "486b870e6fe1c840d849a20af7cf19bf"
  },
  {
    "url": "assets/js/25.e38ca3e4.js",
    "revision": "3db0a86f3ec363ec5315398d26ed9d46"
  },
  {
    "url": "assets/js/26.1701e8f9.js",
    "revision": "3ff318d43d208df0ca9616953493813a"
  },
  {
    "url": "assets/js/27.7c5b86a5.js",
    "revision": "40fd59d6fb5679b98e7e13413c39e366"
  },
  {
    "url": "assets/js/28.11524a0c.js",
    "revision": "66dfcd1a609cfd0fe34db4c6482dbd7b"
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
    "url": "assets/js/30.a4074418.js",
    "revision": "b996641603ae469f8ed3c9563918e445"
  },
  {
    "url": "assets/js/31.b6c16f6b.js",
    "revision": "b0432c35d8fe30138ed5177f40590e39"
  },
  {
    "url": "assets/js/32.1207033e.js",
    "revision": "9a6245266d0ac4858036e872896f8d68"
  },
  {
    "url": "assets/js/33.504147f5.js",
    "revision": "7b84170b4eace71190c4b80a3d8a9ed6"
  },
  {
    "url": "assets/js/34.10df98b4.js",
    "revision": "83d8ad1540dd7bc081ac4ab70b1c06d4"
  },
  {
    "url": "assets/js/35.b52d2f5c.js",
    "revision": "bc078a6ec88cb5dfeb30466b0d0b8630"
  },
  {
    "url": "assets/js/36.a26f8d11.js",
    "revision": "e0ad36557367d0bf8b31d132825a290c"
  },
  {
    "url": "assets/js/37.7cb954cb.js",
    "revision": "b4a661ac267ac71a3959af6069da843a"
  },
  {
    "url": "assets/js/38.374384b4.js",
    "revision": "7cbbf540df878a6b21cc1b3e8119512b"
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
    "url": "assets/js/app.1c8a62d1.js",
    "revision": "519fc2eeb050d617c55e56df7b489c54"
  },
  {
    "url": "closing/index.html",
    "revision": "0b999bfc1c3a6d7de6105979fe7f7cba"
  },
  {
    "url": "cover/index.html",
    "revision": "293d16460bec1739c54a83d0ffe39768"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "9001ecea5e64a6e1fc43c73618661ac0"
  },
  {
    "url": "es2015/index.html",
    "revision": "4843aa307c30ae716084d8002a9e21d5"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "723dac8a99e506a009fe96addd567af6"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "6027633f1b4094346693344ecd23a688"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "c9164dfdf46d1e00f9e769a85199fb02"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "47f2bce728439a803d609b288fd8586c"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "33378c140354bd85e2d8f808bea3cd4a"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "cf43f6bbf57c5b71189676e30e4d89db"
  },
  {
    "url": "faq/index.html",
    "revision": "b55382d977a456efb36dd4c90c42ef4b"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "d7216583a0da1f0b117280f6ba4062f5"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "d677b7667366cb130e1e8d2d6a4befd5"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "56a48a97d2046550a4ecdfa378777330"
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
    "revision": "5a1d27a618005ae7facc7b4a5c87c933"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "ab46611f3441c7610e9d8869706b522c"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "2b42be76420c26103667d3443f50e578"
  },
  {
    "url": "mentions/index.html",
    "revision": "21d731560adce7a4a4c0a5c1c638fbef"
  },
  {
    "url": "modules/index.html",
    "revision": "914b832bd61cf951c54f3b60cdd47da7"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "72dbd94e0f88e75038f3ba83f07ecdd6"
  },
  {
    "url": "packaging/index.html",
    "revision": "47d57dc7d3988ff12a626cdbb6f646ad"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "d8409d0ca8789d933f0f0ded2b19503a"
  },
  {
    "url": "portals/index.html",
    "revision": "d9b0d5f921c2137066556eb8b6a8687f"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "34b64f25d31382053ed343cc2e6366bb"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "d37de7a01d2748939c0d9c4819084d73"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "a7e7c4f4a31eaabe1a590a9387e8ba39"
  },
  {
    "url": "shape/example/index.html",
    "revision": "efa109988fb3e5c606478be9434a838f"
  },
  {
    "url": "shape/index.html",
    "revision": "3a3575f2d12d59b16794bf6d2fda0246"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "5f577b13273c48b7641d5866b935e25f"
  },
  {
    "url": "start/index.html",
    "revision": "d110f8cc858ef4c9bd4e3a06e927e718"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "b8d32bfc2beb43f295ac169562e13296"
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
