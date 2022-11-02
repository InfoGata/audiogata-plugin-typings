"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[7],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=o(r),g=i,d=f["".concat(s,".").concat(g)]||f[g]||c[g]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<a;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var n=r(7462),i=(r(7294),r(3905));const a={id:"SearchArtistResult",title:"Interface: SearchArtistResult",sidebar_label:"SearchArtistResult",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"plugins/api/interfaces/SearchArtistResult",id:"plugins/api/interfaces/SearchArtistResult",title:"Interface: SearchArtistResult",description:"Hierarchy",source:"@site/docs/plugins/api/interfaces/SearchArtistResult.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/SearchArtistResult",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/SearchArtistResult",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SearchArtistResult",title:"Interface: SearchArtistResult",sidebar_label:"SearchArtistResult",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SearchAllResult",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAllResult"},next:{title:"SearchPlaylistResult",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/SearchPlaylistResult"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"filterInfo",id:"filterinfo",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"items",id:"items",level:3},{value:"pageInfo",id:"pageinfo",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],u={toc:o};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchResult"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchResult"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SearchArtistResult"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"filterinfo"},"filterInfo"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"filterInfo"),": ",(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/FilterInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterInfo"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchResult"},"SearchResult"),".",(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchResult#filterinfo"},"filterInfo")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"items"},"items"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"items"),": ",(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/Artist"},(0,i.kt)("inlineCode",{parentName:"a"},"Artist")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pageinfo"},"pageInfo"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"pageInfo"),": ",(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/PageInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo"))),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchResult"},"SearchResult"),".",(0,i.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchResult#pageinfo"},"pageInfo")))}c.isMDXComponent=!0}}]);