import{v as f,g as u,b as c,w as t,o as b,e as l,t as o,d as a,f as g,u as n,n as h}from"./vendor-8a5f3a62.js";import{_ as y}from"./DangerButton-5bdc9eaa.js";import{_ as S,a as v}from"./SecondaryButton-6813abc4.js";const k={class:"space-y-6"},w=["onSubmit"],B={class:"fs-4 pt-5"},C={class:"text-danger fs-3"},$={class:"d-flex gap-2"},E={__name:"Delete",props:{show:Boolean,title:String,role:Object},emits:["close"],setup(m,{emit:d}){const r=m,s=f({}),p=()=>{var e;s.delete(route("role.destroy",(e=r.role)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{d("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return(e,_)=>(b(),u("section",k,[c(S,{id:"modal_delete"},{title:t(()=>[l(o(e.lang().label.delete)+" "+o(r.title),1)]),body:t(()=>{var i;return[a("form",{onSubmit:g(p,["prevent"])},[a("p",B,[l(o(e.lang().label.delete_confirm)+" ",1),a("b",C,o((i=r.role)==null?void 0:i.name),1),l("? ")])],40,w)]}),footer:t(()=>[a("div",$,[c(v,{disabled:n(s).processing,onClick:_[0]||(_[0]=i=>d("close"))},{default:t(()=>[l(o(e.lang().button.close),1)]),_:1},8,["disabled"]),c(y,{class:h(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:p},{default:t(()=>[l(o(n(s).processing?e.lang().button.delete+"...":e.lang().button.delete),1)]),_:1},8,["class","disabled"])])]),_:1})]))}};export{E as default};
