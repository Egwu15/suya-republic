import{W as n,j as e,Y as a,a as m}from"./app-BtVqer0y.js";import{P as d}from"./PrimaryButton-l8lvT98N.js";import{G as l}from"./GuestLayout-ST7c7Kmt.js";import"./ApplicationLogo-DTpO7UyM.js";import"./Store-DGzv_j8r.js";import"./react-toastify.esm-CU7evyeM.js";/* empty css              */function y({status:t}){const{post:i,processing:s}=n({}),o=r=>{r.preventDefault(),i(route("verification.send"))};return e.jsxs(l,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:o,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(d,{disabled:s,children:"Resend Verification Email"}),e.jsx(m,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Log Out"})]})})]})}export{y as default};