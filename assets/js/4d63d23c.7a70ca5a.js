"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||f[m]||a;return r?i.createElement(g,l(l({ref:t},o),{},{components:r})):i.createElement(g,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<a;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={id:"ArtistAlbumsResult",title:"Interface: ArtistAlbumsResult",sidebar_label:"ArtistAlbumsResult",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"plugins/api/interfaces/ArtistAlbumsResult",id:"plugins/api/interfaces/ArtistAlbumsResult",title:"Interface: ArtistAlbumsResult",description:"Hierarchy",source:"@site/docs/plugins/api/interfaces/ArtistAlbumsResult.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/ArtistAlbumsResult",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/ArtistAlbumsResult",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ArtistAlbumsResult",title:"Interface: ArtistAlbumsResult",sidebar_label:"ArtistAlbumsResult",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ArtistAlbumRequest",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/ArtistAlbumRequest"},next:{title:"ArtistInfo",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/ArtistInfo"}},s={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"artist",id:"artist",level:3},{value:"filterInfo",id:"filterinfo",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"items",id:"items",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"pageInfo",id:"pageinfo",level:3},{value:"Inherited from",id:"inherited-from-2",level:4}],o={toc:u};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchAlbumResult"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"ArtistAlbumsResult"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"artist"},"artist"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"artist"),": ",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/Artist"},(0,n.kt)("inlineCode",{parentName:"a"},"Artist"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"filterinfo"},"filterInfo"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"filterInfo"),": ",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/FilterInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"FilterInfo"))),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult"},"SearchAlbumResult"),".",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult#filterinfo"},"filterInfo")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"items"},"items"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"items"),": ",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/Album"},(0,n.kt)("inlineCode",{parentName:"a"},"Album")),"[]"),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult"},"SearchAlbumResult"),".",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult#items"},"items")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"pageinfo"},"pageInfo"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"pageInfo"),": ",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/PageInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"PageInfo"))),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult"},"SearchAlbumResult"),".",(0,n.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/SearchAlbumResult#pageinfo"},"pageInfo")))}f.isMDXComponent=!0}}]);