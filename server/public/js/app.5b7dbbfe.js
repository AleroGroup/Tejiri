(function(t){function e(e){for(var r,n,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],i[n]&&d.push(i[n][0]),i[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-1530a211":"361c6d9d","chunk-2995c238":"9aa4c4ae","chunk-2d210c47":"d839e6a9","chunk-2d22c114":"544b4ad3","chunk-3f3ddf64":"5b02eece","chunk-4d6f9ce6":"afdefbd3"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-1530a211":1,"chunk-2995c238":1,"chunk-3f3ddf64":1,"chunk-4d6f9ce6":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-1530a211":"118e2bef","chunk-2995c238":"849d11f1","chunk-2d210c47":"31d6cfe0","chunk-2d22c114":"31d6cfe0","chunk-3f3ddf64":"ded1c916","chunk-4d6f9ce6":"54f56aaf"}[t]+".css",i=o.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],f.parentNode.removeChild(f),a(s)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){n[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,a){r=i[t]=[e,a]});e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");s.type=r,s.request=n,a[1](s)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"076e":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"content"},[a("div",{staticClass:"footer-content"},[a("div",{staticClass:"links"},[a("ul",{staticClass:"list-links"},[a("p",{staticClass:"subtitle is-6",staticStyle:{color:"#fff","font-weight":"600"}},[t._v("Links ")]),a("router-link",{attrs:{to:"/about"}},[a("li",[t._v("About Us")])]),a("router-link",{attrs:{to:"/contact"}},[a("li",[t._v("Contacts")])]),a("router-link",{attrs:{to:"/services"}},[a("li",[t._v("Services")])])],1)]),t._m(0)]),a("div",{staticClass:"seperator"}),a("p",{staticClass:"is-small"},[t._v(" © Tejiri Production 2019")])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"connect-with-us"},[a("ul",{staticClass:"list-links"},[a("p",{staticClass:"subtitle is-6",staticStyle:{color:"#fff","font-weight":"600"}},[t._v("Connect with us")]),a("li",[t._v(" Facebook")]),a("li",[t._v(" Twitter")]),a("li",[t._v(" Instagram")])])])}],i=(a("cb66"),a("2877")),s={},c=Object(i["a"])(s,r,n,!1,null,"f8585d3e",null);e["a"]=c.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:a("a5ed")}})]),r("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"manu","aria-expanded":"false","data-target":"navbarmenu"},on:{click:function(e){t.showNav=!t.showNav}}},[r("span",{attrs:{"aria-hidden":"true"}}),r("span",{attrs:{"aria-hidden":"true"}}),r("span",{attrs:{"aria-hidden":"true"}})])],1),r("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarmenu"}},[r("div",{staticClass:"navbar middle"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/work"}},[t._v("WORK ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("ABOUT")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v("CONTACT")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/services"}},[t._v("SERVICES")])],1)])]),r("router-view")],1)},i=[],s=(a("ac6a"),{components:{}});document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})});var c=s,o=(a("63fe"),a("2877")),l=Object(o["a"])(c,n,i,!1,null,"0515d190",null),u=l.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"square"},[a("h1",{staticClass:"title is-1"},[t._v("Quality Photography")]),a("router-link",{attrs:{to:"/contact"}},[a("div",{staticClass:"button is-large"},[t._v("HIRE US")])])],1),t._m(0),a("div",{staticClass:"album"},[a("Album")],1),a("div",{staticClass:"more"},[a("div",{staticClass:"box"},[a("h2",{staticClass:"title is-5"},[t._v(" See more of our work")]),a("router-link",{attrs:{to:"/work"}},[a("div",{staticClass:"button is-primary",staticStyle:{width:"220px"}},[a("h3",{staticClass:"subtitle is-6",staticStyle:{"font-weight":"600"}},[t._v(" Here")])])])],1)]),a("Footer")],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-fullheight has-carousel"},[a("div",{staticClass:"hero-carousel"},[a("div",{staticClass:"has-background is-active"},[a("img",{staticClass:"is-background",attrs:{src:"https://res.cloudinary.com/drsayrtmp/image/upload/v1559057105/tejiri/landscape/clouds-cloudy-conifers-247478.jpg",alt:""}})]),a("div",{staticClass:"has-background"},[a("img",{staticClass:"is-background",attrs:{src:"https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/landscape/beach-bench-boardwalk-462024.jpg",alt:""}})]),a("div",{staticClass:"has-background"},[a("img",{staticClass:"is-background",attrs:{src:"https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/landscape/astronomy-beautiful-clouds-355465.jpg",alt:""}})]),a("div",{staticClass:"has-background"},[a("img",{staticClass:"is-background",attrs:{src:"https://res.cloudinary.com/drsayrtmp/image/upload/v1559601684/tejiri/landscape/clouds-daylight-environment-811164.jpg",alt:""}})])])])}],p=a("076e"),m=a("f248"),h=a.n(m),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-images"},[t.error?a("div",{staticClass:"notification is-danger"},[a("button",{staticClass:"delete"}),t._v(" "+t._s(t.error))]):t._e(),a("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}}),t._l(t.images,function(e,r){return a("div",{staticClass:"image",style:{backgroundImage:"url("+e+")",width:"350px",height:"300px"},on:{click:function(e){t.index=r}}})})],2)},b=[],y=(a("cebc"),a("96cf"),a("3b8d"),a("d225"),a("b0b4"),a("bc3a"),a("067c")),k=a.n(y),C={name:"album",data:function(){return{images:["https://res.cloudinary.com/drsayrtmp/image/upload/v1559601736/tejiri/boat-couple-enjoyment-2369760.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601728/tejiri/beautiful-beauty-close-up-1804452.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601725/tejiri/car-close-up-device-2046807.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601720/tejiri/blur-blurred-background-close-up-1660662.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601715/tejiri/audio-mixer-dj-evening-462503.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601717/tejiri/abstract-blur-blurry-2237190.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601723/tejiri/blur-character-close-up-164854.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601718/tejiri/beautiful-beauty-cheerful-1579005.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559601711/tejiri/4k-wallpaper-art-background-1657151.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559057099/tejiri/adult-black-and-white-child-736428.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559057095/tejiri/adorable-child-cute-1128317.jpg","https://res.cloudinary.com/drsayrtmp/image/upload/v1559057094/tejiri/adult-art-body-art-1801263.jpg"],index:"",error:""}},components:{gallery:k.a}},w=C,j=(a("ea8b"),Object(o["a"])(w,g,b,!1,null,"ee8da538",null)),_=j.exports,S={name:"home",components:{Album:_,Footer:p["a"]}};function E(t){/complete|loaded|interactive/.test(document.readyState)&&document.body?t():document.addEventListener("DOMContentLoaded",t,!1)}var L=["click","touch"];E(function(){var t=document.querySelectorAll(".burger");[].forEach.call(t,function(t){L.forEach(function(e){t.addEventListener(e,function(t){t.preventDefault();var e=t.currentTarget;if(e){e.classList.toggle("is-active");var a=e.dataset.target;if(a){var r=document.querySelector(e.dataset.target);r&&r.classList.toggle("is-active")}}})})});var e=document.querySelectorAll(".menu");[].forEach.call(e,function(t){var e=t.querySelectorAll(".menu-item:not(.has-dropdown).is-active");[].forEach.call(e,function(t){t=t.closest(".menu-item.has-dropdown"),t&&t.classList.add("is-active")});var a=t.querySelectorAll(".menu-item.has-dropdown > .menu-title");[].forEach.call(a,function(e){e.addEventListener("click",function(e){e.preventDefault();var a=e.currentTarget;a.closest(".menu-item.has-dropdown").classList.toggle("is-active");var r=t.querySelectorAll(".menu-item.has-dropdown.is-active");[].forEach.call(r,function(t){a.isEqualNode(t.querySelector(".menu-title"))||t.classList.remove("is-active")})})})});var a=document.querySelectorAll(".tabs li a");[].forEach.call(a,function(t){if(window.location.hash){var e=t.closest(".tabs").querySelector('[href="'+window.location.hash+'"]'),a=document.querySelector(window.location.hash);if(e&&a){var r=t.closest(".tabs").querySelector("li.is-active");if(r){var n=r.querySelector("a"),i=document.querySelector(n.getAttribute("href"));i&&i.classList.remove("is-active"),n.classList.remove("is-active"),r.classList.remove("is-active")}e.closest("li").classList.add("is-active"),a.classList.add("is-active")}}L.forEach(function(e){t.addEventListener(e,function(t){t.preventDefault();var e=t.currentTarget,a=e.closest(".tabs").querySelector("li.is-active");if(a){var r=a.querySelector("a"),n=document.querySelector(r.getAttribute("href"));n&&n.classList.remove("is-active"),r.classList.remove("is-active"),a.classList.remove("is-active")}e.closest("li").classList.add("is-active");var i=document.querySelector(e.getAttribute("href"));i&&i.classList.add("is-active")})})})}),E(function(){h.a.attach(".hero-carousel",{slidesToScroll:1,slidesToShow:1,pagination:!1,effect:"fade",loop:!0})});var x=S,A=(a("5c9c"),Object(o["a"])(x,f,v,!1,null,"08274994",null)),q=A.exports;r["a"].use(d["a"]);var O=new d["a"]({routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return a.e("chunk-1530a211").then(a.bind(null,"f820"))}},{path:"/work",name:"work",component:function(){return a.e("chunk-2995c238").then(a.bind(null,"f126"))}},{path:"/work/wedding",name:"wedding",component:function(){return a.e("chunk-3f3ddf64").then(a.bind(null,"f3f6"))}},{path:"/work/other",name:"others",component:function(){return a.e("chunk-4d6f9ce6").then(a.bind(null,"d180"))}},{path:"/contact",name:"contact",component:function(){return a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}},{path:"/services",name:"services",component:function(){return a.e("chunk-2d22c114").then(a.bind(null,"f23e"))}}],mode:"history",linkActiveClass:"is-active"}),T=a("2f62");r["a"].use(T["a"]);var N=new T["a"].Store({state:{},mutations:{},actions:{}});a("bc7f"),r["a"].config.productionTip=!1,new r["a"]({router:O,store:N,render:function(t){return t(u)}}).$mount("#app")},"5c9c":function(t,e,a){"use strict";var r=a("fc5e"),n=a.n(r);n.a},"63fe":function(t,e,a){"use strict";var r=a("8af8"),n=a.n(r);n.a},"6bf9":function(t,e,a){},"8af8":function(t,e,a){},a5ed:function(t,e,a){t.exports=a.p+"img/logo@2x.9c92f787.png"},bb42:function(t,e,a){},bc7f:function(t,e,a){},cb66:function(t,e,a){"use strict";var r=a("bb42"),n=a.n(r);n.a},ea8b:function(t,e,a){"use strict";var r=a("6bf9"),n=a.n(r);n.a},fc5e:function(t,e,a){}});
//# sourceMappingURL=app.5b7dbbfe.js.map