import{m as I,b as M}from"./index-2f1714f2.js";import{c as N,q as L,s as k,n as C,a9 as z,l as b,I as j,M as U,f as h,N as q,K}from"./file-2a06de25.js";import{P as V,L as D}from"./index-74f31b2d.js";import{d as F,i as v,J as H,Q as J,e as a,y as S,r as Q,K as _}from"./index-4fe7824b.js";let d=0;function A(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[E,l]=N("toast"),G=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],R={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:C,iconSize:C,duration:z(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:b,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:b,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var W=F({name:E,props:R,emits:["update:show"],setup(e,{emit:s,slots:n}){let u,i=!1;const c=()=>{const t=e.show&&e.forbidClick;i!==t&&(i=t,A(i))},r=t=>s("update:show",t),y=()=>{e.closeOnClick&&r(!1)},f=()=>clearTimeout(u),m=()=>{const{icon:t,type:o,iconSize:w,iconPrefix:T,loadingType:B}=e;if(t||o==="success"||o==="fail")return a(j,{name:t||o,size:w,class:l("icon"),classPrefix:T},null);if(o==="loading")return a(D,{class:l("loading"),size:w,type:B},null)},x=()=>{const{type:t,message:o}=e;if(n.message)return a("div",{class:l("text")},[n.message()]);if(U(o)&&o!=="")return t==="html"?a("div",{key:0,class:l("text"),innerHTML:String(o)},null):a("div",{class:l("text")},[o])};return v(()=>[e.show,e.forbidClick],c),v(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(u=setTimeout(()=>{r(!1)},e.duration))}),H(c),J(c),()=>a(V,S({class:[l([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:f,"onUpdate:show":r},L(e,G)),{default:()=>[m(),x()]})}});const X={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let g=[],Y=!1,O=h({},X);const Z=new Map;function P(e){return K(e)?e:{message:e}}function $(){const{instance:e,unmount:s}=I({setup(){const n=Q(""),{open:u,state:i,close:c,toggle:r}=M(),y=()=>{},f=()=>a(W,S(i,{onClosed:y,"onUpdate:show":r}),null);return v(n,m=>{i.message=m}),_().render=f,{open:u,close:c,message:n}}});return e}function ee(){if(!g.length||Y){const e=$();g.push(e)}return g[g.length-1]}function te(e={}){if(!q)return{};const s=ee(),n=P(e);return s.open(h({},O,Z.get(n.type||O.type),n)),s}const p=e=>s=>te(h({type:e},P(s))),le=p("loading"),ce=p("success"),re=p("fail");export{le as a,ce as b,re as c,te as s};
