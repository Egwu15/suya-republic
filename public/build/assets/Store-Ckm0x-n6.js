import{B as x}from"./react-toastify.esm-DLQSzsQt.js";import{U as b}from"./app-BZT13Khd.js";const _=r=>{let a;const t=new Set,n=(i,I)=>{const f=typeof i=="function"?i(a):i;if(!Object.is(f,a)){const g=a;a=I??(typeof f!="object"||f===null)?f:Object.assign({},a,f),t.forEach(d=>d(a,g))}},o=()=>a,u={setState:n,getState:o,getInitialState:()=>m,subscribe:i=>(t.add(i),()=>t.delete(i))},m=a=r(n,o,u);return u},C=r=>r?_(r):_,F=r=>r;function G(r,a=F){const t=b.useSyncExternalStore(r.subscribe,()=>a(r.getState()),()=>a(r.getInitialState()));return b.useDebugValue(t),t}const O=r=>{const a=C(r),t=n=>G(a,n);return Object.assign(t,a),t},J=r=>r?O(r):O;function N(r,a){let t;try{t=r()}catch{return}return{getItem:o=>{var e;const l=m=>m===null?null:JSON.parse(m,void 0),u=(e=t.getItem(o))!=null?e:null;return u instanceof Promise?u.then(l):l(u)},setItem:(o,e)=>t.setItem(o,JSON.stringify(e,void 0)),removeItem:o=>t.removeItem(o)}}const y=r=>a=>{try{const t=r(a);return t instanceof Promise?t:{then(n){return y(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return y(n)(t)}}}},q=(r,a)=>(t,n,o)=>{let e={storage:N(()=>localStorage),partialize:s=>s,version:0,merge:(s,v)=>({...v,...s}),...a},l=!1;const u=new Set,m=new Set;let i=e.storage;if(!i)return r((...s)=>{console.warn(`[zustand persist middleware] Unable to update item '${e.name}', the given storage is currently unavailable.`),t(...s)},n,o);const I=()=>{const s=e.partialize({...n()});return i.setItem(e.name,{state:s,version:e.version})},f=o.setState;o.setState=(s,v)=>{f(s,v),I()};const g=r((...s)=>{t(...s),I()},n,o);o.getInitialState=()=>g;let d;const p=()=>{var s,v;if(!i)return;l=!1,u.forEach(c=>{var S;return c((S=n())!=null?S:g)});const h=((v=e.onRehydrateStorage)==null?void 0:v.call(e,(s=n())!=null?s:g))||void 0;return y(i.getItem.bind(i))(e.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==e.version){if(e.migrate)return[!0,e.migrate(c.state,c.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,c.state];return[!1,void 0]}).then(c=>{var S;const[H,j]=c;if(d=e.merge(j,(S=n())!=null?S:g),t(d,!0),H)return I()}).then(()=>{h==null||h(d,void 0),d=n(),l=!0,m.forEach(c=>c(d))}).catch(c=>{h==null||h(void 0,c)})};return o.persist={setOptions:s=>{e={...e,...s},s.storage&&(i=s.storage)},clearStorage:()=>{i==null||i.removeItem(e.name)},getOptions:()=>e,rehydrate:()=>p(),hasHydrated:()=>l,onHydrate:s=>(u.add(s),()=>{u.delete(s)}),onFinishHydration:s=>(m.add(s),()=>{m.delete(s)})},e.skipHydration||p(),d||g},w=q,R=J(w((r,a)=>({cartItems:[],addItem:t=>{const{cartItems:n}=a(),o=t.is_international;if(n.some(l=>l.is_international!==o)){alert("You can only select items from one category (local or international) at a time."),x.error("You can only select items from one category (local or international) at a time.");return}r(l=>({cartItems:[...l.cartItems,{...t,quantity:1,spice:null}]}))},removeItem:t=>{r(n=>({cartItems:n.cartItems.filter(o=>o.id!==t)}))},updateItemQuantity:(t,n)=>{r(o=>({cartItems:o.cartItems.map(e=>e.id===t?{...e,quantity:Math.max(1,e.quantity+n)}:e)}))},updateItemVariance:(t,n)=>{r(o=>({cartItems:o.cartItems.map(e=>e.id===t?{...e,spice:n}:e)}))},calculateTotal:()=>{const{cartItems:t}=a();return t.reduce((n,o)=>n+o.price*o.quantity,0).toFixed(2)},clearCart:()=>{r({cartItems:[]})},guest:null,setGuest:t=>r({guest:t}),clearGuest:()=>r({guest:null}),saveGuestToLocalStorage:()=>{const{guest:t}=a();t&&localStorage.setItem("guestUser",JSON.stringify(t))},loadUserFromLocalStorage:()=>{const t=localStorage.getItem("savedGuest");t&&r({user:JSON.parse(t)})}})));export{R as u};
