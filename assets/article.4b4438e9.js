var Je=Object.defineProperty,Ve=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var fe=(r,e,t)=>e in r?Je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,le=(r,e)=>{for(var t in e||(e={}))Xe.call(e,t)&&fe(r,t,e[t]);if(ue)for(var t of ue(e))Ke.call(e,t)&&fe(r,t,e[t]);return r},ce=(r,e)=>Ve(r,We(e));import{b as Qe,e as de,r as Ye,o as Ge,c as Ze,u as pe,G as he,j as er,Z as rr,Y as tr}from"./vendor.88d48fbc.js";import{C as me}from"./index.9988c1fc.js";const Pt=Qe({props:{page:{type:Number,required:!0},limit:{type:Number,required:!0},total:{type:Number,required:!0}},emits:["update:page","update:limit","pagination"],setup(r,{emit:e}){const t=r,a=de({get(){return t.page},set(u){e("update:page",u)}}),n=de({get(){return t.limit},set(u){e("update:limit",u)}}),i=()=>{e("pagination")},o=()=>{e("pagination")};return(u,f)=>{const c=Ye("el-pagination");return Ge(),Ze(c,{currentPage:pe(a),"onUpdate:currentPage":f[0]||(f[0]=s=>he(a)?a.value=s:null),"page-size":pe(n),"onUpdate:page-size":f[1]||(f[1]=s=>he(n)?n.value=s:null),"page-sizes":[10,20,40,60,80,100],background:"",total:r.total,onSizeChange:i,onCurrentChange:o,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])}}});function Tt(){const r=er(0),e=rr({page:1,limit:10});return{total:r,query:e}}var z={exports:{}},ve=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},nr=ve,J=Object.prototype.toString,V=function(r){return function(e){var t=J.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return V(t)===r}}function W(r){return Array.isArray(r)}function D(r){return typeof r=="undefined"}function ar(r){return r!==null&&!D(r)&&r.constructor!==null&&!D(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Ee=A("ArrayBuffer");function ir(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Ee(r.buffer),e}function sr(r){return typeof r=="string"}function or(r){return typeof r=="number"}function ye(r){return r!==null&&typeof r=="object"}function $(r){if(V(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var ur=A("Date"),fr=A("File"),lr=A("Blob"),cr=A("FileList");function X(r){return J.call(r)==="[object Function]"}function dr(r){return ye(r)&&X(r.pipe)}function pr(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||J.call(r)===e||X(r.toString)&&r.toString()===e)}var hr=A("URLSearchParams");function mr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function vr(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function K(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),W(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function Q(){var r={};function e(n,i){$(r[i])&&$(n)?r[i]=Q(r[i],n):$(n)?r[i]=Q({},n):W(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)K(arguments[t],e);return r}function Er(r,e,t){return K(e,function(n,i){t&&typeof n=="function"?r[i]=nr(n,t):r[i]=n}),r}function yr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Rr(r,e,t,a){r.prototype=Object.create(e.prototype,a),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function br(r,e,t){var a,n,i,o={};e=e||{};do{for(a=Object.getOwnPropertyNames(r),n=a.length;n-- >0;)i=a[n],o[i]||(e[i]=r[i],o[i]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function wr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var a=r.indexOf(e,t);return a!==-1&&a===t}function Or(r){if(!r)return null;var e=r.length;if(D(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var Ar=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),p={isArray:W,isArrayBuffer:Ee,isBuffer:ar,isFormData:pr,isArrayBufferView:ir,isString:sr,isNumber:or,isObject:ye,isPlainObject:$,isUndefined:D,isDate:ur,isFile:fr,isBlob:lr,isFunction:X,isStream:dr,isURLSearchParams:hr,isStandardBrowserEnv:vr,forEach:K,merge:Q,extend:Er,trim:mr,stripBOM:yr,inherits:Rr,toFlatObject:br,kindOf:V,kindOfTest:A,endsWith:wr,toArray:Or,isTypedArray:Ar,isFileList:cr},g=p;function Re(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var be=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(g.isURLSearchParams(t))n=t.toString();else{var i=[];g.forEach(t,function(f,c){f===null||typeof f=="undefined"||(g.isArray(f)?c=c+"[]":f=[f],g.forEach(f,function(l){g.isDate(l)?l=l.toISOString():g.isObject(l)&&(l=JSON.stringify(l)),i.push(Re(c)+"="+Re(l))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Cr=p;function U(){this.handlers=[]}U.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};U.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};U.prototype.forEach=function(e){Cr.forEach(this.handlers,function(a){a!==null&&e(a)})};var gr=U,Sr=p,xr=function(e,t){Sr.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},we=p;function S(r,e,t,a,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),a&&(this.request=a),n&&(this.response=n)}we.inherits(S,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Oe=S.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ae[r]={value:r}});Object.defineProperties(S,Ae);Object.defineProperty(Oe,"isAxiosError",{value:!0});S.from=function(r,e,t,a,n,i){var o=Object.create(Oe);return we.toFlatObject(r,o,function(f){return f!==Error.prototype}),S.call(o,r.message,e,t,a,n),o.name=r.name,i&&Object.assign(o,i),o};var x=S,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=p;function Pr(r,e){e=e||new FormData;var t=[];function a(i){return i===null?"":R.isDate(i)?i.toISOString():R.isArrayBuffer(i)||R.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,o){if(R.isPlainObject(i)||R.isArray(i)){if(t.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);t.push(i),R.forEach(i,function(f,c){if(!R.isUndefined(f)){var s=o?o+"."+c:c,l;if(f&&!o&&typeof f=="object"){if(R.endsWith(c,"{}"))f=JSON.stringify(f);else if(R.endsWith(c,"[]")&&(l=R.toArray(f))){l.forEach(function(v){!R.isUndefined(v)&&e.append(s,a(v))});return}}n(f,s)}}),t.pop()}else e.append(o,a(i))}return n(r),e}var ge=Pr,Y=x,Tr=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(new Y("Request failed with status code "+a.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},B=p,Nr=B.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),B.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),B.isString(i)&&f.push("path="+i),B.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),_r=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Dr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},$r=_r,Ur=Dr,Se=function(e,t){return e&&!$r(t)?Ur(e,t):t},G=p,Br=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Lr=function(e){var t={},a,n,i;return e&&G.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=G.trim(u.substr(0,i)).toLowerCase(),n=G.trim(u.substr(i+1)),a){if(t[a]&&Br.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},xe=p,Fr=xe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=xe.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}(),Z=x,jr=p;function Pe(r){Z.call(this,r==null?"canceled":r,Z.ERR_CANCELED),this.name="CanceledError"}jr.inherits(Pe,Z,{__CANCEL__:!0});var L=Pe,qr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},_=p,Ir=Tr,kr=Nr,Mr=be,Hr=Se,zr=Lr,Jr=Fr,Vr=Ce,b=x,Wr=L,Xr=qr,Te=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,f;function c(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}_.isFormData(i)&&_.isStandardBrowserEnv()&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+v)}var h=Hr(e.baseURL,e.url);s.open(e.method.toUpperCase(),Mr(h,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function se(){if(!!s){var y="getAllResponseHeaders"in s?zr(s.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?s.responseText:s.response,O={data:C,status:s.status,statusText:s.statusText,headers:y,config:e,request:s};Ir(function(H){a(H),c()},function(H){n(H),c()},O),s=null}}if("onloadend"in s?s.onloadend=se:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(se)},s.onabort=function(){!s||(n(new b("Request aborted",b.ECONNABORTED,e,s)),s=null)},s.onerror=function(){n(new b("Network Error",b.ERR_NETWORK,e,s,s)),s=null},s.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Vr;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(new b(C,O.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,s)),s=null},_.isStandardBrowserEnv()){var oe=(e.withCredentials||Jr(h))&&e.xsrfCookieName?kr.read(e.xsrfCookieName):void 0;oe&&(o[e.xsrfHeaderName]=oe)}"setRequestHeader"in s&&_.forEach(o,function(C,O){typeof i=="undefined"&&O.toLowerCase()==="content-type"?delete o[O]:s.setRequestHeader(O,C)}),_.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!s||(n(!y||y&&y.type?new Wr:y),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),i||(i=null);var M=Xr(h);if(M&&["http","https","file"].indexOf(M)===-1){n(new b("Unsupported protocol "+M+":",b.ERR_BAD_REQUEST,e));return}s.send(i)})},Kr=null,d=p,Ne=xr,_e=x,Qr=Ce,Yr=ge,Gr={"Content-Type":"application/x-www-form-urlencoded"};function De(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Zr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Te),r}function et(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var F={transitional:Qr,adapter:Zr(),transformRequest:[function(e,t){if(Ne(t,"Accept"),Ne(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return De(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=d.isObject(e),n=t&&t["Content-Type"],i;if((i=d.isFileList(e))||a&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return Yr(i?{"files[]":e}:e,o&&new o)}else if(a||n==="application/json")return De(t,"application/json"),et(e);return e}],transformResponse:[function(e){var t=this.transitional||F.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?_e.from(o,_e.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){F.headers[e]={}});d.forEach(["post","put","patch"],function(e){F.headers[e]=d.merge(Gr)});var ee=F,rt=p,tt=ee,nt=function(e,t,a){var n=this||tt;return rt.forEach(a,function(o){e=o.call(n,e,t)}),e},$e=function(e){return!!(e&&e.__CANCEL__)},Ue=p,re=nt,at=$e,it=ee,st=L;function te(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new st}var ot=function(e){te(e),e.headers=e.headers||{},e.data=re.call(e,e.data,e.headers,e.transformRequest),e.headers=Ue.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ue.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||it.adapter;return t(e).then(function(n){return te(e),n.data=re.call(e,n.data,n.headers,e.transformResponse),n},function(n){return at(n)||(te(e),n&&n.response&&(n.response.data=re.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=p,Be=function(e,t){t=t||{};var a={};function n(s,l){return E.isPlainObject(s)&&E.isPlainObject(l)?E.merge(s,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function i(s){if(E.isUndefined(t[s])){if(!E.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!E.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(E.isUndefined(t[s])){if(!E.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function f(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var c={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var v=c[l]||i,h=v(l);E.isUndefined(h)&&v!==f||(a[l]=h)}),a},Le={version:"0.27.2"},ut=Le.version,w=x,ne={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ne[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var Fe={};ne.transitional=function(e,t,a){function n(i,o){return"[Axios v"+ut+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new w(n(o," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!Fe[o]&&(Fe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,u):!0}};function ft(r,e,t){if(typeof r!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=r[i],f=u===void 0||o(u,i,r);if(f!==!0)throw new w("option "+i+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+i,w.ERR_BAD_OPTION)}}var lt={assertOptions:ft,validators:ne},je=p,ct=be,qe=gr,Ie=ot,j=Be,dt=Se,ke=lt,P=ke.validators;function T(r){this.defaults=r,this.interceptors={request:new qe,response:new qe}}T.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=j(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&ke.assertOptions(a,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(t)===!1||(i=i&&h.synchronous,n.unshift(h.fulfilled,h.rejected))});var o=[];this.interceptors.response.forEach(function(h){o.push(h.fulfilled,h.rejected)});var u;if(!i){var f=[Ie,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var c=t;n.length;){var s=n.shift(),l=n.shift();try{c=s(c)}catch(v){l(v);break}}try{u=Ie(c)}catch(v){return Promise.reject(v)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};T.prototype.getUri=function(e){e=j(this.defaults,e);var t=dt(e.baseURL,e.url);return ct(t,e.params,e.paramsSerializer)};je.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(t,a){return this.request(j(a||{},{method:e,url:t,data:(a||{}).data}))}});je.forEach(["post","put","patch"],function(e){function t(a){return function(i,o,u){return this.request(j(u||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}T.prototype[e]=t(),T.prototype[e+"Form"]=t(!0)});var pt=T,ht=L;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){t.subscribe(o),n=o}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new ht(n),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};N.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};N.source=function(){var e,t=new N(function(n){e=n});return{token:t,cancel:e}};var mt=N,vt=function(e){return function(a){return e.apply(null,a)}},Et=p,yt=function(e){return Et.isObject(e)&&e.isAxiosError===!0},Me=p,Rt=ve,q=pt,bt=Be,wt=ee;function He(r){var e=new q(r),t=Rt(q.prototype.request,e);return Me.extend(t,q.prototype,e),Me.extend(t,e),t.create=function(n){return He(bt(r,n))},t}var m=He(wt);m.Axios=q;m.CanceledError=L;m.CancelToken=mt;m.isCancel=$e;m.VERSION=Le.version;m.toFormData=ge;m.AxiosError=x;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=vt;m.isAxiosError=yt;z.exports=m;z.exports.default=m;var Ot=z.exports;const ae=Ot.create({baseURL:"https://62e09da298dd9c9df614b401.mockapi.io/vite-element-admin"});let I=0;function At(){I===0&&me.show({text:"\u52A0\u8F7D\u4E2D..."}),I++}function ie(){me.close()}function Ct(){I--,I<=0&&ie()}ae.interceptors.request.use(r=>(At(),r),r=>(ie(),Promise.reject(r)));ae.interceptors.response.use(r=>(Ct(),r),r=>(ie(),tr({message:r.message,type:"error",duration:5e4}),Promise.reject(r)));function k(r){return new Promise((e,t)=>{ae.request(r).then(a=>{const n=a.data;e(n)}).catch(a=>{t(a)})})}function Nt(r){return k({url:"/users",method:"get",headers:{"Content-Type":"application/x-www-form-urlencoded"},params:ce(le({},r),{sortBy:"createdAt",order:"desc"})})}function _t(r){return k({url:`/users/${r.id}`,method:"put",data:r})}function Dt(r){return k({url:"/users",method:"post",data:r})}function $t(r){return k({url:`/users/${r}`,method:"delete"})}export{Pt as _,_t as a,Dt as b,$t as d,Nt as g,Tt as u};