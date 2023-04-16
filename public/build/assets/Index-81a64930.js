import{s as x,J as B,l as I,x as V,y as M,O as U,z as j,g as c,b as i,u as D,w as r,F as w,p as L,o as u,X as P,d as t,A as f,C as _,e as k,t as o,D as N,G as A}from"./vendor-8a5f3a62.js";import{u as h,_ as E,a as F}from"./InputSearch-bfe4cdde.js";import{_ as G,a as T}from"./AuthenticatedLayout-171eab4f.js";import{_ as z}from"./PrimaryButton-12788682.js";import{_ as J}from"./SelectInput-d84ecef5.js";import{_ as K}from"./DangerButton-5bdc9eaa.js";import{_ as X}from"./Checkbox-1a7b50c6.js";import{_ as Z}from"./Card-31894d03.js";import q from"./Create-53b30813.js";import H from"./Edit-8d426f6b.js";import Q from"./Delete-4fb651d5.js";import R from"./DeleteBulk-25f37154.js";import W from"./Permission-9d61711d.js";import"./SwitchLangNavbar-67ae8192.js";import"./TextInput-9d3a867a.js";import"./SecondaryButton-6813abc4.js";const Y={class:"d-flex gap-2"},ee={class:"perpage"},te={class:"d-flex justify-content-end gap-2"},le=t("i",{class:"fa-thin fa-plus"},null,-1),se={class:"table align-middle table-row-dashed fs-6 gy-5"},ae={class:"text-start text-muted fw-bold fs-7 text-uppercase gs-0"},oe={class:"w-10px pe-2"},ne={class:"d-flex gap-2"},ie=t("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),de=t("div",{class:"d-flex gap-2"},[t("i",{class:"fa-sharp fa-solid fa-sort"}),t("span",null,"Guard")],-1),re=[de],me={class:"px-2 py-4"},pe={class:"d-flex gap-2"},ce=t("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),ue={class:"d-flex gap-2"},fe=t("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),_e={class:"text-end min-w-100px"},he={class:"text-gray-600 fw-semibold"},be={class:"form-check form-check-custom form-check-solid"},ge=["value"],ke=["onClick"],we=["title"],ve=["onClick"],Ce=["title"],$e={key:2},Oe={class:"text-end"},ye=t("span",{class:"svg-icon svg-icon-5 m-0"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",fill:"currentColor"})])],-1),Se={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4","data-kt-menu":"true"},xe={class:"menu-item px-3"},Be=["onClick"],Ie={class:"menu-item px-3"},Ve=["onClick"],Ze={__name:"Index",props:{title:String,filters:Object,roles:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(b){const n=b,{_:v,debounce:C,pickBy:$}=L,e=x({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},role:null,dataSet:B().props.app.perpage,modal_create:null,modal_edit:null,modal_delete:null,modal_delete_bulk:null,modal_permission:null,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permissionOpen:!1,selectedId:[],multipleSelect:!1});I(()=>{e.modal_create=h("#modal_create"),e.modal_edit=h("#modal_edit"),e.modal_delete=h("#modal_delete"),e.modal_delete_bulk=h("#modal_delete_bulk"),e.modal_permission=h("#modal_permission")}),V(()=>{KTMenu.init()});const g=l=>{e.params.field=l,e.params.order=e.params.order==="asc"?"desc":"asc"};M(()=>v.cloneDeep(e.params),C(()=>{let l=$(e.params);U.get(route("role.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const O=l=>{var s;l.target.checked===!1?e.selectedId=[]:(s=n.roles)==null||s.data.forEach(a=>{e.selectedId.push(a.id)})},y=()=>{var l;((l=n.roles)==null?void 0:l.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1},m=l=>{switch(l){case"create":e.modal_create.show(),e.createOpen=!0;break;case"edit":e.modal_edit.show(),e.editOpen=!0;break;case"delete":e.modal_delete.show(),e.deleteOpen=!0;break;case"deleteBulk":e.modal_delete_bulk.show(),e.deleteBulkOpen=!0;break;case"permission":e.modal_permission.show(),e.permissionOpen=!0;break}},p=l=>{switch(l){case"create":e.modal_create.hide(),e.createOpen=!1;break;case"edit":e.modal_edit.hide(),e.editOpen=!1;break;case"delete":e.modal_delete.hide(),e.deleteOpen=!1;break;case"deleteBulk":e.modal_delete_bulk.hide(),e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[];break;case"permission":e.modal_permission.hide(),e.permissionOpen=!1}};return j(()=>{p()}),(l,s)=>(u(),c(w,null,[i(D(P),{title:n.title},null,8,["title"]),i(G,null,{default:r(()=>[i(T,{title:b.title,breadcrumbs:b.breadcrumbs},null,8,["title","breadcrumbs"]),i(Z,null,{title:r(()=>[t("div",Y,[t("div",ee,[i(J,{modelValue:e.params.perPage,"onUpdate:modelValue":s[0]||(s[0]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"])]),i(E,{modelValue:e.params.search,"onUpdate:modelValue":s[1]||(s[1]=a=>e.params.search=a),placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"]),i(q,{show:e.createOpen,onClose:s[2]||(s[2]=a=>p("create")),permissions:n.permissions,title:n.title},null,8,["show","permissions","title"]),i(H,{show:e.editOpen,onClose:s[3]||(s[3]=a=>p("edit")),role:e.role,permissions:n.permissions,title:n.title},null,8,["show","role","permissions","title"]),i(Q,{show:e.deleteOpen,onClose:s[4]||(s[4]=a=>p("delete")),role:e.role,title:n.title},null,8,["show","role","title"]),i(R,{show:e.deleteBulkOpen,onClose:s[5]||(s[5]=a=>p("deleteBulk")),selectedId:e.selectedId,title:n.title},null,8,["show","selectedId","title"]),i(W,{show:e.permissionOpen,onClose:s[6]||(s[6]=a=>p("permission")),role:e.role,title:n.title},null,8,["show","role","title"])])]),toolbar:r(()=>[t("div",te,[f(i(K,{onClick:s[7]||(s[7]=a=>m("deleteBulk"))},{default:r(()=>[k(" Delete Selected ")]),_:1},512),[[_,e.selectedId.length!=0&&l.can(["delete role"])]]),f(i(z,{class:"rounded-none",onClick:s[8]||(s[8]=a=>m("create"))},{default:r(()=>[le,k(" "+o(l.lang().button.add)+" "+o(n.title),1)]),_:1},512),[[_,l.can(["create role"])]])])]),body:r(()=>[t("table",se,[t("thead",null,[t("tr",ae,[t("th",oe,[i(X,{checked:e.multipleSelect,"onUpdate:checked":s[9]||(s[9]=a=>e.multipleSelect=a),onChange:O},null,8,["checked"])]),t("th",{class:"min-w-125px",onClick:s[10]||(s[10]=a=>g("name"))},[t("div",ne,[ie,t("span",null,o(l.lang().label.name),1)])]),t("th",{class:"min-w-125px",onClick:s[11]||(s[11]=a=>g("email"))},re),t("th",me,o(l.lang().label.permission),1),t("th",{class:"min-w-125px",onClick:s[12]||(s[12]=a=>g("created_at"))},[t("div",pe,[ce,t("span",null,o(l.lang().label.created),1)])]),t("th",{class:"min-w-125px",onClick:s[13]||(s[13]=a=>g("updated_at"))},[t("div",ue,[fe,t("span",null,o(l.lang().label.updated),1)])]),t("th",_e,o(l.lang().label.action),1)])]),t("tbody",he,[(u(!0),c(w,null,N(b.roles.data,(a,S)=>(u(),c("tr",{key:S},[t("td",null,[t("div",be,[f(t("input",{class:"form-check-input",type:"checkbox",onChange:y,value:a.id,"onUpdate:modelValue":s[14]||(s[14]=d=>e.selectedId=d)},null,40,ge),[[A,e.selectedId]])])]),t("td",null,o(a.name),1),t("td",null,o(a.guard_name),1),a.permissions.length==n.permissions.length?(u(),c("td",{key:0,onClick:d=>(m("permission"),e.role=a),class:"cursor-pointer text-primary fw-semibold"},[t("span",{class:"border-bottom border-primary","data-bs-toggle":"tooltip","data-bs-custom-class":"tooltip-inverse","data-bs-placement":"left",title:l.lang().tooltip.detail},o(l.lang().label.all_permission),9,we)],8,ke)):a.permissions.length!=0?(u(),c("td",{key:1,onClick:d=>(m("permission"),e.role=a),class:"cursor-pointer text-primary fw-semibold"},[t("span",{class:"border-bottom border-primary","data-bs-toggle":"tooltip","data-bs-custom-class":"tooltip-inverse","data-bs-placement":"left",title:l.lang().tooltip.detail},o(a.permissions.length)+" "+o(l.lang().label.permission),9,Ce)],8,ve)):(u(),c("td",$e,o(l.lang().label.no_permission),1)),t("td",null,o(a.created_at),1),t("td",null,o(a.updated_at),1),t("td",Oe,[f(t("a",{type:"button",class:"btn btn-light btn-active-light-primary btn-sm","data-kt-menu-trigger":"hover","data-kt-menu-placement":"bottom-end",onClick:s[15]||(s[15]=(...d)=>l.showMenu&&l.showMenu(...d))},[k(o(l.lang().label.action)+" ",1),ye],512),[[_,l.can(["update role"])]]),t("div",Se,[t("div",xe,[f(t("a",{type:"button",class:"menu-link px-3",onClick:d=>(m("edit"),e.role=a)},o(l.lang().label.edit),9,Be),[[_,l.can(["update role"])]])]),t("div",Ie,[f(t("a",{class:"menu-link px-3",type:"button",onClick:d=>(m("delete"),e.role=a)},o(l.lang().label.delete),9,Ve),[[_,l.can(["delete role"])]])])])])]))),128))])])]),footer:r(()=>[i(F,{links:n.roles,filters:e.params},null,8,["links","filters"])]),_:1})]),_:1})],64))}};export{Ze as default};
