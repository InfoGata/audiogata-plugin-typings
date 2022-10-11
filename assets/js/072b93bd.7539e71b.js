"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"Track",title:"Interface: Track",sidebar_label:"Track",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"plugins/api/interfaces/Track",id:"plugins/api/interfaces/Track",title:"Interface: Track",description:"Properties",source:"@site/docs/plugins/api/interfaces/Track.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/Track",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/Track",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Track",title:"Interface: Track",sidebar_label:"Track",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SearchTrackResult",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/SearchTrackResult"},next:{title:"UserPlaylistRequest",permalink:"/audiogata-plugin-typings/plugins/api/interfaces/UserPlaylistRequest"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"albumApiId",id:"albumapiid",level:3},{value:"albumName",id:"albumname",level:3},{value:"apiId",id:"apiid",level:3},{value:"artistApiId",id:"artistapiid",level:3},{value:"artistName",id:"artistname",level:3},{value:"duration",id:"duration",level:3},{value:"id",id:"id",level:3},{value:"images",id:"images",level:3},{value:"name",id:"name",level:3},{value:"pluginId",id:"pluginid",level:3},{value:"source",id:"source",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"albumapiid"},"albumApiId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"albumApiId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id of the artist from the third party service this track came from"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"albumname"},"albumName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"albumName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of album where this track came from"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"apiid"},"apiId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"apiId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id from third party service this Track was retrieved from."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"artistapiid"},"artistApiId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"artistApiId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id of the artist from the third party service this track came from"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"artistname"},"artistName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"artistName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of artist where this track came from"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"duration"},"duration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"duration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Length of track in seconds"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Unique Id generated by AudioGata"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"images"},"images"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"images"),": ",(0,a.kt)("a",{parentName:"p",href:"/audiogata-plugin-typings/plugins/api/interfaces/ImageInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"ImageInfo")),"[]"),(0,a.kt)("p",null,"Images associated with this track"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of track"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pluginid"},"pluginId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"pluginId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Images associated with this Track"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"source"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")))}d.isMDXComponent=!0}}]);