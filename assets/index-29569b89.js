import{d as f,x as g,e as s,F as c,U as y,V as h}from"./index-4fe7824b.js";import{c as v,w as z}from"./file-2a06de25.js";const[m,A]=v("space"),w={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function u(e=[]){const n=[];return e.forEach(t=>{Array.isArray(t)?n.push(...t):t.type===c?n.push(...u(t.children)):n.push(t)}),n.filter(t=>{var i;return!(t&&(t.type===y||t.type===c&&((i=t.children)==null?void 0:i.length)===0||t.type===h&&t.children.trim()===""))})}var S=f({name:m,props:w,setup(e,{slots:n}){const t=g(()=>{var r;return(r=e.align)!=null?r:e.direction==="horizontal"?"center":""}),i=r=>typeof r=="number"?r+"px":r,d=r=>{const a={},o=`${i(Array.isArray(e.size)?e.size[0]:e.size)}`,l=`${i(Array.isArray(e.size)?e.size[1]:e.size)}`;return r?e.wrap?{marginBottom:l}:{}:(e.direction==="horizontal"&&(a.marginRight=o),(e.direction==="vertical"||e.wrap)&&(a.marginBottom=l),a)};return()=>{var r;const a=u((r=n.default)==null?void 0:r.call(n));return s("div",{class:[A({[e.direction]:e.direction,[`align-${t.value}`]:t.value,wrap:e.wrap,fill:e.fill})]},[a.map((o,l)=>s("div",{key:`item-${l}`,class:`${m}-item`,style:d(l===a.length-1)},[o]))])}}});const B=z(S);export{B as S};
