import{b as d,j as n,E as g,D as x,t as p,m as T,q as w,p as N,r as o,o as l,f as b,l as r,w as u,F as i,h as B,k as R,c as v,i as $,K as j}from"./vendor.d58b4ba0.js";const q=d({emits:["create"],setup(k,{emit:e}){const a=n("");return g(()=>{a.value=x(),e("create")}),(c,s)=>p(a.value)}}),F=d({setup(k){const e=n("1"),a=n(0),c=[{label:"User",key:"1"},{label:"Config",key:"2"},{label:"Role",key:"3"},{label:"Task",key:"4"}],s=T(),f=w();N(e,()=>{f.push(`${s.path}?tab=${e.value}`)});const m=s.query.tab;m?e.value=m:e.value="1";const y=()=>{a.value=a.value+1};return(D,_)=>{const C=o("el-tag"),h=o("el-tab-pane"),V=o("el-tabs");return l(),b(i,null,[r(C,null,{default:u(()=>[B("mountend Times: "+p(a.value),1)]),_:1}),r(V,{class:"mt20",type:"border-card",modelValue:e.value,"onUpdate:modelValue":_[0]||(_[0]=t=>e.value=t)},{default:u(()=>[(l(),b(i,null,R(c,t=>r(h,{label:t.label,name:t.key,key:t.key},{default:u(()=>[(l(),v(j,null,[e.value===t.key?(l(),v(q,{key:0,onCreate:y})):$("v-if",!0)],1024))]),_:2},1032,["label","name"])),64))]),_:1},8,["modelValue"])],64)}}});export{F as default};