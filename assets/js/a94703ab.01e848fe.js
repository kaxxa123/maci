"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4368],{6660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(79),o=n(9577),i=n(8862),s=n(1914),l=n(1020),c=n(9178),r=n(2150),d=n(9697),u=n(8431);const m={backToTopButton:"backToTopButton_uoUx",backToTopButtonShow:"backToTopButtonShow_h85c"};var b=n(5250);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(4708),x=n(7911),f=n(6682),j=n(4946),k=n(161);function _(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton_j8B9",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_EolI"};function g(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,b.jsx)(_,{className:v.collapseSidebarButtonIcon})})}var C=n(434),S=n(6368);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var A=n(4891),B=n(7700),Z=n(3922),y=n(4790);function L(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,r.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:i,level:c,index:r,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),k=function(e){const t=(0,y.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),_=(0,l._F)(t,i),v=(0,B.Mg)(x,i),{collapsed:g,setCollapsed:C}=(0,A.u)({initialState:()=>!!h&&(!_&&t.collapsed)}),{expandedItem:T,setExpandedItem:w}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!g),w(e?null:r),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:_,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=T&&T!==r&&f&&C(!0)}),[h,T,r,C,f]),(0,b.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,b.jsx)(Z.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":_}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":h?!g:void 0,href:h?k??"#":k,...d,children:m}),x&&h&&(0,b.jsx)(L,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(V,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var E=n(339),H=n(6094);const M={menuExternalLink:"menuExternalLink_CGhs"};function R(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l._F)(t,a),x=(0,E.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(Z.Z,{className:(0,o.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}const W={menuHtmlItem:"menuHtmlItem_cDc2"};function P(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[W.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(w,{item:t,...n});case"html":return(0,b.jsx)(P,{item:t,...n});default:return(0,b.jsx)(R,{item:t,...n})}}function F(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(D,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(F),U={menu:"menu_qNd2",menuWithAnnouncementBar:"menuWithAnnouncementBar_PWfy"};function z(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,l&&U.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:n,activePath:t,level:1})})})}const G="sidebar_Csac",Y="sidebarWithHideableNavbar_okGb",Q="sidebarHidden_CVcR",q="sidebarLogo_bkjG";function K(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(G,s&&Y,i&&Q),children:[s&&(0,b.jsx)(k.Z,{tabIndex:-1,className:q}),(0,b.jsx)(z,{path:t,sidebar:n}),l&&(0,b.jsx)(g,{onClick:a})]})}const O=a.memo(K);var X=n(8009),J=n(3558);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,J.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(X.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(O,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_lx6R",expandButtonIcon:"expandButtonIcon_QRAv"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,r.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(_,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_DMxT",docSidebarContainerHidden:"docSidebarContainerHidden_Q_UQ",sidebarViewport:"sidebarViewport_kA93"};function se(e){let{children:t}=e;const n=(0,c.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.TH)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.n)()&&r(!0),i((e=>!e))}),[i,c]);return(0,b.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(se,{children:(0,b.jsxs)("div",{className:(0,o.Z)(ie.sidebarViewport,c&&ie.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}const ce={docMainContainer:"docMainContainer_IMax",docMainContainerEnhanced:"docMainContainerEnhanced_cMAg",docItemWrapperEnhanced:"docItemWrapperEnhanced_fWYX"};function re(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.V)();return(0,b.jsx)("main",{className:(0,o.Z)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const de={docRoot:"docRoot_iP0R",docsWrapper:"docsWrapper_wAbx"};function ue(e){let{children:t}=e;const n=(0,c.V)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(re,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(6259);function be(e){const t=(0,l.SN)(e);if(!t)return(0,b.jsx)(me.Z,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,b.jsx)(c.b,{name:a,items:r,children:(0,b.jsx)(ue,{children:n})})})}},6259:(e,t,n)=>{n.d(t,{Z:()=>l});n(79);var a=n(9577),o=n(2150),i=n(399),s=n(5250);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);