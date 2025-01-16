import{r as c,q as z,y as p,j as e}from"./app-DrSDzlc1.js";import{N as D,F as E}from"./index-Ie9L8tuE.js";import{I as x}from"./index-BE-a0Ct5.js";import{u as R}from"./Store-KLz_9ylt.js";import{B as i,Q as q}from"./react-toastify.esm-psyI3b3w.js";/* empty css                      */import{I as u}from"./InputError-CeViplj3.js";import"./Mobile-Logo-DjYHHJYk.js";import"./CartIcon-BM2G7tn4.js";/* empty css              */import"./index-mqjK1g_x.js";const J=({squareAppId:j,squareLocationId:y})=>{const[P,S]=c.useState(null),[N,b]=c.useState(!1),[s,v]=c.useState({});c.useState(!0);const{guest:g,setGuest:f,cartItems:d,clearCart:k,calculateTotal:m}=R();c.useEffect(()=>{const t=JSON.parse(localStorage.getItem("guestUser"));t&&f(t)},[f]);const n=z().props.auth.user,[l,h]=c.useState({firstName:(n==null?void 0:n.first_name)??"",lastName:(n==null?void 0:n.last_name)??"",email:(n==null?void 0:n.email)??"",phone:"",note:""});c.useEffect(()=>{const t=async()=>{try{if(!d.length){console.log("No items in cart. Redirecting to the menu page..."),i.error("Your cart is empty. Please add items to proceed."),p.visit("/menu");return}if(!g){console.log("guest",g),console.log("You need to log in to proceed. Redirecting to login page..."),i.error("Please log in to proceed with checkout."),window.location.href="/login";return}console.log("Guest details:",g);const o=await(await window.Square.payments(j,y)).card();await o.attach("#card-container"),S(o),console.log("Card component attached successfully.")}catch(a){console.error("Error during payment initialization:",a),i.error("An error occurred while initializing payment. Please try again.")}};F(),t()},[]);const F=async()=>{const t=a=>({countryCode:"GB",currencyCode:"GBP",total:{amount:a().toString(),label:"Total"}});try{const a=await window.Square.payments(j,y),o=a.paymentRequest(t(m)),r=await a.googlePay(o);await r.attach("#google-pay-button"),document.querySelector("#google-pay-button").addEventListener("click",async()=>{w(()=>r.tokenize(),"Google Pay")})}catch(a){console.error("Error initializing Google Pay:",a),i.error("Failed to initialize Google Pay.")}},w=async(t,a)=>{b(!0);try{const o=await t();if(o.errors){console.error(o.errors),i.error(`${a} payment failed to process.`);return}console.log("token",d),p.post("/process-payment",{nonce:o.token,totalCents:m()*100,products:d,billingDetails:l},{onSuccess:()=>{v({}),i.success("Order is placed successfully!"),k(),p.visit("/")},onError:r=>{var C;console.log(r),v(r),r.billingDetails!=null&&i.error(((C=r.payment)==null?void 0:C.detail)??r.product_detail??"An unexpected error occurred")}})}catch(o){console.error(o),i.error("Payment failed, check for debit and reach out to customer support")}finally{b(!1)}},G=async()=>{w(()=>P.tokenize(),"Card")};return e.jsxs("div",{children:[e.jsx(D,{}),e.jsx("section",{className:"our-menu text-center py-5 bg-light",children:e.jsx("div",{className:"container",children:e.jsx("h1",{className:"mb-2",children:"CHECKOUT"})})}),e.jsx(q,{}),e.jsx("section",{className:"container mt-5",children:e.jsxs("div",{className:"alert alert-info text-center",children:["All orders are to be collected in-store at",e.jsx("strong",{children:" 303 Chester Road, Manchester M15 4EY"})]})}),e.jsx("section",{className:"container mt-5",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-4",children:[e.jsx("h2",{className:"mb-4",children:"Billing "}),e.jsx("form",{children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"firstName",className:"form-label",children:"First Name *"}),e.jsx(x,{type:"text",placeholder:"Enter first name",value:l.firstName,autoComplete:"first Name",name:"firstName",onChangeMethod:t=>h(a=>({...a,firstName:t.target.value}))}),e.jsx(u,{message:s&&(s==null?void 0:s["billingDetails.firstName"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"lastName",className:"form-label",children:"Last Name *"}),e.jsx(x,{type:"text",placeholder:"Enter last name",value:l.lastName,onChangeMethod:t=>h({...l,lastName:t.target.value})}),e.jsx(u,{message:s&&(s==null?void 0:s["billingDetails.lastName"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone *"}),e.jsx(x,{type:"text",placeholder:"Enter phone number",value:l.phone,onChangeMethod:t=>h({...l,phone:t.target.value})}),e.jsx(u,{message:s&&(s==null?void 0:s["billingDetails.phone"]),className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address *"}),e.jsx(x,{type:"email",placeholder:"Enter email address",value:l.email,onChangeMethod:t=>h({...l,email:t.target.value})}),e.jsx(u,{message:s&&(s==null?void 0:s["billingDetails.email"]),className:"mt-2",style:{color:"red"}})]})]})})]}),e.jsxs("div",{className:"col-md-6 mb-4",children:[e.jsx("h2",{className:"mb-4",children:"Additional Information"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"orderNotes",className:"form-label",children:"Order Notes (Optional)"}),e.jsx(x,{type:"text",placeholder:"Notes about your order",value:l.note,onChangeMethod:t=>h({...l,note:t.target.value})}),e.jsx(u,{message:s&&(s==null?void 0:s["billingDetails.notes"]),className:"mt-2",style:{color:"red"}})]})]})]})}),e.jsxs("section",{className:"container mt-5 px-4",children:[e.jsx("h3",{className:"mb-4 text-center",children:"Your Order"}),d.map((t,a)=>e.jsxs("div",{className:"row align-items-center border-bottom py-2",children:[e.jsxs("div",{className:"col-6",children:[t.name," - ",t.description," × ",t.quantity]}),e.jsxs("div",{className:"col-6 text-end",children:["£",t.price," "]})]},a)),e.jsxs("div",{className:"row align-items-center border-bottom py-2",children:[e.jsx("div",{className:"col-6",children:"Subtotal"}),e.jsxs("div",{className:"col-6 text-end",children:["£",d.reduce((t,a)=>t+a.price*a.quantity,0).toFixed(2)]})]}),e.jsxs("div",{className:"row align-items-center py-2",children:[e.jsx("div",{className:"col-6",children:e.jsx("strong",{children:"Total"})}),e.jsx("div",{className:"col-6 text-end",children:e.jsxs("strong",{children:["£",m()]})})]})]}),e.jsxs("div",{className:"p-3 bg-inf",children:[e.jsx("h3",{className:"text-center",children:"Card Payment"}),e.jsx("hr",{})]}),e.jsxs("div",{className:"p-5 bg-light-grey",children:[e.jsx("h2",{children:"Checkout"}),e.jsxs("p",{children:["Total: £",m()]}),e.jsx("div",{id:"card-container"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("button",{onClick:G,disabled:N,className:"btn btn-danger text-white px-3 mx-3",children:N?"Processing...":"Pay Now"}),e.jsxs("form",{id:"payment-form ",children:[e.jsx("div",{id:"google-pay-button"}),e.jsx("div",{id:"card-container"}),e.jsx("button",{id:"card-button",type:"button",children:m()})]})]}),e.jsx("div",{id:"payment-status-container"})]}),e.jsx(E,{})]})};export{J as default};
