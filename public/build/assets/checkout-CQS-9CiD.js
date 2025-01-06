import{r as c,q as G,y as p,j as e}from"./app-CXrDWQMU.js";import{N as z,F as M}from"./index-Bh1ncTnp.js";import{I as m}from"./index-Bo-3Reym.js";import{u as R}from"./Store-B_48ck9c.js";import{B as i,Q as q}from"./react-toastify.esm-BEAWhAsR.js";/* empty css                      */import{I as h}from"./InputError-D12zsEwA.js";import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-CFAXOXco.js";/* empty css              */import"./index-KFpAMjvo.js";const J=({squareAppId:j,squareLocationId:y})=>{const[P,S]=c.useState(null),[N,b]=c.useState(!1),[t,v]=c.useState({});c.useState(!0);const{guest:u,setGuest:f,cartItems:x,clearCart:F,calculateTotal:g}=R();c.useEffect(()=>{const s=JSON.parse(localStorage.getItem("guestUser"));s&&f(s)},[f]);const o=G().props.auth.user;console.log(o);const[l,d]=c.useState({firstName:(o==null?void 0:o.first_name)??"",lastName:(o==null?void 0:o.last_name)??"",email:(o==null?void 0:o.email)??"",phone:"",note:""});c.useEffect(()=>{const s=async()=>{try{if(!x.length){console.log("No items in cart. Redirecting to the menu page..."),i.error("Your cart is empty. Please add items to proceed."),p.visit("/menu");return}if(!u){console.log("guest",u),console.log("You need to log in to proceed. Redirecting to login page..."),i.error("Please log in to proceed with checkout."),window.location.href="/login";return}console.log("Guest details:",u);const n=await(await window.Square.payments(j,y)).card();await n.attach("#card-container"),S(n),console.log("Card component attached successfully.")}catch(a){console.error("Error during payment initialization:",a),i.error("An error occurred while initializing payment. Please try again.")}};k(),s()},[]);const k=async()=>{const s=a=>({countryCode:"GB",currencyCode:"GBP",total:{amount:a().toString(),label:"Total"}});try{const a=await window.Square.payments(j,y),n=a.paymentRequest(s(g)),r=await a.googlePay(n);await r.attach("#google-pay-button"),document.querySelector("#google-pay-button").addEventListener("click",async()=>{w(()=>r.tokenize(),"Google Pay")})}catch(a){console.error("Error initializing Google Pay:",a),i.error("Failed to initialize Google Pay.")}},w=async(s,a)=>{b(!0);try{const n=await s();if(n.errors){console.error(n.errors),i.error(`${a} payment failed to process.`);return}console.log("token",x),p.post("/process-payment",{nonce:n.token,totalCents:g()*100,products:x,billingDetails:l},{onSuccess:()=>{v({}),i.success("Order is placed successfully!"),F(),p.visit("/")},onError:r=>{var C;console.log(r),v(r),r.billingDetails!=null&&i.error(((C=r.payment)==null?void 0:C.detail)??r.product_detail??"An unexpected error occurred")}})}catch(n){console.error(n),i.error("Payment failed, check for debit and reach out to customer support")}finally{b(!1)}},D=async()=>{w(()=>P.tokenize(),"Card")};return e.jsxs("div",{children:[e.jsx(z,{}),e.jsx("section",{className:"our-menu text-center py-5 bg-light",children:e.jsx("div",{className:"container",children:e.jsx("h1",{className:"mb-2",children:"CHECKOUT"})})}),e.jsx(q,{}),e.jsx("section",{className:"container mt-5",children:e.jsxs("div",{className:"alert alert-info text-center",children:["All orders are to be collected in-store at",e.jsx("strong",{children:" 303 Chester Road, Manchester M15 4EY"})]})}),e.jsx("section",{className:"container mt-5",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-4",children:[e.jsx("h2",{className:"mb-4",children:"Billing "}),e.jsx("form",{children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"firstName",className:"form-label",children:"First Name *"}),e.jsx(m,{type:"text",placeholder:"Enter first name",value:l.firstName,autoComplete:"first Name",name:"firstName",onChangeMethod:s=>d(a=>({...a,firstName:s.target.value}))}),e.jsx(h,{message:t&&(t==null?void 0:t["billingDetails.firstName"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"lastName",className:"form-label",children:"Last Name *"}),e.jsx(m,{type:"text",placeholder:"Enter last name",value:l.lastName,onChangeMethod:s=>d({...l,lastName:s.target.value})}),e.jsx(h,{message:t&&(t==null?void 0:t["billingDetails.lastName"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone *"}),e.jsx(m,{type:"text",placeholder:"Enter phone number",value:l.phone,onChangeMethod:s=>d({...l,phone:s.target.value})}),e.jsx(h,{message:t&&(t==null?void 0:t["billingDetails.phone"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address *"}),e.jsx(m,{type:"email",placeholder:"Enter email address",value:l.email,onChangeMethod:s=>d({...l,email:s.target.value})}),e.jsx(h,{message:t&&(t==null?void 0:t["billingDetails.email"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{htmlFor:"address",className:"form-label",children:"Address *"}),e.jsx(m,{type:"text",placeholder:"Enter address",value:l.email,onChangeMethod:s=>d({...l,email:s.target.value})}),e.jsx(h,{message:t&&(t==null?void 0:t["billingDetails.address"]),className:"mt-2",style:{color:"red"}})]})]})})]}),e.jsxs("div",{className:"col-md-6 mb-4",children:[e.jsx("h2",{className:"mb-4",children:"Additional Information"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"orderNotes",className:"form-label",children:"Order Notes (Optional)"}),e.jsx(m,{type:"text",placeholder:"Notes about your order",value:l.note,onChangeMethod:s=>d({...l,note:s.target.value})}),e.jsx(h,{message:t&&(t==null?void 0:t["billingDetails.notes"]),className:"mt-2",style:{color:"red"}})]})]})]})}),e.jsxs("section",{className:"container mt-5 px-4",children:[e.jsx("h3",{className:"mb-4 text-center",children:"Your Order"}),x.map((s,a)=>e.jsxs("div",{className:"row align-items-center border-bottom py-2",children:[e.jsxs("div",{className:"col-6",children:[s.name," - ",s.description," × ",s.quantity]}),e.jsxs("div",{className:"col-6 text-end",children:["£",s.price," "]})]},a)),e.jsxs("div",{className:"row align-items-center border-bottom py-2",children:[e.jsx("div",{className:"col-6",children:"Subtotal"}),e.jsxs("div",{className:"col-6 text-end",children:["£",x.reduce((s,a)=>s+a.price*a.quantity,0).toFixed(2)]})]}),e.jsxs("div",{className:"row align-items-center py-2",children:[e.jsx("div",{className:"col-6",children:e.jsx("strong",{children:"Total"})}),e.jsx("div",{className:"col-6 text-end",children:e.jsxs("strong",{children:["£",g()]})})]})]}),e.jsxs("div",{className:"p-3 bg-inf",children:[e.jsx("h3",{className:"text-center",children:"Card Payment"}),e.jsx("hr",{})]}),e.jsxs("div",{className:"p-5 bg-light-grey",children:[e.jsx("h2",{children:"Checkout"}),e.jsxs("p",{children:["Total: £",g()]}),e.jsx("div",{id:"card-container"}),e.jsx("button",{onClick:D,disabled:N,className:"btn btn-danger text-white px-3",children:N?"Processing...":"Pay Now"}),e.jsxs("form",{id:"payment-form",children:[e.jsx("div",{id:"google-pay-button"}),e.jsx("div",{id:"card-container"}),e.jsx("button",{id:"card-button",type:"button",children:g()})]}),e.jsx("div",{id:"payment-status-container"})]}),e.jsx(M,{})]})};export{J as default};