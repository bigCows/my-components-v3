import{b as I,r as _,o as n,c as k,i as f,w as s,k as m,q as b,F as V,s as $,v as H,x as D,y as P,z as B,h as z,m as l,A as x,B as L,C as j,_ as U,D as F,j as w,t as G,G as O,E as q,H as A,I as J,J as K}from"./index-d781c7c9.js";/* empty css                  */const M={class:"pagination"},Q=I({__name:"my-table",props:{tableData:{default:()=>[]},tableHeader:{default:()=>[]},isShow:{default:()=>({sortShow:!1,selectionShow:!1,detailShow:!1})},limit:{default:2},pageNum:{default:1},pagination:{default:"total, sizes, prev, pager, next, jumper"},pageSizes:{default:()=>[1,5,10,20,50]},dataTotal:{default:0}},emits:["selectChange","pagination"],setup(i,{emit:g}){const c=i;console.log(c,"props");const r=_(c.limit),h=_(c.pageNum),p=e=>{console.log(e,"handleselectionchange"),g("selectChange",e)},v=e=>{h.value=e,g("pagination",{pageNum:e,pageSize:r.value})},y=e=>{r.value=e,g("pagination",{pageSize:e,pageNum:h.value})};return(e,T)=>{const d=x,a=L,u=j;return n(),k("div",null,[f(a,P({ref:"myTable",class:"my-table"},B(e.$attrs),{style:{width:"100%"},border:"",data:e.tableData,onSelectionChange:p}),{default:s(()=>[e.isShow.selectionShow?(n(),m(d,{key:0,type:"selection"})):b("",!0),e.isShow.sortShow?(n(),m(d,{key:1,type:"index",label:"序号",width:"70"})):b("",!0),(n(!0),k(V,null,$(e.tableHeader,t=>(n(),m(d,{key:t.key,label:t.label,prop:t.key,"show-overflow-tooltip":!0,width:t.width},H({_:2},[t.slotName?{name:"default",fn:s(C=>[D(e.$slots,"columnSlot",{scope:C},void 0,!0)]),key:"0"}:void 0]),1032,["label","prop","width"]))),128)),e.isShow.detailShow?(n(),m(d,{key:2,label:"操作"},{default:s(t=>[D(e.$slots,"operation",{scope:t},void 0,!0)]),_:3})):b("",!0)]),_:3},16,["data"]),z("div",M,[f(u,{"current-page":l(h),"page-size":l(r),"page-sizes":e.pageSizes,small:!0,layout:e.pagination,total:e.dataTotal,onSizeChange:y,onCurrentChange:v},null,8,["current-page","page-size","page-sizes","layout","total"])])])}}});const R=U(Q,[["__scopeId","data-v-154f80a9"]]);const W=i=>(J("data-v-c75d2ac0"),i=i(),K(),i),X={class:"layout-container"},Y=W(()=>z("h1",null,"my-table",-1)),Z={class:"lc-table"},ee=I({__name:"my-table-demo",setup(i){const g=F({sortShow:!0,selectionShow:!0,detailShow:!0}),c=_(1),r=_(2),h=_([{label:"编号",key:"id",width:"70px"},{label:"姓名",key:"name",width:"150px",slotName:"bbb"},{label:"权限描述",key:"description",slotName:"aaa"}]),p=_([{id:221,name:"西药开立权限",description:"医生对西药处方权限",ifUse:"0"},{id:222,name:"草药开立权限",description:"医生对草药处方权限",ifUse:"0"},{id:223,name:"成药开立权限",description:"医生对成药处方权限",ifUse:"0"},{id:224,name:"麻醉开立权限",description:"医生对麻醉处方权限",ifUse:"0"},{id:225,name:"精一开立权限",description:"医生对精一处方权限",ifUse:"0"}]),v=a=>{console.log(a,"selectChange")},y=a=>{console.log(a,"rowInfo")},e=[...p.value],T=a=>{const{pageSize:u,pageNum:t}=a;r.value=u,c.value=t,console.log(a,"getlist"),p.value=e.slice((t-1)*u,t*u)},d=a=>{console.log(a,"changeStatus")};return(a,u)=>{const t=O,C=q,N=A,E=R;return n(),k("div",X,[Y,z("div",Z,[f(E,{tableData:l(p),tableHeader:l(h),isShow:l(g),pageNum:l(c),limit:l(r),pageSizes:[1,2,3,4],dataTotal:l(p).length,onSelectChange:v,onPagination:T},{columnSlot:s(({scope:o})=>[w(G(o.row[o.column.property])+" ",1),o.column.property==="description"?(n(),m(t,{key:0,modelValue:o.row.ifUse,"onUpdate:modelValue":S=>o.row.ifUse=S,"active-color":"#61afef","inactive-color":"#ccc",onChange:S=>d(o.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])):b("",!0),o.column.property==="name"?(n(),m(C,{key:1},{default:s(()=>[w("name列插槽")]),_:1})):b("",!0)]),operation:s(({scope:o})=>[f(N,{underline:!1,type:"primary",style:{"padding-right":"20px"},onClick:S=>y(o.row)},{default:s(()=>[w("详情")]),_:2},1032,["onClick"]),f(N,{underline:!1,type:"danger",onClick:S=>y(o.row)},{default:s(()=>[w("删除")]),_:2},1032,["onClick"])]),_:1},8,["tableData","tableHeader","isShow","pageNum","limit","dataTotal"])])])}}});const oe=U(ee,[["__scopeId","data-v-c75d2ac0"]]);export{oe as default};