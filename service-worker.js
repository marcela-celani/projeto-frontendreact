"use strict";var precacheConfig=[["/react-gh-pages/index.html","3dde9cdbc87d31d122ca48ab3ec5998f"],["/react-gh-pages/static/js/main.123d8365.js","121f7d5d64db06b9ca4ce5d75490a519"],["/react-gh-pages/static/media/almofada1.619d8917.png","619d89179fdf162c7ebadc431544de25"],["/react-gh-pages/static/media/almofada2.73a83e31.png","73a83e31cf6a977eea271676e312e733"],["/react-gh-pages/static/media/almofada3.f02bf4d9.png","f02bf4d9b83ba3779bd8b7d0bb42250d"],["/react-gh-pages/static/media/brinquedo1.e5986358.jpg","e59863588409c15b0f2caf2ec73e4dab"],["/react-gh-pages/static/media/brinquedo11.536ef950.jpg","536ef950c06fa7b8cbc9a6180bea0737"],["/react-gh-pages/static/media/brinquedo12.ffe09013.jpg","ffe09013e632b8079f2293ab91acd214"],["/react-gh-pages/static/media/brinquedo13.b3de3b88.jpg","b3de3b88ec5639e61d2eed1c0920eb5f"],["/react-gh-pages/static/media/brinquedo2.51d42e9d.jpg","51d42e9d5da80aea01336c4e6e0c599f"],["/react-gh-pages/static/media/brinquedo5.d6c94210.jpg","d6c942108a3aa76b1d4fbeabee3183ce"],["/react-gh-pages/static/media/brinquedo6.f76c097b.jpg","f76c097b8ed1826aa97fcf27d52282f9"],["/react-gh-pages/static/media/brinquedo7.f69123eb.jpg","f69123eb5f53ff4f4f1fbf3366e486ed"],["/react-gh-pages/static/media/brinquedo8.0eef9f01.jpg","0eef9f0164d2ca8e16cea44d29a64994"],["/react-gh-pages/static/media/brinquedo9.4b7df035.jpg","4b7df03531a4c738b1ceebb99b0e3730"],["/react-gh-pages/static/media/logo2.02cae318.png","02cae3180d89e25106cc99b62ab929a2"],["/react-gh-pages/static/media/papeldeparede1.c9b8d2c8.png","c9b8d2c8b67b4a7af3988f160d19735d"],["/react-gh-pages/static/media/papeldeparede2.ecd03b51.png","ecd03b510cf5db2b024fc45586a3470c"],["/react-gh-pages/static/media/quadro1.83cbdbd3.png","83cbdbd300080f21e9430d226cb4471d"],["/react-gh-pages/static/media/quadro2.80aa15ec.png","80aa15ec189ed10b9840c5f201428597"],["/react-gh-pages/static/media/quadro3.1014ddc6.png","1014ddc6bfc17e0e8962cc30d1755f86"],["/react-gh-pages/static/media/relogio1.0ac38102.png","0ac38102bc554004751f92333174b201"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var c="/react-gh-pages/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});