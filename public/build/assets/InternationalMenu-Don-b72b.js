import{r as d,j as e,a as u}from"./app-Ci-iwg3S.js";import{N as g,F as f}from"./index-DjXr2uLk.js";import{u as N}from"./Store-2qyr2ZpA.js";import{P as b}from"./ProductModal-KTOW7NtE.js";import"./react-toastify.esm-Ct26NFGc.js";import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-lHsSOW7t.js";/* empty css              */import"./Roast-suya-5esSPXFc.js";const z=({products:r})=>{const{cartItems:o,addItem:m,removeItem:x}=N(),[t,n]=d.useState(null),[c,l]=d.useState(!1),h=s=>{n(s),l(!0)},p=()=>{l(!1),n(null)},a=(s,i)=>{o.some(j=>j.id===s)?x(s):m(i)};return e.jsxs("div",{children:[e.jsx(g,{}),e.jsx("section",{className:"our-menu",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 text-center",children:[e.jsx("h6",{className:"mb-2",children:"CHOOSE YOUR FAVORITE"}),e.jsx("h1",{className:"mb-2",style:{fontFamily:"rubik wet paint"},children:"Spices"})]})})})}),e.jsx("section",{className:"faq-answer",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx("section",{className:"hot-cards pt-5 pb-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row row-grid",children:r==null?void 0:r.map(s=>e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"card-container text-center",children:[e.jsx("div",{className:"card-container-img",style:{height:"300px",objectFit:"contain",cursor:"pointer"},onClick:()=>h(s),children:e.jsx("img",{src:"/storage/"+s.product_image,alt:s.name,loading:"lazy",style:{width:"100%",height:"100%"}})}),e.jsx("h6",{className:"mt-3",style:{color:"#b7903c"},children:s.name}),e.jsxs("h6",{style:{color:"#ff0000"},children:["£",s.price]}),e.jsxs("div",{className:"col-md-6 d-flex justify-content-center align-items-center",style:{margin:"0 auto"},children:[o.some(i=>i.id===s.id)?e.jsx("button",{onClick:()=>a(s.id,s),style:{background:"#e74c3c",color:"white",margin:"20px 0",fontWeight:"600",fontSize:"14px",lineHeight:"14px",border:"none",padding:"10px 15px",cursor:"pointer",borderRadius:"5px"},children:"REMOVE ITEM"}):e.jsx("button",{onClick:()=>a(s.id,s),style:{background:"#56ccf2",color:"white",margin:"20px 0",fontWeight:"600",fontSize:"14px",lineHeight:"14px",border:"none",padding:"10px 15px",cursor:"pointer",borderRadius:"5px"},children:"SELECT ITEM"}),o.some(i=>i.id===s.id)&&e.jsx("div",{className:"mx-2",children:e.jsx(u,{href:"/cart",style:{display:"inline-block",background:"#27ae60",color:"white",margin:"10px 0",fontWeight:"600",fontSize:"16px",lineHeight:"24px",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"5px",textDecoration:"none"},children:e.jsx("i",{className:"bi bi-cart-plus text-white",style:{fontSize:"14px",marginRight:"4px"}})})})]})]})},s.id))})})})})})})}),c&&t&&e.jsx(b,{show:c,product:t,onClose:p}),e.jsx(f,{})]})};export{z as default};
