import{_ as b,a as g}from"./SecondaryButton-a043940f.js";import{f as l,a as p,w as t,o as n,d as i,t as e,b as s,F as h,z as w}from"./app-96717d12.js";const y={class:"space-y-6"},v={class:"fs-5"},k={class:"text-primary fw-bold"},x={class:"d-flex flex-wrap"},B={class:"d-flex justify-content-end"},$={__name:"Permission",props:{show:Boolean,title:String,role:Object},emits:["close"],setup(_,{emit:f}){const r=_;return(o,c)=>(n(),l("section",y,[p(b,{id:"modal_permission"},{title:t(()=>[i(e(o.lang().label.permission),1)]),body:t(()=>{var a,m;return[s("div",v,[s("p",null,[i(e(o.lang().label.all_permission)+" "+e(o.lang().label.role)+" ",1),s("b",k,e((a=r.role)==null?void 0:a.name),1)]),s("div",x,[(n(!0),l(h,null,w((m=r.role)==null?void 0:m.permissions,(u,d)=>(n(),l("div",{key:d,class:"min-w-150px me-4 mb-2"},e(++d+". "+u.name),1))),128))])])]}),footer:t(()=>[s("div",B,[p(g,{onClick:c[0]||(c[0]=a=>f("close"))},{default:t(()=>[i(e(o.lang().button.close),1)]),_:1})])]),_:1})]))}};export{$ as default};