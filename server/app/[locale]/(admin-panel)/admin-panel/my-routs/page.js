(()=>{var e={};e.id=403,e.ids=[403],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},1770:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=a(70260),r=a(28203),l=a(25155),o=a.n(l),n=a(67292),i={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);a.d(t,i);let d=["",{children:["[locale]",{children:["(admin-panel)",{children:["admin-panel",{children:["my-routs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7677)),"C:\\Users\\TurckDrive-PC2\\Desktop\\transfer\\transfer\\app\\[locale]\\(admin-panel)\\admin-panel\\my-routs\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,23641)),"C:\\Users\\TurckDrive-PC2\\Desktop\\transfer\\transfer\\app\\[locale]\\(admin-panel)\\admin-panel\\layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,95694)),"C:\\Users\\TurckDrive-PC2\\Desktop\\transfer\\transfer\\app\\[locale]\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["C:\\Users\\TurckDrive-PC2\\Desktop\\transfer\\transfer\\app\\[locale]\\(admin-panel)\\admin-panel\\my-routs\\page.tsx"],p={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/[locale]/(admin-panel)/admin-panel/my-routs/page",pathname:"/[locale]/admin-panel/my-routs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},25407:(e,t,a)=>{Promise.resolve().then(a.bind(a,7677))},19831:(e,t,a)=>{Promise.resolve().then(a.bind(a,76002))},76002:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var s=a(45512),r=a(87021),l=a(25409),o=a(58009);let n=({options:e,initialSelected:t=[],onSelectionChange:a})=>{let[r,l]=(0,o.useState)(t),n=e=>{let t=r.includes(e)?r.filter(t=>t!==e):[...r,e];l(t),a(t)};return(0,s.jsx)("div",{className:"space-y-2",children:(0,s.jsx)("div",{className:"space-y-1",children:e.map(e=>(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"checkbox",id:e.id,checked:r.includes(e.id),onChange:()=>n(e.id),className:"mr-2 text-[#373F47]"}),(0,s.jsx)("label",{htmlFor:e.id,children:e.name})]},e.id))})})};var i=a(54069),d=a(13393),c=a(59462);let p=o.forwardRef(({className:e,...t},a)=>(0,s.jsx)("textarea",{className:(0,c.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...t}));p.displayName="Textarea";var m=a(73826);let u=(0,a(94825).A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var x=a(1422);function h(){let[e,t]=(0,o.useState)([]),[a,c]=(0,o.useState)([]),[h,f]=(0,o.useState)(!1),[g,j]=(0,o.useState)([]),[y,N]=(0,o.useState)([]),[b,v]=(0,o.useState)(null),[w,C]=(0,o.useState)([]),[k,R]=(0,o.useState)({inRoute:"",toRoute:"",inRouteEn:"",toRouteEn:"",cityId:"",popularRoute:!1,price:0,pointsGoogleMap:{points:[{lat:0,lng:0},{lat:0,lng:0}]},description:"",descriptionEn:"",transferCarIds:[]}),P=g.map(e=>({id:e.id,name:e.name})),E=(e,t)=>{let a=w.filter(e=>e.routeId===t).map(e=>e.transferCarsIds).flat(),s=a.filter(t=>!e.includes(t)),r=e.filter(e=>!a.includes(e));if(C(w.map(a=>a.routeId===t?{...a,transferCarsIds:e}:a)),r.length>0){fetch("http://localhost:3000/api/my-routs/add-transfer-car",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({addedId:r[0],routeId:t})}).then(e=>e.json()).catch(()=>console.error("Failed to fetch countries"));return}if(s.length>0){fetch("http://localhost:3000/api/my-routs/delete-transfer-car",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({routeId:t,deletedId:s[0]})}).then(e=>e.json());return}},A=async()=>{if(!b)return null;let e=new FormData;e.append("file",b);try{let t=await fetch("http://localhost:3000/api/upload",{method:"POST",body:e});if(!t.ok)throw Error("Image upload failed");return(await t.json()).imageUrl}catch(e){return console.error(e),null}},F=()=>{R({inRoute:"",toRoute:"",inRouteEn:"",toRouteEn:"",cityId:"",price:0,popularRoute:!1,pointsGoogleMap:{points:[{lat:0,lng:0},{lat:0,lng:0}]},description:"",descriptionEn:"",transferCarIds:[]})},T=async()=>{if(!a||!b||!k.cityId||!k.inRoute||!k.toRoute||!y)return;let s=await A();if(s)try{let a=await fetch("http://localhost:3000/api/my-routs",{method:"POST",body:JSON.stringify({...k,pointsGoogleMap:JSON.stringify(k.pointsGoogleMap),imageUrl:s,transferCarIds:k.transferCarIds}),headers:{"Content-Type":"application/json"}});if(!a.ok)throw Error("Failed to add new-route");let r=await a.json();t([...e,r]),F(),v(null),f(!1)}catch(e){console.error(e)}},I=async a=>{try{let s=await fetch(`http://localhost:3000/api/my-routs/${a}`,{method:"DELETE"});if(!s.ok){let e=await s.json();throw Error(e.error||"Failed to delete route")}t(e.filter(e=>e.id!==a))}catch(e){console.error("Error deleting country:",e)}},M=async(a,s)=>{try{let r=await fetch(`http://localhost:3000/api/my-routs/${a}/set-popular-route`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({popularRoute:s})});if(!r.ok)throw Error("Failed to update");let l=await r.json();t(e.map(e=>e.id===a?l:e))}catch(e){console.error(e)}};return(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("div",{className:"mb-3 text-[#373F47] font-bold",children:"Добавить маршрут"}),(0,s.jsx)(r.$,{className:"mb-8",onClick:()=>{f(!0)},children:"Добавить"}),h&&(0,s.jsx)("div",{className:"absolute top-0 right-0 bottom-0 left-0 bg-[#00000085] z-20 flex justify-center items-center",children:(0,s.jsxs)("div",{className:"z-30 bg-white p-4 max-w-[450px] max-h-[500px] rounded-[10px] flex flex-col gap-4 pb-16 overflow-y-auto custom-scroll",children:[(0,s.jsx)("button",{onClick:()=>{F(),v(null),f(!1)},className:"cursor-pointer text-[#f02f2f] self-end",children:(0,s.jsx)(m.A,{})}),(0,s.jsx)("div",{className:"mb-3 text-[#373F47] font-bold self-center",children:"Добавить новый маршрут"}),(0,s.jsxs)(i.l6,{onValueChange:e=>R(t=>({...t,cityId:e})),children:[(0,s.jsx)(i.bq,{className:"w-full",children:(0,s.jsx)(i.yv,{placeholder:"Укажите город"})}),(0,s.jsx)(i.gC,{children:a.map(e=>(0,s.jsx)(i.eb,{value:e.id,children:e.name},e.id))})]}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,inRoute:e.target.value})),id:"inRoute",type:"text",className:"",placeholder:"От куда"}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,toRoute:e.target.value})),id:"toRoute",type:"text",className:"",placeholder:"Куда"}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,inRouteEn:e.target.value})),id:"inRouteEn",type:"text",className:"",placeholder:"От куда En"}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,toRouteEn:e.target.value})),id:"toRouteEn",type:"text",className:"",placeholder:"Куда En"}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,price:Number(e.target.value)})),id:"price",type:"text",className:"",placeholder:"Цена"}),(0,s.jsxs)("div",{className:" flex flex-col gap-4 mt-3",children:[(0,s.jsx)("p",{className:"text-[#373F47] font-bold text-center",children:"Точки маршрута для Googl карты"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,pointsGoogleMap:{...t.pointsGoogleMap,points:t.pointsGoogleMap.points.map((t,a)=>0===a?{...t,lat:parseFloat(e.target.value)||0}:t)}})),id:"lat1",type:"text",className:"",placeholder:"lat1 - точка маршрута"}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,pointsGoogleMap:{...t.pointsGoogleMap,points:t.pointsGoogleMap.points.map((t,a)=>0===a?{...t,lng:parseFloat(e.target.value)||0}:t)}})),id:"lng1",type:"text",className:"",placeholder:"lng1 - точка маршрута"})]}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,pointsGoogleMap:{...t.pointsGoogleMap,points:t.pointsGoogleMap.points.map((t,a)=>1===a?{...t,lat:parseFloat(e.target.value)||0}:t)}})),id:"lat2",type:"text",className:"",placeholder:"lat2 - точка маршрута"}),(0,s.jsx)(l.p,{onChange:e=>R(t=>({...t,pointsGoogleMap:{...t.pointsGoogleMap,points:t.pointsGoogleMap.points.map((t,a)=>1===a?{...t,lng:parseFloat(e.target.value)||0}:t)}})),id:"lng2",type:"text",className:"",placeholder:"lng2 - точка маршрута"})]})]}),(0,s.jsx)("p",{className:"text-[#373F47] font-bold text-center mt-3",children:"Описание маршрута"}),(0,s.jsx)(p,{onChange:e=>R(t=>({...t,description:e.target.value})),placeholder:"Введите описание маршрута"}),(0,s.jsx)(p,{onChange:e=>R(t=>({...t,descriptionEn:e.target.value})),placeholder:"Описание маршрута En"}),(0,s.jsx)("p",{className:"text-[#373F47] font-bold text-center mt-3",children:"Фото для стрицы"}),(0,s.jsx)(l.p,{className:"cursor-pointer",type:"file",onChange:e=>v(e.target.files?.[0]||null)}),(0,s.jsx)("p",{className:"text-[#373F47] font-bold text-center mt-3",children:"Авто"}),(0,s.jsx)(n,{options:P,onSelectionChange:e=>{N(e),R({...k,transferCarIds:e})}}),(0,s.jsx)(r.$,{className:"mt-3",onClick:()=>{T()},children:"Сохранить маршрут"})]})}),(0,s.jsxs)(d.XI,{children:[(0,s.jsx)(d.A0,{children:(0,s.jsxs)(d.Hj,{children:[(0,s.jsx)(d.nd,{className:"px-6",children:"От куда"}),(0,s.jsx)(d.nd,{className:"px-6"}),(0,s.jsx)(d.nd,{className:"px-6",children:"Куда"}),(0,s.jsx)(d.nd,{className:"px-6",children:"Город"}),(0,s.jsx)(d.nd,{className:"px-6",children:"Популярный маршрут?"}),(0,s.jsx)(d.nd,{className:"px-6",children:"Классы авто"}),(0,s.jsx)(d.nd,{className:"px-6"})]})}),(0,s.jsx)(d.BF,{children:e.map(e=>(0,s.jsxs)(d.Hj,{children:[(0,s.jsx)(d.nA,{className:"px-6",children:e.inRoute}),(0,s.jsx)(d.nA,{className:"px-6",children:(0,s.jsx)(u,{className:"text-[#c0c0c0]",strokeWidth:1})}),(0,s.jsx)(d.nA,{className:"px-6",children:e.toRoute}),(0,s.jsx)(d.nA,{className:"px-6",children:e.cityId&&a.find(t=>t.id===e.cityId)?.name}),(0,s.jsx)(d.nA,{className:"flex justify-center px-6",children:e.popularRoute?(0,s.jsx)("div",{className:"cursor-pointer",onClick:()=>M(e.id,!e.popularRoute),children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFE6B8",stroke:"#F9AC1A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-star",children:(0,s.jsx)("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}):(0,s.jsx)("div",{className:"cursor-pointer",onClick:()=>M(e.id,!e.popularRoute),children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#6C7C8C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-star hover:fill-[#FFE6B8] hover:stroke-[#F9AC1A]",children:(0,s.jsx)("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})})}),(0,s.jsx)(d.nA,{className:"px-6",children:(0,s.jsx)(n,{options:P,initialSelected:w.filter(t=>t.routeId===e.id).map(e=>e.transferCarsIds).flat(),onSelectionChange:t=>E(t,e.id)})}),(0,s.jsx)(d.nA,{className:"px-6",children:(0,s.jsx)(x.A,{onClick:()=>{I(e.id)},className:"cursor-pointer text-[#6C7C8C] hover:text-rose-500"})})]},e.id))})]})]})}},54069:(e,t,a)=>{"use strict";a.d(t,{bq:()=>m,eb:()=>f,gC:()=>h,l6:()=>c,yv:()=>p});var s=a(45512),r=a(58009),l=a(45274),o=a(7833),n=a(36624),i=a(24999),d=a(59462);let c=l.bL;l.YJ;let p=l.WT,m=r.forwardRef(({className:e,children:t,...a},r)=>(0,s.jsxs)(l.l9,{ref:r,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...a,children:[t,(0,s.jsx)(l.In,{asChild:!0,children:(0,s.jsx)(o.A,{className:"h-4 w-4 opacity-50"})})]}));m.displayName=l.l9.displayName;let u=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(l.PP,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,s.jsx)(n.A,{className:"h-4 w-4"})}));u.displayName=l.PP.displayName;let x=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(l.wn,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,s.jsx)(o.A,{className:"h-4 w-4"})}));x.displayName=l.wn.displayName;let h=r.forwardRef(({className:e,children:t,position:a="popper",...r},o)=>(0,s.jsx)(l.ZL,{children:(0,s.jsxs)(l.UC,{ref:o,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===a&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:a,...r,children:[(0,s.jsx)(u,{}),(0,s.jsx)(l.LM,{className:(0,d.cn)("p-1","popper"===a&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,s.jsx)(x,{})]})}));h.displayName=l.UC.displayName,r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(l.JU,{ref:a,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=l.JU.displayName;let f=r.forwardRef(({className:e,children:t,...a},r)=>(0,s.jsxs)(l.q7,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...a,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.VF,{children:(0,s.jsx)(i.A,{className:"h-4 w-4"})})}),(0,s.jsx)(l.p4,{children:t})]}));f.displayName=l.q7.displayName,r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(l.wv,{ref:a,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=l.wv.displayName},13393:(e,t,a)=>{"use strict";a.d(t,{A0:()=>n,BF:()=>i,Hj:()=>d,XI:()=>o,nA:()=>p,nd:()=>c});var s=a(45512),r=a(58009),l=a(59462);let o=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:a,className:(0,l.cn)("w-full caption-bottom text-sm",e),...t})}));o.displayName="Table";let n=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("thead",{ref:a,className:(0,l.cn)("[&_tr]:border-b",e),...t}));n.displayName="TableHeader";let i=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("tbody",{ref:a,className:(0,l.cn)("[&_tr:last-child]:border-0",e),...t}));i.displayName="TableBody",r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("tfoot",{ref:a,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let d=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("tr",{ref:a,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));d.displayName="TableRow";let c=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("th",{ref:a,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));c.displayName="TableHead";let p=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("td",{ref:a,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));p.displayName="TableCell",r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("caption",{ref:a,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"},7677:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\TurckDrive-PC2\\\\Desktop\\\\transfer\\\\transfer\\\\app\\\\[locale]\\\\(admin-panel)\\\\admin-panel\\\\my-routs\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\TurckDrive-PC2\\Desktop\\transfer\\transfer\\app\\[locale]\\(admin-panel)\\admin-panel\\my-routs\\page.tsx","default")},73826:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(94825).A)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[638,4512,8403,5153,4391,7237,2098,6512],()=>a(1770));module.exports=s})();