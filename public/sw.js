if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a49b1f01115ea2c97660dea49fd845d1"},{url:"/_next/static/IJDPIEo7zsVjAMaNnl5q_/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/IJDPIEo7zsVjAMaNnl5q_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2443530c-de4500ab1f9064cc.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/488-16a9a5616064184b.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/554-2b6108e3105840a8.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/app/game/page-243b3c43fdf9412c.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/app/layout-27c15879faafab71.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/app/page-50c989591cf16829.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/main-780e9cbd601fc7bb.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/main-app-f7fd9eafe06023dc.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e5e90611978746a8.js",revision:"IJDPIEo7zsVjAMaNnl5q_"},{url:"/_next/static/css/2d6797d7e3511f12.css",revision:"2d6797d7e3511f12"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/images/icons/icon-128x128.png",revision:"81c619965fcaefa108d98025a6c714df"},{url:"/images/icons/icon-144x144.png",revision:"24714b9859775714c653c2247f14f819"},{url:"/images/icons/icon-152x152.png",revision:"12c733dfa941ca5e9998dfca6b636856"},{url:"/images/icons/icon-192x192.png",revision:"d3b9dad298e13b06771f69b91e5dd692"},{url:"/images/icons/icon-384x384.png",revision:"5d5ea48c3b5cc36524451da65c0fadfb"},{url:"/images/icons/icon-48x48.png",revision:"abcea134953875abdd80b4722c8f67c2"},{url:"/images/icons/icon-512x512.png",revision:"e6dcc8613ef74f27127cd6fc6c17807a"},{url:"/images/icons/icon-72x72.png",revision:"8534e0bc6987cffba944ef29942cb96f"},{url:"/images/icons/icon-96x96.png",revision:"730117a3f2980b67b19e181e6dec8b3e"},{url:"/manifest.json",revision:"1e72b305a3d1bfcbc5ca7db34e799637"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sfx/time-up.wav",revision:"4f21befe4e5467a3580de3602d6a6a2f"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
