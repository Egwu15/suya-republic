import{W as p,j as s,Y as d}from"./app-C6lIOfWu.js";import{I as l}from"./InputError-Dm7z3y9Q.js";import{I as c}from"./InputLabel-CON61aJH.js";import{P as u}from"./PrimaryButton-C2ESkIDh.js";import{T as f}from"./TextInput-ChT9uiSh.js";import{G as x}from"./GuestLayout-_fztBVXy.js";import"./ApplicationLogo-BbovYrQD.js";import"./Store-BxCAa6E7.js";import"./react-toastify.esm-CTSHHc4r.js";/* empty css              */function C(){const{data:o,setData:a,post:e,processing:t,errors:i,reset:m}=p({password:""}),n=r=>{r.preventDefault(),e(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(x,{children:[s.jsx(d,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(l,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{C as default};