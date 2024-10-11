import ae from"./DCMH9HJc.js";import{o as m,A as L,T as le,i as Y,N as J,u as q,a as _}from"./19aztJ2y.js";import{s as ne}from"./oULPLmkO.js";import{u as se,f as Z,O as R,T as z,i as re,P as O,N as S}from"./DMRuzp0L.js";import{L as B,l as T,S as U,D as h,al as Q,f as M,I as oe,a2 as ue,F as G,E as ee,am as H,o as $,c as E,a as x,b as A,w as D,q as k,r as W,n as ie,A as X,t as j,B as de}from"./BbStRG96.js";import{t as ce}from"./CxIZtCgj.js";import"./BVAmCwLI.js";let pe=B({props:{onFocus:{type:Function,required:!0}},setup(e){let u=T(!0);return()=>u.value?U(Z,{as:"button",type:"button",features:se.Focusable,onFocus(i){i.preventDefault();let c,p=50;function r(){var t;if(p--<=0){c&&cancelAnimationFrame(c);return}if((t=e.onFocus)!=null&&t.call(e)){u.value=!1,cancelAnimationFrame(c);return}c=requestAnimationFrame(r)}c=requestAnimationFrame(r)}}):null}});var ve=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ve||{}),fe=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(fe||{});let te=Symbol("TabsContext");function N(e){let u=H(te,null);if(u===null){let i=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,N),i}return u}let K=Symbol("TabsSSRContext"),me=B({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:u,attrs:i,emit:c}){var p;let r=T((p=e.selectedIndex)!=null?p:e.defaultIndex),t=T([]),l=T([]),v=h(()=>e.selectedIndex!==null),g=h(()=>v.value?e.selectedIndex:r.value);function I(n){var s;let d=R(o.tabs.value,m),a=R(o.panels.value,m),f=d.filter(y=>{var w;return!((w=m(y))!=null&&w.hasAttribute("disabled"))});if(n<0||n>d.length-1){let y=q(r.value===null?0:Math.sign(n-r.value),{[-1]:()=>1,0:()=>q(Math.sign(n),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),w=q(y,{0:()=>d.indexOf(f[0]),1:()=>d.indexOf(f[f.length-1])});w!==-1&&(r.value=w),o.tabs.value=d,o.panels.value=a}else{let y=d.slice(0,n),w=[...d.slice(n),...y].find(V=>f.includes(V));if(!w)return;let C=(s=d.indexOf(w))!=null?s:o.selectedIndex.value;C===-1&&(C=o.selectedIndex.value),r.value=C,o.tabs.value=d,o.panels.value=a}}let o={selectedIndex:h(()=>{var n,s;return(s=(n=r.value)!=null?n:e.defaultIndex)!=null?s:null}),orientation:h(()=>e.vertical?"vertical":"horizontal"),activation:h(()=>e.manual?"manual":"auto"),tabs:t,panels:l,setSelectedIndex(n){g.value!==n&&c("change",n),v.value||I(n)},registerTab(n){var s;if(t.value.includes(n))return;let d=t.value[r.value];if(t.value.push(n),t.value=R(t.value,m),!v.value){let a=(s=t.value.indexOf(d))!=null?s:r.value;a!==-1&&(r.value=a)}},unregisterTab(n){let s=t.value.indexOf(n);s!==-1&&t.value.splice(s,1)},registerPanel(n){l.value.includes(n)||(l.value.push(n),l.value=R(l.value,m))},unregisterPanel(n){let s=l.value.indexOf(n);s!==-1&&l.value.splice(s,1)}};Q(te,o);let b=T({tabs:[],panels:[]}),F=T(!1);M(()=>{F.value=!0}),Q(K,h(()=>F.value?null:b.value));let P=h(()=>e.selectedIndex);return M(()=>{oe([P],()=>{var n;return I((n=e.selectedIndex)!=null?n:e.defaultIndex)},{immediate:!0})}),ue(()=>{if(!v.value||g.value==null||o.tabs.value.length<=0)return;let n=R(o.tabs.value,m);n.some((s,d)=>m(o.tabs.value[d])!==m(s))&&o.setSelectedIndex(n.findIndex(s=>m(s)===m(o.tabs.value[g.value])))}),()=>{let n={selectedIndex:r.value};return U(G,[t.value.length<=0&&U(pe,{onFocus:()=>{for(let s of t.value){let d=m(s);if((d==null?void 0:d.tabIndex)===0)return d.focus(),!0}return!1}}),L({theirProps:{...i,...le(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:n,slots:u,attrs:i,name:"TabGroup"})])}}}),be=B({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:u,slots:i}){let c=N("TabList");return()=>{let p={selectedIndex:c.selectedIndex.value},r={role:"tablist","aria-orientation":c.orientation.value};return L({ourProps:r,theirProps:e,slot:p,attrs:u,slots:i,name:"TabList"})}}}),xe=B({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:u,slots:i,expose:c}){var p;let r=(p=e.id)!=null?p:`headlessui-tabs-tab-${Y()}`,t=N("Tab"),l=T(null);c({el:l,$el:l}),M(()=>t.registerTab(l)),ee(()=>t.unregisterTab(l));let v=H(K),g=h(()=>{if(v.value){let a=v.value.tabs.indexOf(r);return a===-1?v.value.tabs.push(r)-1:a}return-1}),I=h(()=>{let a=t.tabs.value.indexOf(l);return a===-1?g.value:a}),o=h(()=>I.value===t.selectedIndex.value);function b(a){var f;let y=a();if(y===z.Success&&t.activation.value==="auto"){let w=(f=re(l))==null?void 0:f.activeElement,C=t.tabs.value.findIndex(V=>m(V)===w);C!==-1&&t.setSelectedIndex(C)}return y}function F(a){let f=t.tabs.value.map(y=>m(y)).filter(Boolean);if(a.key===_.Space||a.key===_.Enter){a.preventDefault(),a.stopPropagation(),t.setSelectedIndex(I.value);return}switch(a.key){case _.Home:case _.PageUp:return a.preventDefault(),a.stopPropagation(),b(()=>O(f,S.First));case _.End:case _.PageDown:return a.preventDefault(),a.stopPropagation(),b(()=>O(f,S.Last))}if(b(()=>q(t.orientation.value,{vertical(){return a.key===_.ArrowUp?O(f,S.Previous|S.WrapAround):a.key===_.ArrowDown?O(f,S.Next|S.WrapAround):z.Error},horizontal(){return a.key===_.ArrowLeft?O(f,S.Previous|S.WrapAround):a.key===_.ArrowRight?O(f,S.Next|S.WrapAround):z.Error}}))===z.Success)return a.preventDefault()}let P=T(!1);function n(){var a;P.value||(P.value=!0,!e.disabled&&((a=m(l))==null||a.focus({preventScroll:!0}),t.setSelectedIndex(I.value),ce(()=>{P.value=!1})))}function s(a){a.preventDefault()}let d=ne(h(()=>({as:e.as,type:u.type})),l);return()=>{var a,f;let y={selected:o.value,disabled:(a=e.disabled)!=null?a:!1},{...w}=e,C={ref:l,onKeydown:F,onMousedown:s,onClick:n,id:r,role:"tab",type:d.value,"aria-controls":(f=m(t.panels.value[I.value]))==null?void 0:f.id,"aria-selected":o.value,tabIndex:o.value?0:-1,disabled:e.disabled?!0:void 0};return L({ourProps:C,theirProps:w,slot:y,attrs:u,slots:i,name:"Tab"})}}}),he=B({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:u,attrs:i}){let c=N("TabPanels");return()=>{let p={selectedIndex:c.selectedIndex.value};return L({theirProps:e,ourProps:{},slot:p,attrs:i,slots:u,name:"TabPanels"})}}}),ge=B({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:u,slots:i,expose:c}){var p;let r=(p=e.id)!=null?p:`headlessui-tabs-panel-${Y()}`,t=N("TabPanel"),l=T(null);c({el:l,$el:l}),M(()=>t.registerPanel(l)),ee(()=>t.unregisterPanel(l));let v=H(K),g=h(()=>{if(v.value){let b=v.value.panels.indexOf(r);return b===-1?v.value.panels.push(r)-1:b}return-1}),I=h(()=>{let b=t.panels.value.indexOf(l);return b===-1?g.value:b}),o=h(()=>I.value===t.selectedIndex.value);return()=>{var b;let F={selected:o.value},{tabIndex:P,...n}=e,s={ref:l,id:r,role:"tabpanel","aria-labelledby":(b=m(t.tabs.value[I.value]))==null?void 0:b.id,tabIndex:o.value?P:-1};return!o.value&&e.unmount&&!e.static?U(Z,{as:"span","aria-hidden":!0,...s}):L({ourProps:s,theirProps:n,slot:F,attrs:u,slots:i,features:J.Static|J.RenderStrategy,visible:o.value,name:"TabPanel"})}}});const ye={class:"pt-32 px-4"},we=x("div",{class:"max-w-3xl p-8 pb-0"},[x("h2",{class:"font-display tracking-tight text-4xl font-semibold text-slate-700 sm:text-4xl"}," Be in charge of everything that comes before and after customer conversations ")],-1),Ie={class:"mt-6"},_e={class:"grid grid-cols-1 sm:grid-cols-2 gap-8"},Se={class:"space-y-4"},Te={class:"text-2xl font-semibold"},Ce={class:"text-slate-600"},Pe={key:0,class:"space-y-3"},Ae={class:"font-medium"},ke=["src","alt"],Le={__name:"FeatureTabs",setup(e){const u=[{id:"reports",label:"Reports",icon:"ph:chart-bar-duotone",subtitle:"Stay informed with auto-generated reports",content:"See what is currently going on with your conversations and agents, or assess which labels or inboxes are the most active, and analyze various important key performance indicators – from your Chatwoot dashboard.",image:"/features/reports.webp",points:["Conversations Report","Agents Report","Labels Report","Inbox Report","Teams Report"],bg:"#f0f9ff",buttonColor:"#1F93FF"},{id:"csat",label:"CSAT",icon:"ph:smiley-duotone",subtitle:"Customer Satisfaction Analysis for conversations",content:"Enable CSAT survey to automatically ask your customers to rate their conversation with you. View your comprehensive CSAT report, whenever you want.",image:"/features/csat.webp",bg:"#eef2ff",buttonColor:"#6366f1",points:["Automated feedback collection","Automated comprehensive reports","Useful filters","Download CSAT Report"]},{id:"campaigns",label:"Campaigns",icon:"ph:megaphone-duotone",subtitle:"Campaigns for proactive customer engagement",content:"Create ongoing or one-off live-chat campaigns to engage your customers. Send targeted messages to your customers based on their visits and how they spend time on your application.",image:"/features/campaigns.webp",bg:"#f0fdfa",buttonColor:"#14b8a6",points:["Automate your campaigns","Define smart triggering conditions","Schedule one-off campaigns"]},{id:"labels",label:"Labels",icon:"ph:tag-duotone",subtitle:"Organize your conversations with labels",content:"Create custom labels for your organization in minutes. Simply select relevant labels from your chat's sidebar while chatting with your customers.",image:"/features/labels.webp",bg:"#fff1f2",buttonColor:"#f43f5e",points:["Customize and colour your labels","Labels report on your dashboard","Automate label assignment by parameters"]}],i=T(0);function c(p){i.value=p}return(p,r)=>{const t=ae;return $(),E("section",ye,[x("div",{class:"max-w-6xl mx-auto rounded-xl transition-colors overflow-hidden",style:X({backgroundColor:u[k(i)].bg})},[we,x("div",null,[x("div",Ie,[A(k(me),{onChange:c},{default:D(()=>[A(k(be),{class:"px-8 flex overflow-x-auto"},{default:D(()=>[($(),E(G,null,W(u,(l,v)=>A(k(xe),{key:v,as:"template"},{default:D(({selected:g})=>[x("button",{class:ie(["px-4 py-2 rounded-lg mr-2 transition-all text-sm inline-flex items-center space-x-2",[g?"text-white shadow-xl":"text-slate-700"]]),style:X(k(i)===v?{backgroundColor:l.buttonColor}:{})},[A(t,{name:l.icon},null,8,["name"]),x("span",null,j(l.label),1)],6)]),_:2},1024)),64))]),_:1}),A(k(he),{class:"mt-8 p-8 pt-0"},{default:D(()=>[($(),E(G,null,W(u,(l,v)=>A(k(ge),{key:v},{default:D(()=>[x("div",_e,[x("div",Se,[x("p",Te,j(l.subtitle),1),x("p",Ce,j(l.content),1),l.points?($(),E("ul",Pe,[($(!0),E(G,null,W(l.points,g=>($(),E("li",{class:"flex items-center space-x-2",key:g},[A(t,{name:"ph:check-circle-duotone",class:"h-5 w-5 text-woot"}),x("span",Ae,j(g),1)]))),128))])):de("",!0)]),x("div",null,[x("img",{src:l.image,class:"rounded shadow-xl",load:"lazy",alt:l.label},null,8,ke)])])]),_:2},1024)),64))]),_:1})]),_:1})])])],4)])}}};export{Le as default};
