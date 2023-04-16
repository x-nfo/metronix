import{s as S,J as B,l as I,x as V,y as M,O as U,z as j,g as k,b as n,u as D,w as i,F as v,p as L,o as g,X as P,d as l,A as r,C as u,e as f,t as o,D as N,G as A}from"./vendor-8a5f3a62.js";import{u as b,_ as E,a as F}from"./InputSearch-bfe4cdde.js";import{_ as T,a as z}from"./AuthenticatedLayout-171eab4f.js";import{_ as G}from"./PrimaryButton-12788682.js";import{_ as J}from"./SelectInput-d84ecef5.js";import{_ as K}from"./DangerButton-5bdc9eaa.js";import{_ as X}from"./Checkbox-1a7b50c6.js";import{_ as Z}from"./Card-31894d03.js";import q from"./Create-f193343a.js";import H from"./Edit-fc02114b.js";import Q from"./Delete-3e148903.js";import R from"./DeleteBulk-7773a120.js";import"./SwitchLangNavbar-67ae8192.js";import"./TextInput-9d3a867a.js";import"./SecondaryButton-6813abc4.js";const W={class:"d-flex gap-2"},Y={class:"perpage"},ee={class:"d-flex justify-content-end gap-2"},le=l("i",{class:"fa-thin fa-plus"},null,-1),te={class:"table align-middle table-row-dashed fs-6 gy-5",d:"kt_table_users"},se={class:"text-start text-muted fw-bold fs-7 text-uppercase gs-0"},ae={class:"w-10px pe-2"},oe={class:"d-flex gap-2"},de=l("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),ne={class:"d-flex gap-2"},ie=l("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),re={class:"d-flex gap-2"},ue=l("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),me={class:"d-flex gap-2"},ce=l("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),pe={class:"d-flex gap-2"},fe=l("i",{class:"fa-sharp fa-solid fa-sort"},null,-1),_e={class:"text-end min-w-100px"},he={class:"text-gray-600 fw-semibold"},be={class:"form-check form-check-custom form-check-solid"},ke=["value"],ge={class:"fa-solid fa-circle-check text-primary ms-2"},ve={class:"text-end"},we=l("span",{class:"svg-icon svg-icon-5 m-0"},[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",fill:"currentColor"})])],-1),Ce={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4","data-kt-menu":"true"},$e={class:"menu-item px-3"},Oe=["onClick"],xe={class:"menu-item px-3"},ye=["onClick"],ze={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(_){const d=_,{_:w,debounce:C,pickBy:$}=L,e=S({params:{search:d.filters.search,field:d.filters.field,order:d.filters.order,perPage:d.perPage},selectedId:[],multipleSelect:!1,user:null,dataSet:B().props.app.perpage,modal_create:null,modal_edit:null,modal_delete:null,modal_delete_bulk:null,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1});I(()=>{e.modal_create=b("#modal_create"),e.modal_edit=b("#modal_edit"),e.modal_delete=b("#modal_delete"),e.modal_delete_bulk=b("#modal_delete_bulk")}),V(()=>{KTMenu.init()});const m=s=>{e.params.field=s,e.params.order=e.params.order==="asc"?"desc":"asc"};M(()=>w.cloneDeep(e.params),C(()=>{let s=$(e.params);U.get(route("user.index"),s,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const O=s=>{var t;s.target.checked===!1?e.selectedId=[]:(t=d.users)==null||t.data.forEach(a=>{e.selectedId.push(a.id)})},x=()=>{var s;((s=d.users)==null?void 0:s.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1},h=s=>{switch(s){case"create":e.modal_create.show(),e.createOpen=!0;break;case"edit":e.modal_edit.show(),e.editOpen=!0;break;case"delete":e.modal_delete.show(),e.deleteOpen=!0;break;case"deleteBulk":e.modal_delete_bulk.show(),e.deleteBulkOpen=!0;break}},c=s=>{switch(s){case"create":e.modal_create.hide(),e.createOpen=!1;break;case"edit":e.modal_edit.hide(),e.editOpen=!1;break;case"delete":e.modal_delete.hide(),e.deleteOpen=!1;break;case"deleteBulk":e.modal_delete_bulk.hide(),e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[];break}};return j(()=>{c()}),(s,t)=>(g(),k(v,null,[n(D(P),{title:d.title},null,8,["title"]),n(T,null,{default:i(()=>[n(z,{title:_.title,breadcrumbs:_.breadcrumbs},null,8,["title","breadcrumbs"]),n(Z,null,{title:i(()=>[l("div",W,[l("div",Y,[n(J,{modelValue:e.params.perPage,"onUpdate:modelValue":t[0]||(t[0]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"])]),n(E,{modelValue:e.params.search,"onUpdate:modelValue":t[1]||(t[1]=a=>e.params.search=a),placeholder:s.lang().placeholder.search},null,8,["modelValue","placeholder"]),n(q,{show:e.createOpen,roles:d.roles,title:d.title,onClose:t[2]||(t[2]=a=>c("create"))},null,8,["show","roles","title"]),n(H,{show:e.editOpen,user:e.user,roles:d.roles,title:d.title,onClose:t[3]||(t[3]=a=>c("edit"))},null,8,["show","user","roles","title"]),n(Q,{show:e.deleteOpen,user:e.user,title:d.title,onClose:t[4]||(t[4]=a=>c("delete"))},null,8,["show","user","title"]),n(R,{show:e.deleteBulkOpen,onClose:t[5]||(t[5]=a=>c("deleteBulk")),selectedId:e.selectedId,title:d.title},null,8,["show","selectedId","title"])])]),toolbar:i(()=>[l("div",ee,[r(n(K,{onClick:t[6]||(t[6]=a=>h("deleteBulk"))},{default:i(()=>[f(" Delete Selected ")]),_:1},512),[[u,e.selectedId.length!=0&&s.can(["delete user"])]]),r(n(G,{onClick:t[7]||(t[7]=a=>h("create"))},{default:i(()=>[le,f(" "+o(s.lang().button.add)+" "+o(d.title),1)]),_:1},512),[[u,s.can(["create user"])]])])]),body:i(()=>[l("table",te,[l("thead",null,[l("tr",se,[l("th",ae,[n(X,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=a=>e.multipleSelect=a),onChange:O},null,8,["checked"])]),l("th",{class:"min-w-125px",onClick:t[9]||(t[9]=a=>m("name"))},[l("div",oe,[de,l("span",null,o(s.lang().label.name),1)])]),l("th",{class:"min-w-125px",onClick:t[10]||(t[10]=a=>m("email"))},[l("div",ne,[ie,l("span",null,o(s.lang().label.email),1)])]),l("th",{class:"min-w-125px",onClick:t[11]||(t[11]=a=>m("email"))},[l("div",re,[ue,f(" "+o(s.lang().label.role),1)])]),l("th",{class:"min-w-125px",onClick:t[12]||(t[12]=a=>m("created_at"))},[l("div",me,[ce,l("span",null,o(s.lang().label.created),1)])]),l("th",{class:"min-w-125px",onClick:t[13]||(t[13]=a=>m("updated_at"))},[l("div",pe,[fe,l("span",null,o(s.lang().label.updated),1)])]),l("th",_e,o(s.lang().label.action),1)])]),l("tbody",he,[(g(!0),k(v,null,N(_.users.data,(a,y)=>(g(),k("tr",{key:y,class:""},[l("td",null,[l("div",be,[r(l("input",{class:"form-check-input",type:"checkbox",onChange:x,value:a.id,"onUpdate:modelValue":t[14]||(t[14]=p=>e.selectedId=p)},null,40,ke),[[A,e.selectedId]])])]),l("td",null,[f(o(a.name)+" ",1),r(l("i",ge,null,512),[[u,a.email_verified_at]])]),l("td",null,o(a.email),1),l("td",null,o(a.roles.length==0?"not selected":a.roles[0].name),1),l("td",null,o(a.created_at),1),l("td",null,o(a.updated_at),1),l("td",ve,[r(l("a",{type:"button",class:"btn btn-light btn-active-light-primary btn-sm","data-kt-menu-trigger":"hover","data-kt-menu-placement":"bottom-end",onClick:t[15]||(t[15]=(...p)=>s.showMenu&&s.showMenu(...p))},[f(o(s.lang().label.action)+" ",1),we],512),[[u,s.can(["update user"])]]),l("div",Ce,[l("div",$e,[r(l("a",{type:"button",class:"menu-link px-3",onClick:p=>(h("edit"),e.user=a)},o(s.lang().label.edit),9,Oe),[[u,s.can(["update user"])]])]),l("div",xe,[r(l("a",{class:"menu-link px-3",type:"button",onClick:p=>(h("delete"),e.user=a)},o(s.lang().label.delete),9,ye),[[u,s.can(["delete user"])]])])])])]))),128))])])]),footer:i(()=>[n(F,{links:d.users,filters:e.params},null,8,["links","filters"])]),_:1})]),_:1})],64))}};export{ze as default};
