import{d as J,r as F,K as Ae,x as p,i as B,L as we,J as ye,n as re,e as i,H as se,M as Ee,y as G,h as ce,I as de}from"./index-4fe7824b.js";import{c as te,e as ne,M as be,N as Pe,n as Z,t as A,s as Y,I as H,w as ue,L as W,b as Xe,p as le,D as $,O as Ye,y as Ie,T as ve,P as $e,o as Se,m as _,l as me,Q as Ze,R as Be,q,H as Oe,J as xe,f as oe,S as Ce,U as Me,C as ze,v as je,V as Ve}from"./file-2a06de25.js";import{u as _e,L as Re,d as Le,P as He}from"./index-74f31b2d.js";import{a as Ne,S as pe}from"./index-107c1d2e.js";import{m as We,b as qe}from"./index-2f1714f2.js";const[Ge,j]=te("image"),Je={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:Z,height:Z,radius:Z,lazyLoad:Boolean,iconSize:Z,showError:A,errorIcon:Y("photo-fail"),iconPrefix:String,showLoading:A,loadingIcon:Y("photo")};var Ke=J({name:Ge,props:Je,emits:["load","error"],setup(e,{emit:l,slots:s}){const a=F(!1),n=F(!0),g=F(),{$Lazyload:w}=Ae().proxy,C=p(()=>{const r={width:ne(e.width),height:ne(e.height)};return be(e.radius)&&(r.overflow="hidden",r.borderRadius=ne(e.radius)),r});B(()=>e.src,()=>{a.value=!1,n.value=!0});const b=r=>{n.value&&(n.value=!1,l("load",r))},x=()=>{const r=new Event("load");Object.defineProperty(r,"target",{value:g.value,enumerable:!0}),b(r)},u=r=>{a.value=!0,n.value=!1,l("error",r)},m=(r,L,d)=>d?d():i(H,{name:r,size:e.iconSize,class:L,classPrefix:e.iconPrefix},null),P=()=>{if(n.value&&e.showLoading)return i("div",{class:j("loading")},[m(e.loadingIcon,j("loading-icon"),s.loading)]);if(a.value&&e.showError)return i("div",{class:j("error")},[m(e.errorIcon,j("error-icon"),s.error)])},h=()=>{if(a.value||!e.src)return;const r={alt:e.alt,class:j("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?se(i("img",G({ref:g},r),null),[[Ee("lazy"),e.src]]):i("img",G({ref:g,src:e.src,onLoad:b,onError:u},r),null)},z=({el:r})=>{const L=()=>{r===g.value&&n.value&&x()};g.value?L():re(L)},X=({el:r})=>{r===g.value&&!a.value&&u()};return w&&Pe&&(w.$on("loaded",z),w.$on("error",X),we(()=>{w.$off("loaded",z),w.$off("error",X)})),ye(()=>{re(()=>{var r;(r=g.value)!=null&&r.complete&&!e.lazyLoad&&x()})}),()=>{var r;return i("div",{class:j({round:e.round,block:e.block}),style:C.value},[h(),P(),(r=s.default)==null?void 0:r.call(s)])}}});const ke=ue(Ke),fe=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),Qe=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),ie=te("image-preview")[1],ge=2.6;var ea=J({props:{src:String,show:Boolean,active:Number,minZoom:W(Z),maxZoom:W(Z),rootWidth:W(Number),rootHeight:W(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:l,slots:s}){const a=ce({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),n=_e(),g=F(),w=F(),C=F(!1),b=F(!1);let x=0;const u=p(()=>{const{scale:t,moveX:v,moveY:f,moving:R,zooming:U,initializing:M}=a,ee={transitionDuration:U||R||M?"0s":".3s"};return(t!==1||b.value)&&(ee.transform=`matrix(${t}, 0, 0, ${t}, ${v}, ${f})`),ee}),m=p(()=>{if(a.imageRatio){const{rootWidth:t,rootHeight:v}=e,f=C.value?v/a.imageRatio:t;return Math.max(0,(a.scale*f-t)/2)}return 0}),P=p(()=>{if(a.imageRatio){const{rootWidth:t,rootHeight:v}=e,f=C.value?v:t*a.imageRatio;return Math.max(0,(a.scale*f-v)/2)}return 0}),h=(t,v)=>{var f;if(t=$(t,+e.minZoom,+e.maxZoom+1),t!==a.scale){const R=t/a.scale;if(a.scale=t,v){const U=Ie((f=g.value)==null?void 0:f.$el),M={x:U.width*.5,y:U.height*.5},ee=a.moveX-(v.x-U.left-M.x)*(R-1),Fe=a.moveY-(v.y-U.top-M.y)*(R-1);a.moveX=$(ee,-m.value,m.value),a.moveY=$(Fe,-P.value,P.value)}else a.moveX=0,a.moveY=b.value?x:0;l("scale",{scale:t,index:e.active})}},z=()=>{h(1)},X=()=>{const t=a.scale>1?1:2;h(t,t===2||b.value?{x:n.startX.value,y:n.startY.value}:void 0)};let r,L,d,k,T,O,o,c,S=!1;const I=t=>{const{touches:v}=t;if(r=v.length,r===2&&e.disableZoom)return;const{offsetX:f}=n;n.start(t),L=a.moveX,d=a.moveY,c=Date.now(),S=!1,a.moving=r===1&&(a.scale!==1||b.value),a.zooming=r===2&&!f.value,a.zooming&&(k=a.scale,T=fe(v))},D=t=>{const{touches:v}=t;if(n.move(t),a.moving){const{deltaX:f,deltaY:R}=n,U=f.value+L,M=R.value+d;if((U>m.value||U<-m.value)&&!S&&n.isHorizontal()){a.moving=!1;return}S=!0,le(t,!0),a.moveX=$(U,-m.value,m.value),a.moveY=$(M,-P.value,P.value)}if(a.zooming&&(le(t,!0),v.length===2)){const f=fe(v),R=k*f/T;O=Qe(v),h(R,O)}},E=()=>{if(r>1)return;const{offsetX:t,offsetY:v}=n,f=Date.now()-c,R=250;t.value<ve&&v.value<ve&&(f<R?o?(clearTimeout(o),o=null,X()):o=setTimeout(()=>{l("close"),o=null},R):f>$e&&l("longPress"))},K=t=>{let v=!1;if((a.moving||a.zooming)&&(v=!0,a.moving&&L===a.moveX&&d===a.moveY&&(v=!1),!t.touches.length)){a.zooming&&(a.moveX=$(a.moveX,-m.value,m.value),a.moveY=$(a.moveY,-P.value,P.value),a.zooming=!1),a.moving=!1,L=0,d=0,k=1,a.scale<1&&z();const f=+e.maxZoom;a.scale>f&&h(f,O)}le(t,v),E(),n.reset()},N=()=>{const{rootWidth:t,rootHeight:v}=e,f=v/t,{imageRatio:R}=a;C.value=a.imageRatio>f&&R<ge,b.value=a.imageRatio>f&&R>=ge,b.value&&(x=(R*t-v)/2,a.moveY=x,a.initializing=!0,Ye(()=>{a.initializing=!1})),z()},Q=t=>{const{naturalWidth:v,naturalHeight:f}=t.target;a.imageRatio=f/v,N()};return B(()=>e.active,z),B(()=>e.show,t=>{t||z()}),B(()=>[e.rootWidth,e.rootHeight],N),Xe("touchmove",D,{target:p(()=>{var t;return(t=w.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>i(Re,{type:"spinner"},null)};return i(Ne,{ref:w,class:ie("swipe-item"),onTouchstartPassive:I,onTouchend:K,onTouchcancel:K},{default:()=>[s.image?i("div",{class:ie("image-wrap")},[s.image({src:e.src})]):i(ke,{ref:g,src:e.src,fit:"contain",class:ie("image",{vertical:C.value}),style:u.value,onLoad:Q},t)]})}}});const[aa,V]=te("image-preview"),oa=["show","teleport","transition","overlayStyle","closeOnPopstate"],ta={show:Boolean,loop:A,images:Se(),minZoom:_(1/3),maxZoom:_(3),overlay:A,closeable:Boolean,showIndex:A,className:me,closeIcon:Y("clear"),transition:String,beforeClose:Function,overlayClass:me,overlayStyle:Object,swipeDuration:_(300),startPosition:_(0),showIndicators:Boolean,closeOnPopstate:A,closeIconPosition:Y("top-right"),teleport:[String,Object]};var Te=J({name:aa,props:ta,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:l,slots:s}){const a=F(),n=ce({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),g=()=>{if(a.value){const d=Ie(a.value.$el);n.rootWidth=d.width,n.rootHeight=d.height,a.value.resize()}},w=d=>l("scale",d),C=d=>l("update:show",d),b=()=>{xe(e.beforeClose,{args:[n.active],done:()=>C(!1)})},x=d=>{d!==n.active&&(n.active=d,l("change",d))},u=()=>{if(e.showIndex)return i("div",{class:V("index")},[s.index?s.index({index:n.active}):`${n.active+1} / ${e.images.length}`])},m=()=>{if(s.cover)return i("div",{class:V("cover")},[s.cover()])},P=()=>{n.disableZoom=!0},h=()=>{n.disableZoom=!1},z=()=>i(pe,{ref:a,lazyRender:!0,loop:e.loop,class:V("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:x,onDragEnd:h,onDragStart:P},{default:()=>[e.images.map((d,k)=>i(ea,{src:d,show:e.show,active:n.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:n.rootWidth,rootHeight:n.rootHeight,disableZoom:n.disableZoom,onScale:w,onClose:b,onLongPress:()=>l("longPress",{index:k})},{image:s.image}))]}),X=()=>{if(e.closeable)return i(H,{role:"button",name:e.closeIcon,class:[V("close-icon",e.closeIconPosition),Oe],onClick:b},null)},r=()=>l("closed"),L=(d,k)=>{var T;return(T=a.value)==null?void 0:T.swipeTo(d,k)};return Le({swipeTo:L}),ye(g),B([Ze,Be],g),B(()=>e.startPosition,d=>x(+d)),B(()=>e.show,d=>{const{images:k,startPosition:T}=e;d?(x(+T),re(()=>{g(),L(+T,{immediate:!0})})):l("close",{index:n.active,url:k[n.active]})}),()=>i(He,G({class:[V(),e.className],overlayClass:[V("overlay"),e.overlayClass],onClosed:r,"onUpdate:show":C},q(e,oa)),{default:()=>[X(),z(),u(),m()]})}});let ae;const na={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function la(){({instance:ae}=We({setup(){const{state:e,toggle:l}=qe(),s=()=>{e.images=[]};return()=>i(Te,G(e,{onClosed:s,"onUpdate:show":l}),null)}}))}const ia=(e,l=0)=>{if(Pe)return ae||la(),e=Array.isArray(e)?{images:e,startPosition:l}:e,ae.open(oe({},na,e)),ae};ue(Te);const[ra,y,sa]=te("uploader");function he(e,l){return new Promise(s=>{if(l==="file"){s();return}const a=new FileReader;a.onload=n=>{s(n.target.result)},l==="dataUrl"?a.readAsDataURL(e):l==="text"&&a.readAsText(e)})}function De(e,l){return Ce(e).some(s=>s.file?Me(l)?l(s.file):s.file.size>+l:!1)}function ca(e,l){const s=[],a=[];return e.forEach(n=>{De(n,l)?a.push(n):s.push(n)}),{valid:s,invalid:a}}const ua=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,da=e=>ua.test(e);function Ue(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?da(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var va=J({props:{name:Z,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e,{emit:l,slots:s}){const a=()=>{const{status:u,message:m}=e.item;if(u==="uploading"||u==="failed"){const P=u==="failed"?i(H,{name:"close",class:y("mask-icon")},null):i(Re,{class:y("loading")},null),h=be(m)&&m!=="";return i("div",{class:y("mask")},[P,h&&i("div",{class:y("mask-message")},[m])])}},n=u=>{const{name:m,item:P,index:h,beforeDelete:z}=e;u.stopPropagation(),xe(z,{args:[P,{name:m,index:h}],done:()=>l("delete")})},g=()=>l("preview"),w=()=>l("reupload"),C=()=>{if(e.deletable&&e.item.status!=="uploading"){const u=s["preview-delete"];return i("div",{role:"button",class:y("preview-delete",{shadow:!u}),tabindex:0,"aria-label":sa("delete"),onClick:n},[u?u():i(H,{name:"cross",class:y("preview-delete-icon")},null)])}},b=()=>{if(s["preview-cover"]){const{index:u,item:m}=e;return i("div",{class:y("preview-cover")},[s["preview-cover"](oe({index:u},m))])}},x=()=>{const{item:u,lazyLoad:m,imageFit:P,previewSize:h,reupload:z}=e;return Ue(u)?i(ke,{fit:P,src:u.objectUrl||u.content||u.url,class:y("preview-image"),width:Array.isArray(h)?h[0]:h,height:Array.isArray(h)?h[1]:h,lazyLoad:m,onClick:z?w:g},{default:b}):i("div",{class:y("file"),style:ze(e.previewSize)},[i(H,{class:y("file-icon"),name:"description"},null),i("div",{class:[y("file-name"),"van-ellipsis"]},[u.file?u.file.name:u.url]),b()])};return()=>i("div",{class:y("preview")},[x(),a(),C()])}});const ma={name:_(""),accept:Y("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:_(1/0),imageFit:Y("cover"),resultType:Y("dataUrl"),uploadIcon:Y("photograph"),uploadText:String,deletable:A,reupload:Boolean,afterRead:Function,showUpload:A,modelValue:Se(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:A,previewOptions:Object,previewFullImage:A,maxSize:{type:[Number,String,Function],default:1/0}};var fa=J({name:ra,props:ma,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e,{emit:l,slots:s}){const a=F(),n=[],g=F(-1),w=(o=e.modelValue.length)=>({name:e.name,index:o}),C=()=>{a.value&&(a.value.value="")},b=o=>{if(C(),De(o,e.maxSize))if(Array.isArray(o)){const c=ca(o,e.maxSize);if(o=c.valid,l("oversize",c.invalid,w()),!o.length)return}else{l("oversize",o,w());return}if(o=ce(o),g.value>-1){const c=[...e.modelValue];c.splice(g.value,1,o),l("update:modelValue",c),g.value=-1}else l("update:modelValue",[...e.modelValue,...Ce(o)]);e.afterRead&&e.afterRead(o,w())},x=o=>{const{maxCount:c,modelValue:S,resultType:I}=e;if(Array.isArray(o)){const D=+c-S.length;o.length>D&&(o=o.slice(0,D)),Promise.all(o.map(E=>he(E,I))).then(E=>{const K=o.map((N,Q)=>{const t={file:N,status:"",message:"",objectUrl:URL.createObjectURL(N)};return E[Q]&&(t.content=E[Q]),t});b(K)})}else he(o,I).then(D=>{const E={file:o,status:"",message:"",objectUrl:URL.createObjectURL(o)};D&&(E.content=D),b(E)})},u=o=>{const{files:c}=o.target;if(e.disabled||!c||!c.length)return;const S=c.length===1?c[0]:[].slice.call(c);if(e.beforeRead){const I=e.beforeRead(S,w());if(!I){C();return}if(Ve(I)){I.then(D=>{x(D||S)}).catch(C);return}}x(S)};let m;const P=()=>l("closePreview"),h=o=>{if(e.previewFullImage){const c=e.modelValue.filter(Ue),S=c.map(I=>(I.objectUrl&&!I.url&&I.status!=="failed"&&(I.url=I.objectUrl,n.push(I.url)),I.url)).filter(Boolean);m=ia(oe({images:S,startPosition:c.indexOf(o),onClose:P},e.previewOptions))}},z=()=>{m&&m.close()},X=(o,c)=>{const S=e.modelValue.slice(0);S.splice(c,1),l("update:modelValue",S),l("delete",o,w(c))},r=o=>{O(),g.value=o},L=(o,c)=>{const S=["imageFit","deletable","reupload","previewSize","beforeDelete"],I=oe(q(e,S),q(o,S,!0));return i(va,G({item:o,index:c,onClick:()=>l(e.reupload?"clickReupload":"clickPreview",o,w(c)),onDelete:()=>X(o,c),onPreview:()=>h(o),onReupload:()=>r(c)},q(e,["name","lazyLoad"]),I),q(s,["preview-cover","preview-delete"]))},d=()=>{if(e.previewImage)return e.modelValue.map(L)},k=o=>l("clickUpload",o),T=()=>{if(e.modelValue.length>=+e.maxCount&&!e.reupload)return;const o=e.modelValue.length>=+e.maxCount&&e.reupload,c=e.readonly?null:i("input",{ref:a,type:"file",class:y("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&g.value===-1,disabled:e.disabled,onChange:u},null);return s.default?se(i("div",{class:y("input-wrapper"),onClick:k},[s.default(),c]),[[de,!o]]):se(i("div",{class:y("upload",{readonly:e.readonly}),style:ze(e.previewSize),onClick:k},[i(H,{name:e.uploadIcon,class:y("upload-icon")},null),e.uploadText&&i("span",{class:y("upload-text")},[e.uploadText]),c]),[[de,e.showUpload&&!o]])},O=()=>{a.value&&!e.disabled&&a.value.click()};return we(()=>{n.forEach(o=>URL.revokeObjectURL(o))}),Le({chooseFile:O,closeImagePreview:z}),je(()=>e.modelValue),()=>i("div",{class:y()},[i("div",{class:y("wrapper",{disabled:e.disabled})},[d(),T()])])}});const Pa=ue(fa);export{Pa as U};
