import{d as x,j as b,A as w,r as C,n as y,o as d,c as N,e as i,u as p,b as t,g as I,m as S,H as B,I as T,w as m,t as s,l as V,F as D,p as E,q as F,_ as z}from"./index-4fe7824b.js";import{i as L,d as R}from"./comment-20ebaa7d.js";import{a as $,c as _,b as j}from"./function-call-216768fc.js";import{s as q}from"./index-2f1714f2.js";import{N as A}from"./index-6afe34d9.js";import{B as H}from"./index-74f31b2d.js";import{S as G}from"./index-29569b89.js";import{E as J}from"./index-c5fb07c2.js";import"./file-2a06de25.js";import"./use-id-b193c290.js";const K=a=>(E("data-v-f784d744"),a=a(),F(),a),M={class:"self-comment-info"},O={class:"book"},P=["src"],Q={class:"text"},U=K(()=>t("div",{class:"van-hairline--top",style:{margin:"16px 0"}},null,-1)),W={class:"content"},X={class:"foot"},Y=x({__name:"index",setup(a){const c=b(),l=w().params.id,e=C({}),r=$({message:"加载中",duration:0,mask:!0});L(l).then(o=>{e.value=o,y(()=>r.close())}).catch(o=>{_(o.message),r.close()});const u=()=>{q({title:"警告",message:"删除后不可恢复"}).then(()=>{R(l).then(o=>{j({message:"删除成功！",onClose:()=>c.back()})}).catch(({message:o})=>_(o))})};return(o,n)=>{const v=A,f=J,h=H,k=G;return d(),N(D,null,[i(v,{title:"评论详情",placeholder:"","left-arrow":"",onClickLeft:n[0]||(n[0]=g=>p(c).back())}),t("div",M,[e.value?S("",!0):(d(),I(f,{key:0,description:"暂无阅读数据"})),B(i(k,{direction:"vertical",fill:"",size:16},{default:m(()=>[t("div",O,[t("img",{src:e.value.bookCover,alt:""},null,8,P),t("div",Q,[t("p",null,s(e.value.bookName),1),t("p",{style:{color:"#777777","font-size":"14px"},onClick:n[1]||(n[1]=g=>p(c).push("/read?bid="+e.value.bookId+"&cid="+e.value.chapterId))},s(e.value.chapterName)+" > ",1)])]),U,t("p",W,s(e.value.content),1),t("p",X,[t("span",null,"评论时间:"+s(e.value.createTime),1),t("span",null,"点赞:"+s(e.value.likeNum),1)]),i(h,{block:"",type:"danger",onClick:u},{default:m(()=>[V("删除")]),_:1})]),_:1},512),[[T,e.value.id]])])],64)}}});const de=z(Y,[["__scopeId","data-v-f784d744"]]);export{de as default};
