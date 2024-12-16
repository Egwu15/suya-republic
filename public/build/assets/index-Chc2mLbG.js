import{r as l,q as j,j as s,a as e,y as m}from"./app-CKuYcGm-.js";import{l as f}from"./Mobile-Logo-DjYHHJYk.js";import b from"./CartIcon-Cm7rYQiR.js";import{u as N}from"./Store-saFmi5IA.js";/* empty css              */const R=()=>{const[r,c]=l.useState(!1),{guest:o,setGuest:a,clearGuest:i}=N(),d=j().props.auth.user,x=()=>c(!r),h=()=>{i(),localStorage.removeItem("guestUser"),m.post(route("logout"))};return l.useEffect(()=>{const t=JSON.parse(localStorage.getItem("guestUser"));t&&a(t)},[a]),s.jsx("div",{className:"navbar-section",children:s.jsx("div",{className:" ",children:s.jsxs("nav",{className:"navb",children:[s.jsx(e,{className:"navbar-brand d-flex mr-auto",href:"/",children:s.jsx("img",{src:f,alt:"Logo",className:"home-logo"})}),s.jsx("button",{className:"navbar-togg",onClick:x,children:s.jsx("i",{className:"bi bi-list"})}),s.jsx("div",{className:`menu-links ${r?"show":"hide"}`,children:s.jsxs("ul",{className:"ml-auto",children:[s.jsx("li",{className:"notify",children:s.jsx(e,{href:"/",className:"nav-test text-dark font-bold",children:"HOME"})}),s.jsx("li",{className:"notify",children:s.jsx(e,{href:"/menu",className:"nav-test text-dark font-bold",children:"OUR MENU"})}),s.jsx("li",{className:"notify",children:s.jsx(e,{href:"/international-menu",className:"nav-test text-dark font-bold",children:"INTERNATIONAL"})}),s.jsx("li",{className:"notify",children:s.jsx(e,{href:"/about",className:"nav-test text-dark font-bold",children:"OUR BRAND"})}),s.jsx("li",{className:"notify",children:s.jsx(e,{href:"/contact",className:"nav-test text-dark font-bold",children:"TALK TO US"})}),s.jsx("li",{className:"notify",children:s.jsx(e,{href:"/cart",className:"nav-test text-dark font-bold",children:s.jsx(b,{})})}),s.jsx("li",{children:s.jsx(e,{href:"/order-online",className:"blue-btn-nav nav-test text-white",children:"ORDER ONLINE"})}),s.jsx("li",{children:o||d?s.jsx("button",{onClick:h,className:"black-btn-nav mx-1 p-2 text-white",children:"Sign Out"}):s.jsx(e,{href:"/login",className:"black-btn-nav mx-1 text-white",children:"Sign In"})})]})})]})})})},u="/build/assets/arrow-up-small-footer-DfrJxHNT.svg",g="/build/assets/facebook-o38rxvCE.svg",p="/build/assets/instagram-CY8Zd02N.svg",v="/build/assets/Footer-Banner-EvxxaCtr.jpg",O="/build/assets/twitter-Bh_0Y-Ud.svg",n="#b7903c",y="#ffffff",C="#D2401E",T=()=>s.jsx("div",{children:s.jsxs("footer",{className:"last-section pb-5",children:[s.jsxs("div",{className:"row row-grid",children:[s.jsxs("div",{className:"footer-cards col-md-6",children:[s.jsxs("div",{className:"footer-card mb-5 pl-5",children:[s.jsx("h1",{style:{color:n},children:"HOTLINES"}),s.jsxs("span",{children:[s.jsx("a",{href:"tel:07378837837",className:"text-decoration-none",children:"07378 837837"}),","," ",s.jsx("a",{href:"tel:01616980898",className:"text-decoration-none",children:"01616980898"})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("h1",{style:{color:n},children:"QUICK LINKS"}),s.jsx(e,{href:"/",className:"text-decoration-none",children:s.jsx("p",{children:"Home"})}),s.jsx(e,{href:"/menu",className:"text-decoration-none",children:s.jsx("p",{children:"Our Menu"})}),s.jsx(e,{href:"/about",className:"text-decoration-none",children:s.jsx("p",{children:"Our Brand"})}),s.jsx(e,{href:"/contact",className:"text-decoration-none",children:s.jsx("p",{children:"Talk to us"})})]}),s.jsx("div",{className:"footer-card mb-5",children:s.jsxs("div",{className:"socialfootericon",children:[s.jsx("h1",{children:"Follow Us"}),s.jsxs("div",{className:"footer-img",children:[s.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://x.com/suyarepublick",children:[" ",s.jsx("img",{src:O,alt:"",width:"20",height:"20"})," "]}),s.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/suyarepublick",children:[s.jsx("img",{src:g,alt:"",width:"20",height:"20"})," "]}),s.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/suyarepublick/",children:[" ",s.jsx("img",{src:p,alt:"",width:"20",height:"20"})," "]})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("h1",{children:"OPENING HOURS"}),s.jsx("h3",{children:"TUESDAY TO SUNDAY"}),s.jsx("span",{children:"5:00pm – 11:00pm"}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("h3",{children:"VISIT US"}),s.jsxs("span",{children:["303 Chester road Manchester ",s.jsx("br",{}),"M15 4EY"]})]})}),s.jsxs("div",{className:"footer-card mb-5",children:[s.jsx("h2",{children:"WE ARE BRINGING THE TASTE OF AFRICA TO MANCHESTER."}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("span",{children:"© 2024 Suya Republick."})]})]}),s.jsx("div",{className:"pb-5 col-md-6",children:s.jsx("img",{src:v,alt:"footer banner",loading:"lazy",style:{width:"100%"}})})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("hr",{}),s.jsx("br",{}),s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-8",children:s.jsx("span",{children:"SUYA REPUBLICK"})}),s.jsx("div",{className:"col-md-2 offset-2",children:s.jsx("a",{href:"#top",children:s.jsx("div",{className:"footer-block-square",children:s.jsx("img",{src:u,alt:""})})})})]})})]})});export{C,T as F,R as N,y as a};
