import"./react-toastify.esm-CYymTfzp.js";import{U as b}from"./app-DFyOknVN.js";const _=r=>{let o;const t=new Set,n=(i,I)=>{const f=typeof i=="function"?i(o):i;if(!Object.is(f,o)){const g=o;o=I??(typeof f!="object"||f===null)?f:Object.assign({},o,f),t.forEach(d=>d(o,g))}},s=()=>o,u={setState:n,getState:s,getInitialState:()=>m,subscribe:i=>(t.add(i),()=>t.delete(i))},m=o=r(n,s,u);return u},x=r=>r?_(r):_,C=r=>r;function F(r,o=C){const t=b.useSyncExternalStore(r.subscribe,()=>o(r.getState()),()=>o(r.getInitialState()));return b.useDebugValue(t),t}const O=r=>{const o=x(r),t=n=>F(o,n);return Object.assign(t,o),t},G=r=>r?O(r):O;function J(r,o){let t;try{t=r()}catch{return}return{getItem:s=>{var e;const l=m=>m===null?null:JSON.parse(m,void 0),u=(e=t.getItem(s))!=null?e:null;return u instanceof Promise?u.then(l):l(u)},setItem:(s,e)=>t.setItem(s,JSON.stringify(e,void 0)),removeItem:s=>t.removeItem(s)}}const y=r=>o=>{try{const t=r(o);return t instanceof Promise?t:{then(n){return y(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return y(n)(t)}}}},N=(r,o)=>(t,n,s)=>{let e={storage:J(()=>localStorage),partialize:a=>a,version:0,merge:(a,v)=>({...v,...a}),...o},l=!1;const u=new Set,m=new Set;let i=e.storage;if(!i)return r((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${e.name}', the given storage is currently unavailable.`),t(...a)},n,s);const I=()=>{const a=e.partialize({...n()});return i.setItem(e.name,{state:a,version:e.version})},f=s.setState;s.setState=(a,v)=>{f(a,v),I()};const g=r((...a)=>{t(...a),I()},n,s);s.getInitialState=()=>g;let d;const p=()=>{var a,v;if(!i)return;l=!1,u.forEach(c=>{var S;return c((S=n())!=null?S:g)});const h=((v=e.onRehydrateStorage)==null?void 0:v.call(e,(a=n())!=null?a:g))||void 0;return y(i.getItem.bind(i))(e.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==e.version){if(e.migrate)return[!0,e.migrate(c.state,c.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,c.state];return[!1,void 0]}).then(c=>{var S;const[H,j]=c;if(d=e.merge(j,(S=n())!=null?S:g),t(d,!0),H)return I()}).then(()=>{h==null||h(d,void 0),d=n(),l=!0,m.forEach(c=>c(d))}).catch(c=>{h==null||h(void 0,c)})};return s.persist={setOptions:a=>{e={...e,...a},a.storage&&(i=a.storage)},clearStorage:()=>{i==null||i.removeItem(e.name)},getOptions:()=>e,rehydrate:()=>p(),hasHydrated:()=>l,onHydrate:a=>(u.add(a),()=>{u.delete(a)}),onFinishHydration:a=>(m.add(a),()=>{m.delete(a)})},e.skipHydration||p(),d||g},q=N,L=G(q((r,o)=>({cartItems:[],addItem:t=>{const{cartItems:n}=o(),s=t.is_international;if(n.some(l=>l.is_international!==s)){alert("You can only select items from one category (local or international) at a time.");return}r(l=>({cartItems:[...l.cartItems,{...t,quantity:1,spice:null}]}))},removeItem:t=>{r(n=>({cartItems:n.cartItems.filter(s=>s.id!==t)}))},updateItemQuantity:(t,n)=>{r(s=>({cartItems:s.cartItems.map(e=>e.id===t?{...e,quantity:Math.max(1,e.quantity+n)}:e)}))},updateItemVariance:(t,n)=>{r(s=>({cartItems:s.cartItems.map(e=>e.id===t?{...e,spice:n}:e)}))},calculateTotal:()=>{const{cartItems:t}=o();return t.reduce((n,s)=>n+s.price*s.quantity,0).toFixed(2)},clearCart:()=>{r({cartItems:[]})},guest:null,setGuest:t=>r({guest:t}),clearGuest:()=>r({guest:null}),saveGuestToLocalStorage:()=>{const{guest:t}=o();t&&localStorage.setItem("guestUser",JSON.stringify(t))},loadUserFromLocalStorage:()=>{const t=localStorage.getItem("savedGuest");t&&r({user:JSON.parse(t)})}})));export{L as u};