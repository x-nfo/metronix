import{v as u,B as m,f as b,a as c,w as t,o as g,d as l,t as s,b as a,e as h,u as n,n as k}from"./app-96717d12.js";import{_ as w}from"./DangerButton-0712113a.js";import{_ as y,a as B}from"./SecondaryButton-a043940f.js";const S={class:"space-y-6"},v=["onSubmit"],C={class:"fs-4 pt-5"},D={class:"text-danger fs-3"},$={class:"d-flex gap-4"},V={__name:"DeleteBulk",props:{show:Boolean,title:String,selectedId:Object},emits:["close"],setup(_,{emit:d}){const r=_,e=u({id:[]}),f=()=>{e.post(route("user.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{d("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return m(()=>{r.show&&(e.id=r.selectedId)}),(o,p)=>(g(),b("section",S,[c(y,{id:"modal_delete_bulk"},{title:t(()=>[l(s(o.lang().label.delete)+" "+s(o.lang().label.user),1)]),body:t(()=>{var i;return[a("form",{onSubmit:h(f,["prevent"])},[a("p",C,[l(s(o.lang().label.delete_confirm)+" ",1),a("b",D,s((i=r.selectedId)==null?void 0:i.length),1),l(" "+s(o.lang().label.user)+" ? ",1)])],40,v)]}),footer:t(()=>[a("div",$,[c(B,{disabled:n(e).processing,onClick:p[0]||(p[0]=i=>d("close"))},{default:t(()=>[l(s(o.lang().button.close),1)]),_:1},8,["disabled"]),c(w,{class:k(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:f},{default:t(()=>[l(s(n(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])]),_:1})]))}};export{V as default};
