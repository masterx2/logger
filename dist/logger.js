var Logger=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=19)}([function(t,n){function r(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=r},function(t,n,r){function e(t){return null==t?void 0===t?a:i:f&&f in Object(t)?u(t):c(t)}var o=r(5),u=r(34),c=r(41),i="[object Null]",a="[object Undefined]",f=o?o.toStringTag:void 0;t.exports=e},function(t,n,r){var e=r(10),o="object"==typeof self&&self&&self.Object===Object&&self,u=e||o||Function("return this")();t.exports=u},function(t,n){function r(t,n){return t===n||t!==t&&n!==n}t.exports=r},function(t,n){function r(t){return null!=t&&"object"==typeof t}t.exports=r},function(t,n,r){var e=r(2),o=e.Symbol;t.exports=o},function(t,n){function r(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}t.exports=r},function(t,n,r){function e(t,n,r){"__proto__"==n&&o?o(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}var o=r(9);t.exports=e},function(t,n,r){function e(t,n){return c(u(t,n,o),t+"")}var o=r(12),u=r(42),c=r(43);t.exports=e},function(t,n,r){var e=r(33),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n,r){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(n,r(54))},function(t,n){function r(t,n){return!!(n=null==n?e:n)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<n}var e=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=r},function(t,n){function r(t){return t}t.exports=r},function(t,n,r){function e(t){return null!=t&&u(t.length)&&!o(t)}var o=r(14),u=r(15);t.exports=e},function(t,n,r){function e(t){if(!u(t))return!1;var n=o(t);return n==i||n==a||n==c||n==f}var o=r(1),u=r(0),c="[object AsyncFunction]",i="[object Function]",a="[object GeneratorFunction]",f="[object Proxy]";t.exports=e},function(t,n){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}var e=9007199254740991;t.exports=r},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,r){var e=r(6),o=r(46),u=r(8),c=r(32),i=u(function(t){return t.push(void 0,c),e(o,void 0,t)});t.exports=i},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof fetch?fetch:function(t,n){return n=n||{},new Promise(function(r,e){function o(){var t,n=[],r=[],e={};return u.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,u,c){n.push(u=u.toLowerCase()),r.push([u,c]),t=e[u],e[u]=t?t+","+c:c}),{ok:1==(u.status/200|0),status:u.status,statusText:u.statusText,url:u.responseURL,clone:o,text:function(){return Promise.resolve(u.responseText)},json:function(){return Promise.resolve(u.responseText).then(JSON.parse)},xml:function(){return Promise.resolve(u.responseXML)},blob:function(){return Promise.resolve(new Blob([u.response]))},headers:{keys:function(){return n},entries:function(){return r},get:function(t){return e[t.toLowerCase()]},has:function(t){return t.toLowerCase()in e}}}}var u=new XMLHttpRequest;u.open(n.method||"get",t);for(var c in n.headers)u.setRequestHeader(c,n.headers[c]);u.withCredentials="include"==n.credentials,u.onload=function(){r(o())},u.onerror=e,u.send(n.body)})};n.default=e},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),c=r(17),i=e(c),a=r(18),f=e(a);t.exports=function(){function t(n){o(this,t),this.server=n.server,this.appKey=n.appKey}return u(t,[{key:"log",value:function(t){return(0,f.default)(this.server,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,i.default)({appKey:this.appKey},t))})}}]),t}()},function(t,n,r){function e(t,n){var r=c(t),e=!r&&u(t),s=!r&&!e&&i(t),l=!r&&!e&&!s&&f(t),v=r||e||s||l,b=v?o(t.length,String):[],y=b.length;for(var d in t)!n&&!p.call(t,d)||v&&("length"==d||s&&("offset"==d||"parent"==d)||l&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||a(d,y))||b.push(d);return b}var o=r(27),u=r(48),c=r(49),i=r(50),a=r(11),f=r(51),s=Object.prototype,p=s.hasOwnProperty;t.exports=e},function(t,n,r){function e(t,n,r){var e=t[n];i.call(t,n)&&u(e,r)&&(void 0!==r||n in t)||o(t,n,r)}var o=r(7),u=r(3),c=Object.prototype,i=c.hasOwnProperty;t.exports=e},function(t,n,r){function e(t){return u(t)&&o(t)==c}var o=r(1),u=r(4),c="[object Arguments]";t.exports=e},function(t,n,r){function e(t){return!(!c(t)||u(t))&&(o(t)?v:a).test(i(t))}var o=r(14),u=r(37),c=r(0),i=r(45),a=/^\[object .+?Constructor\]$/,f=Function.prototype,s=Object.prototype,p=f.toString,l=s.hasOwnProperty,v=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=e},function(t,n,r){function e(t){return c(t)&&u(t.length)&&!!i[o(t)]}var o=r(1),u=r(15),c=r(4),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=e},function(t,n,r){function e(t){if(!o(t))return c(t);var n=u(t),r=[];for(var e in t)("constructor"!=e||!n&&a.call(t,e))&&r.push(e);return r}var o=r(0),u=r(38),c=r(39),i=Object.prototype,a=i.hasOwnProperty;t.exports=e},function(t,n,r){var e=r(47),o=r(9),u=r(12),c=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:e(n),writable:!0})}:u;t.exports=c},function(t,n){function r(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}t.exports=r},function(t,n){function r(t){return function(n){return t(n)}}t.exports=r},function(t,n,r){function e(t,n,r,e){var c=!r;r||(r={});for(var i=-1,a=n.length;++i<a;){var f=n[i],s=e?e(r[f],t[f],f,r,t):void 0;void 0===s&&(s=t[f]),c?u(r,f,s):o(r,f,s)}return r}var o=r(21),u=r(7);t.exports=e},function(t,n,r){var e=r(2),o=e["__core-js_shared__"];t.exports=o},function(t,n,r){function e(t){return o(function(n,r){var e=-1,o=r.length,c=o>1?r[o-1]:void 0,i=o>2?r[2]:void 0;for(c=t.length>3&&"function"==typeof c?(o--,c):void 0,i&&u(r[0],r[1],i)&&(c=o<3?void 0:c,o=1),n=Object(n);++e<o;){var a=r[e];a&&t(n,a,e,c)}return n})}var o=r(8),u=r(36);t.exports=e},function(t,n,r){function e(t,n,r,e){return void 0===t||o(t,u[r])&&!c.call(e,r)?n:t}var o=r(3),u=Object.prototype,c=u.hasOwnProperty;t.exports=e},function(t,n,r){function e(t,n){var r=u(t,n);return o(r)?r:void 0}var o=r(23),u=r(35);t.exports=e},function(t,n,r){function e(t){var n=c.call(t,a),r=t[a];try{t[a]=void 0}catch(t){}var e=i.call(t);return n?t[a]=r:delete t[a],e}var o=r(5),u=Object.prototype,c=u.hasOwnProperty,i=u.toString,a=o?o.toStringTag:void 0;t.exports=e},function(t,n){function r(t,n){return null==t?void 0:t[n]}t.exports=r},function(t,n,r){function e(t,n,r){if(!i(r))return!1;var e=typeof n;return!!("number"==e?u(r)&&c(n,r.length):"string"==e&&n in r)&&o(r[n],t)}var o=r(3),u=r(13),c=r(11),i=r(0);t.exports=e},function(t,n,r){function e(t){return!!u&&u in t}var o=r(30),u=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=e},function(t,n){function r(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}var e=Object.prototype;t.exports=r},function(t,n){function r(t){var n=[];if(null!=t)for(var r in Object(t))n.push(r);return n}t.exports=r},function(t,n,r){(function(t){var e=r(10),o="object"==typeof n&&n&&!n.nodeType&&n,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,c=u&&u.exports===o,i=c&&e.process,a=function(){try{return i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}).call(n,r(16)(t))},function(t,n){function r(t){return o.call(t)}var e=Object.prototype,o=e.toString;t.exports=r},function(t,n,r){function e(t,n,r){return n=u(void 0===n?t.length-1:n,0),function(){for(var e=arguments,c=-1,i=u(e.length-n,0),a=Array(i);++c<i;)a[c]=e[n+c];c=-1;for(var f=Array(n+1);++c<n;)f[c]=e[c];return f[n]=r(a),o(t,this,f)}}var o=r(6),u=Math.max;t.exports=e},function(t,n,r){var e=r(26),o=r(44),u=o(e);t.exports=u},function(t,n){function r(t){var n=0,r=0;return function(){var c=u(),i=o-(c-r);if(r=c,i>0){if(++n>=e)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}var e=800,o=16,u=Date.now;t.exports=r},function(t,n){function r(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var e=Function.prototype,o=e.toString;t.exports=r},function(t,n,r){var e=r(29),o=r(31),u=r(52),c=o(function(t,n,r,o){e(n,u(n),t,o)});t.exports=c},function(t,n){function r(t){return function(){return t}}t.exports=r},function(t,n,r){var e=r(22),o=r(4),u=Object.prototype,c=u.hasOwnProperty,i=u.propertyIsEnumerable,a=e(function(){return arguments}())?e:function(t){return o(t)&&c.call(t,"callee")&&!i.call(t,"callee")};t.exports=a},function(t,n){var r=Array.isArray;t.exports=r},function(t,n,r){(function(t){var e=r(2),o=r(53),u="object"==typeof n&&n&&!n.nodeType&&n,c=u&&"object"==typeof t&&t&&!t.nodeType&&t,i=c&&c.exports===u,a=i?e.Buffer:void 0,f=a?a.isBuffer:void 0,s=f||o;t.exports=s}).call(n,r(16)(t))},function(t,n,r){var e=r(24),o=r(28),u=r(40),c=u&&u.isTypedArray,i=c?o(c):e;t.exports=i},function(t,n,r){function e(t){return c(t)?o(t,!0):u(t)}var o=r(20),u=r(25),c=r(13);t.exports=e},function(t,n){function r(){return!1}t.exports=r},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r}]);
//# sourceMappingURL=logger.js.map