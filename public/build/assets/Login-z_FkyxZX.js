import{r,W as y,j as e,a as n,y as w}from"./app-CXrDWQMU.js";import{l as v}from"./Mobile-Logo-DjYHHJYk.js";import{u as c}from"./Store-B_48ck9c.js";import{Q as k}from"./react-toastify.esm-BEAWhAsR.js";/* empty css                      */import{I as i}from"./InputError-D12zsEwA.js";const R=()=>{const{cartItems:m}=c(),[d,G]=r.useState(!1),[u,S]=r.useState({email:"guest-email",name:"guest-name"}),{addGuest:C,saveGuestToLocalStorage:h,setGuest:x}=c(),[o,p]=r.useState(!1),b=()=>{p(s=>!s)},{data:t,setData:a,post:j,processing:E,errors:l,reset:g}=y({email:"",password:"",remember:!1}),f=s=>{s.preventDefault(),j(route("login"),{onFinish:()=>g("password"),onSuccess:()=>{w.visit(route("menu"))}})},N=s=>{s.preventDefault(),x(u),h(),window.location.href="/checkout"};return e.jsxs("div",{className:"d-flex justify-content-center align-items-center vh-100 custom-bg",children:[e.jsx(k,{}),e.jsxs("div",{className:"card p-4 shadow",style:{maxWidth:"400px",width:"100%"},children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("img",{src:v,alt:"",className:"home-logo",style:{height:"50px"}}),e.jsx("h2",{className:"h5",children:d?"Guest Login":"Log in"})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),e.jsx("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your email",onChange:s=>a("email",s.target.value),value:t.email}),e.jsx(i,{message:l.email,className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:o?"text":"password",id:"password",className:"form-control",placeholder:"Enter your password",value:t.password,onChange:s=>a("password",s.target.value)}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:b,children:e.jsx("i",{className:`bi ${o?"bi-eye-slash":"bi-eye"}`})})]}),e.jsx(i,{message:l.password,className:"mt-2",style:{color:"red"}})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"checkbox",value:t.remember,onChange:s=>a("remember",s.target.value),id:"rememberMe",className:"form-check-input"}),e.jsx("label",{htmlFor:"rememberMe",className:"form-check-label",children:"Remember Me"})]}),e.jsx(n,{href:"/forgot-password",className:"text-decoration-none",children:"Forgot Password?"})]}),e.jsx("button",{type:"submit",className:"btn btn-dark w-100",children:"LOG IN"}),m.length?e.jsx("div",{className:"my-2 d-flex justify-content-center py-2 proceed-btn",children:e.jsx("button",{type:"button",onClick:N,className:"btn btn-link text-decoration-none text-dark text-center",children:"Continue as Guest"})}):""]}),e.jsxs("div",{className:"text-center my-3",children:[e.jsx("span",{children:"New to Suya ? "}),e.jsx(n,{href:"/signup",className:"text-decoration-none",children:"Create an account"})]})]})]})};export{R as default};