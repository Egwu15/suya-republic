import{j as e,a as l}from"./app-CKuYcGm-.js";import{N as m,F as x}from"./index-Chc2mLbG.js";/* empty css              */import{u as h}from"./Store-saFmi5IA.js";import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-Cm7rYQiR.js";/* empty css              */const p=({categories:c})=>e.jsx("div",{className:"side-bar",children:e.jsx("ul",{className:"sidebar-list",children:e.jsxs("div",{children:[e.jsx("li",{children:e.jsx(l,{href:"/menu",children:e.jsx("div",{className:"profile-sidebar",children:"All"})})}),c.data.map(i=>e.jsx("li",{children:e.jsx(l,{href:`/menu?selectedCategory=${i.id}`,children:e.jsx("div",{className:"profile-sidebar",children:i==null?void 0:i.name})})},i.id))]})})}),E=({products:c,categories:i})=>{const{cartItems:n,addItem:d,removeItem:t}=h(),o=(s,r)=>{n.some(a=>a.id===s)?t(s):d(r)};return e.jsxs("div",{children:[e.jsx(m,{}),e.jsx("section",{className:"our-menu",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 text-center",children:[e.jsx("h6",{className:"mb-2",children:"CHOOSE YOUR FAVORITE"}),e.jsx("h1",{className:"mb-2",children:"MENU"})]})})})}),e.jsx("section",{className:"faq-answer",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-2",children:e.jsxs("div",{className:"booking",children:[e.jsx("h6",{children:"MENU CATEGORIES"}),e.jsx(p,{categories:i})]})}),e.jsx("div",{className:"col-md-10",children:e.jsx("section",{className:"hot-cards pt-5 pb-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row row-grid",children:c.data.map(s=>e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"card-container text-center",children:[e.jsx("div",{className:"card-container-img",style:{height:"300px",objectFit:"contain"},children:e.jsx("img",{src:s.product_image,alt:s.name,loading:"lazy",style:{width:"100%",height:"100%"}})}),e.jsx("h6",{className:"mt-3",style:{color:"#b7903c"},children:s.name}),e.jsxs("h6",{style:{color:"#ff0000"},children:["£",s.price]}),e.jsxs("div",{className:"col-md-6 d-flex justify-content-center align-items-center",style:{margin:"0 auto"},children:[n.some(r=>r.id===s.id)?e.jsx("button",{onClick:()=>o(s.id,s),style:{background:"#e74c3c",color:"white",margin:"20px 0",fontWeight:"600",fontSize:"14px",lineHeight:"14px",border:"none",padding:"10px 15px",cursor:"pointer",borderRadius:"5px"},children:"REMOVE ITEM"}):e.jsx("button",{onClick:()=>o(s.id,s),style:{background:"#56ccf2",color:"white",margin:"20px 0",fontWeight:"600",fontSize:"14px",lineHeight:"14px",border:"none",padding:"10px 15px",cursor:"pointer",borderRadius:"5px"},children:"SELECT ITEM"}),n.some(r=>r.id===s.id)&&e.jsx("div",{className:"mx-2",children:e.jsx(l,{href:"/cart",style:{display:"inline-block",background:"#27ae60",color:"white",margin:"10px 0",fontWeight:"600",fontSize:"16px",lineHeight:"24px",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"5px",textDecoration:"none"},children:e.jsx("i",{className:"bi bi-cart-plus text-white",style:{fontSize:"14px",marginRight:"4px"}})})})]})]})},s.id))})})})})]})})}),e.jsx(x,{})]})};export{E as default};
