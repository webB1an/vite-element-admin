var ie=Object.defineProperty;var K=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var W=(o,e,t)=>e in o?ie(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,G=(o,e)=>{for(var t in e||(e={}))re.call(e,t)&&W(o,t,e[t]);if(K)for(var t of K(e))ce.call(e,t)&&W(o,t,e[t]);return o};import{r as p,o as h,c as A,a as Q,d as X,b as z,e as R,f as g,g as m,u as _,n as B,w as f,h as E,t as k,i as O,j as P,F as S,k as u,l as N,s as F,m as Y,p as ae,q as le,v as de,x as ue,y as ve,z as me,A as _e,B as he,C as fe,D as pe,E as ge}from"./vendor.51bdb2ae.js";const be=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};be();if(typeof window!="undefined"){let o=function(){var e=document.body,t=document.getElementById("__svg__icons__dom__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-component"><path d="M64 64h384v384H64V64zm0 512h384v384H64V576zm512 0h384v384H576V576zm192-128c106.039 0 192-85.961 192-192S874.039 64 768 64s-192 85.961-192 192 85.961 192 192 192z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-dashboard"><path d="M983.771 367.543A510.514 510.514 0 0 0 874.057 204.8 510.514 510.514 0 0 0 711.314 95.086C648.114 68.343 581.143 54.857 512 54.857S375.886 68.343 312.686 95.086A510.514 510.514 0 0 0 149.943 204.8 510.514 510.514 0 0 0 40.229 367.543C13.486 430.743 0 497.714 0 566.857c0 151.657 66.629 294.514 182.743 392.114l1.943 1.6c6.628 5.486 14.971 8.572 23.543 8.572h607.657c8.571 0 16.914-3.086 23.543-8.572l1.942-1.6c116-97.6 182.629-240.457 182.629-392.114 0-69.143-13.6-136.114-40.229-199.314zM477.714 192c0-5.029 4.115-9.143 9.143-9.143h50.286c5.028 0 9.143 4.114 9.143 9.143v91.429c0 5.028-4.115 9.142-9.143 9.142h-50.286c-5.028 0-9.143-4.114-9.143-9.142V192zM235.43 592c0 5.029-4.115 9.143-9.143 9.143h-91.429c-5.028 0-9.143-4.114-9.143-9.143v-50.286c0-5.028 4.115-9.143 9.143-9.143h91.429c5.028 0 9.143 4.115 9.143 9.143V592zm103.657-233.714-35.543 35.543a9.177 9.177 0 0 1-12.914 0l-64.686-64.686a9.177 9.177 0 0 1 0-12.914l35.543-35.543c3.543-3.543 9.371-3.543 12.914 0l64.686 64.685c3.543 3.543 3.543 9.372 0 12.915zm332.685 95.543L575.2 550.4c5.714 21.371.229 45.029-16.571 61.829a63.943 63.943 0 0 1-90.515 0 63.943 63.943 0 0 1 0-90.515 63.851 63.851 0 0 1 61.829-16.571l96.571-96.572c3.543-3.542 9.372-3.542 12.915 0l32.342 32.343c3.543 3.543 3.543 9.257 0 12.915zm49.143-59.886L685.371 358.4a9.177 9.177 0 0 1 0-12.914l64.686-64.686c3.543-3.543 9.372-3.543 12.914 0l35.543 35.543c3.543 3.543 3.543 9.371 0 12.914l-64.685 64.686a9.177 9.177 0 0 1-12.915 0zM893.714 592c0 5.029-4.114 9.143-9.143 9.143h-91.428c-5.029 0-9.143-4.114-9.143-9.143v-50.286c0-5.028 4.114-9.143 9.143-9.143h91.428c5.029 0 9.143 4.115 9.143 9.143V592z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-documentation"><path d="M768 326.4c-70.4 0-134.4-57.6-134.4-134.4V89.6c0-6.4-6.4-19.2-19.2-19.2h-384c-51.2 0-89.6 38.4-89.6 89.6v697.6c0 51.2 38.4 89.6 89.6 89.6h556.8c51.2 0 89.6-38.4 89.6-89.6V339.2c0-6.4-6.4-19.2-19.2-19.2H768zm-19.2 467.2H275.2c-6.4 0-19.2-6.4-19.2-19.2v-12.8c0-6.4 6.4-19.2 19.2-19.2h467.2c6.4 0 19.2 6.4 19.2 19.2v12.8c0 12.8-6.4 19.2-12.8 19.2zm0-153.6H275.2c-6.4 0-19.2-6.4-19.2-19.2V608c0-6.4 6.4-19.2 19.2-19.2h467.2c6.4 0 19.2 6.4 19.2 19.2v12.8c0 12.8-6.4 19.2-12.8 19.2zm0-153.6H275.2c-6.4 0-19.2-6.4-19.2-19.2v-6.4c0-6.4 6.4-19.2 19.2-19.2h467.2c6.4 0 19.2 6.4 19.2 19.2v12.8c0 6.4-6.4 12.8-12.8 12.8zm12.8 0" /><path d="M678.4 128v57.6c0 51.2 38.4 89.6 89.6 89.6h57.6c19.2 0 32-25.6 12.8-38.4l-128-128c-6.4-12.8-32 0-32 19.2zm0-51.2" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-icon"><path d="M871.424 61.44q18.432 0 34.816 6.656t28.672 18.944 19.456 28.672 7.168 35.84v720.896q0 38.912-25.088 64.512t-62.976 25.6h-721.92q-40.96 0-66.048-26.624t-25.088-66.56V150.528q0-35.84 24.576-62.464t65.536-26.624h720.896zm-237.568 768q18.432 0 26.624-8.704t8.192-23.04q0-13.312-8.192-22.528t-26.624-9.216h-62.464q1.024-2.048 1.024-6.144V251.904h63.488q18.432 0 25.6-9.216t7.168-22.528-7.168-22.528-25.6-9.216H386.048q-18.432 0-25.6 9.216t-7.168 22.528 7.168 22.528 25.6 9.216h57.344v507.904q0 2.048.512 3.072t.512 3.072h-56.32q-18.432 0-26.624 9.216t-8.192 22.528q0 14.336 8.192 23.04t26.624 8.704h245.76z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-nested"><path d="M937.025 463.794H86.975c-13.781 0-24.975-10.8-24.975-24.131v-48.206c0-13.331 11.194-24.131 24.975-24.131h849.994c13.838 0 25.031 10.8 25.031 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131zm-400.05-192.882H287c-13.781 0-24.975-10.8-24.975-24.131v-48.206C261.969 185.3 273.219 174.5 287 174.5h249.975c13.837 0 25.031 10.8 25.031 24.075v48.206c0 13.331-11.194 24.131-25.031 24.131zm-399.994 0H86.975c-13.781 0-24.975-10.8-24.975-24.075v-48.263c0-13.275 11.194-24.075 24.975-24.075h50.006c13.781 0 24.975 10.8 24.975 24.075v48.206c.056 13.331-11.137 24.131-24.975 24.131zM86.975 560.206h50.006c13.781 0 24.975 10.8 24.975 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131H86.975C73.194 656.618 62 645.874 62 632.543v-48.206c0-13.331 11.194-24.131 24.975-24.131zm0 192.882h550.012c13.837 0 24.975 10.8 24.975 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131H86.975C73.194 849.5 62 838.7 62 825.368v-48.206c0-13.275 11.194-24.075 24.975-24.075zm174.994-120.544v-48.206c0-13.331 11.194-24.131 24.975-24.131h600.019c13.781 0 24.975 10.8 24.975 24.131v48.206c0 13.331-11.194 24.131-24.975 24.131H287c-13.781-.056-25.031-10.8-25.031-24.131z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-table"><path d="M93.184 0A93.44 93.44 0 0 0 0 93.184v92.928a93.44 93.44 0 0 0 93.184 93.184h837.632A93.44 93.44 0 0 0 1024 186.112V93.184A93.44 93.44 0 0 0 930.816 0zM0 558.592a93.184 93.184 0 0 0 93.184 92.928h92.928a93.184 93.184 0 0 0 93.184-92.928v-93.184a93.184 93.184 0 0 0-93.184-92.928H93.184A93.184 93.184 0 0 0 0 465.408zm372.48 0a93.184 93.184 0 0 0 92.928 92.928h93.184a93.184 93.184 0 0 0 92.928-92.928v-93.184a93.184 93.184 0 0 0-92.928-92.928h-93.184a93.184 93.184 0 0 0-92.928 92.928zm372.224 0a93.184 93.184 0 0 0 93.184 92.928h92.928A93.184 93.184 0 0 0 1024 558.592v-93.184a93.184 93.184 0 0 0-93.184-92.928h-92.928a93.184 93.184 0 0 0-93.184 92.928zM0 930.816A93.44 93.44 0 0 0 93.184 1024h92.928a93.44 93.44 0 0 0 93.184-93.184v-92.928a93.44 93.44 0 0 0-93.184-93.184H93.184A93.44 93.44 0 0 0 0 837.888zm372.48 0A93.184 93.184 0 0 0 465.408 1024h93.184a93.184 93.184 0 0 0 92.928-93.184v-92.928a93.184 93.184 0 0 0-92.928-93.184h-93.184a93.184 93.184 0 0 0-92.928 93.184zm372.224 0A93.44 93.44 0 0 0 837.888 1024h92.928A93.44 93.44 0 0 0 1024 930.816v-92.928a93.44 93.44 0 0 0-93.184-93.184h-92.928a93.44 93.44 0 0 0-93.184 93.184zm0 0" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-tabs"><path d="M622.277 39.385H401.723c-13.785 0-23.63 11.815-23.63 25.6v49.23c0 13.785 11.815 25.6 23.63 25.6h220.554c13.785 0 23.63-11.815 23.63-25.6v-49.23c1.97-13.785-9.845-25.6-23.63-25.6zm336.738 0H738.462c-13.785 0-25.6 11.815-25.6 25.6v49.23c0 13.785 11.815 25.6 25.6 25.6h220.553c13.785-1.969 25.6-11.815 25.6-25.6v-49.23c0-13.785-11.815-25.6-25.6-25.6zm0 165.415H334.77c-13.784 0-25.6-11.815-25.6-25.6V64.985c0-13.785-11.815-25.6-25.6-25.6H64.985c-13.785 0-25.6 11.815-25.6 25.6v896c0 11.815 11.815 23.63 25.6 23.63h894.03c13.785 0 25.6-11.815 25.6-25.6V230.4c0-13.785-11.815-25.6-25.6-25.6z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-del"><path d="M843.067 239.211H178.54c-21.534 0-39.154 17.524-39.154 39.134V884.4c0 43.22 34.954 78.096 78.098 78.096h586.638c43.258 0 78.097-34.954 78.097-78.096V278.345c.001-21.61-17.524-39.134-39.153-39.134zM334.869 659.404c0 16.245-13.02 29.418-29.322 29.418-16.208 0-29.321-13.039-29.321-29.418V405.467c0-16.245 13.02-29.417 29.321-29.417 16.208 0 29.322 13.038 29.322 29.417v253.937zM549.901 776.77c0 16.207-13.02 29.34-29.322 29.34a29.26 29.26 0 0 1-29.323-29.34V366.295c0-16.209 13.02-29.343 29.323-29.343a29.261 29.261 0 0 1 29.322 29.343V776.77zm215.031-117.366c0 16.245-13.02 29.418-29.323 29.418-16.207 0-29.322-13.039-29.322-29.418V405.467c0-16.245 13.02-29.417 29.322-29.417 16.208 0 29.323 13.038 29.323 29.417v253.937zM139.387 170.793c0-16.189 13.21-29.323 29.341-29.323H852.88c16.189 0 29.342 13.02 29.342 29.323 0 16.188-13.21 29.322-29.342 29.322H168.73c-16.19 0-29.342-13.019-29.342-29.322zM413.062 102.374c0-21.591 17.353-39.097 39.078-39.097h117.328c21.572 0 39.077 17.353 39.077 39.097v39.096H413.063v-39.096z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-over"><path d="M514.048 59.392q93.184 0 174.592 35.328t142.336 96.768 96.256 143.36 35.328 175.104-35.328 175.616-96.256 143.872-142.336 96.768-174.592 35.328-175.104-35.328-142.848-96.768T99.84 685.568 64.512 509.952 99.84 334.848t96.256-143.36T338.944 94.72t175.104-35.328zm281.6 364.544q18.432-18.432 19.456-45.568T797.696 332.8t-45.056-17.92-45.056 18.944L418.816 622.592l-99.328-98.304q-18.432-18.432-45.056-18.944t-45.056 17.92-18.944 43.52 17.92 43.52l142.336 143.36q18.432 18.432 48.128 17.92t48.128-18.944l-4.096 4.096z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-overview"><path d="M430.183 452.352 24.577 691.2A496.026 496.026 0 0 1 0 536.371C0 283.546 188.62 75.674 430.183 51.2v401.152zm27.136 96.614L870.4 814.848C784.026 941.261 640.513 1024 477.953 1024c-176.743 0-331.11-97.894-413.799-243.456L457.32 548.966zm49.92-311.5L773.019 83.66l50.943 88.473-265.78 153.805zM493.415 83.712l88.525-51.251 51.046 88.627-88.525 51.251zm307.2 563.2 88.525-51.251 51.046 88.627-88.525 51.251zM514.15 416.768l354.406-205.107 50.893 88.371-354.406 205.107zm146.688 127.898 265.78-153.805 50.943 88.473-265.78 153.805z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo-wait"><path d="M472.8 756.2c0-75.2 35.5-143.5 91.1-187-3.2 1.6-6.9 2.6-10.6 2.6H296.5c-12.7 0-23.3-10.6-23.3-23.3s10.6-23.3 23.3-23.3h256.3c12.7 0 23.3 10.6 23.3 23.3 0 6.4-2.6 11.7-6.4 15.9 37.1-27.5 82.6-43.4 131.9-43.4 61.4 0 126 19.1 167.4 58.3V101.1c0-20.7-16.4-37.1-37.1-37.1H163c-20.7 0-37.1 16.4-37.1 37.1v798.6c0 20.7 16.4 37.1 37.1 37.1h394c-53.5-41.9-84.2-107-84.2-180.6zM296.5 237.7h399.3c12.7 0 23.3 10.6 23.3 23.3 0 12.7-10.6 23.3-23.3 23.3H296.5c-12.7 0-23.3-10.6-23.3-23.3 0-12.7 10.6-23.3 23.3-23.3zm0 144h399.3c12.7 0 23.3 10.6 23.3 23.3 0 12.7-10.6 23.3-23.3 23.3H296.5c-12.7 0-23.3-10.6-23.3-23.3 0-12.7 10.6-23.3 23.3-23.3z" /><path d="m569.7 564.5-6.4 4.8c2.7-1.1 4.9-2.7 6.4-4.8zm142-10.6c-111.7 0-202.8 90.6-202.8 202.8 0 111.7 90.6 202.8 202.8 202.8 111.7 0 202.8-90.6 202.8-202.8s-91.1-202.8-202.8-202.8zm107.2 182L796 747.2c-7.2 4-13.3 9.7-17.7 16.7L729 850.8c-.6 1.2-1.3 2.2-2.3 3-3.8 3.3-9.6 2.9-12.9-1l-36.9-37.1-77.9 50.6 52.7-75.8-32.1-32.3c-1.1-.9-1.9-2.1-2.5-3.4-1.8-4.5.4-9.6 4.8-11.4l89.8-46.5c7-4.1 12.5-10.4 15.8-17.8l9.7-26c.4-1.8 1.4-3.4 2.9-4.5 3.3-2.5 8-1.8 10.5 1.5l70.8 71.1c1.2 1 2 2.2 2.6 3.6 1.5 4.5-.7 9.4-5.1 11.1z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-svg-todo"><path d="M739.539 568.906c94.264 0 170.666 76.345 170.666 170.667 0 94.264-76.4 170.667-170.666 170.667s-170.667-76.403-170.667-170.667c0-94.322 76.402-170.667 170.667-170.667zm56.906-455.127c31.459 0 56.888 25.428 56.888 56.888v372.906C819.712 524.004 781.199 512 739.556 512 613.888 512 512 613.888 512 739.555c0 68.324 30.777 128.968 78.507 170.667H227.555c-31.459 0-56.888-25.429-56.888-56.889V170.667c0-31.46 25.429-56.89 56.888-56.89zm-56.906 513.608c-15.544 0-28.19 12.546-28.44 27.976l-.005.47v72.874a56.88 56.88 0 0 0 16.21 39.756l.459.465 55.125 55.181c11.093 11.094 29.127 11.094 40.22 0 10.983-10.982 11.093-28.766.33-39.885l-.33-.335-55.125-55.183v-72.874c0-15.645-12.687-28.445-28.444-28.445zM426.666 512H312.889c-15.702 0-28.444 12.743-28.444 28.445 0 15.7 12.742 28.444 28.444 28.444h113.777c15.702 0 28.445-12.743 28.445-28.444 0-15.702-12.743-28.445-28.444-28.445zm113.779-113.778H312.889c-15.702 0-28.444 12.743-28.444 28.445 0 15.701 12.742 28.444 28.444 28.444h227.556c15.7 0 28.444-12.743 28.444-28.444 0-15.702-12.743-28.445-28.444-28.445zM654.22 284.445h-341.33c-15.703 0-28.445 12.742-28.445 28.444 0 15.701 12.742 28.444 28.444 28.444h341.333c15.701 0 28.445-12.743 28.445-28.444 0-15.702-12.744-28.444-28.445-28.444z" /></symbol>',e.insertBefore(t,e.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()}var J=(o,e)=>{const t=o.__vccOpts||o;for(const[s,n]of e)t[s]=n;return t};const ye={};function we(o,e){const t=p("router-view");return h(),A(t)}var xe=J(ye,[["render",we]]);const Ce="modulepreload",Z={},Ae="./",b=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Ae}${s}`,s in Z)return;Z[s]=!0;const n=s.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":Ce,n||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),n)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",l)})})).then(()=>e())};function D(o,e){Q.set(o,e)}function q(o){return Q.get(o)||""}var U=X("app",{state:()=>({siderbar:{active:q("siderbarStatus")==="1"}}),getters:{},actions:{toggleSidebar(){this.siderbar.active=!this.siderbar.active,D("siderbarStatus",this.siderbar.active?"1":"0")}}});function C(o){if(typeof o!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(o))}function ee(o,e){for(var t="",s=0,n=-1,r=0,i,c=0;c<=o.length;++c){if(c<o.length)i=o.charCodeAt(c);else{if(i===47)break;i=47}if(i===47){if(!(n===c-1||r===1))if(n!==c-1&&r===2){if(t.length<2||s!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var l=t.lastIndexOf("/");if(l!==t.length-1){l===-1?(t="",s=0):(t=t.slice(0,l),s=t.length-1-t.lastIndexOf("/")),n=c,r=0;continue}}else if(t.length===2||t.length===1){t="",s=0,n=c,r=0;continue}}e&&(t.length>0?t+="/..":t="..",s=2)}else t.length>0?t+="/"+o.slice(n+1,c):t=o.slice(n+1,c),s=c-n-1;n=c,r=0}else i===46&&r!==-1?++r:r=-1}return t}function ze(o,e){var t=e.dir||e.root,s=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+s:t+o+s:s}var V={resolve:function(){for(var e="",t=!1,s,n=arguments.length-1;n>=-1&&!t;n--){var r;n>=0?r=arguments[n]:(s===void 0&&(s=process.cwd()),r=s),C(r),r.length!==0&&(e=r+"/"+e,t=r.charCodeAt(0)===47)}return e=ee(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(C(e),e.length===0)return".";var t=e.charCodeAt(0)===47,s=e.charCodeAt(e.length-1)===47;return e=ee(e,!t),e.length===0&&!t&&(e="."),e.length>0&&s&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return C(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var s=arguments[t];C(s),s.length>0&&(e===void 0?e=s:e+="/"+s)}return e===void 0?".":V.normalize(e)},relative:function(e,t){if(C(e),C(t),e===t||(e=V.resolve(e),t=V.resolve(t),e===t))return"";for(var s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var n=e.length,r=n-s,i=1;i<t.length&&t.charCodeAt(i)===47;++i);for(var c=t.length,l=c-i,v=r<l?r:l,d=-1,a=0;a<=v;++a){if(a===v){if(l>v){if(t.charCodeAt(i+a)===47)return t.slice(i+a+1);if(a===0)return t.slice(i+a)}else r>v&&(e.charCodeAt(s+a)===47?d=a:a===0&&(d=0));break}var x=e.charCodeAt(s+a),L=t.charCodeAt(i+a);if(x!==L)break;x===47&&(d=a)}var w="";for(a=s+d+1;a<=n;++a)(a===n||e.charCodeAt(a)===47)&&(w.length===0?w+="..":w+="/..");return w.length>0?w+t.slice(i+d):(i+=d,t.charCodeAt(i)===47&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(C(e),e.length===0)return".";for(var t=e.charCodeAt(0),s=t===47,n=-1,r=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),t===47){if(!r){n=i;break}}else r=!1;return n===-1?s?"/":".":s&&n===1?"//":e.slice(0,n)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');C(e);var s=0,n=-1,r=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var c=t.length-1,l=-1;for(i=e.length-1;i>=0;--i){var v=e.charCodeAt(i);if(v===47){if(!r){s=i+1;break}}else l===-1&&(r=!1,l=i+1),c>=0&&(v===t.charCodeAt(c)?--c==-1&&(n=i):(c=-1,n=l))}return s===n?n=l:n===-1&&(n=e.length),e.slice(s,n)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!r){s=i+1;break}}else n===-1&&(r=!1,n=i+1);return n===-1?"":e.slice(s,n)}},extname:function(e){C(e);for(var t=-1,s=0,n=-1,r=!0,i=0,c=e.length-1;c>=0;--c){var l=e.charCodeAt(c);if(l===47){if(!r){s=c+1;break}continue}n===-1&&(r=!1,n=c+1),l===46?t===-1?t=c:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||n===-1||i===0||i===1&&t===n-1&&t===s+1?"":e.slice(t,n)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return ze("/",e)},parse:function(e){C(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var s=e.charCodeAt(0),n=s===47,r;n?(t.root="/",r=1):r=0;for(var i=-1,c=0,l=-1,v=!0,d=e.length-1,a=0;d>=r;--d){if(s=e.charCodeAt(d),s===47){if(!v){c=d+1;break}continue}l===-1&&(v=!1,l=d+1),s===46?i===-1?i=d:a!==1&&(a=1):i!==-1&&(a=-1)}return i===-1||l===-1||a===0||a===1&&i===l-1&&i===c+1?l!==-1&&(c===0&&n?t.base=t.name=e.slice(1,l):t.base=t.name=e.slice(c,l)):(c===0&&n?(t.name=e.slice(1,i),t.base=e.slice(1,l)):(t.name=e.slice(c,i),t.base=e.slice(c,l)),t.ext=e.slice(i,l)),c>0?t.dir=e.slice(0,c-1):n&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};V.posix=V;var ke=V;const Le=["href"],Te=z({props:{prefix:{type:String,default:"icon"},svgClass:{type:String,default:""},name:{type:String,required:!0},color:{type:String,default:"red"}},setup(o){const e=o,t=R(()=>`#${e.prefix}-${e.name}`);return(s,n)=>(h(),g("svg",{class:B(o.svgClass),"aria-hidden":"true"},[m("use",{href:_(t)},null,8,Le)],2))}});var te=J(Te,[["__scopeId","data-v-dc49ef06"]]);const oe=z({props:{url:{type:String,required:!0},route:{type:null,required:!0}},setup(o){return(e,t)=>{const s=p("svg-icon"),n=p("el-menu-item");return h(),A(n,{index:o.url},{title:f(()=>{var r;return[E(k((r=o.route.meta)==null?void 0:r.title),1)]}),default:f(()=>{var r,i;return[((r=o.route.meta)==null?void 0:r.icon)?(h(),A(s,{key:0,class:"el-icon",name:`svg-${(i=o.route.meta)==null?void 0:i.icon}`},null,8,["name"])):O("v-if",!0)]}),_:1},8,["index"])}}}),Se=z({props:{baseUrl:{type:String,required:!0},route:{type:null,required:!0}},setup(o){const e=o,t=P({}),s=(r,i)=>{const c=r.filter(l=>!l.hidden);return c.length===1?(t.value=c[0],!0):c.length===0?(t.value=G({},i),!0):!1},n=r=>ke.resolve(e.baseUrl,r);return(r,i)=>{const c=p("siderbar-item",!0),l=p("el-sub-menu");return!o.route.hidden&&o.route.children?(h(),g(S,{key:0},[s(o.route.children,o.route)?(h(),g(S,{key:0},[O(` <el-menu-item :index="resolve(onlyOneChild.path)">
        <svg-icon
          v-if="onlyOneChild.meta?.icon"
          class="el-icon"
          :name="\`svg-\${onlyOneChild.meta?.icon}\`"
        />
        <span>{{ onlyOneChild.meta?.name }}</span>
      </el-menu-item> `),u(oe,{route:t.value,url:n(t.value.path)},null,8,["route","url"])],2112)):(h(),A(l,{key:1,index:o.route.path},{title:f(()=>{var v,d,a;return[((v=o.route.meta)==null?void 0:v.icon)?(h(),A(te,{key:0,"svg-class":"el-icon",name:`svg-${(d=o.route.meta)==null?void 0:d.icon}`},null,8,["name"])):O("v-if",!0),m("span",null,k((a=o.route.meta)==null?void 0:a.title),1)]}),default:f(()=>[(h(!0),g(S,null,N(o.route.children,v=>(h(),g(S,null,[v.children?(h(),A(c,{key:v.path,route:v,"base-url":n(v.path)},null,8,["route","base-url"])):(h(),A(oe,{key:n(v.path),route:v,url:n(v.path)},null,8,["route","url"]))],64))),256))]),_:1},8,["index"]))],2112)):O("v-if",!0)}}});const De={class:"sidebar-container"},$e=z({setup(o){const e=U(),t=R(()=>!e.siderbar.active);return(s,n)=>{const r=p("el-menu"),i=p("el-scrollbar");return h(),g("div",De,[u(i,null,{default:f(()=>[u(r,{"show-timeout":200,"default-active":s.$route.path,collapse:_(t),"unique-opened":"",mode:"vertical","background-color":"#30354d","text-color":"#9699a5","active-text-color":"#fff",router:""},{default:f(()=>[(h(!0),g(S,null,N(_(se),c=>(h(),A(Se,{key:c.path,"base-url":c.path,route:c},null,8,["base-url","route"]))),128))]),_:1},8,["default-active","collapse"])]),_:1})])}}});const Ee={},Ve={class:"app-main"};function Me(o,e){const t=p("router-view");return h(),g("div",Ve,[u(t)])}var He=J(Ee,[["render",Me]]);const Be={class:"hamburger-container"},Oe=m("path",{d:"M908.70574649 831.22148693H134.16925867v-52.07344924h774.54813867v52.07344924zM531.80092872 442.96292125H130.86041885V390.889472h400.94050987zM531.80092872 634.17075485H130.86041885v-52.05597298h400.94050987zM901.4996992 245.91801458H126.9690368v-52.06762383h774.54231325v52.06762383zM669.95081672 518.02348658l225.4205383-150.2609408v300.53353244z","p-id":"5097"},null,-1),Pe=z({setup(o){const e=U(),{siderbar:t}=F(e),s=()=>e.toggleSidebar();return(n,r)=>(h(),g("div",Be,[(h(),g("svg",{class:B([{active:_(t).active},"hamburger"]),t:"1655886946936",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5096",width:"128",height:"128",onClick:s},[O(" eslint-disable-next-line max-len "),Oe],2))]))}});const qe={class:"navbar-container"},Re=z({setup(o){return(e,t)=>(h(),g("div",qe,[u(Pe)]))}});const Ie={class:"main-container"},$=z({setup(o){const e=U(),t=R(()=>e.siderbar.active),s=R(()=>!e.siderbar.active);return(n,r)=>(h(),g("div",{class:B(["app-warpper",{"open-siderbar":_(t),"hide-siderbar":_(s)}])},[u($e),m("div",Ie,[u(Re),u(He)])],2))}});var ne=X("todo",{state:()=>({todoList:JSON.parse(q("todoList")||"[]"),all:Number(q("todo-all")),over:Number(q("todo-over")),del:Number(q("todo-del"))}),getters:{completed:o=>o.todoList.filter(e=>e.completed),incomplete:o=>o.todoList.filter(e=>!e.completed)},actions:{addTodo(o){if(!o||this.todoList.some(t=>t.description===o))return;const e={id:Y(),completed:!1,description:o};this.todoList=[e,...this.todoList],this.all+=1,D("todo-all",String(this.all)),D("todoList",JSON.stringify(this.todoList))},doTodo(o){this.todoList=this.todoList.map(e=>(e.id===o&&(e.completed=!e.completed),e)),this.over+=1,D("todo-over",String(this.over)),D("todoList",JSON.stringify(this.todoList))},delTodo(o){this.todoList.splice(o,1),this.todoList=[...this.todoList],this.del+=1,D("todo-del",String(this.del)),D("todoList",JSON.stringify(this.todoList))}}}),T;(function(o){o[o.all=0]="all",o[o.completed=1]="completed",o[o.incomplete=2]="incomplete"})(T||(T={}));function je(){const o=P(""),e=P([]),t=P(0),s=ne(),{todoList:n,completed:r,incomplete:i}=F(s),c=a=>{s.addTodo(a),o.value=""},l=a=>s.doTodo(a),v=a=>s.delTodo(a),d=a=>{switch(a){case 0:e.value=n.value,t.value=0;break;case 1:e.value=r.value,t.value=1;break;case 2:e.value=i.value,t.value=2;break}};return ae(()=>{d(0)}),le(n,()=>{d(t.value)}),{active:t,list:e,todo:o,todoList:n,incomplete:i,completed:r,addTodo:c,doTodo:l,delTodo:v,seeDifferentTodo:d}}const Ne={class:"todo-list"},Fe=["onClick"],Je={class:"todo-list-item-des"},Ue=["onClick"],Ke={class:"todo-bottom"},We=E(" \u6240\u6709 "),Ge=E(" \u5DF2\u5B8C\u6210 "),Qe=E(" \u672A\u5B8C\u6210 "),Xe=z({setup(o){const{active:e,todo:t,list:s,incomplete:n,addTodo:r,doTodo:i,delTodo:c,seeDifferentTodo:l}=je();return(v,d)=>{const a=p("el-input"),x=p("el-scrollbar"),L=p("el-check-tag"),w=p("el-card"),I=p("el-col");return h(),A(I,{span:6,class:"todo-container"},{default:f(()=>[u(w,null,{header:f(()=>[u(a,{modelValue:_(t),"onUpdate:modelValue":d[0]||(d[0]=y=>de(t)?t.value=y:null),placeholder:"Todo List",onKeydown:d[1]||(d[1]=ue(y=>_(r)(_(t)),["enter"]))},null,8,["modelValue"])]),default:f(()=>[m("ul",Ne,[u(x,{height:"200px"},{default:f(()=>[(h(!0),g(S,null,N(_(s),(y,j)=>(h(),g("li",{key:y.id,class:B(["todo-list-item",{checked:y.completed}]),onClick:H=>_(i)(y.id)},[m("div",{class:B([{"radio-checked":y.completed},"todo-list-item-radio"])},null,2),m("span",Je,k(y.description),1),m("span",{class:"todo-list-item-close",onClick:ve(H=>_(c)(j),["stop"])},"\u2715",8,Ue)],10,Fe))),128))]),_:1})]),m("div",Ke,[E(k(_(n).length)+" \u6761\u672A\u5B8C\u6210 ",1),u(L,{checked:_(e)===_(T).all,onClick:d[2]||(d[2]=y=>_(l)(_(T).all))},{default:f(()=>[We]),_:1},8,["checked"]),u(L,{checked:_(e)===_(T).completed,type:"info",onClick:d[3]||(d[3]=y=>_(l)(_(T).completed))},{default:f(()=>[Ge]),_:1},8,["checked"]),u(L,{checked:_(e)===_(T).incomplete,type:"warning",onClick:d[4]||(d[4]=y=>_(l)(_(T).incomplete))},{default:f(()=>[Qe]),_:1},8,["checked"])])]),_:1})]),_:1})}}});const Ye={class:"todo-overview-wapper"},Ze={class:"todo-overview-icon todo-icon-overview"},e1={class:"todo-overview-description"},t1=m("div",{class:"todo-overview-text"},"\u603B\u8BA1",-1),o1={class:"todo-overview-num"},n1={class:"todo-overview-wapper"},s1={class:"todo-overview-icon todo-icon-wait"},i1={class:"todo-overview-description"},r1=m("div",{class:"todo-overview-text"},"\u5F85\u505A",-1),c1={class:"todo-overview-num"},a1={class:"todo-overview-wapper"},l1={class:"todo-overview-icon todo-icon-over"},d1={class:"todo-overview-description"},u1=m("div",{class:"todo-overview-text"},"\u5B8C\u6210",-1),v1={class:"todo-overview-num"},m1={class:"todo-overview-wapper"},_1={class:"todo-overview-icon todo-icon-del"},h1={class:"todo-overview-description"},f1=m("div",{class:"todo-overview-text"},"\u5220\u9664",-1),p1={class:"todo-overview-num"},g1=z({setup(o){const e=ne(),{all:t,incomplete:s,over:n,del:r}=F(e),i=(v,d)=>Math.floor(Math.random()*(v-d+1)+d),c=[];for(let v=0;v<10;v++){const d=i(1e3,1);c.push({orderNo:Y(),num:d,status:d>500?"success":"pending"})}const l=P(c);return(v,d)=>{const a=p("svg-icon"),x=p("el-col"),L=p("el-row"),w=p("el-table-column"),I=p("el-tag"),y=p("el-table"),j=p("el-card");return h(),g(S,null,[u(L,{class:"todo-overview",gutter:20},{default:f(()=>[u(x,{span:6},{default:f(()=>[m("div",Ye,[m("div",Ze,[u(a,{"svg-class":"el-icon",name:"svg-todo-overview"})]),m("div",e1,[t1,m("div",o1,k(_(t)),1)])])]),_:1}),u(x,{span:6},{default:f(()=>[m("div",n1,[m("div",s1,[u(a,{"svg-class":"el-icon",name:"svg-todo-wait"})]),m("div",i1,[r1,m("div",c1,k(_(s).length),1)])])]),_:1}),u(x,{span:6},{default:f(()=>[m("div",a1,[m("div",l1,[u(a,{"svg-class":"el-icon",name:"svg-todo-over"})]),m("div",d1,[u1,m("div",v1,k(_(n)),1)])])]),_:1}),u(x,{span:6},{default:f(()=>[m("div",m1,[m("div",_1,[u(a,{"svg-class":"el-icon",name:"svg-todo-del"})]),m("div",h1,[f1,m("div",p1,k(_(r)),1)])])]),_:1})]),_:1}),u(L,{class:"mt20",gutter:20},{default:f(()=>[u(Xe),u(x,{span:12},{default:f(()=>[u(j,null,{default:f(()=>[u(y,{data:l.value},{default:f(()=>[u(w,{prop:"orderNo",label:"ID",width:"400px"}),u(w,{prop:"num",label:"\u6570\u91CF"}),u(w,{label:"\u72B6\u6001"},{default:f(H=>[u(I,{type:H.row.status==="success"?H.row.status:"warning"},{default:f(()=>[E(k(H.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1})],64)}}}),b1=[{path:"/",redirect:"/dashboard/index"}],se=[{path:"/dashboard",component:$,redirect:"/dashboard/index",children:[{path:"index",name:"DashBoard",component:g1,meta:{icon:"dashboard",title:"\u9996\u9875"}}]},{path:"/documentation",component:$,redirect:"/documentation/index",children:[{path:"index",name:"Documentation",component:()=>b(()=>import("./index.12c0d5bd.js"),["assets/index.12c0d5bd.js","assets/vendor.51bdb2ae.js"]),meta:{icon:"documentation",title:"\u6587\u6863"}}]},{path:"/icon",component:$,redirect:"/icon/index",children:[{path:"index",name:"Icon",component:()=>b(()=>import("./index.154de4c3.js"),["assets/index.154de4c3.js","assets/index.3303967d.css","assets/vendor.51bdb2ae.js"]),meta:{icon:"icon",title:"\u56FE\u6807"}}]},{path:"/components",component:$,redirect:"/components/tinymce",meta:{icon:"component",title:"\u7EC4\u4EF6"},children:[{path:"tinymce",name:"Tinymce",component:()=>b(()=>import("./index.3607ac90.js"),["assets/index.3607ac90.js","assets/index.c82cd88a.css","assets/vendor.51bdb2ae.js"]),meta:{title:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668"}},{path:"markdown",name:"Markdown",component:()=>b(()=>import("./markdown.4796b0d4.js"),["assets/markdown.4796b0d4.js","assets/vendor.51bdb2ae.js"]),meta:{title:"Markdown"}}]},{path:"/nested",component:$,meta:{icon:"nested",title:"\u5D4C\u5957"},children:[{path:"menu1",name:"menu1",component:()=>b(()=>import("./index.c10bf23c.js"),["assets/index.c10bf23c.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u83DC\u5355 1"}},{path:"menu2",name:"menu2",component:()=>b(()=>import("./index.6968a110.js"),["assets/index.6968a110.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u83DC\u5355 2"},children:[{path:"menu2-1",name:"menu2-1",component:()=>b(()=>import("./index.13706755.js"),["assets/index.13706755.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u83DC\u5355 2-1"}},{path:"menu2-2",name:"menu2-2",component:()=>b(()=>import("./index.b45ad32b.js"),["assets/index.b45ad32b.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u83DC\u5355 2-2"},children:[{path:"menu2-2-1",name:"menu2-2-1",component:()=>b(()=>import("./index.7b701def.js"),["assets/index.7b701def.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u83DC\u5355 2-2-1"}},{path:"menu2-2-2",name:"menu2-2-2",component:()=>b(()=>import("./index.1c99f9ed.js"),["assets/index.1c99f9ed.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u83DC\u5355 2-2-2"}}]}]}]},{path:"/table",component:$,meta:{icon:"table",title:"Table"},children:[{path:"dynamic-table",name:"DynamicTable",component:()=>b(()=>import("./index.8dffe4b3.js"),["assets/index.8dffe4b3.js","assets/vendor.51bdb2ae.js"]),meta:{title:"\u52A8\u6001 Table"}},{path:"drag-table",name:"DragTable",component:()=>b(()=>import("./drag-table.43d8ad62.js"),["assets/drag-table.43d8ad62.js","assets/drag-table.fea4ccd4.css","assets/vendor.51bdb2ae.js"]),meta:{title:"\u62D6\u62FD Table"}},{path:"inline-edit-table",name:"InlineEditTable",component:()=>b(()=>import("./inline-edit-table.6d17b395.js"),["assets/inline-edit-table.6d17b395.js","assets/index.c4e14ccc.css","assets/vendor.51bdb2ae.js"]),meta:{title:"Table \u5185\u7F16\u8F91"}},{path:"complex-table",name:"ComplexTable",component:()=>b(()=>import("./index.7290bb68.js"),["assets/index.7290bb68.js","assets/index.c4e14ccc.css","assets/vendor.51bdb2ae.js"]),meta:{title:"\u7EFC\u5408 Table"}}]},{path:"/tabs",component:$,redirect:"/components/index",children:[{path:"index",name:"tabs",component:()=>b(()=>import("./index.2c778db1.js"),["assets/index.2c778db1.js","assets/vendor.51bdb2ae.js"]),meta:{icon:"tabs",title:"Tab"}}]}],y1=me({history:_e(),routes:[...b1,...se]}),w1={count:0},x1=he({state:w1,getters:{double:o=>o.count*2},mutations:{ADD:(o,e)=>{e?o.count+=e:o.count++},SUB:(o,e)=>{e?o.count-=e:o.count--}},actions:{TestActionCommit({state:o,commit:e,dispatch:t},s){return console.log("---------------dispatch TestActionCommit---------------"),new Promise((n,r)=>{setTimeout(()=>{e("ADD",s),n(10)},2e3)})},TestActionDispatch({state:o,commit:e,dispatch:t},s){console.log("---------------TestActionDispatch dispatch TestActionCommit---------------"),t("TestActionCommit",s)}}});const M=fe(xe),C1=pe();M.component("SvgIcon",te);M.use(ge);M.use(C1);M.use(x1);M.use(y1);M.mount("#app");export{J as _};
