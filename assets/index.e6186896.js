import{Y as l,b as m,j as p,r as a,o as i,f,l as s,u as b,w as y,F as _,h as C}from"./vendor.88d48fbc.js";function v(t){if(!t||!r(t))return l.warning("\u8BF7\u8F93\u5165\u5185\u5BB9\uFF01");r(t)&&l.success("\u590D\u5236\u6210\u529F")}function r(t){const e=document.createElement("textarea");e.setAttribute("readonly","readonly"),e.value=t,document.body.appendChild(e),e.select();const o=document.execCommand("copy");return document.body.removeChild(e),o}const x=C("copy"),F=m({setup(t){const e=p("https://github.com/webB1an/vite-element-admin");return(o,n)=>{const c=a("el-input"),d=a("el-button");return i(),f(_,null,[s(c,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=u=>e.value=u),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",style:{width:"500px"}},null,8,["modelValue"]),s(d,{onClick:n[1]||(n[1]=u=>b(v)(e.value)),type:"primary"},{default:y(()=>[x]),_:1})],64)}}});export{F as default};
