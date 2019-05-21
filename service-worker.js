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
    "revision": "401460d0329ea4db70d879e5baf0b824"
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
    "url": "assets/js/11.da9ab5e2.js",
    "revision": "89b0867946ff09c9ab9e92bdce3b251a"
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
    "url": "assets/js/14.6d2f916d.js",
    "revision": "f51bfe6098c576716db35915f6ff7284"
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
    "url": "assets/js/18.3b073015.js",
    "revision": "f40cb318f5048a9c958694d7f2de79bc"
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
    "url": "assets/js/20.83cb158c.js",
    "revision": "867f058f7ed05c62ba91fdbde8aafef3"
  },
  {
    "url": "assets/js/21.f20fda28.js",
    "revision": "e72e52bf79806725e05bf0c417a2af76"
  },
  {
    "url": "assets/js/22.1f23af46.js",
    "revision": "8692710315d91148264d13c3357bb0dc"
  },
  {
    "url": "assets/js/23.1e317210.js",
    "revision": "79c5a891db2cd0945cc61529981f4125"
  },
  {
    "url": "assets/js/24.8cc556c3.js",
    "revision": "7cba51a9935f3007aa82fe84afe6da63"
  },
  {
    "url": "assets/js/25.b033aa3e.js",
    "revision": "af28f86c4cd17cb895d93b03412d7073"
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
    "url": "assets/js/28.6e45d0e9.js",
    "revision": "1149122e7495d4ebc8584b43244938ae"
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
    "url": "assets/js/31.29d8868a.js",
    "revision": "30225aecdfea09bd538f33e729d4a98d"
  },
  {
    "url": "assets/js/32.dc0cae35.js",
    "revision": "dff281590693eb43d8ddb3c6458e23ea"
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
    "url": "assets/js/35.586609e6.js",
    "revision": "7649a525f0e2b1198e893c4f1bf866a6"
  },
  {
    "url": "assets/js/36.4d5b5c46.js",
    "revision": "f3768bbf16f02128898ae8289c5119da"
  },
  {
    "url": "assets/js/37.ceb80327.js",
    "revision": "e2d2b23932198289d0608857176d6138"
  },
  {
    "url": "assets/js/38.5fa77d3a.js",
    "revision": "aa8649aba547226be96c693658b4ed32"
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
    "url": "assets/js/app.925b7fd5.js",
    "revision": "36c42daed026cfdba6eade8f16b762b3"
  },
  {
    "url": "closing/index.html",
    "revision": "30c858761c7e6c4491fb60e75d084210"
  },
  {
    "url": "cover/index.html",
    "revision": "403e07e1b903b1101c99101cda29e310"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "9a49393c4096d3731aab19ff1461193e"
  },
  {
    "url": "es2015/index.html",
    "revision": "d27ec6c0ee6774a5659358da4fe73bb9"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "d0fb4133819a3b7faffc5a02824c3071"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "f35a00c818ac0b24afa933bcae637417"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "cfd35571e39093efb206df922c3f8bc2"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "6ea6ec375fdf875ff8d976f7f5081bcb"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "1f6b3fa47d860d55374faa0688dbde83"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "068fd478ed501eaf38ce8651930b8d0d"
  },
  {
    "url": "faq/index.html",
    "revision": "7baeda33fa2d2f282c3a52ee49b19a84"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "bf8dc56683562fbe8324a0c447f77026"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "c19e2ef955ccb161f14759e10f987fd0"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "5143260c347556823635583f4775b425"
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
    "revision": "6eaf0b51e201090b13374feac2496eb7"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "3c6d27621e883fe48f7dd488738450c3"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "2b3aa4890820d1fd3b564f764afbf9f7"
  },
  {
    "url": "mentions/index.html",
    "revision": "894a1494f3c8542d143f1b335e025822"
  },
  {
    "url": "modules/index.html",
    "revision": "f1bde508c7a82ce9875baca0661a1f55"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "f274142b1ed1e7fa32655fa4fd06a4b9"
  },
  {
    "url": "packaging/index.html",
    "revision": "306d0ad67e6dc44091c1a6af486e2147"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "32a47af8258f9b6855f768ee150eedc2"
  },
  {
    "url": "portals/index.html",
    "revision": "f80191f98f2271fff33b910e7dbf545a"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "b77a23e5c6b2169671b14bbf435597a5"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "48957ef9b6e0130eeaaaeecd378625b4"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "90565b37475605d9c18b341db609213d"
  },
  {
    "url": "shape/example/index.html",
    "revision": "230c87a3b365fe7a1345b9f3be634a26"
  },
  {
    "url": "shape/index.html",
    "revision": "76c0fb0c09e56c1ed74e40197114fd8c"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "0cd5a9d768ad4d52f03370eb70481330"
  },
  {
    "url": "start/index.html",
    "revision": "01b4ac6d670b6a524f01569b74e41c53"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "1681d9757a426fe06b9148e06b8e5ddb"
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
