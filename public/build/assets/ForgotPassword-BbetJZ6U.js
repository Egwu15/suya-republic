import{W as n,j as e,a as d}from"./app-CKuYcGm-.js";import{I as c}from"./InputError-CfinR1pJ.js";import{P as x}from"./PrimaryButton-DpHnG9Ma.js";import{T as p}from"./TextInput-CK2MBaT-.js";import{l as u}from"./Mobile-Logo-DjYHHJYk.js";import"./Store-saFmi5IA.js";/* empty css              */import"./ReactToastify-D5NYSxYP.js";function y({status:a}){const{data:t,setData:o,post:r,processing:m,errors:l}=n({email:""}),i=s=>{s.preventDefault(),r(route("password.email"))};return e.jsx("div",{className:"d-flex justify-content-center align-items-center vh-100 custom-bg",children:e.jsxs("div",{className:"card p-4 shadow",style:{maxWidth:"400px",width:"100%"},children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("img",{src:u,alt:"",className:"home-logo",style:{height:"50px"}}),e.jsx("br",{})," ",e.jsx(d,{href:"/",className:"text-decoration-none",children:"Go Back To Home"})," "]}),e.jsxs("div",{className:"mb-4 text-sm text-gray-600",children:[e.jsx("h4",{children:" Forgot your password?"}),"No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."]}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:i,children:[e.jsx(p,{id:"email",type:"email",name:"email",placeholder:"Email",value:t.email,className:"mt-1 block w-full form-control",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(c,{message:l.email,className:"mt-2 text-danger"}),e.jsx("div",{className:"mt-4 ",children:e.jsx(x,{className:"ms- btn btn-dark w-100",disabled:m,children:"Email Password Reset Link"})})]})]})})}export{y as default};
