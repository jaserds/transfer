(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6981],{2228:(e,t,o)=>{Promise.resolve().then(o.bind(o,1102)),Promise.resolve().then(o.bind(o,6297)),Promise.resolve().then(o.bind(o,3401)),Promise.resolve().then(o.bind(o,8193)),Promise.resolve().then(o.bind(o,8379)),Promise.resolve().then(o.t.bind(o,7970,23))},1102:(e,t,o)=>{"use strict";o.d(t,{default:()=>c});var n=o(5155),s=o(7266),l=o(5565),a=o(6046),r=o(2115),i=o(814);function c(){let[e,t]=(0,r.useState)(!1),[o,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(""),[m,p]=(0,r.useState)(""),[x,h]=(0,r.useState)(!1),[f,b]=(0,r.useState)(2),[g,w]=(0,r.useState)(!1),[v,j]=(0,r.useState)(!1),[N,C]=(0,r.useState)([]),R=(0,r.useRef)(null),y=(0,r.useRef)(null),F=(0,r.useRef)(null),D=(0,a.useRouter)(),S=(0,s.useTranslations)("AppTraslation"),k=(0,s.useTranslations)("imagesAlt"),A=(0,s.useLocale)(),P=N.filter(e=>e.inRoute.toLowerCase().includes(d.toLowerCase())||e.city.toLowerCase().includes(d.toLowerCase())).reduce((e,t)=>(e.some(e=>e.inRoute===t.inRoute)||e.push(t),e),[]),E=N.filter(e=>e.inRoute===d),z=e=>{b(e),h(!1)},L=e=>{u(e),w(!1)},I=e=>{p(e),j(!1)};return(0,r.useEffect)(()=>{function e(e){R.current&&!R.current.contains(e.target)&&h(!1),y.current&&!y.current.contains(e.target)&&w(!1)}return async function(){try{let e=await fetch("".concat("http://localhost:3000/api","/my-routs/search-routs?locale=")+A);await e.json().then(e=>{C(e)})}catch(e){console.error("Ошибка загрузки маршрутов:",e)}}(),document.addEventListener("mousedown",e=>{R.current&&e.target instanceof Node&&!R.current.contains(e.target)&&h(!1),y.current&&e.target instanceof Node&&!y.current.contains(e.target)&&w(!1),F.current&&e.target instanceof Node&&!F.current.contains(e.target)&&j(!1)}),()=>document.removeEventListener("mousedown",e)},[]),(0,n.jsxs)("div",{className:"flex lg:flex-row md:flex-col max-md:flex-col w-full justify-center px-5 mb-[90px]",children:[(0,n.jsxs)("div",{className:"flex w-full max-md:flex-col",children:[(0,n.jsxs)("div",{className:"relative flex flex-col w-[46%] max-md:w-full h-[60px] z-10",ref:y,children:[(0,n.jsx)("span",{className:"max-md:hidden block absolute right-0 w-[2px] h-[80%] top-[10%] border-l-[2px] border-dashed border-[#D2D2D2]"}),(0,n.jsx)("label",{className:"absolute left-4 transition-all ".concat(e||d?"top-1 text-sm text-gray-500":"top-[25%] text-[20px] text-[#D2D2D2]"),htmlFor:"isWhereInput",children:S("components.SearchRouteComponent.labelFrom")}),(0,n.jsx)("input",{className:"focus:outline-none rounded-none text-[#373F47]   h-full w-full px-4 pt-5 pb-1 rounded-tl-[10px] lg:rounded-bl-[10px] md:rounded-bl-none max-md:rounded-t-lg",type:"text",id:"isWhereInput",value:d,onClick:()=>{w(!0)},onChange:e=>u(e.target.value),onFocus:()=>t(!0),onBlur:()=>t(!1),autoComplete:"off"}),g&&d&&P.length>0&&(0,n.jsx)("ul",{className:"absolute left-0 top-16 w-full mt-1 bg-white border rounded-l-lg shadow-md z-10",children:P.map((e,t)=>(0,n.jsxs)("li",{className:"relative px-4 py-2 cursor-pointer hover:bg-[#f9ab1a52] text-[#373F47] last:border-none",onClick:()=>{L(e.inRoute)},children:[e.inRoute,(0,n.jsxs)("p",{className:"text-[14px]",children:[e.inRoute,", ",e.city]}),(0,n.jsx)("span",{className:"block absolute bottom-0 w-[90%] h-[1px] border-b-[1px] border-[#D2D2D2]"})]},t))})]}),(0,n.jsx)("div",{className:"relative flex flex-col w-[8%] h-[60px] bg-[#fff] z-0 cursor-pointer max-md:w-full max-md:border-[1px] border-[#d2d2d264]",onClick:()=>{u(m),p(d)},children:(0,n.jsx)(l.default,{src:"/icons/main-search-icons/arrow-reverse.svg",width:30,height:30,alt:k("SearchRouteComponent.reverse"),className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"})}),(0,n.jsxs)("div",{className:"relative flex flex-col w-[47%] max-md:w-full h-[60px] z-10",ref:F,children:[(0,n.jsx)("span",{className:"max-md:hidden block absolute left-0 w-[2px]    h-[80%] top-[10%] border-l-[2px] border-dashed border-[#D2D2D2] overflow-hidden"}),(0,n.jsx)("span",{className:"max-md:hidden block absolute right-0 w-[2px]    h-[80%] top-[10%] border-l-[2px] border-dashed border-[#D2D2D2] overflow-hidden"}),(0,n.jsx)("label",{className:"absolute left-4 transition-all ".concat(o||d?"top-1 text-sm text-gray-500":"top-[25%] text-[20px] text-[#D2D2D2]"),htmlFor:"inWhereInput",children:S("components.SearchRouteComponent.labelTo")}),(0,n.jsx)("input",{className:"focus:outline-none rounded-none   h-full w-full px-4 pt-5 pb-1 border-l-0 focus:border-l-0 lg:rounded-tr-none md:rounded-tr-[10px] text-[#373F47]",type:"text",id:"inWhereInput",value:m,onClick:()=>{j(!0)},onChange:e=>p(e.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),autoComplete:"off"}),v&&E.length>0&&(0,n.jsx)("ul",{className:"absolute left-0 top-16 w-full mt-1 bg-white border rounded-l-lg shadow-md z-10",children:E.map((e,t)=>(0,n.jsxs)("li",{className:"relative px-4 py-2 cursor-pointer hover:bg-[#f9ab1a52] text-[#373F47] last:border-none",onClick:()=>{I(e.toRoute)},children:[e.toRoute,(0,n.jsxs)("p",{className:"text-[14px]",children:[e.toRoute,", ",e.city]}),(0,n.jsx)("span",{className:"block absolute bottom-0 w-[90%] h-[1px] border-b-[1px] border-[#D2D2D2]"})]},t))})]})]}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("div",{className:"relative z-9 lg:w-auto md:w-[50%] max-md:w-1/2",ref:R,children:[(0,n.jsxs)("button",{className:"flex items-center gap-2 px-2 py-2 h-full lg:border-none lg:rounded-none md:rounded-t-none max-md:rounded-bl-lg md:rounded-bl-lg lg:w-[180px] md:w-full max-md:w-full bg-white",onClick:()=>h(!x),children:[(0,n.jsx)("svg",{className:"w-7 h-7 text-[#D2D2D2]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M13.55 2c-.139 0-.279-.047-.502-.163a8.99 8.99 0 01-.164-.088l-.004-.002a6.26 6.26 0 00-.69-.337c-.758-.3-1.756-.415-3.348.116a.5.5 0 00.316.948c1.408-.469 2.16-.334 2.664-.134.2.079.359.165.532.26.075.04.15.082.234.125.26.134.576.275.962.275.093 0 .155.011.194.023a.213.213 0 01.046.02.183.183 0 01.004.057c-.01.189-.178.577-.648 1.046A.5.5 0 0013 4.5c0 .375.013.582.026.782v.001c.012.19.024.373.024.717 0 .688-.085 1.144-.22 1.455a1.152 1.152 0 01-.559.6A.5.5 0 0012 8.5v1.158c0 .578.079 1.05.305 1.442.231.399.577.644.966.845.342.176.786.424 1.142.772.35.342.587.75.587 1.262V15.5a.5.5 0 001 0v-1.52c0-.863-.413-1.514-.888-1.978-.469-.458-1.026-.763-1.383-.947-.311-.16-.465-.295-.559-.457-.098-.17-.17-.438-.17-.94V8.78c.32-.223.57-.525.746-.925.214-.49.304-1.103.304-1.856 0-.375-.013-.582-.026-.782v-.001a9.523 9.523 0 01-.022-.518c.452-.493.766-1.042.791-1.55.015-.302-.075-.619-.334-.85-.247-.22-.576-.3-.909-.3z",clipRule:"evenodd"})}),(0,n.jsxs)("span",{className:"text-[#373F47]",children:[f," ",1===f?S("components.SearchRouteComponent.qtyOnePassengers"):f<5?S("components.SearchRouteComponent.qty5Passengers"):S("components.SearchRouteComponent.qtyAllPassengers")]}),(0,n.jsx)("svg",{className:"w-4 h-4 transition-transform ".concat(x?"rotate-180 text-[#F9AC1A]":"text-gray-600"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M12.854 6.146a.5.5 0 00-.708 0L8 10.293 3.854 6.146a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l4.5-4.5a.5.5 0 000-.708z",clipRule:"evenodd"})})]}),x&&(0,n.jsx)("ul",{className:"absolute left-0 mt-2 w-48 bg-white border shadow-md z-10",children:[1,2,3,4,5,6].map(e=>(0,n.jsxs)("li",{className:"px-4 py-2 cursor-pointer hover:bg-[#f9ab1a52] text-[#373F47]",onClick:()=>z(e),children:[e," ",1===e?S("components.SearchRouteComponent.qtyOnePassengers"):S("components.SearchRouteComponent.qtyAllPassengers")]},e))})]}),(0,n.jsx)("button",{onClick:()=>{var e;let t=null===(e=N.find(e=>e.inRoute===d&&e.toRoute===m))||void 0===e?void 0:e.id;d&&m?t?D.push("".concat(A,"/route/").concat(t)):(0,i.o)(S("components.SearchRouteComponent.noFindRoute")):(0,i.o)(S("components.SearchRouteComponent.noCheckRoute"))},className:"text-[#fff] lg:w-[250px] md:w-1/2 text-base font-semibold px-4 py-5 max-h-[60px] h-full bg-[#F9AC1A] max-md:w-1/2 max-md:rounded-br-[10px] lg:rounded-r-[10px] md:rounded-r-none md:rounded-br-[10px]",children:S("components.SearchRouteComponent.button")})]})]})}},6297:(e,t,o)=>{"use strict";o.d(t,{default:()=>c});var n=o(5155),s=o(2115),l=o(5565),a=o(5683),r=o(3478),i=o(7266);let c=()=>{let e=(0,i.useTranslations)("AppTraslation"),t=[{title:e("components.FeaturesComponent.title1"),description:e("components.FeaturesComponent.description1"),image:"/images/features-car.png"},{title:e("components.FeaturesComponent.title2"),description:e("components.FeaturesComponent.description2"),image:"/images/defendeer-car.jpeg"},{title:e("components.FeaturesComponent.title3"),description:e("components.FeaturesComponent.description3"),image:"/images/individual.jpg"},{title:e("components.FeaturesComponent.title4"),description:e("components.FeaturesComponent.description4"),image:"/images/comfort.jpg"},{title:e("components.FeaturesComponent.title5"),description:e("components.FeaturesComponent.description5"),image:"/images/repo.jpg"}],[o,c]=(0,s.useState)(t[0]);return(0,s.useEffect)(()=>{let e=setInterval(()=>{c(e=>{let o=(t.findIndex(t=>t.title===e.title)+1)%t.length;return t[o]})},5e3);return()=>clearInterval(e)},[]),(0,n.jsxs)("div",{className:"flex gap-6 max-w-[1090px] mx-auto",children:[(0,n.jsx)("div",{className:"w-1/3 flex flex-col gap-4",children:t.map(e=>(0,n.jsx)("button",{onClick:()=>c(e),className:"p-4 text-center rounded-lg transition ".concat(o.title===e.title?"bg-[#F9AC1A] text-white":"bg-[#F5F5F5] text-[#373F47]"),children:e.title},e.title))}),(0,n.jsxs)("div",{className:"w-2/3 bg-[#292929] pl-[50px] pt-[20px] pb-[20px] pr-[20px] rounded-lg flex items-center gap-6",children:[(0,n.jsx)(a.N,{mode:"wait",children:(0,n.jsxs)(r.P.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},transition:{duration:.5},className:"self-start mt-[23px] w-2/3",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold mb-4 text-[#fff]",children:o.title}),(0,n.jsx)("p",{className:"text-base text-[#E0E0E0]",children:o.description})]},o.title)}),(0,n.jsx)(a.N,{mode:"wait",children:(0,n.jsx)(r.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.5},className:"flex-grow",children:(0,n.jsx)(l.default,{src:o.image,alt:o.title,width:266,height:370,className:"rounded-lg"})},o.image)})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[5565,7266,8173,814,3582,8441,1517,7358],()=>t(2228)),_N_E=e.O()}]);