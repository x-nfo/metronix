import{o as l,g as d,d as s,m as o,n as r}from"./vendor-8a5f3a62.js";const t={class:"card-title"},c={class:"card-toolbar"},m={__name:"Card",props:["mainClasses","headerClasses","bodyClasses","footerClasses"],setup(a){return(e,i)=>(l(),d("div",{class:r(["card shadow-sm",a.mainClasses])},[s("div",{class:r(["card-header border-0 pt-6",a.headerClasses])},[s("h3",t,[o(e.$slots,"title")]),s("div",c,[o(e.$slots,"toolbar")])],2),s("div",{class:r(["card-body",a.bodyClasses])},[o(e.$slots,"body")],2),s("div",{class:r(["card-footer border-0",a.footerClasses])},[o(e.$slots,"footer")],2)],2))}};export{m as _};