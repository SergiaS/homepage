if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return o[e]||(s=new Promise(async s=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=s}else importScripts(e),s()})),s.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},s=(s,o)=>{Promise.all(s.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(s)};self.define=(s,i,d)=>{o[s]||(o[s]=Promise.resolve().then(()=>{let o={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return o;case"module":return r;default:return e(s)}})).then(e=>{const s=d(...e);return o.default||(o.default=s),o})}))}}define("./sw.js",["./workbox-e41b4514"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/og_image.png",revision:"3126850a08b78265912dcadfe2cb99e5"},{url:"dependencies/volodymyrkushnir.com/assets/documents/introduction-letter-to-binary-studio/assets/photos/1244180_457131501071734_1731017764_o.jpg",revision:"e54ff1f81e90b5c8b6caff626cef069b"},{url:"dependencies/volodymyrkushnir.com/assets/documents/introduction-letter-to-binary-studio/assets/stylesheets/base.css",revision:"397e0c5b6b350e488326b392c43c7f52"},{url:"dependencies/volodymyrkushnir.com/assets/documents/introduction-letter-to-binary-studio/index.html",revision:"bc275622b43acc152def906cabdb96b3"},{url:"dependencies/volodymyrkushnir.com/assets/images/apple-touch-icon.png",revision:"a5f8d5f4a667e65f0c6243c4c16a44b2"},{url:"dependencies/volodymyrkushnir.com/assets/images/avatar-2012.svg",revision:"875d5e9fa16d17b2faa4784891cf39f4"},{url:"dependencies/volodymyrkushnir.com/assets/images/avatar.svg",revision:"e3715d9b7856999eac310ab8a5de10b1"},{url:"dependencies/volodymyrkushnir.com/assets/images/favicon-192x192.png",revision:"45b49bb32f0901378111d5b7202dc398"},{url:"dependencies/volodymyrkushnir.com/assets/images/favicon-512x512.png",revision:"6d215c3bf0671ac70a8bb01b49ce9a8d"},{url:"dependencies/volodymyrkushnir.com/assets/images/favicon.ico",revision:"c843fb2c0998062b21cf5bd7b9b202e1"},{url:"dependencies/volodymyrkushnir.com/assets/images/og-image.en_US.png",revision:"6f8b2700f912db67395296e9d454a3e6"},{url:"dependencies/volodymyrkushnir.com/assets/images/og-image.ru_RU.png",revision:"5709789673768eb36d1f542eb1abdc4a"},{url:"dependencies/volodymyrkushnir.com/assets/images/og-image.uk_UA.png",revision:"8c3dc1b47fec793eff21f28d0fa32509"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir-2012.jpg",revision:"5e9cde0c38fdd2f1c95f36dbf2a14557"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir-square.jpg",revision:"f1d43fb4e8d7436d909b6fd61d2bcd85"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir-square.png",revision:"6af613f4c199b523be00b6cb433fd5d4"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir.jpg",revision:"7cb744ce232603c293c5cc75279697e7"},{url:"dependencies/volodymyrkushnir.com/assets/photos/323856_148624698589084_1191150964_o.jpg",revision:"23205ffa1a41b16a0b12357ba4513e19"},{url:"dependencies/volodymyrkushnir.com/assets/photos/323868_148639808587573_1648505013_o.jpg",revision:"54ebc728f45f2645a32adc022c9bffbb"},{url:"dependencies/volodymyrkushnir.com/assets/photos/324164_148624265255794_446501669_o.jpg",revision:"9c10847e25fe04bb4481836c0bab5986"},{url:"dependencies/volodymyrkushnir.com/assets/photos/327086_148624111922476_1330178874_o.jpg",revision:"da8237b2d9167f0f5836275e2dc4549b"},{url:"dependencies/volodymyrkushnir.com/assets/photos/329642_148624421922445_2060074436_o.jpg",revision:"4db750c0098bea4b9393d8934fcff31d"},{url:"dependencies/volodymyrkushnir.com/assets/photos/331152_148624551922432_1869335234_o.jpg",revision:"3793bb9bb89b62bb62a7db1d079a1d8c"},{url:"dependencies/volodymyrkushnir.com/assets/photos/412746_158114720973415_949035392_o.jpg",revision:"5e1f873f1420195e58be4cc61f963845"},{url:"dependencies/volodymyrkushnir.com/assets/photos/42189774_10155495472086262_2455691218420498432_n.jpg",revision:"334b9c683753e841f693f608c1613ca3"},{url:"dependencies/volodymyrkushnir.com/assets/photos/461737_173999722718248_1691527332_o.jpg",revision:"10c3d6ec0f27df301a9493c979e1db0f"},{url:"dependencies/volodymyrkushnir.com/assets/photos/466052_170309293087291_793458215_o.jpg",revision:"6433e08492057dd33332dad2303f1474"},{url:"dependencies/volodymyrkushnir.com/assets/photos/467536_170309526420601_636909857_o.jpg",revision:"1c9556e4b8ff9da875150aed3b806fe6"},{url:"dependencies/volodymyrkushnir.com/assets/photos/470468_170309399753947_1333978849_o.jpg",revision:"294a4019c2420e475ed4ef0a97523ed8"},{url:"dependencies/volodymyrkushnir.com/assets/photos/471025_173999919384895_1249822733_o.jpg",revision:"42411e3ed7395e48f2633c9cf19a1b7d"},{url:"dependencies/volodymyrkushnir.com/assets/photos/473110_173999982718222_1427466111_o.jpg",revision:"55e0d4bdccd706bb14bf405bf82a743e"},{url:"dependencies/volodymyrkushnir.com/assets/photos/476877_173999862718234_1686531489_o.jpg",revision:"fd27e0acdbcf14033b63235e907fe2b3"},{url:"dependencies/volodymyrkushnir.com/assets/sounds/meh.mp3",revision:"cab8cb281bed323604cd6544eeb4c470"},{url:"dependencies/volodymyrkushnir.com/assets/stylesheets/base.css",revision:"c3678036e50c2e398efd119a4cfd3589"},{url:"dependencies/volodymyrkushnir.com/favicon.ico",revision:"c843fb2c0998062b21cf5bd7b9b202e1"},{url:"dependencies/volodymyrkushnir.com/index.html",revision:"4fd26291d3b7b288d8df371cdbff1314"},{url:"dependencies/volodymyrkushnir.com/ru-ru/index.html",revision:"2f25509cf4a75828a5cc76e6c1b78e3d"},{url:"dependencies/volodymyrkushnir.com/uk-ua/index.html",revision:"0a96ce305f05651085d6776cb9af45fb"},{url:"index.html",revision:"51c4418de9522db2c69588e05913cd75"}],{})}));
//# sourceMappingURL=sw.js.map
