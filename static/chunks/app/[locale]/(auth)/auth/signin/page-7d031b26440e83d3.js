(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3977],{4871:(t,e,s)=>{Promise.resolve().then(s.bind(s,5278))},5278:(t,e,s)=>{"use strict";s.d(e,{ProviderButton:()=>c});var r=s(5155);let i=(0,s(4057).A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var n=s(6436),o=s(2615),u=s(6046),a=s(5565);function c(t){let{provider:e}=t,s=function(t){let e=(0,u.usePathname)().split("/")[1],s=(0,n.n)({mutationFn:()=>(0,o.signIn)(t.id,{callbackUrl:"/".concat(e,"/"),redirect:!1})});return{isPending:s.isPending,signIn:s.mutate}}(e);return(0,r.jsxs)("button",{type:"button",className:"flex w-full text-[#383F47]    items-center justify-center    gap-2 rounded-[5px] border   border-zinc-300 bg-white px-4    py-2 text-sm font-semibold   shadow-sm hover:bg-zinc-50 sm:w-auto",onClick:()=>s.signIn(),children:[(t=>{switch(t.id){case"github":return(0,r.jsx)(i,{});case"google":return(0,r.jsx)(a.default,{src:"/icons/icon-google.svg",width:20,height:20,alt:"google icon"});default:return null}})(e),(0,r.jsx)("span",{children:e.name})]})}},6046:(t,e,s)=>{"use strict";s.r(e);var r=s(6658),i={};for(let t in r)"default"!==t&&(i[t]=()=>r[t]);s.d(e,i)},6436:(t,e,s)=>{"use strict";s.d(e,{n:()=>l});var r=s(2115),i=s(1049),n=s(5586),o=s(9323),u=s(4403),a=class extends o.Q{#t;#e=void 0;#s;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.f8)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.EN)(e.mutationKey)!==(0,u.EN)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#n(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#n()}mutate(t,e){return this.#r=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,i.$)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#n(t){n.j.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#r.onSuccess?.(t.data,e,s),this.#r.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#r.onError?.(t.error,e,s),this.#r.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},c=s(5906);function h(){}function l(t,e){var s,i;let o=(0,c.jE)(e),[u]=r.useState(()=>new a(o,t));r.useEffect(()=>{u.setOptions(t)},[u,t]);let l=r.useSyncExternalStore(r.useCallback(t=>u.subscribe(n.j.batchCalls(t)),[u]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),d=r.useCallback((t,e)=>{u.mutate(t,e).catch(h)},[u]);if(l.error&&(s=u.options.throwOnError,i=[l.error],"function"==typeof s?s(...i):!!s))throw l.error;return{...l,mutate:d,mutateAsync:l.mutate}}},4057:(t,e,s)=>{"use strict";s.d(e,{A:()=>a});var r=s(2115);let i=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var t=arguments.length,e=Array(t),s=0;s<t;s++)e[s]=arguments[s];return e.filter((t,e,s)=>!!t&&""!==t.trim()&&s.indexOf(t)===e).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((t,e)=>{let{color:s="currentColor",size:i=24,strokeWidth:u=2,absoluteStrokeWidth:a,className:c="",children:h,iconNode:l,...d}=t;return(0,r.createElement)("svg",{ref:e,...o,width:i,height:i,stroke:s,strokeWidth:a?24*Number(u)/Number(i):u,className:n("lucide",c),...d},[...l.map(t=>{let[e,s]=t;return(0,r.createElement)(e,s)}),...Array.isArray(h)?h:[h]])}),a=(t,e)=>{let s=(0,r.forwardRef)((s,o)=>{let{className:a,...c}=s;return(0,r.createElement)(u,{ref:o,iconNode:e,className:n("lucide-".concat(i(t)),a),...c})});return s.displayName="".concat(t),s}}},t=>{var e=e=>t(t.s=e);t.O(0,[5565,2615,3306,8441,1517,7358],()=>e(4871)),_N_E=t.O()}]);