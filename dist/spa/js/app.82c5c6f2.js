(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={1:0},a={1:0},c=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{2:"26fb3623",3:"f5a60257",4:"d607c63e",5:"01151de5",6:"3a7cb417",7:"bd99718b",8:"ccc47797",9:"3864957f"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"3ef988c8",3:"cdc8d31a",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",a=l.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("0047"),n("b6d8");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),c=n("b05d");r["a"].use(c["a"],{config:{},lang:o["a"],iconSet:a["a"]});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},l=[],u={name:"App"},s=u,f=n("2877"),d=Object(f["a"])(s,i,l,!1,null,null,null),p=d.exports,h=n("2f62");r["a"].use(h["a"]);var m=function(){const e=new h["a"].Store({modules:{},strict:!1});return e},b=n("8c4f");n("ddb0");const v=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",name:"Home",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))},{path:"/diet",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"b49a"))},{path:"/child",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"9160"))}]},{path:"/login",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"013f"))},{path:"/register",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"56b4"))},{path:"*",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}];var g=v;r["a"].use(b["a"]);var y=function(){const e=new b["a"]({scrollBehavior:()=>({x:0,y:0}),routes:g,mode:"hash",base:""});return e},w=async function(){const e="function"===typeof m?await m({Vue:r["a"]}):m,t="function"===typeof y?await y({Vue:r["a"],store:e}):y;e.$router=t;const n={router:t,store:e,render:e=>e(p),el:"#q-app"};return{app:n,store:e,router:t}},P=n("a925"),O={failed:"Action failed",success:"Action was successful"},j={"en-us":O};r["a"].use(P["a"]);const x=new P["a"]({locale:"en-us",fallbackLocale:"en-us",messages:j});var S=({app:e})=>{e.i18n=x},_=n("bc3a"),E=n.n(_);r["a"].prototype.$axios=E.a;var A=n("9ce1");const k="";async function C(){const{app:e,store:t,router:n}=await w();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),i=[S,void 0,A["default"]];for(let u=0;!1===o&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:c,publicPath:k})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&new r["a"](e)}C()}});