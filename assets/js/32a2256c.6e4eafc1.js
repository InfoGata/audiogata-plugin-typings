"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||l;return r?a.createElement(d,i(i({ref:t},o),{},{components:r})):a.createElement(d,i({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={id:"SearchAllResult",title:"Interface: SearchAllResult",sidebar_label:"SearchAllResult",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"plugins/api/interfaces/SearchAllResult",id:"plugins/api/interfaces/SearchAllResult",title:"Interface: SearchAllResult",description:"Properties",source:"@site/docs/plugins/api/interfaces/SearchAllResult.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/SearchAllResult",permalink:"/plugins/api/interfaces/SearchAllResult",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SearchAllResult",title:"Interface: SearchAllResult",sidebar_label:"SearchAllResult",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SearchAlbumResult",permalink:"/plugins/api/interfaces/SearchAlbumResult"},next:{title:"SearchArtistResult",permalink:"/plugins/api/interfaces/SearchArtistResult"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"albums",id:"albums",level:3},{value:"artists",id:"artists",level:3},{value:"playlists",id:"playlists",level:3},{value:"tracks",id:"tracks",level:3}],o={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"albums"},"albums"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"albums"),": ",(0,n.kt)("a",{parentName:"p",href:"/plugins/api/interfaces/SearchAlbumResult"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchAlbumResult"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"artists"},"artists"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"artists"),": ",(0,n.kt)("a",{parentName:"p",href:"/plugins/api/interfaces/SearchArtistResult"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchArtistResult"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"playlists"},"playlists"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"playlists"),": ",(0,n.kt)("a",{parentName:"p",href:"/plugins/api/interfaces/SearchPlaylistResult"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchPlaylistResult"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tracks"},"tracks"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"tracks"),": ",(0,n.kt)("a",{parentName:"p",href:"/plugins/api/interfaces/SearchTrackResult"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchTrackResult"))))}u.isMDXComponent=!0}}]);