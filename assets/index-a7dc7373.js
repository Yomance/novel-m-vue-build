import{d as y,j as b,r as a,o as C,c as V,e as s,w as p,b as m,l as B,u as S,_ as k}from"./index-4fe7824b.js";import{C as F,g as U,l as N,F as $}from"./slider-8332a8ff.js";import{u as q}from"./index-2f1714f2.js";import{F as I}from"./index-4984d8d9.js";import{s as c}from"./function-call-216768fc.js";import{C as T}from"./index-957eda2f.js";import{B as j}from"./index-74f31b2d.js";import"./file-2a06de25.js";import"./index-a9a9e208.js";import"./use-id-b193c290.js";const D={class:"login-view"},E={style:{margin:"16px"}},G=y({__name:"index",setup(P){const _=q(),d=b(),l=a(U());a(!1),a("发送验证码");const f=a(""),r=a(!1),u=a(!1);let i={};const v=n=>{r.value=!0,i=n},g=n=>{f.value=n,u.value=!0;let e=c({message:"登陆中",duration:0,type:"loading",overlay:!0});N(i).then(o=>(e.$props.message="登陆成功，正在跳转！",_.login(o))).then(o=>{e.close(),d.go(-1)}).catch(({message:o})=>c({message:o,type:"fail"})).finally(()=>u.value=!1)};return(n,e)=>{const o=I,h=T,w=j,x=$;return C(),V("div",D,[s(x,{onSubmit:v},{default:p(()=>[s(h,{inset:""},{default:p(()=>[s(o,{modelValue:l.value.phone,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.phone=t),rules:[{required:!0,message:"请填写正确手机号",pattern:/^1[3-9]\d{9}$/}],maxlength:11,label:"手机号",name:"phone",placeholder:"手机号"},null,8,["modelValue"]),s(o,{modelValue:l.value.password,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.password=t),rules:[{required:!0,message:"请填写密码"}],label:"密码",name:"password",type:"password",placeholder:"密码"},null,8,["modelValue"])]),_:1}),m("div",E,[s(w,{loading:u.value,block:"","native-type":"submit",round:"",type:"primary"},{default:p(()=>[B(" 登录 ")]),_:1},8,["loading"]),m("p",{class:"to-register",onClick:e[2]||(e[2]=t=>S(d).push("/register"))},"没有账号？去注册")])]),_:1}),s(F,{show:r.value,"onUpdate:show":e[3]||(e[3]=t=>r.value=t),onSuccess:g},null,8,["show"])])}}});const W=k(G,[["__scopeId","data-v-612966b7"]]);export{W as default};
