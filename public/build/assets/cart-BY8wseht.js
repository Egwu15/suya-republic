import{r as l,q as L,y as x,j as e,a as O}from"./app-DrSDzlc1.js";import{N as R,F as A}from"./index-Ie9L8tuE.js";import{L as D}from"./Loader-DlZ-hLDY.js";import{u as j}from"./Store-KLz_9ylt.js";import{Q as p}from"./react-toastify.esm-psyI3b3w.js";/* empty css                      */import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-BM2G7tn4.js";/* empty css              */const X=({cartAdded:o,products:c})=>{const{cartItems:n,addItem:_,removeItem:u,updateItemQuantity:b,updateItemSpice:F,calculateTotal:N}=j(),[f,M]=l.useState(!1),[g,r]=l.useState(!1),[v,C]=l.useState(""),[y,i]=l.useState({});L().props.auth.user,l.useEffect(()=>{window.scrollTo(0,0)},[]),l.useEffect(()=>{const s=localStorage.getItem("orderType");C(s)},[]),l.useEffect(()=>{if(!o&&(c!=null&&c.length)){const s=c.map(t=>t.id);x.post("/cart",{product_ids:s})}},[c,o]);const d=(s,t)=>{b(s,t)},T=s=>{u(s)},k=(s,t)=>{i(a=>({...a,[s]:t}))};l.useEffect(()=>{const s=n.reduce((t,a)=>(a.spice&&(t[a.id]=a.spice),t),{});i(s)},[n]);const I=()=>{j.getState(),v==="collect"?x.visit("/checkout"):r(!0)},S=()=>{window.location.href="https://deliveroo.co.uk/menu/manchester/hulme-park/suya-republick-and-grill?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share"},w=()=>{window.location.href="/checkout"},h=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(R,{}),f?e.jsx(D,{}):e.jsxs(e.Fragment,{children:[" ",e.jsx(p,{}),e.jsx("section",{className:"our-menu",children:e.jsx("div",{className:"container-fluid text-center",children:e.jsx("h1",{className:"mb-2",children:"CART"})})}),e.jsx("section",{className:"cart-table container-fluid mt-5",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{className:"thead-dark",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"PRODUCT"}),e.jsx("th",{scope:"col",children:"VARIANCE"}),e.jsx("th",{scope:"col",children:"PRICE"}),e.jsx("th",{scope:"col",children:"QUANTITY"}),e.jsx("th",{scope:"col",children:"SUBTOTAL"})]})}),e.jsx("tbody",{children:n.length?n.map(s=>{var t;return e.jsxs("tr",{className:"",children:[e.jsx("td",{children:e.jsxs(O,{href:"/product",className:"d-flex align-items-center",style:{color:"#b7903c",textDecoration:"none"},children:[e.jsx("img",{src:"/storage/"+s.product_image,alt:s.name,style:{height:"80px",width:"80px",marginRight:"10px",objectFit:"cover"}}),e.jsx("span",{className:"text-dark",children:s.name})]})}),e.jsx("td",{children:s.variance?e.jsx("select",{value:((t=y[s.id])==null?void 0:t.id)||"",onChange:a=>{const m=s.variance.options.find(E=>E.id===parseInt(a.target.value));console.log("Selected Option:",m),k(s.id,m)},className:"form-select w-75",children:s.variance.options.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))}):"No variance available"}),e.jsxs("td",{children:["£",s.price??"invalid price"]}),e.jsx("td",{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("button",{className:"btn btn-light",onClick:()=>d(s.id,-1),children:"-"}),e.jsx("span",{className:"mx-3",style:{fontWeight:"bold"},children:s.quantity}),e.jsx("button",{className:"btn btn-light",onClick:()=>d(s.id,1),children:"+"})]})}),e.jsxs("td",{children:["£",(s.quantity*s.price).toFixed(2),e.jsx("span",{className:"text-danger mx-3",style:{cursor:"pointer",fontWeight:"bold"},onClick:()=>T(s.id),children:"X"})]})]},s.id)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"5",className:"text-center",children:"No Items Selected"})})})]})})}),e.jsxs("section",{className:"cart-totals p-4",children:[e.jsx("h1",{className:"mt-3 mb-5",children:"CART TOTALS"}),e.jsxs("div",{className:"row align-items-center mb-3",children:[e.jsx("h6",{className:"col-md-3",children:"TOTAL"}),e.jsx("p",{className:"col-md-9",children:e.jsxs("b",{children:["£",N()]})})]}),e.jsx("hr",{}),e.jsx("div",{className:"d-flex justify-content-center gap-3",children:e.jsx("button",{onClick:I,className:"btn btn-danger text-white",style:{textDecoration:"none"},disabled:!n.length,children:"PROCEED TO CHECKOUT"})}),g&&e.jsxs("div",{className:"modal fade show",tabIndex:"-1",style:{display:"block",background:"rgba(0, 0, 0, 0.5)"},children:[" ",e.jsx(p,{}),e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Cart Action"}),e.jsx("button",{type:"button",className:"btn-close",onClick:h})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("form",{children:[e.jsx("button",{type:"button",className:"btn btn-dark w-100 mb-2",onClick:w,children:"I’LL COLLECT"}),e.jsx("button",{type:"button",className:"btn btn-dark w-100",onClick:S,children:"DELIVER TO ME"})]})}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{type:"button",className:"btn btn-dark",onClick:h,children:"Close"})})]})})]})]})]}),e.jsx(A,{})]})};export{X as default};
