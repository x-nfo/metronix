import{v as f,B as _,f as b,a as o,w as l,o as g,d as m,t as r,b as i,u as a,e as h,n as v}from"./app-96717d12.js";import{_ as w,a as $,b as y}from"./TextInput-d300ef12.js";import{_ as S,a as V}from"./SecondaryButton-a043940f.js";import{_ as k}from"./PrimaryButton-108d091e.js";const B={class:"space-y-6"},C=["onSubmit"],E={class:"my-1"},N={class:"mb-8"},j={class:"d-flex gap-4"},M={__name:"Edit",props:{show:Boolean,title:String,permission:Object},emits:["close"],setup(u,{emit:c}){const n=u,s=f({name:""}),d=()=>{var e;s.put(route("permission.update",(e=n.permission)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{c("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{var e;n.show&&(s.name=(e=n.permission)==null?void 0:e.name)}),(e,t)=>(g(),b("section",B,[o(S,{id:"modal_edit"},{title:l(()=>[m(r(e.lang().label.edit)+" "+r(n.title),1)]),body:l(()=>[i("form",{class:"p-6",onSubmit:h(d,["prevent"])},[i("div",E,[i("div",N,[o(w,{for:"name",value:e.lang().label.role},null,8,["value"]),o($,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(s).name,"onUpdate:modelValue":t[0]||(t[0]=p=>a(s).name=p),required:"",placeholder:e.lang().placeholder.name,error:a(s).errors.name},null,8,["modelValue","placeholder","error"]),o(y,{class:"mt-2",message:a(s).errors.name},null,8,["message"])])])],40,C)]),footer:l(()=>[i("div",j,[o(V,{disabled:a(s).processing,onClick:t[1]||(t[1]=p=>c("close"))},{default:l(()=>[m(r(e.lang().button.close),1)]),_:1},8,["disabled"]),o(k,{class:v(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:d},{default:l(()=>[m(r(a(s).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"])])]),_:1})]))}};export{M as default};
