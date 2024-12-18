import{r as l,q as R,y as u,j as e,a as A}from"./app-DGAs3QsB.js";import{N as P,F as D}from"./index-CRWwAaVv.js";import{L as F}from"./Loader-CfitnsuC.js";import{u as b}from"./Store-OVSU1Lsn.js";import{Q as N}from"./ReactToastify-ezmwoywt.js";import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-B1yaC0FY.js";/* empty css              */const X=({cartAdded:d,products:n})=>{const{cartItems:c,addItem:U,removeItem:f,updateItemQuantity:g,updateItemSpice:W,calculateTotal:v}=b(),[C,Q]=l.useState(!1),[y,o]=l.useState(!1),[i,k]=l.useState(""),[h,r]=l.useState(""),[T,x]=l.useState({}),E=R().props.auth.user;l.useEffect(()=>{window.scrollTo(0,0)},[]),l.useEffect(()=>{if(!d&&(n!=null&&n.length)){const s=n.map(t=>t.id);u.post("/cart",{product_ids:s})}},[n,d]);const m=(s,t)=>{console.log(c),g(s,t)},w=s=>{f(s)},I=(s,t)=>{x(a=>({...a,[s]:t}))};l.useEffect(()=>{const s=c.reduce((t,a)=>(a.spice&&(t[a.id]=a.spice),t),{});x(s)},[c]);const S=()=>{const{guest:s}=b.getState();s||E?u.visit("/checkout"):o(!0)},L=()=>{i.trim()===""?r("Please enter your postcode."):i.toUpperCase().startsWith("MN")?(window.location.href="/login",r("")):(setModalMessage("We only deliver within Manchester."),o(!0),r(""))},M=()=>{i.trim()===""?r("Please enter your postcode."):(setModalMessage("Collection details will be provided soon."),o(!0),r(""))},j=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(P,{}),C?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[" ",e.jsx(N,{}),e.jsx("section",{className:"our-menu",children:e.jsx("div",{className:"container-fluid text-center",children:e.jsx("h1",{className:"mb-2",children:"CART"})})}),e.jsx("section",{className:"cart-table container-fluid mt-5",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{className:"thead-dark",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"PRODUCT"}),e.jsx("th",{scope:"col",children:"VARIANCE"}),e.jsx("th",{scope:"col",children:"PRICE"}),e.jsx("th",{scope:"col",children:"QUANTITY"}),e.jsx("th",{scope:"col",children:"SUBTOTAL"})]})}),e.jsx("tbody",{children:c.length?c.map(s=>{var t;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(A,{href:"/product",className:"d-flex align-items-center",style:{color:"#b7903c",textDecoration:"none"},children:[e.jsx("img",{src:s.product_image,alt:s.name,style:{height:"80px",width:"80px",marginRight:"10px",objectFit:"cover"}}),e.jsx("span",{className:"text-dark",children:s.name})]})}),e.jsx("td",{children:s.variance?e.jsx("select",{value:((t=T[s.id])==null?void 0:t.id)||"",onChange:a=>{const p=s.variance.options.find(O=>O.id===parseInt(a.target.value));console.log("Selected Option:",p),I(s.id,p)},className:"form-select w-75",children:s.variance.options.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))}):"No variance available"}),e.jsxs("td",{children:["£",s.price??"invalid price"]}),e.jsx("td",{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("button",{className:"btn btn-light",onClick:()=>m(s.id,-1),children:"-"}),e.jsx("span",{className:"mx-3",style:{fontWeight:"bold"},children:s.quantity}),e.jsx("button",{className:"btn btn-light",onClick:()=>m(s.id,1),children:"+"})]})}),e.jsxs("td",{children:["£",(s.quantity*s.price).toFixed(2),e.jsx("span",{className:"text-danger mx-3",style:{cursor:"pointer",fontWeight:"bold"},onClick:()=>w(s.id),children:"X"})]})]},s.id)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"5",className:"text-center",children:"No Items Selected"})})})]})})}),e.jsxs("section",{className:"cart-totals p-4",children:[e.jsx("h1",{className:"mt-3 mb-5",children:"CART TOTALS"}),e.jsxs("div",{className:"row align-items-center mb-3",children:[e.jsx("h6",{className:"col-md-3",children:"TOTAL"}),e.jsx("p",{className:"col-md-9",children:e.jsxs("b",{children:["£",v()]})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[e.jsx("button",{onClick:S,className:"btn btn-danger text-white",style:{textDecoration:"none"},children:"PROCEED TO CHECKOUT"}),e.jsx("button",{className:"btn btn-dark",onClick:()=>o(!0),children:"BUY WITH G-PAY"})]}),y&&e.jsxs("div",{className:"modal fade show",tabIndex:"-1",style:{display:"block",background:"rgba(0, 0, 0, 0.5)"},children:[" ",e.jsx(N,{}),e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Cart Action"}),e.jsx("button",{type:"button",className:"btn-close",onClick:j})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("form",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"postcode",className:"form-label text-left fw-bold",children:"Enter your full postcode"}),e.jsx("input",{type:"text",id:"postcode",className:"form-control text-center",placeholder:"e.g. EC1Y 1BE",value:i,onChange:s=>k(s.target.value)}),h&&e.jsx("p",{className:"text-danger mt-2",children:h})]}),e.jsx("button",{type:"button",className:"btn btn-dark w-100 mb-2",onClick:M,children:"I’LL COLLECT"}),e.jsx("button",{type:"button",className:"btn btn-dark w-100",onClick:L,children:"DELIVER TO ME"})]})}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{type:"button",className:"btn btn-dark",onClick:j,children:"Close"})})]})})]})]})]}),e.jsx(D,{})]})};export{X as default};
