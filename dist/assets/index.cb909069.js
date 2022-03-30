var z=Object.defineProperty,q=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var I=(e,a,o)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,$=(e,a)=>{for(var o in a||(a={}))j.call(a,o)&&I(e,o,a[o]);if(F)for(var o of F(a))G.call(a,o)&&I(e,o,a[o]);return e},M=(e,a)=>q(e,U(a));import{j as l,F as p,a as t,C as R,M as W,b as Q,c as A,d as J,e as Y,L as V,f as X,I as Z,g as ee,u as P,B as k,h as i,E as B,i as te,k as H,l as oe,m as v,n as ae,o as L,p as re,q as D,H as ne,T as C,r as S,s as ie,t as se,v as le,w as N,x as ce,y as ue,z as de,A as pe,D as b,G as ge,J as me,K as he,N as fe,O as E,P as ye,Q as ke,R as Ee,S as Te,U as be,V as Be,W as xe,X as Le,Y as Pe,Z as $e,_ as Me,$ as He,a0 as x,a1 as ve,a2 as we,a3 as w,a4 as Fe,a5 as Ie,a6 as Re,a7 as Ae,a8 as Ce,a9 as Se,aa as Ne,ab as Oe,ac as _e,ad as De,ae as Ke,af as ze,ag as qe,ah as Ue,ai as je,aj as Ge,ak as We,al as Qe,am as Je,an as Ye,ao as Ve,ap as Xe,aq as Ze,ar as et,as as tt,at as ot,au as at,av as rt,aw as nt,ax as it,ay as st,az as lt,aA as ct,aB as u,aC as ut,aD as dt,aE as pt,aF as gt,aG as mt,aH as ht}from"./vendor.7c63cb0b.js";const ft=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};ft();function yt(){const e=P();return l(p,{children:[t(k,{type:i(e,B),icon:t(te,{})}),t(k,{type:i(e,H),icon:t(oe,{})}),t(k,{type:i(e,v),icon:t(ae,{})}),t(k,{type:i(e,L),icon:t(re,{})}),t(k,{type:i(e,D),icon:t(ne,{})})]})}function kt(){const e=P();return l(p,{children:[t(C,{onMouseDown:e&&S(Me,e),icon:t(ie,{})}),t(C,{onMouseDown:e&&S(se,e),icon:t(le,{})})]})}function Et(){const e=P();return l(p,{children:[t(N,{type:i(e,ce),icon:t(ue,{})}),t(N,{type:i(e,de),icon:t(pe,{})})]})}function Tt(){return l(p,{children:[t(b,{value:"left",icon:t(ge,{})}),t(b,{value:"center",icon:t(me,{})}),t(b,{value:"right",icon:t(he,{})}),t(b,{value:"justify",icon:t(fe,{})})]})}function bt(){const e=P();return l(p,{children:[t(E,{type:i(e,ye),icon:t(ke,{})}),t(E,{type:i(e,Ee),icon:t(Te,{})}),t(E,{type:i(e,be),icon:t(Be,{})}),t(E,{type:i(e,xe),icon:t(Le,{})}),t(E,{type:i(e,Pe),icon:t($e,{})})]})}function Bt(){return l(p,{children:[t(yt,{}),t(Et,{}),t(kt,{}),t(bt,{}),t(R,{pluginKey:W,icon:t(Q,{}),selectedIcon:t(A,{})}),t(R,{pluginKey:J,icon:t(Y,{}),selectedIcon:t(A,{})}),t(Tt,{}),t(V,{icon:t(X,{})}),t(Z,{icon:t(ee,{})})]})}const O={types:[L,w],defaultType:x},s={editableProps:{spellCheck:!0,autoFocus:!1,placeholder:"Ecrivez...",style:{padding:"15px"}},components:He(),align:{inject:{props:{validTypes:[x,B,H,v]}}},indent:{inject:{props:{validTypes:[x,B,H,v,L]}}},resetBlockType:{options:{rules:[M($({},O),{hotkey:"Enter",predicate:ve}),M($({},O),{hotkey:"Backspace",predicate:we})]}},trailingBlock:{type:x},softBreak:{options:{rules:[{hotkey:"shift+enter"},{hotkey:"enter",query:{allow:[L,w]}}]}},exitBreak:{options:{rules:[{hotkey:"mod+enter"},{hotkey:"mod+shift+enter",before:!0},{hotkey:"enter",query:{start:!0,end:!0,allow:Fe}}]}},selectOnBackspace:{options:{query:{allow:[w,D]}}},forceLayout:{options:{rules:[{path:[0],type:B}]}}};function xt(){const e=Ie([Re(),Ae(),Ce(),Se({props:{caption:{placeholder:"\xC9crivez une l\xE9gende...",align:"center"}}}),Ne(),Oe(),_e(s.align),De(),Ke(),ze(),qe(),Ue(),je(),Ge(),We(),Qe(),Je(),Ye(s.indent),Ve(),Xe(s.resetBlockType),Ze(s.softBreak),et(s.exitBreak),tt(s.forceLayout),ot(s.trailingBlock),at(s.selectOnBackspace),rt()],{components:s.components});return t("div",{style:{border:"solid 2px #e4e4e4",borderRadius:"4px"},children:t(nt,{backend:it,children:t(st,{id:"mail-editor",plugins:e,editableProps:s.editableProps,children:t(lt,{style:{marginBottom:0,padding:"5px",margin:0},children:t(Bt,{})})})})})}const c=e=>e.indent!==void 0||e.align!==void 0?`style="${e.indent?`margin-left: ${24*e.indent}px;`:""}${e.align?`text-align: ${e.align};`:""}"`:"",Lt=({element:e,children:a})=>{switch(e.type){case"blockquote":return`<blockquote ${c(e)}>${a}</blockquote>`;case"p":return`<p ${c(e)}>${a}</p>`;case"a":return`<a ${c(e)} href="${_(e.url)}">${a}</a>`;case"h1":return`<h1 ${c(e)}>${a}</h1>`;case"h2":return`<h2 ${c(e)}>${a}</h2>`;case"h3":return`<h3 ${c(e)}>${a}</h3>`;case"hr":return"<hr>";case"ol":return`<ol ${c(e)}>${a}</ol>`;case"ul":return`<ul ${c(e)}>${a}</ul>`;case"li":return`<li ${c(e)}>${a}</li>`;case"img":const o=e.caption&&e.caption[0]&&e.caption[0].text;return`<figure>
      <img width="${e.width?e.width:"100%"}" src="${_(e.url)}">
      ${o?`<figcaption>${o}</figcaption>`:""}
      </figure>
      `;default:return a}},Pt=({leaf:e,children:a})=>{let o=a;return e.bold&&(o=`<strong>${o}</strong>`),e.italic&&(o=`<i>${o}</i>`),e.underline&&(o=`<u>${o}</u>`),e.strikethrough&&(o=`<del>${o}</del>`),e.strikethrough&&(o=`<del>${o}</del>`),e.code&&(o=`<code>${o}</code>`),e.color&&(o=`<span style="color: ${e.color};">${o}</span>`),e.backgroundColor&&(o=`<span style="background-color: ${e.backgroundColor};">${o}</span>`),o},_=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),$t=e=>ct.isText(e)?Pt({leaf:e,children:e.text}):Lt({element:e,children:K(e.children)}),K=e=>e.map($t).join(""),Mt=`
  html, body {
    margin: 0;
  }
  html {
    background-color: #fefefe;
    font-family: 'Ubuntu', sans-serif;
  }
  body {
    margin: 15px;
  }
  img {
    max-width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  figure {
    margin-right: 0;
    margin-left: 0;
    display: block;
  }
  figcaption {
    margin-top: 5px;
    text-align: center;
  }
  h1, h2, h3 {
    font-weight: normal;
  }
  hr {
    background-clip: content-box;
    border-style: none;
    height: 2px;
    border-radius: 1px;
    background-color: #ddd;
  }

  p {
    margin: 0px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0px;
    padding-right: 0px;
  }
`,Ht=u.exports.forwardRef(({children:e},a)=>{var m,T;const[o,d]=u.exports.useState(),r=(T=(m=o==null?void 0:o.contentWindow)==null?void 0:m.document)==null?void 0:T.body,n=u.exports.useMemo(()=>d,[d]);u.exports.useEffect(()=>{var y;if(!o)return;const h=(y=o.contentWindow)==null?void 0:y.document;if(!h)return;const f=h.createElement("style");f.innerHTML=Mt,h.head.innerHTML="",h.head.appendChild(f)},[o]);const g=()=>{var f,y;return((f=o==null?void 0:o.contentWindow)==null?void 0:f.document)?(y=o==null?void 0:o.contentWindow)==null?void 0:y.document.documentElement.outerHTML:""};return u.exports.useImperativeHandle(a,()=>({getFullHtml:g})),t("iframe",{style:{width:"100%",minHeight:"300px"},ref:n,children:r&&ut.exports.createPortal(e,r)})});function vt(){const[e,a]=u.exports.useState(""),[o,d]=u.exports.useState(""),r=u.exports.createRef(),n=()=>{const m=gt("mail-editor");console.log(m.children);const T=K(m.children);a(T)};return u.exports.useEffect(()=>{!r.current||d(r.current.getFullHtml())},[e]),l(p,{children:[t(xt,{}),t("hr",{style:{margin:"25px 0"}}),l("div",{style:{display:"flex",columnGap:"15px",alignItems:"center",marginBottom:"15px"},children:[t(dt,{variant:"h5",children:"Result"}),t(pt,{size:"small",variant:"outlined",onClick:n,children:"Serialize HTML"})]}),l("details",{style:{marginBottom:"15px"},children:[t("summary",{children:"HTML code"}),t("textarea",{style:{width:"100%",height:"300px"},readOnly:!0,value:o})]}),l("details",{open:!0,children:[t("summary",{children:"HTML preview"}),t(Ht,{ref:r,children:t("div",{dangerouslySetInnerHTML:{__html:e}})})]})]})}mt.render(t(ht.StrictMode,{children:t(vt,{})}),document.getElementById("root"));
