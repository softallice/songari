(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a={1:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"874decac",3:"7c0ece6b",4:"93265feb",5:"7c9b9470",6:"a7c43282",7:"e40d9a2f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={2:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"cba431e2",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("0047"),n("b6d8");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),c=n("b05d");r["a"].use(c["a"],{config:{},lang:o["a"],iconSet:a["a"]});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},i=[],l={name:"App"},s=l,f=n("2877"),d=Object(f["a"])(s,u,i,!1,null,null,null),p=d.exports,h=n("2f62");r["a"].use(h["a"]);var m=function(){const e=new h["a"].Store({modules:{},strict:!1});return e},v=n("8c4f");n("ddb0");const b=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",name:"Home",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))},{path:"/diet",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"b49a"))},{path:"/child",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"9160"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"e51e"))}];var g=b;r["a"].use(v["a"]);var y=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:g,mode:"hash",base:""});return e},w=async function(){const e="function"===typeof m?await m({Vue:r["a"]}):m,t="function"===typeof y?await y({Vue:r["a"],store:e}):y;e.$router=t;const n={router:t,store:e,render:e=>e(p),el:"#q-app"};return{app:n,store:e,router:t}},P=n("a925"),O={failed:"Action failed",success:"Action was successful"},j={"en-us":O};r["a"].use(P["a"]);const x=new P["a"]({locale:"en-us",fallbackLocale:"en-us",messages:j});var S=({app:e})=>{e.i18n=x},_=n("bc3a"),E=n.n(_);r["a"].prototype.$axios=E.a;var A=n("9ce1");const k="";async function C(){const{app:e,store:t,router:n}=await w();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),u=[S,void 0,A["default"]];for(let l=0;!1===o&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:c,publicPath:k})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&new r["a"](e)}C()}});