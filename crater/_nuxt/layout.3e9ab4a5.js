import{_ as m,f as l,B as c,C as _,D as d,l as f,E as y,F as i,T as v,G as h,u as L}from"./entry.9106932b.js";const p={home:()=>m(()=>import("./home.17881f88.js"),["./home.17881f88.js","./entry.9106932b.js","./entry.ae3a2a22.css","./BaseButton.vue.7f019ff1.js","./BaseButton.150fcab7.css"],import.meta.url).then(t=>t.default||t)},T=l({props:{name:String},async setup(t,u){const o=await p[t.name]().then(a=>a.default||a);return()=>c(o,{},u.slots)}}),j=l({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,u){const o=h("_route"),a=o===_()?d():o,n=f(()=>{var e,s;return(s=(e=L(t.name))!=null?e:a.meta.layout)!=null?s:"default"});return()=>{var r;const e=n.value&&n.value in p,s=(r=a.meta.layoutTransition)!=null?r:y;return i(v,e&&s,{default:()=>i(T,e&&{key:n.value,name:n.value,hasTransition:void 0},u.slots).default()}).default()}}});export{j as _};
