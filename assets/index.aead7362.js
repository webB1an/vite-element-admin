var ie=Object.defineProperty;var K=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var W=(o,e,t)=>e in o?ie(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,G=(o,e)=>{for(var t in e||(e={}))ce.call(e,t)&&W(o,t,e[t]);if(K)for(var t of K(e))le.call(e,t)&&W(o,t,e[t]);return o};import{r as p,o as f,c as z,a as Q,d as X,b as A,e as R,f as g,g as m,u as _,n as H,w as h,h as D,t as k,i as B,j as q,F as $,k as u,l as j,s as F,m as Y,p as ae,q as de,v as ue,x as ve,y as me,z as _e,A as fe,B as he,C as pe,D as ge,E as be}from"./vendor.25a7e868.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};ye();if(typeof window!="undefined"){let o=function(){var e=document.body,t=document.getElementById("__svg__icons__dom__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-component"><path d="M64 64h384v384H64V64zm0 512h384v384H64V576zm512 0h384v384H576V576zm192-128c106.039 0 192-85.961 192-192S874.039 64 768 64s-192 85.961-192 192 85.961 192 192 192z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-dashboard"><path d="M983.771 367.543A510.514 510.514 0 0 0 874.057 204.8 510.514 510.514 0 0 0 711.314 95.086C648.114 68.343 581.143 54.857 512 54.857S375.886 68.343 312.686 95.086A510.514 510.514 0 0 0 149.943 204.8 510.514 510.514 0 0 0 40.229 367.543C13.486 430.743 0 497.714 0 566.857c0 151.657 66.629 294.514 182.743 392.114l1.943 1.6c6.628 5.486 14.971 8.572 23.543 8.572h607.657c8.571 0 16.914-3.086 23.543-8.572l1.942-1.6c116-97.6 182.629-240.457 182.629-392.114 0-69.143-13.6-136.114-40.229-199.314zM477.714 192c0-5.029 4.115-9.143 9.143-9.143h50.286c5.028 0 9.143 4.114 9.143 9.143v91.429c0 5.028-4.115 9.142-9.143 9.142h-50.286c-5.028 0-9.143-4.114-9.143-9.142V192zM235.43 592c0 5.029-4.115 9.143-9.143 9.143h-91.429c-5.028 0-9.143-4.114-9.143-9.143v-50.286c0-5.028 4.115-9.143 9.143-9.143h91.429c5.028 0 9.143 4.115 9.143 9.143V592zm103.657-233.714-35.543 35.543a9.177 9.177 0 0 1-12.914 0l-64.686-64.686a9.177 9.177 0 0 1 0-12.914l35.543-35.543c3.543-3.543 9.371-3.543 12.914 0l64.686 64.685c3.543 3.543 3.543 9.372 0 12.915zm332.685 95.543L575.2 550.4c5.714 21.371.229 45.029-16.571 61.829a63.943 63.943 0 0 1-90.515 0 63.943 63.943 0 0 1 0-90.515 63.851 63.851 0 0 1 61.829-16.571l96.571-96.572c3.543-3.542 9.372-3.542 12.915 0l32.342 32.343c3.543 3.543 3.543 9.257 0 12.915zm49.143-59.886L685.371 358.4a9.177 9.177 0 0 1 0-12.914l64.686-64.686c3.543-3.543 9.372-3.543 12.914 0l35.543 35.543c3.543 3.543 3.543 9.371 0 12.914l-64.685 64.686a9.177 9.177 0 0 1-12.915 0zM893.714 592c0 5.029-4.114 9.143-9.143 9.143h-91.428c-5.029 0-9.143-4.114-9.143-9.143v-50.286c0-5.028 4.114-9.143 9.143-9.143h91.428c5.029 0 9.143 4.115 9.143 9.143V592z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-documentation"><path d="M768 326.4c-70.4 0-134.4-57.6-134.4-134.4V89.6c0-6.4-6.4-19.2-19.2-19.2h-384c-51.2 0-89.6 38.4-89.6 89.6v697.6c0 51.2 38.4 89.6 89.6 89.6h556.8c51.2 0 89.6-38.4 89.6-89.6V339.2c0-6.4-6.4-19.2-19.2-19.2H768zm-19.2 467.2H275.2c-6.4 0-19.2-6.4-19.2-19.2v-12.8c0-6.4 6.4-19.2 19.2-19.2h467.2c6.4 0 19.2 6.4 19.2 19.2v12.8c0 12.8-6.4 19.2-12.8 19.2zm0-153.6H275.2c-6.4 0-19.2-6.4-19.2-19.2V608c0-6.4 6.4-19.2 19.2-19.2h467.2c6.4 0 19.2 6.4 19.2 19.2v12.8c0 12.8-6.4 19.2-12.8 19.2zm0-153.6H275.2c-6.4 0-19.2-6.4-19.2-19.2v-6.4c0-6.4 6.4-19.2 19.2-19.2h467.2c6.4 0 19.2 6.4 19.2 19.2v12.8c0 6.4-6.4 12.8-12.8 12.8zm12.8 0" /><path d="M678.4 128v57.6c0 51.2 38.4 89.6 89.6 89.6h57.6c19.2 0 32-25.6 12.8-38.4l-128-128c-6.4-12.8-32 0-32 19.2zm0-51.2" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-icon"><path d="M871.424 61.44q18.432 0 34.816 6.656t28.672 18.944 19.456 28.672 7.168 35.84v720.896q0 38.912-25.088 64.512t-62.976 25.6h-721.92q-40.96 0-66.048-26.624t-25.088-66.56V150.528q0-35.84 24.576-62.464t65.536-26.624h720.896zm-237.568 768q18.432 0 26.624-8.704t8.192-23.04q0-13.312-8.192-22.528t-26.624-9.216h-62.464q1.024-2.048 1.024-6.144V251.904h63.488q18.432 0 25.6-9.216t7.168-22.528-7.168-22.528-25.6-9.216H386.048q-18.432 0-25.6 9.216t-7.168 22.528 7.168 22.528 25.6 9.216h57.344v507.904q0 2.048.512 3.072t.512 3.072h-56.32q-18.432 0-26.624 9.216t-8.192 22.528q0 14.336 8.192 23.04t26.624 8.704h245.76z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-nested"><path d="M937.025 463.794H86.975c-13.781 0-24.975-10.8-24.975-24.131v-48.206c0-13.331 11.194-24.131 24.975-24.131h849.994c13.838 0 25.031 10.8 25.031 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131zm-400.05-192.882H287c-13.781 0-24.975-10.8-24.975-24.131v-48.206C261.969 185.3 273.219 174.5 287 174.5h249.975c13.837 0 25.031 10.8 25.031 24.075v48.206c0 13.331-11.194 24.131-25.031 24.131zm-399.994 0H86.975c-13.781 0-24.975-10.8-24.975-24.075v-48.263c0-13.275 11.194-24.075 24.975-24.075h50.006c13.781 0 24.975 10.8 24.975 24.075v48.206c.056 13.331-11.137 24.131-24.975 24.131zM86.975 560.206h50.006c13.781 0 24.975 10.8 24.975 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131H86.975C73.194 656.618 62 645.874 62 632.543v-48.206c0-13.331 11.194-24.131 24.975-24.131zm0 192.882h550.012c13.837 0 24.975 10.8 24.975 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131H86.975C73.194 849.5 62 838.7 62 825.368v-48.206c0-13.275 11.194-24.075 24.975-24.075zm174.994-120.544v-48.206c0-13.331 11.194-24.131 24.975-24.131h600.019c13.781 0 24.975 10.8 24.975 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131H287c-13.781-.056-25.031-10.8-25.031-24.131z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-del"><path d="M843.067 239.211H178.54c-21.534 0-39.154 17.524-39.154 39.134V884.4c0 43.22 34.954 78.096 78.098 78.096h586.638c43.258 0 78.097-34.954 78.097-78.096V278.345c.001-21.61-17.524-39.134-39.153-39.134zM334.869 659.404c0 16.245-13.02 29.418-29.322 29.418-16.208 0-29.321-13.039-29.321-29.418V405.467c0-16.245 13.02-29.417 29.321-29.417 16.208 0 29.322 13.038 29.322 29.417v253.937zM549.901 776.77c0 16.207-13.02 29.34-29.322 29.34a29.26 29.26 0 0 1-29.323-29.34V366.295c0-16.209 13.02-29.343 29.323-29.343a29.261 29.261 0 0 1 29.322 29.343V776.77zm215.031-117.366c0 16.245-13.02 29.418-29.323 29.418-16.207 0-29.322-13.039-29.322-29.418V405.467c0-16.245 13.02-29.417 29.322-29.417 16.208 0 29.323 13.038 29.323 29.417v253.937zM139.387 170.793c0-16.189 13.21-29.323 29.341-29.323H852.88c16.189 0 29.342 13.02 29.342 29.323 0 16.188-13.21 29.322-29.342 29.322H168.73c-16.19 0-29.342-13.019-29.342-29.322zM413.062 102.374c0-21.591 17.353-39.097 39.078-39.097h117.328c21.572 0 39.077 17.353 39.077 39.097v39.096H413.063v-39.096z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-over"><path d="M514.048 59.392q93.184 0 174.592 35.328t142.336 96.768 96.256 143.36 35.328 175.104-35.328 175.616-96.256 143.872-142.336 96.768-174.592 35.328-175.104-35.328-142.848-96.768T99.84 685.568 64.512 509.952 99.84 334.848t96.256-143.36T338.944 94.72t175.104-35.328zm281.6 364.544q18.432-18.432 19.456-45.568T797.696 332.8t-45.056-17.92-45.056 18.944L418.816 622.592l-99.328-98.304q-18.432-18.432-45.056-18.944t-45.056 17.92-18.944 43.52 17.92 43.52l142.336 143.36q18.432 18.432 48.128 17.92t48.128-18.944l-4.096 4.096z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-overview"><path d="M430.183 452.352 24.577 691.2A496.026 496.026 0 0 1 0 536.371C0 283.546 188.62 75.674 430.183 51.2v401.152zm27.136 96.614L870.4 814.848C784.026 941.261 640.513 1024 477.953 1024c-176.743 0-331.11-97.894-413.799-243.456L457.32 548.966zm49.92-311.5L773.019 83.66l50.943 88.473-265.78 153.805zM493.415 83.712l88.525-51.251 51.046 88.627-88.525 51.251zm307.2 563.2 88.525-51.251 51.046 88.627-88.525 51.251zM514.15 416.768l354.406-205.107 50.893 88.371-354.406 205.107zm146.688 127.898 265.78-153.805 50.943 88.473-265.78 153.805z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-wait"><path d="M472.8 756.2c0-75.2 35.5-143.5 91.1-187-3.2 1.6-6.9 2.6-10.6 2.6H296.5c-12.7 0-23.3-10.6-23.3-23.3s10.6-23.3 23.3-23.3h256.3c12.7 0 23.3 10.6 23.3 23.3 0 6.4-2.6 11.7-6.4 15.9 37.1-27.5 82.6-43.4 131.9-43.4 61.4 0 126 19.1 167.4 58.3V101.1c0-20.7-16.4-37.1-37.1-37.1H163c-20.7 0-37.1 16.4-37.1 37.1v798.6c0 20.7 16.4 37.1 37.1 37.1h394c-53.5-41.9-84.2-107-84.2-180.6zM296.5 237.7h399.3c12.7 0 23.3 10.6 23.3 23.3 0 12.7-10.6 23.3-23.3 23.3H296.5c-12.7 0-23.3-10.6-23.3-23.3 0-12.7 10.6-23.3 23.3-23.3zm0 144h399.3c12.7 0 23.3 10.6 23.3 23.3 0 12.7-10.6 23.3-23.3 23.3H296.5c-12.7 0-23.3-10.6-23.3-23.3 0-12.7 10.6-23.3 23.3-23.3z" /><path d="m569.7 564.5-6.4 4.8c2.7-1.1 4.9-2.7 6.4-4.8zm142-10.6c-111.7 0-202.8 90.6-202.8 202.8 0 111.7 90.6 202.8 202.8 202.8 111.7 0 202.8-90.6 202.8-202.8s-91.1-202.8-202.8-202.8zm107.2 182L796 747.2c-7.2 4-13.3 9.7-17.7 16.7L729 850.8c-.6 1.2-1.3 2.2-2.3 3-3.8 3.3-9.6 2.9-12.9-1l-36.9-37.1-77.9 50.6 52.7-75.8-32.1-32.3c-1.1-.9-1.9-2.1-2.5-3.4-1.8-4.5.4-9.6 4.8-11.4l89.8-46.5c7-4.1 12.5-10.4 15.8-17.8l9.7-26c.4-1.8 1.4-3.4 2.9-4.5 3.3-2.5 8-1.8 10.5 1.5l70.8 71.1c1.2 1 2 2.2 2.6 3.6 1.5 4.5-.7 9.4-5.1 11.1z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo"><path d="M739.539 568.906c94.264 0 170.666 76.345 170.666 170.667 0 94.264-76.4 170.667-170.666 170.667s-170.667-76.403-170.667-170.667c0-94.322 76.402-170.667 170.667-170.667zm56.906-455.127c31.459 0 56.888 25.428 56.888 56.888v372.906C819.712 524.004 781.199 512 739.556 512 613.888 512 512 613.888 512 739.555c0 68.324 30.777 128.968 78.507 170.667H227.555c-31.459 0-56.888-25.429-56.888-56.889V170.667c0-31.46 25.429-56.89 56.888-56.89zm-56.906 513.608c-15.544 0-28.19 12.546-28.44 27.976l-.005.47v72.874a56.88 56.88 0 0 0 16.21 39.756l.459.465 55.125 55.181c11.093 11.094 29.127 11.094 40.22 0 10.983-10.982 11.093-28.766.33-39.885l-.33-.335-55.125-55.183v-72.874c0-15.645-12.687-28.445-28.444-28.445zM426.666 512H312.889c-15.702 0-28.444 12.743-28.444 28.445 0 15.7 12.742 28.444 28.444 28.444h113.777c15.702 0 28.445-12.743 28.445-28.444 0-15.702-12.743-28.445-28.444-28.445zm113.779-113.778H312.889c-15.702 0-28.444 12.743-28.444 28.445 0 15.701 12.742 28.444 28.444 28.444h227.556c15.7 0 28.444-12.743 28.444-28.444 0-15.702-12.743-28.445-28.444-28.445zM654.22 284.445h-341.33c-15.703 0-28.445 12.742-28.445 28.444 0 15.701 12.742 28.444 28.444 28.444h341.333c15.701 0 28.445-12.743 28.445-28.444 0-15.702-12.744-28.444-28.445-28.444z" /></symbol>',e.insertBefore(t,e.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()}var J=(o,e)=>{const t=o.__vccOpts||o;for(const[s,n]of e)t[s]=n;return t};const we={};function Ce(o,e){const t=p("router-view");return f(),z(t)}var xe=J(we,[["render",Ce]]);const ze="modulepreload",Z={},Ae="./",C=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Ae}${s}`,s in Z)return;Z[s]=!0;const n=s.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":ze,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((c,a)=>{r.addEventListener("load",c),r.addEventListener("error",a)})})).then(()=>e())};function M(o,e){Q.set(o,e)}function O(o){return Q.get(o)||""}var U=X("app",{state:()=>({siderbar:{active:O("siderbarStatus")==="1"}}),getters:{},actions:{toggleSidebar(){this.siderbar.active=!this.siderbar.active,M("siderbarStatus",this.siderbar.active?"1":"0")}}});function x(o){if(typeof o!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(o))}function ee(o,e){for(var t="",s=0,n=-1,i=0,r,c=0;c<=o.length;++c){if(c<o.length)r=o.charCodeAt(c);else{if(r===47)break;r=47}if(r===47){if(!(n===c-1||i===1))if(n!==c-1&&i===2){if(t.length<2||s!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var a=t.lastIndexOf("/");if(a!==t.length-1){a===-1?(t="",s=0):(t=t.slice(0,a),s=t.length-1-t.lastIndexOf("/")),n=c,i=0;continue}}else if(t.length===2||t.length===1){t="",s=0,n=c,i=0;continue}}e&&(t.length>0?t+="/..":t="..",s=2)}else t.length>0?t+="/"+o.slice(n+1,c):t=o.slice(n+1,c),s=c-n-1;n=c,i=0}else r===46&&i!==-1?++i:i=-1}return t}function ke(o,e){var t=e.dir||e.root,s=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+s:t+o+s:s}var V={resolve:function(){for(var e="",t=!1,s,n=arguments.length-1;n>=-1&&!t;n--){var i;n>=0?i=arguments[n]:(s===void 0&&(s=process.cwd()),i=s),x(i),i.length!==0&&(e=i+"/"+e,t=i.charCodeAt(0)===47)}return e=ee(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(x(e),e.length===0)return".";var t=e.charCodeAt(0)===47,s=e.charCodeAt(e.length-1)===47;return e=ee(e,!t),e.length===0&&!t&&(e="."),e.length>0&&s&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return x(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var s=arguments[t];x(s),s.length>0&&(e===void 0?e=s:e+="/"+s)}return e===void 0?".":V.normalize(e)},relative:function(e,t){if(x(e),x(t),e===t||(e=V.resolve(e),t=V.resolve(t),e===t))return"";for(var s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var n=e.length,i=n-s,r=1;r<t.length&&t.charCodeAt(r)===47;++r);for(var c=t.length,a=c-r,v=i<a?i:a,d=-1,l=0;l<=v;++l){if(l===v){if(a>v){if(t.charCodeAt(r+l)===47)return t.slice(r+l+1);if(l===0)return t.slice(r+l)}else i>v&&(e.charCodeAt(s+l)===47?d=l:l===0&&(d=0));break}var w=e.charCodeAt(s+l),L=t.charCodeAt(r+l);if(w!==L)break;w===47&&(d=l)}var y="";for(l=s+d+1;l<=n;++l)(l===n||e.charCodeAt(l)===47)&&(y.length===0?y+="..":y+="/..");return y.length>0?y+t.slice(r+d):(r+=d,t.charCodeAt(r)===47&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(x(e),e.length===0)return".";for(var t=e.charCodeAt(0),s=t===47,n=-1,i=!0,r=e.length-1;r>=1;--r)if(t=e.charCodeAt(r),t===47){if(!i){n=r;break}}else i=!1;return n===-1?s?"/":".":s&&n===1?"//":e.slice(0,n)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');x(e);var s=0,n=-1,i=!0,r;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var c=t.length-1,a=-1;for(r=e.length-1;r>=0;--r){var v=e.charCodeAt(r);if(v===47){if(!i){s=r+1;break}}else a===-1&&(i=!1,a=r+1),c>=0&&(v===t.charCodeAt(c)?--c==-1&&(n=r):(c=-1,n=a))}return s===n?n=a:n===-1&&(n=e.length),e.slice(s,n)}else{for(r=e.length-1;r>=0;--r)if(e.charCodeAt(r)===47){if(!i){s=r+1;break}}else n===-1&&(i=!1,n=r+1);return n===-1?"":e.slice(s,n)}},extname:function(e){x(e);for(var t=-1,s=0,n=-1,i=!0,r=0,c=e.length-1;c>=0;--c){var a=e.charCodeAt(c);if(a===47){if(!i){s=c+1;break}continue}n===-1&&(i=!1,n=c+1),a===46?t===-1?t=c:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||n===-1||r===0||r===1&&t===n-1&&t===s+1?"":e.slice(t,n)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return ke("/",e)},parse:function(e){x(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var s=e.charCodeAt(0),n=s===47,i;n?(t.root="/",i=1):i=0;for(var r=-1,c=0,a=-1,v=!0,d=e.length-1,l=0;d>=i;--d){if(s=e.charCodeAt(d),s===47){if(!v){c=d+1;break}continue}a===-1&&(v=!1,a=d+1),s===46?r===-1?r=d:l!==1&&(l=1):r!==-1&&(l=-1)}return r===-1||a===-1||l===0||l===1&&r===a-1&&r===c+1?a!==-1&&(c===0&&n?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(c,a)):(c===0&&n?(t.name=e.slice(1,r),t.base=e.slice(1,a)):(t.name=e.slice(c,r),t.base=e.slice(c,a)),t.ext=e.slice(r,a)),c>0?t.dir=e.slice(0,c-1):n&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};V.posix=V;var Le=V;const Se=["href"],$e=A({props:{prefix:{type:String,default:"icon"},svgClass:{type:String,default:""},name:{type:String,required:!0},color:{type:String,default:"red"}},setup(o){const e=o,t=R(()=>`#${e.prefix}-${e.name}`);return(s,n)=>(f(),g("svg",{class:H(o.svgClass),"aria-hidden":"true"},[m("use",{href:_(t)},null,8,Se)],2))}});var te=J($e,[["__scopeId","data-v-dc49ef06"]]);const oe=A({props:{url:{type:String,required:!0},route:{type:null,required:!0}},setup(o){return(e,t)=>{const s=p("svg-icon"),n=p("el-menu-item");return f(),z(n,{index:o.url},{title:h(()=>{var i;return[D(k((i=o.route.meta)==null?void 0:i.title),1)]}),default:h(()=>{var i,r;return[((i=o.route.meta)==null?void 0:i.icon)?(f(),z(s,{key:0,class:"el-icon",name:`svg-${(r=o.route.meta)==null?void 0:r.icon}`},null,8,["name"])):B("v-if",!0)]}),_:1},8,["index"])}}}),ne=A({props:{baseUrl:{type:String,required:!0},route:{type:null,required:!0}},setup(o){const e=o,t=q({}),s=(i,r)=>{const c=i.filter(a=>!a.hidden);return c.length===1?(t.value=c[0],!0):c.length===0?(t.value=G({},r),!0):!1},n=i=>Le.resolve(e.baseUrl,i);return(i,r)=>{const c=p("siderbar-item",!0),a=p("el-sub-menu");return!o.route.hidden&&o.route.children?(f(),g($,{key:0},[s(o.route.children,o.route)?(f(),g($,{key:0},[B(` <el-menu-item :index="resolve(onlyOneChild.path)">
        <svg-icon
          v-if="onlyOneChild.meta?.icon"
          class="el-icon"
          :name="\`svg-\${onlyOneChild.meta?.icon}\`"
        />
        <span>{{ onlyOneChild.meta?.name }}</span>
      </el-menu-item> `),u(oe,{route:t.value,url:n(t.value.path)},null,8,["route","url"])],2112)):(f(),z(a,{key:1,index:o.route.path},{title:h(()=>{var v,d,l;return[((v=o.route.meta)==null?void 0:v.icon)?(f(),z(te,{key:0,"svg-class":"el-icon",name:`svg-${(d=o.route.meta)==null?void 0:d.icon}`},null,8,["name"])):B("v-if",!0),m("span",null,k((l=o.route.meta)==null?void 0:l.title),1)]}),default:h(()=>[(f(!0),g($,null,j(o.route.children,v=>(f(),g($,null,[v.children?(f(),z(c,{key:v.path,route:v,"base-url":n(v.path)},null,8,["route","base-url"])):(f(),z(oe,{key:n(v.path),route:v,url:n(v.path)},null,8,["route","url"]))],64))),256))]),_:1},8,["index"]))],2112)):B("v-if",!0)}}});const Me={class:"sidebar-container"},De=A({setup(o){console.log("SiderbarItem",ne);const e=U(),t=R(()=>!e.siderbar.active);return(s,n)=>{const i=p("el-menu");return f(),g("div",Me,[u(i,{"show-timeout":200,"default-active":s.$route.path,collapse:_(t),"unique-opened":"",mode:"vertical","background-color":"#30354d","text-color":"#9699a5","active-text-color":"#fff",router:""},{default:h(()=>[(f(!0),g($,null,j(_(re),r=>(f(),z(ne,{key:r.path,"base-url":r.path,route:r},null,8,["base-url","route"]))),128))]),_:1},8,["default-active","collapse"])])}}});const Ve={},Te={class:"app-main"};function Ee(o,e){const t=p("router-view");return f(),g("div",Te,[u(t)])}var He=J(Ve,[["render",Ee]]);const Be={class:"hamburger-container"},qe=m("path",{d:"M908.70574649 831.22148693H134.16925867v-52.07344924h774.54813867v52.07344924zM531.80092872 442.96292125H130.86041885V390.889472h400.94050987zM531.80092872 634.17075485H130.86041885v-52.05597298h400.94050987zM901.4996992 245.91801458H126.9690368v-52.06762383h774.54231325v52.06762383zM669.95081672 518.02348658l225.4205383-150.2609408v300.53353244z","p-id":"5097"},null,-1),Oe=A({setup(o){const e=U(),{siderbar:t}=F(e),s=()=>e.toggleSidebar();return(n,i)=>(f(),g("div",Be,[(f(),g("svg",{class:H([{active:_(t).active},"hamburger"]),t:"1655886946936",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5096",width:"128",height:"128",onClick:s},[B(" eslint-disable-next-line max-len "),qe],2))]))}});const Pe={class:"navbar-container"},Re=A({setup(o){return(e,t)=>(f(),g("div",Pe,[u(Oe)]))}});const Ie={class:"main-container"},P=A({setup(o){const e=U(),t=R(()=>e.siderbar.active),s=R(()=>!e.siderbar.active);return(n,i)=>(f(),g("div",{class:H(["app-warpper",{"open-siderbar":_(t),"hide-siderbar":_(s)}])},[u(De),m("div",Ie,[u(Re),u(He)])],2))}});var se=X("todo",{state:()=>({todoList:JSON.parse(O("todoList")||"[]"),all:Number(O("todo-all")),over:Number(O("todo-over")),del:Number(O("todo-del"))}),getters:{completed:o=>o.todoList.filter(e=>e.completed),incomplete:o=>o.todoList.filter(e=>!e.completed)},actions:{addTodo(o){if(!o||this.todoList.some(t=>t.description===o))return;const e={id:Y(),completed:!1,description:o};this.todoList=[e,...this.todoList],this.all+=1,M("todo-all",String(this.all)),M("todoList",JSON.stringify(this.todoList))},doTodo(o){this.todoList=this.todoList.map(e=>(e.id===o&&(e.completed=!e.completed),e)),this.over+=1,M("todo-over",String(this.over)),M("todoList",JSON.stringify(this.todoList))},delTodo(o){this.todoList.splice(o,1),this.todoList=[...this.todoList],this.del+=1,M("todo-del",String(this.del)),M("todoList",JSON.stringify(this.todoList))}}}),S;(function(o){o[o.all=0]="all",o[o.completed=1]="completed",o[o.incomplete=2]="incomplete"})(S||(S={}));function Ne(){const o=q(""),e=q([]),t=q(0),s=se(),{todoList:n,completed:i,incomplete:r}=F(s),c=l=>{s.addTodo(l),o.value=""},a=l=>s.doTodo(l),v=l=>s.delTodo(l),d=l=>{switch(l){case 0:e.value=n.value,t.value=0;break;case 1:e.value=i.value,t.value=1;break;case 2:e.value=r.value,t.value=2;break}};return ae(()=>{d(0)}),de(n,()=>{d(t.value)}),{active:t,list:e,todo:o,todoList:n,incomplete:r,completed:i,addTodo:c,doTodo:a,delTodo:v,seeDifferentTodo:d}}const je={class:"todo-list"},Fe=["onClick"],Je={class:"todo-list-item-des"},Ue=["onClick"],Ke={class:"todo-bottom"},We=D(" \u6240\u6709 "),Ge=D(" \u5DF2\u5B8C\u6210 "),Qe=D(" \u672A\u5B8C\u6210 "),Xe=A({setup(o){const{active:e,todo:t,list:s,incomplete:n,addTodo:i,doTodo:r,delTodo:c,seeDifferentTodo:a}=Ne();return(v,d)=>{const l=p("el-input"),w=p("el-scrollbar"),L=p("el-check-tag"),y=p("el-card"),I=p("el-col");return f(),z(I,{span:6},{default:h(()=>[u(y,null,{header:h(()=>[u(l,{modelValue:_(t),"onUpdate:modelValue":d[0]||(d[0]=b=>ue(t)?t.value=b:null),placeholder:"Todo List",onKeydown:d[1]||(d[1]=ve(b=>_(i)(_(t)),["enter"]))},null,8,["modelValue"])]),default:h(()=>[m("ul",je,[u(w,{height:"200px"},{default:h(()=>[(f(!0),g($,null,j(_(s),(b,N)=>(f(),g("li",{key:b.id,class:H(["todo-list-item",{checked:b.completed}]),onClick:E=>_(r)(b.id)},[m("div",{class:H([{"radio-checked":b.completed},"todo-list-item-radio"])},null,2),m("span",Je,k(b.description),1),m("span",{class:"todo-list-item-close",onClick:me(E=>_(c)(N),["stop"])},"\u2715",8,Ue)],10,Fe))),128))]),_:1})]),m("div",Ke,[D(k(_(n).length)+" \u6761\u672A\u5B8C\u6210 ",1),u(L,{checked:_(e)===_(S).all,onClick:d[2]||(d[2]=b=>_(a)(_(S).all))},{default:h(()=>[We]),_:1},8,["checked"]),u(L,{checked:_(e)===_(S).completed,type:"info",onClick:d[3]||(d[3]=b=>_(a)(_(S).completed))},{default:h(()=>[Ge]),_:1},8,["checked"]),u(L,{checked:_(e)===_(S).incomplete,type:"warning",onClick:d[4]||(d[4]=b=>_(a)(_(S).incomplete))},{default:h(()=>[Qe]),_:1},8,["checked"])])]),_:1})]),_:1})}}});const Ye={class:"todo-overview-wapper"},Ze={class:"todo-overview-icon todo-icon-overview"},et={class:"todo-overview-description"},tt=m("div",{class:"todo-overview-text"},"\u603B\u8BA1",-1),ot={class:"todo-overview-num"},nt={class:"todo-overview-wapper"},st={class:"todo-overview-icon todo-icon-wait"},rt={class:"todo-overview-description"},it=m("div",{class:"todo-overview-text"},"\u5F85\u505A",-1),ct={class:"todo-overview-num"},lt={class:"todo-overview-wapper"},at={class:"todo-overview-icon todo-icon-over"},dt={class:"todo-overview-description"},ut=m("div",{class:"todo-overview-text"},"\u5B8C\u6210",-1),vt={class:"todo-overview-num"},mt={class:"todo-overview-wapper"},_t={class:"todo-overview-icon todo-icon-del"},ft={class:"todo-overview-description"},ht=m("div",{class:"todo-overview-text"},"\u5220\u9664",-1),pt={class:"todo-overview-num"},gt=A({setup(o){const e=se(),{all:t,incomplete:s,over:n,del:i}=F(e),r=(v,d)=>Math.floor(Math.random()*(v-d+1)+d),c=[];for(let v=0;v<10;v++){const d=r(1e3,1);c.push({orderNo:Y(),num:d,status:d>500?"success":"pending"})}const a=q(c);return(v,d)=>{const l=p("svg-icon"),w=p("el-col"),L=p("el-row"),y=p("el-table-column"),I=p("el-tag"),b=p("el-table"),N=p("el-card");return f(),g($,null,[u(L,{class:"todo-overview",gutter:20},{default:h(()=>[u(w,{span:6},{default:h(()=>[m("div",Ye,[m("div",Ze,[u(l,{"svg-class":"el-icon",name:"svg-todo-overview"})]),m("div",et,[tt,m("div",ot,k(_(t)),1)])])]),_:1}),u(w,{span:6},{default:h(()=>[m("div",nt,[m("div",st,[u(l,{"svg-class":"el-icon",name:"svg-todo-wait"})]),m("div",rt,[it,m("div",ct,k(_(s).length),1)])])]),_:1}),u(w,{span:6},{default:h(()=>[m("div",lt,[m("div",at,[u(l,{"svg-class":"el-icon",name:"svg-todo-over"})]),m("div",dt,[ut,m("div",vt,k(_(n)),1)])])]),_:1}),u(w,{span:6},{default:h(()=>[m("div",mt,[m("div",_t,[u(l,{"svg-class":"el-icon",name:"svg-todo-del"})]),m("div",ft,[ht,m("div",pt,k(_(i)),1)])])]),_:1})]),_:1}),u(L,{class:"mt20",gutter:20},{default:h(()=>[u(Xe),u(w,{span:12},{default:h(()=>[u(N,null,{default:h(()=>[u(b,{data:a.value},{default:h(()=>[u(y,{prop:"orderNo",label:"ID",width:"400px"}),u(y,{prop:"num",label:"\u6570\u91CF"}),u(y,{label:"\u72B6\u6001"},{default:h(E=>[u(I,{type:E.row.status==="success"?E.row.status:"warning"},{default:h(()=>[D(k(E.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1})],64)}}}),bt=[{path:"/",redirect:"/dashboard/index"}],re=[{path:"/dashboard",component:P,redirect:"/dashboard/index",children:[{path:"index",name:"DashBoard",component:gt,meta:{icon:"dashboard",title:"\u9996\u9875"}}]},{path:"/documentation",component:P,redirect:"/documentation/index",children:[{path:"index",name:"Documentation",component:()=>C(()=>import("./index.3fa22139.js"),["assets/index.3fa22139.js","assets/vendor.25a7e868.js"]),meta:{icon:"documentation",title:"\u6587\u6863"}}]},{path:"/icon",component:P,redirect:"/icon/index",children:[{path:"index",name:"Icon",component:()=>C(()=>import("./index.1bb341a4.js"),["assets/index.1bb341a4.js","assets/index.3303967d.css","assets/vendor.25a7e868.js"]),meta:{icon:"icon",title:"\u56FE\u6807"}}]},{path:"/components",component:P,redirect:"/components/tinymce",meta:{icon:"component",title:"\u7EC4\u4EF6"},children:[{path:"tinymce",name:"Tinymce",component:()=>C(()=>import("./index.6091bb5c.js"),["assets/index.6091bb5c.js","assets/index.c82cd88a.css","assets/vendor.25a7e868.js"]),meta:{title:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668"}},{path:"markdown",name:"Markdown",component:()=>C(()=>import("./markdown.576f3355.js"),["assets/markdown.576f3355.js","assets/vendor.25a7e868.js"]),meta:{title:"Markdown"}}]},{path:"/nested",component:P,meta:{icon:"nested",title:"\u5D4C\u5957"},children:[{path:"menu1",name:"menu1",component:()=>C(()=>import("./index.2a9a6d58.js"),["assets/index.2a9a6d58.js","assets/vendor.25a7e868.js"]),meta:{title:"\u83DC\u5355 1"}},{path:"menu2",name:"menu2",component:()=>C(()=>import("./index.f4e06d16.js"),["assets/index.f4e06d16.js","assets/vendor.25a7e868.js"]),meta:{title:"\u83DC\u5355 2"},children:[{path:"menu2-1",name:"menu2-1",component:()=>C(()=>import("./index.752344fe.js"),["assets/index.752344fe.js","assets/vendor.25a7e868.js"]),meta:{title:"\u83DC\u5355 2-1"}},{path:"menu2-2",name:"menu2-2",component:()=>C(()=>import("./index.255e204f.js"),["assets/index.255e204f.js","assets/vendor.25a7e868.js"]),meta:{title:"\u83DC\u5355 2-2"},children:[{path:"menu2-2-1",name:"menu2-2-1",component:()=>C(()=>import("./index.14920afd.js"),["assets/index.14920afd.js","assets/vendor.25a7e868.js"]),meta:{title:"\u83DC\u5355 2-2-1"}},{path:"menu2-2-2",name:"menu2-2-2",component:()=>C(()=>import("./index.a2331d24.js"),["assets/index.a2331d24.js","assets/vendor.25a7e868.js"]),meta:{title:"\u83DC\u5355 2-2-2"}}]}]}]}],yt=_e({history:fe(),routes:[...bt,...re]}),wt={count:0},Ct=he({state:wt,getters:{double:o=>o.count*2},mutations:{ADD:(o,e)=>{e?o.count+=e:o.count++},SUB:(o,e)=>{e?o.count-=e:o.count--}},actions:{TestActionCommit({state:o,commit:e,dispatch:t},s){return console.log("---------------dispatch TestActionCommit---------------"),new Promise((n,i)=>{setTimeout(()=>{e("ADD",s),n(10)},2e3)})},TestActionDispatch({state:o,commit:e,dispatch:t},s){console.log("---------------TestActionDispatch dispatch TestActionCommit---------------"),t("TestActionCommit",s)}}});const T=pe(xe),xt=ge();T.component("SvgIcon",te);T.use(be);T.use(xt);T.use(Ct);T.use(yt);T.mount("#app");export{J as _};
