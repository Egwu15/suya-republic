import{r as c,j as t}from"./app-zBeRryV1.js";import{p as j}from"./Full-Platter-1--T7WorjK.js";import{u as y}from"./Store-DvD1EEPr.js";import{P as C}from"./ProductModal-_DktQiqH.js";import"./react-toastify.esm-C5Cif9zO.js";import"./constant-DoBAxWEL.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,a)=>a?a.toUpperCase():o.toLowerCase()),g=s=>{const e=v(s);return e.charAt(0).toUpperCase()+e.slice(1)},f=(...s)=>s.filter((e,o,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=c.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:n,iconNode:i,...d},m)=>c.createElement("svg",{ref:m,...b,width:e,height:e,stroke:s,strokeWidth:a?Number(o)*24/Number(e):o,className:f("lucide",l),...d},[...i.map(([p,u])=>c.createElement(p,u)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(s,e)=>{const o=c.forwardRef(({className:a,...l},n)=>c.createElement(N,{ref:n,iconNode:e,className:f(`lucide-${k(g(s))}`,`lucide-${s}`,a),...l}));return o.displayName=g(s),o};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],I=w("arrow-up-right",S);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],A=w("trash-2",M),F=({products:s})=>{const{cartItems:e,addItem:o,removeItem:a}=y(),[l,n]=c.useState(null),[i,d]=c.useState(!1),m=r=>{e.some(h=>h.id===r.id)?a(r.id):o(r)},p=r=>{n(r),d(!0)},u=()=>{n(null),d(!1)};return t.jsxs("div",{className:"container py-5",children:[t.jsx("div",{className:"row g-4 justify-content-center",children:s.map(r=>{const x=e.some(h=>h.id===r.id);return t.jsx("div",{className:"col-12 col-sm-6 col-md-4",children:t.jsxs("div",{className:"text-center text-white",children:[t.jsx("img",{src:j,alt:r.name,className:"img-fluid rounded cursor-pointer",onClick:()=>p(r),style:{height:"220px",width:"100%",objectFit:"cover",marginBottom:"10px",cursor:"pointer"}}),t.jsx("p",{className:"fw-semibold text-left text-uppercase",style:{textAlign:"left"},children:r.name}),t.jsxs("div",{className:"d-flex justify-content-start align-items-center gap-2",children:[t.jsx("button",{onClick:()=>m(r),className:`d-flex align-items-center gap-2 ${x?"btn btn-warning text-dark":"btn btn-outline-light"}`,style:{borderRadius:"30px",fontWeight:"500",padding:"6px 16px"},children:x?t.jsxs(t.Fragment,{children:["Delete Item ",t.jsx(A,{size:16})]}):t.jsxs(t.Fragment,{children:["Select Item"," ",t.jsx(I,{size:16})]})}),t.jsxs("div",{style:{backgroundColor:"white",color:"#000",padding:"6px 16px",borderRadius:"30px",fontWeight:"500"},children:["£",r.price.toFixed(2)]})]})]})},r.id)})}),i&&l&&t.jsx(C,{show:i,product:l,onClose:u})]})};export{F as default};
