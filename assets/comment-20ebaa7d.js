import{h as t}from"./index-2f1714f2.js";const p=(e,s)=>t.get("/comment/like",{params:{commentId:e,like:s}}),l=(e,s,{segmentId:a,replyId:o}={})=>t.get("/comment/page",{params:{current:e,chapterId:s,segmentId:a,replyId:o}}),r=e=>t.get("/comment/selfPage",{params:{current:e}}),d=e=>t.post("/comment/del/self",e),g=e=>t.post("/comment/info/all",e),i=(e,s,a,o,m,n)=>t.post("/comment/add",{bookId:e,chapterId:s,content:a,segmentId:o,parentId:m,replyUserId:n});export{i as a,d,g as i,p as l,l as p,r as s};
