import{b as v,j as k,q as B,r as n,o,f as r,k as e,w as u,F as p,l as h,c as i}from"./vendor.25a7e868.js";const w=v({setup(V){const s=["apple","banana","orange"],_=["apple","banana"],c=[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],a=k(_),x=k(_),b=k(1);return B(a,()=>{x.value=s.filter(d=>a.value.includes(d)),b.value+=1}),(d,m)=>{const f=n("el-checkbox"),g=n("el-checkbox-group"),l=n("el-table-column"),y=n("el-table");return o(),r(p,null,[e(g,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=t=>a.value=t)},{default:u(()=>[(o(),r(p,null,h(s,t=>e(f,{key:t,label:t},null,8,["label"])),64))]),_:1},8,["modelValue"]),(o(),i(y,{key:b.value,data:c,border:"",class:"mt20",style:{width:"100%"}},{default:u(()=>[e(l,{prop:"name",label:"fruit"}),(o(!0),r(p,null,h(x.value,t=>(o(),i(l,{prop:t,label:t},null,8,["prop","label"]))),256))]),_:1}))],64)}}}),A=v({setup(V){const s=["apple","banana","orange"],_=["apple"],c=[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],a=k(_);return(x,b)=>{const d=n("el-checkbox"),m=n("el-checkbox-group"),f=n("el-table-column"),g=n("el-table");return o(),r(p,null,[e(m,{modelValue:a.value,"onUpdate:modelValue":b[0]||(b[0]=l=>a.value=l)},{default:u(()=>[(o(),r(p,null,h(s,l=>e(d,{key:l,label:l},null,8,["label"])),64))]),_:1},8,["modelValue"]),e(g,{data:c,border:"",class:"mt20",style:{width:"100%"}},{default:u(()=>[e(f,{prop:"name",label:"fruit"}),(o(!0),r(p,null,h(a.value,l=>(o(),i(f,{prop:l,label:l},null,8,["prop","label"]))),256))]),_:1})],64)}}}),C=v({setup(V){return(s,_)=>{const c=n("el-tab-pane"),a=n("el-tabs");return o(),i(a,{type:"border-card"},{default:u(()=>[e(c,{label:"\u56FA\u5B9A\u8868\u5934"},{default:u(()=>[e(w)]),_:1}),e(c,{label:"\u4E0D\u56FA\u5B9A\u8868\u5934"},{default:u(()=>[e(A)]),_:1})]),_:1})}}});export{C as default};
