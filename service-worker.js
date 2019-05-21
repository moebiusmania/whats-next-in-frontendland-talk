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
    "revision": "3f053bf69c49bca775b987d98d15c03b"
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
    "url": "assets/js/12.6de77d11.js",
    "revision": "ab1c87ffa656eaeddc6b4217149a26ee"
  },
  {
    "url": "assets/js/13.400cb482.js",
    "revision": "36e4d953568e3d33cf8e603c23f0f1c4"
  },
  {
    "url": "assets/js/14.6cb46812.js",
    "revision": "1cbd26253de93774754cacd2380fae76"
  },
  {
    "url": "assets/js/15.a15dd460.js",
    "revision": "e7f02d9333b1f450672adda6d8b64220"
  },
  {
    "url": "assets/js/16.9f5ea664.js",
    "revision": "c8d78ff63b1c649b5726648aa53261ea"
  },
  {
    "url": "assets/js/17.17d6c832.js",
    "revision": "5822be29d53c868aa001245c6072013f"
  },
  {
    "url": "assets/js/18.72e5087b.js",
    "revision": "d1c31407333cf42aaf28adc4ed969365"
  },
  {
    "url": "assets/js/19.735291d2.js",
    "revision": "fd496687b40655911648e9531680f080"
  },
  {
    "url": "assets/js/2.3876cc59.js",
    "revision": "19f5e57540f658dca575c7288d528966"
  },
  {
    "url": "assets/js/20.032b5875.js",
    "revision": "693ad937725de499e9a1f8b0d851619c"
  },
  {
    "url": "assets/js/21.1cf5370a.js",
    "revision": "c5027fafe80860042230a2683647b5ec"
  },
  {
    "url": "assets/js/22.4c43c80b.js",
    "revision": "cf655eb753bc29d3b584cddb78639430"
  },
  {
    "url": "assets/js/23.0245f3bb.js",
    "revision": "c3738c0398da6b4693891d4a1fe10164"
  },
  {
    "url": "assets/js/24.c25cd26d.js",
    "revision": "75c3f56326ee685af56ac7a760f2a37a"
  },
  {
    "url": "assets/js/25.f431c0d5.js",
    "revision": "58bcf8bdcfeda19e41d4b4109527f028"
  },
  {
    "url": "assets/js/26.7652e955.js",
    "revision": "03c2b7a978c868902a86fd5eb288ecdc"
  },
  {
    "url": "assets/js/27.5962b3d9.js",
    "revision": "b157a03d8f8ffc4099c10f6cb3a1605d"
  },
  {
    "url": "assets/js/28.1312b19b.js",
    "revision": "9a5157e2908aadf209dec3ed2ea3962b"
  },
  {
    "url": "assets/js/29.7ea6de7a.js",
    "revision": "76d1b9e04de0ec9e913ed154b30d9cec"
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
    "url": "assets/js/32.87dbca6f.js",
    "revision": "ed7db3b1077f1d840c2b5fa21344c8fa"
  },
  {
    "url": "assets/js/33.2dfb1b37.js",
    "revision": "b0864554300d9be72ed094b00a7964e9"
  },
  {
    "url": "assets/js/34.888a9723.js",
    "revision": "43352370e31e7f64fb6efe6658245182"
  },
  {
    "url": "assets/js/35.0e531125.js",
    "revision": "ec4dffdffd468efa38661dac02e41622"
  },
  {
    "url": "assets/js/36.0fb4ed57.js",
    "revision": "42c578047880c138508501107c4d678f"
  },
  {
    "url": "assets/js/37.00f33be2.js",
    "revision": "6ad51177538bf4e1965b86f029661704"
  },
  {
    "url": "assets/js/38.cdc3b1ce.js",
    "revision": "4e09d5fd3fec562e638031a7b8018924"
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
    "url": "assets/js/8.c295d458.js",
    "revision": "054393e7ca0d00c3e4d1ad70d2c2a79b"
  },
  {
    "url": "assets/js/9.3b981aa6.js",
    "revision": "8d792af6a76cd73c07452162e9f09ed6"
  },
  {
    "url": "assets/js/app.ca92a686.js",
    "revision": "53ebe38d2e9cece625423333b36e1f91"
  },
  {
    "url": "closing/index.html",
    "revision": "c34c359d116d2d17bbde57088e007f1f"
  },
  {
    "url": "cover/index.html",
    "revision": "94ecf291bb596c3eadc59fa05c9f35e9"
  },
  {
    "url": "cover/toc/index.html",
    "revision": "34be8ad8123acdb4d6c6499bd5fb218f"
  },
  {
    "url": "es2015/index.html",
    "revision": "769b96ecf85a9740dba7a0e8e2750b13"
  },
  {
    "url": "esnext-bites/finally/index.html",
    "revision": "feed8ecfec9fb359d0cb557cbf336879"
  },
  {
    "url": "esnext-bites/flat/index.html",
    "revision": "da49687e0d2478fb9c82e8e40532aec1"
  },
  {
    "url": "esnext-bites/from-entries/index.html",
    "revision": "c6a862887d3118a7711b69617fd88cca"
  },
  {
    "url": "esnext-bites/index.html",
    "revision": "e75d53902f6d31a13a22895c27becbb6"
  },
  {
    "url": "esnext-bites/spread/index.html",
    "revision": "920bd679ca00a6758e8a86e0635b75f6"
  },
  {
    "url": "faq/controller/index.html",
    "revision": "f1a55af4b7de139d538f66ba645d0f36"
  },
  {
    "url": "faq/index.html",
    "revision": "d82ac721c3559841e55b3c02de58bff2"
  },
  {
    "url": "faq/locandina/index.html",
    "revision": "d0d6be8cee1233e484dc3765cea15b47"
  },
  {
    "url": "faq/repo/index.html",
    "revision": "4492fa06ed5c660fe6c230413c4f78a8"
  },
  {
    "url": "faq/slide/index.html",
    "revision": "eb03fa8ba0ad87f7c43324a24e4da1e1"
  },
  {
    "url": "index.html",
    "revision": "cf8efe5329e79997479543e2187da794"
  },
  {
    "url": "lazy-loading/images/index.html",
    "revision": "aecd2e96bd7cfb624416c6845eac528b"
  },
  {
    "url": "lazy-loading/js/index.html",
    "revision": "32e7c77808f41df30a6e7f59f0e95571"
  },
  {
    "url": "mentions/index.html",
    "revision": "fa9c980ec61b5f93717c7eb18eb08dcf"
  },
  {
    "url": "modules/index.html",
    "revision": "4da88d233df33ee6f4a1b1bd733be08b"
  },
  {
    "url": "modules/single-file/index.html",
    "revision": "16886b8546986d141ee8e13c52b57287"
  },
  {
    "url": "packaging/index.html",
    "revision": "c5d1e6386cfa4e60239c7a2f009f171d"
  },
  {
    "url": "particles/particles.min.js",
    "revision": "265dfc3ecb9788a5ae8974ec254ac651"
  },
  {
    "url": "portals/gif/index.html",
    "revision": "b1d9020fafd0af6207c618040e5b8162"
  },
  {
    "url": "portals/index.html",
    "revision": "9d99b588362d84139dfa46f5d719c15e"
  },
  {
    "url": "shadow-parts/index.html",
    "revision": "db3813b327b24c77369b1e29d9732a05"
  },
  {
    "url": "shadow-parts/selector/index.html",
    "revision": "5d8fe06048a2604a1277b97907d37626"
  },
  {
    "url": "shadow-parts/theme/index.html",
    "revision": "944ff5c81de605b8d424d6c2ebd02c63"
  },
  {
    "url": "shape/example/index.html",
    "revision": "4125510932d1c8494c6f2cadc41ccff1"
  },
  {
    "url": "shape/index.html",
    "revision": "dee95c2fccb381064a2d586737477732"
  },
  {
    "url": "shape/toolkit/index.html",
    "revision": "586e27f3c697b1cb632602dd46662b99"
  },
  {
    "url": "start/index.html",
    "revision": "e92d00225c8d59f6ffbe191b9337aff2"
  },
  {
    "url": "state-of-js/index.html",
    "revision": "5350e364d751cbfab3c8c721639c841d"
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
