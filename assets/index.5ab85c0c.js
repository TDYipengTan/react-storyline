var A=Object.defineProperty;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(t,e,r)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,y=(t,e)=>{for(var r in e||(e={}))P.call(e,r)&&E(t,r,e[r]);if(g)for(var r of g(e))$.call(e,r)&&E(t,r,e[r]);return t};import{r as i,u as B,a as J,b as M,R as n,c as V,d as j,C as p,D as U,e as b,H as C,f as Y}from"./vendor.bb658b8f.js";const H=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};H();const T=(t={},e={},r={})=>Object.assign({},t,e||r),q=(t,e)=>{try{return JSON.parse(t)}catch{return e||null}},G=t=>JSON.stringify(t),f=()=>Math.random().toString(36),K={stroke:"#999"},W=({nodes:t=[],nodeTypes:e={},edges:r=[],edgeTypes:c={}})=>{const[a,o]=i.exports.useState(null),l=i.exports.useRef(null),[h,N,_]=B(t),[S,O,v]=J(r),w=i.exports.useCallback(s=>O(u=>M(y({},s),u)),[]),x=i.exports.useCallback(s=>{s.preventDefault(),s.dataTransfer.dropEffect="move"},[]),R=i.exports.useCallback(s=>{if(!l.current||!a)return;s.preventDefault();const u=l.current.getBoundingClientRect(),{nodeType:m,data:I}=q(s.dataTransfer.getData("application/reactflow"));if(typeof m=="undefined"||!m)return;const F=a.project({x:s.clientX-u.left,y:s.clientY-u.top}),L={id:f(),type:m,position:F,data:I};N(k=>k.concat(L))},[a]);return n.createElement(V,{ref:l,nodes:h,edges:S,nodeTypes:e,edgeTypes:c,onNodesChange:_,onEdgesChange:v,onConnect:w,onInit:o,onDrop:R,onDragOver:x,connectionLineStyle:K,defaultZoom:1.5,fitView:!0,attributionPosition:"bottom-right"})},X={},Z={},z=[{id:0,nodeType:"customEmailCard",label:"Custom Email Card",data:{a:0}},{id:1,nodeType:"customTransformCard",label:"Custom Transform Card",data:{a:1}}],Q="_sidebar_1vf6u_1",ee="_sidebarItem_1vf6u_4";var D={sidebar:Q,sidebarItem:ee};const te=(t,e)=>{t.dataTransfer.setData("application/reactflow",e),t.dataTransfer.effectAllowed="move"},re=()=>n.createElement("ul",{className:D.sidebar},z.map(({id:t,nodeType:e,label:r,data:c})=>n.createElement("li",{key:t,className:D.sidebarItem,onDragStart:a=>te(a,G({nodeType:e,data:c})),draggable:!0},r))),ae="_app_1l65k_1";var ne={app:ae};console.log({VITE_NODE_ENV:"stg",BASE_URL:"https://tdyipengtan.github.io/react-storyline/",MODE:"stg",DEV:!0,PROD:!1});const oe=({nodes:t,nodeTypes:e,edges:r,edgeTypes:c})=>n.createElement(j,{className:`${ne.app} app`},n.createElement(p,{flex:"300px"},n.createElement(re,null)),n.createElement(p,{flex:"none"},n.createElement(U,{style:{height:"100%"},type:"vertical"})),n.createElement(p,{flex:"auto"},n.createElement(W,{nodes:t,nodeTypes:T(X,e),edges:r,edgeTypes:T(Z,c)}))),se=({isConnectable:t,data:e})=>(console.log("data",e),n.createElement(n.Fragment,null,n.createElement(b,null,"EmailCard"),n.createElement(C,{type:"source",position:"right",isConnectable:t}))),ce=({isConnectable:t,data:e})=>(console.log("data",e),n.createElement(n.Fragment,null,n.createElement(b,null,"TransformCard"),n.createElement(C,{type:"target",position:"left",isConnectable:t}))),d=[{id:f(),type:"customEmailCard",data:{a:1},position:{x:0,y:50}},{id:f(),type:"customTransformCard",data:{a:2},position:{x:300,y:50}}],le={customEmailCard:se,customTransformCard:ce},ie=[{id:`${d[0].id}-${d[1].id}`,source:d[0].id,target:d[1].id,animate:!0,style:{stroke:"#000"}}],de={};Y.render(n.createElement(oe,{nodes:d,nodeTypes:le,edges:ie,edgeTypes:de}),document.getElementById("root"));
