import{r,q as F,j as e,y as p}from"./app-DGAs3QsB.js";import{N as I,F as D}from"./index-CRWwAaVv.js";import{I as n}from"./index-CCTvJ7N_.js";import{u as M}from"./Store-OVSU1Lsn.js";import{Q as P,B as m}from"./ReactToastify-ezmwoywt.js";import{I as o}from"./InputError-C6ThMAst.js";import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-B1yaC0FY.js";/* empty css              */import"./index-Dxi3IWcR.js";const R=({squareAppId:v,squareLocationId:y})=>{const[f,C]=r.useState(null),[u,h]=r.useState(!1),[a,j]=r.useState({}),{guest:N,setGuest:g,cartItems:d,clearCart:k,calculateTotal:x}=M();r.useEffect(()=>{const s=JSON.parse(localStorage.getItem("guestUser"));s&&g(s)},[g]);const w=F().props.auth.user,[t,i]=r.useState({firstName:"",lastName:"",email:"",phone:"",note:""});r.useEffect(()=>{(async()=>{if(!(N||w)){console.log("you are not logged in. Redirecting to login page..."),m.error("You need to log in to proceed with checkout."),p.visit("/login");return}console.log("Logged in guest details:",N);const l=await window.Square.payments(v,y);console.log("Initializing checkout...");const c=await l.card();await c.attach("#card-container"),C(c)})()},[]),r.useState("");const S=async()=>{h(!0);try{const{token:s,errors:l}=await f.tokenize();if(l){console.error(l),alert("Payment failed."),h(!1);return}console.log("token",d),p.post("/process-payment",{nonce:s,totalCents:x()*100,products:d,billingDetails:t},{onSuccess:()=>{j({}),m.success("Order is placed successfully!"),k(),p.visit("/")},onError:c=>{var b;console.log(c),j(c),c.billingDetails!=null&&m.error(((b=c.payment)==null?void 0:b.detail)??c.product_detail??"An unexpected error occurred")}})}catch(s){console.error(s),m.error("Payment failed, check for debit and reach out to customer support")}finally{h(!1)}};return e.jsxs("div",{children:[e.jsx(I,{}),e.jsx("section",{className:"our-menu text-center py-5 bg-light",children:e.jsx("div",{className:"container",children:e.jsx("h1",{className:"mb-2",children:"CHECKOUT"})})}),e.jsx(P,{}),e.jsx("section",{className:"container mt-5",children:e.jsxs("div",{className:"alert alert-info text-center",children:["All orders are to be collected in-store at",e.jsx("strong",{children:" 303 Chester Road, Manchester M15 4EY"})]})}),e.jsx("section",{className:"container mt-5",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-4",children:[e.jsx("h2",{className:"mb-4",children:"Billing & Shipping"}),e.jsx("form",{children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"firstName",className:"form-label",children:"First Name *"}),e.jsx(n,{type:"text",placeholder:"Enter first name",value:t.firstName,autoComplete:"first Name",name:"firstName",onChangeMethod:s=>i(l=>({...l,firstName:s.target.value}))}),e.jsx(o,{message:a&&(a==null?void 0:a["billingDetails.firstName"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"lastName",className:"form-label",children:"Last Name *"}),e.jsx(n,{type:"text",placeholder:"Enter last name",value:t.lastName,onChangeMethod:s=>i({...t,lastName:s.target.value})}),e.jsx(o,{message:a&&(a==null?void 0:a["billingDetails.lastName"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone *"}),e.jsx(n,{type:"text",placeholder:"Enter phone number",value:t.phone,onChangeMethod:s=>i({...t,phone:s.target.value})}),e.jsx(o,{message:a&&(a==null?void 0:a["billingDetails.phone"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address *"}),e.jsx(n,{type:"email",placeholder:"Enter email address",value:t.email,onChangeMethod:s=>i({...t,email:s.target.value})}),e.jsx(o,{message:a&&(a==null?void 0:a["billingDetails.email"]),className:"mt-2",style:{color:"red"}})]})]})})]}),e.jsxs("div",{className:"col-md-6 mb-4",children:[e.jsx("h2",{className:"mb-4",children:"Additional Information"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"orderNotes",className:"form-label",children:"Order Notes (Optional)"}),e.jsx(n,{type:"text",placeholder:"Notes about your order",value:t.note,onChangeMethod:s=>i({...t,note:s.target.value})}),e.jsx(o,{message:a&&(a==null?void 0:a["billingDetails.notes"]),className:"mt-2",style:{color:"red"}})]})]})]})}),e.jsxs("section",{className:"container mt-5 px-4",children:[e.jsx("h3",{className:"mb-4 text-center",children:"Your Order"}),d.map((s,l)=>e.jsxs("div",{className:"row align-items-center border-bottom py-2",children:[e.jsxs("div",{className:"col-6",children:[s.name," - ",s.description," × ",s.quantity]}),e.jsxs("div",{className:"col-6 text-end",children:["£",s.price," "]})]},l)),e.jsxs("div",{className:"row align-items-center border-bottom py-2",children:[e.jsx("div",{className:"col-6",children:"Subtotal"}),e.jsxs("div",{className:"col-6 text-end",children:["£",d.reduce((s,l)=>s+l.price*l.quantity,0).toFixed(2)]})]}),e.jsx("div",{className:"row align-items-center border-bottom py-2",children:e.jsxs("div",{className:"col-12",children:[e.jsx("p",{children:"Shipping"}),e.jsxs("div",{className:"col-6 text-en",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"radio",className:"form-check-input",id:"exampleCheck1",name:"pickup",value:"yes"}),e.jsx("label",{className:"label-auth font-12",htmlFor:"exampleCheck1",children:"Delivery and delivery fee only applicable to our Suya Spice product."})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"radio",className:"form-check-input",id:"exampleCheck2",name:"pickup",value:"no"}),e.jsx("label",{className:"label-auth whitespace-nowrap font-12 text-left",htmlFor:"exampleCheck2",children:"All orders are to be collected in-store at 303 Chester road Manchester M15 4EY."})]})]})]})}),e.jsxs("div",{className:"row align-items-center py-2",children:[e.jsx("div",{className:"col-6",children:e.jsx("strong",{children:"Total"})}),e.jsx("div",{className:"col-6 text-end",children:e.jsxs("strong",{children:["£",x()]})})]})]}),e.jsxs("div",{className:"p-3 bg-inf",children:[e.jsx("h3",{className:"text-center",children:"Card Payment"}),e.jsx("hr",{})]}),e.jsxs("div",{className:"p-5 bg-light-grey",children:[e.jsx("h2",{children:"Checkout"}),e.jsxs("p",{children:["Total: £",x()]}),e.jsx("div",{id:"card-container"}),e.jsx("button",{onClick:S,disabled:u,className:"btn btn-danger text-white px-3",children:u?"Processing...":"Pay Now"})]}),e.jsx(D,{})]})};export{R as default};
