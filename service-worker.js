"use strict";var precacheConfig=[["/gamma-training/index.html","d3f3c718aa80cca0d8eb75b086b1d267"],["/gamma-training/static/css/main.8ea09762.css","8c7515068445a94c1aa2c09d33fda2b2"],["/gamma-training/static/js/main.33b38363.js","983da9725a4772e55767b9d1682e8504"],["/gamma-training/static/media/icon_arrow-down_l_black.9d83a49a.svg","9d83a49a7647f7484bbbabde9bed1bc5"],["/gamma-training/static/media/icon_arrow-down_l_white.4b97a2bf.svg","4b97a2bf92383eebeda2bbeee54fccf8"],["/gamma-training/static/media/icon_arrow-down_m_black.7a4c9028.svg","7a4c90286569c99da1a169e8ebc6a2af"],["/gamma-training/static/media/icon_arrow-down_m_white.e7dafbaa.svg","e7dafbaaaa4bc26bbb4b1d4087f32730"],["/gamma-training/static/media/icon_arrow-down_s_black.7d5a1ad9.svg","7d5a1ad9c0d16b83a3146deb9c326a19"],["/gamma-training/static/media/icon_arrow-down_s_white.b8d45ef9.svg","b8d45ef965750d3b1451f45aacdcfb2f"],["/gamma-training/static/media/icon_arrow-down_xl_black.40f6ac4c.svg","40f6ac4cff93a7ec4d615a548d264d4a"],["/gamma-training/static/media/icon_arrow-down_xl_white.9871eef1.svg","9871eef1189b66fa27417e4c50fd5b01"],["/gamma-training/static/media/icon_arrow-down_xxl_black.b2dcd819.svg","b2dcd8191dc2604c65eda108545ca4be"],["/gamma-training/static/media/icon_arrow-down_xxl_white.9eaf2edb.svg","9eaf2edb1f6462e94b07e0203858c437"],["/gamma-training/static/media/icon_arrow-up_l_black.b150264e.svg","b150264ee97cc176e9362035c7a97d8a"],["/gamma-training/static/media/icon_arrow-up_l_white.33416df7.svg","33416df76cd0b0ad86a7bebaff53ea96"],["/gamma-training/static/media/icon_arrow-up_m_black.a9766f1e.svg","a9766f1eb0e652f08960ff15ba8c1cda"],["/gamma-training/static/media/icon_arrow-up_m_white.2b4d0ea7.svg","2b4d0ea7f3a6b5712b67fef56dfc13b9"],["/gamma-training/static/media/icon_arrow-up_s_black.9bc15617.svg","9bc156171667a69a5c279bad4288ca20"],["/gamma-training/static/media/icon_arrow-up_s_white.41374a25.svg","41374a25ba65d1dfcc1e348d0c2827a6"],["/gamma-training/static/media/icon_arrow-up_xl_black.b6fa5d99.svg","b6fa5d99ee6725d8ba2db8074a0efeac"],["/gamma-training/static/media/icon_arrow-up_xl_white.15349fc2.svg","15349fc28288d230f0445aba7b9998c2"],["/gamma-training/static/media/icon_arrow-up_xxl_black.83529fb6.svg","83529fb6fa7eed9b85a03c3aebc9471b"],["/gamma-training/static/media/icon_arrow-up_xxl_white.eb5c7952.svg","eb5c7952fe99cb3894e839d89080745b"],["/gamma-training/static/media/icon_check_l_black.565a185c.svg","565a185c17a5576fe462b14a0b385ffa"],["/gamma-training/static/media/icon_check_l_white.fdb6a712.svg","fdb6a712288bf9cca75e936c0cf7d0a0"],["/gamma-training/static/media/icon_check_m_black.0ac0a9b0.svg","0ac0a9b01eb33519841af1effe6a467c"],["/gamma-training/static/media/icon_check_m_white.18647cbb.svg","18647cbbd74602c09e31d22975ca08e5"],["/gamma-training/static/media/icon_check_s_black.8366d3f8.svg","8366d3f8768f7115fb1a1e4c09c3da86"],["/gamma-training/static/media/icon_check_s_white.8b7e2d66.svg","8b7e2d664765bccf52ae4864079d0ef8"],["/gamma-training/static/media/icon_check_xl_black.05eab1b3.svg","05eab1b3b45cb9d5bbc5dd65441aaf97"],["/gamma-training/static/media/icon_check_xl_white.a3d3dfcb.svg","a3d3dfcb61770afa7922fe94e34e432d"],["/gamma-training/static/media/icon_check_xxl_black.50d46f83.svg","50d46f8321796ee751f70af3b13f6df6"],["/gamma-training/static/media/icon_check_xxl_white.6bfe16c2.svg","6bfe16c24b24cb832b957eb7aa89ee2a"],["/gamma-training/static/media/icon_close_l_black.9fdfa24f.svg","9fdfa24f2ace08fd45da3821d1531479"],["/gamma-training/static/media/icon_close_l_white.e81304e1.svg","e81304e1ba9b00f38571aa084a3b5cfc"],["/gamma-training/static/media/icon_close_m_black.88b9180a.svg","88b9180ac58c35601d8425254044892c"],["/gamma-training/static/media/icon_close_m_white.5d2c2756.svg","5d2c2756ab278b3f84735376af0c0284"],["/gamma-training/static/media/icon_close_s_black.af6676b2.svg","af6676b2ef164647620b1e1ea84bb7c2"],["/gamma-training/static/media/icon_close_s_white.cd06f8fb.svg","cd06f8fbca7234fa3a10a5bc12a42205"],["/gamma-training/static/media/icon_close_xl_black.217cfbbc.svg","217cfbbc40165c8a3437e68dc59deca1"],["/gamma-training/static/media/icon_close_xl_white.0f90c8e8.svg","0f90c8e88a2a481e64ef797a08517890"],["/gamma-training/static/media/icon_close_xs_black.f5bc862e.svg","f5bc862ef625a947a5be6abc9d25c1ac"],["/gamma-training/static/media/icon_close_xs_white.bca604a9.svg","bca604a95e3a09c97db710136b900ac3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,c,t){var i=new URL(a);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,c){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return c.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],t=new URL(e,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!c.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return t.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var c=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var i="/gamma-training/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(i,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});