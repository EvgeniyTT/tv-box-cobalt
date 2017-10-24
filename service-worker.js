"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/cobalt/index.html","2d442662c1e9509bc6fb43722bfa93bc"],["/cobalt/static/css/main.7ff321d3.css","781972fcf45f086787730953d8f876d3"],["/cobalt/static/js/main.51717756.js","4a94951b81a87d9230a20adf281e0228"],["/cobalt/static/media/Card.920e6a8f.scss","920e6a8fadc1730c9cd7ec1c27a8f5d6"],["/cobalt/static/media/CataloguePage.0455ea98.scss","0455ea981341df12302f5cbaf029fade"],["/cobalt/static/media/Clock.bb2df0f3.scss","bb2df0f360ee7b9a9d7bd03e2debb50c"],["/cobalt/static/media/CollectionPage.0b2767b1.scss","0b2767b1a43a3910ac1e742a7943aa94"],["/cobalt/static/media/Menu.54b9d967.scss","54b9d96701c41e8e68ea1952a9a314e6"],["/cobalt/static/media/Roboto-Bold.af01b503.woff","af01b5037ff63cf05210745f4c248269"],["/cobalt/static/media/Roboto-Bold.b2c24342.ttf","b2c24342409e47baaeb690d76cbd7df3"],["/cobalt/static/media/Roboto-Bold.cbb753be.eot","cbb753be961007a7e782f57f7eacbc94"],["/cobalt/static/media/Roboto-Medium.5ca83061.woff","5ca830617cdc06dbc5e2d46878bba8b1"],["/cobalt/static/media/Roboto-Medium.66463202.eot","6646320247af520dbd6fd3e9c0192f65"],["/cobalt/static/media/Roboto-Medium.9f69ecf8.ttf","9f69ecf8a3c39b994ebd5bed7d284f58"],["/cobalt/static/media/Roboto-Regular.18b2429b.woff","18b2429ba6e7179daeec5438639ab65f"],["/cobalt/static/media/Roboto-Regular.290793a3.ttf","290793a328775e85f880f7da86503cd2"],["/cobalt/static/media/Roboto-Regular.eee713d6.eot","eee713d6454874d4d1d8babd8dd562cf"],["/cobalt/static/media/bg_fx_innerpage.c44f5deb.png","c44f5debb0d9c1c2011916e5ab2bd6da"],["/cobalt/static/media/bg_fx_menu.fbb03495.png","fbb03495bd908f592b375f8831030c82"],["/cobalt/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/cobalt/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});