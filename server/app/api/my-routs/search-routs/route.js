(()=>{var e={};e.id=3063,e.ids=[3063],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},59898:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>m,routeModule:()=>c,serverHooks:()=>x,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{GET:()=>p});var o=r(42706),n=r(28203),a=r(45994),i=r(71618),u=r(39187);async function p(e){let{searchParams:t}=new URL(e.url),r=t.get("locale")||"en";try{let e=(await i.z.route.findMany({select:{id:!0,RouteTranslation:{select:{inRoute:!0,toRoute:!0},where:{locale:r}},city:{select:{CityTranslation:{where:{locale:r},select:{name:!0}}}}}})).map(e=>({id:e.id,inRoute:e.RouteTranslation[0]?.inRoute,toRoute:e.RouteTranslation[0]?.toRoute,city:e.city.CityTranslation[0]?.name}));return u.NextResponse.json(e)}catch(e){return u.NextResponse.json({error:e instanceof Error?e.message:"Unknown error"},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/my-routs/search-routs/route",pathname:"/api/my-routs/search-routs",filename:"route",bundlePath:"app/api/my-routs/search-routs/route"},resolvedPagePath:"C:\\Users\\TurckDrive-PC2\\Desktop\\transfer\\transfer\\app\\api\\my-routs\\search-routs\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:d,serverHooks:x}=c;function m(){return(0,a.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:d})}},96487:()=>{},78335:()=>{},71618:(e,t,r)=>{"use strict";r.d(t,{z:()=>s});let s=new(require("@prisma/client")).PrismaClient},42706:(e,t,r)=>{"use strict";e.exports=r(44870)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,9187],()=>r(59898));module.exports=s})();