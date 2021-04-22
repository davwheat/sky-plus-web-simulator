(self.webpackChunksky_plus_epg_simulator=self.webpackChunksky_plus_epg_simulator||[]).push([[691],{6565:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/dc08cbe8a6ec1acecd085c54699fc862/45a86/sky-logo-transparent.png","srcSet":"/static/dc08cbe8a6ec1acecd085c54699fc862/dda23/sky-logo-transparent.png 21w,\\n/static/dc08cbe8a6ec1acecd085c54699fc862/dde75/sky-logo-transparent.png 42w,\\n/static/dc08cbe8a6ec1acecd085c54699fc862/45a86/sky-logo-transparent.png 83w,\\n/static/dc08cbe8a6ec1acecd085c54699fc862/dd86e/sky-logo-transparent.png 166w","sizes":"(min-width: 83px) 83px, 100vw"},"sources":[{"srcSet":"/static/dc08cbe8a6ec1acecd085c54699fc862/6cdf7/sky-logo-transparent.webp 21w,\\n/static/dc08cbe8a6ec1acecd085c54699fc862/60132/sky-logo-transparent.webp 42w,\\n/static/dc08cbe8a6ec1acecd085c54699fc862/dbd5f/sky-logo-transparent.webp 83w,\\n/static/dc08cbe8a6ec1acecd085c54699fc862/aaf79/sky-logo-transparent.webp 166w","type":"image/webp","sizes":"(min-width: 83px) 83px, 100vw"}]},"width":83,"height":45}')},3213:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a,r,c=n(6524),l=n(3373),o=n(1766);!function(e){e[e.NO_CARD_INSERTED=1]="NO_CARD_INSERTED",e[e.CARD_READ_ERROR=2]="CARD_READ_ERROR",e[e.CARD_CHECK_FAIL=3]="CARD_CHECK_FAIL",e[e.UNAUTHORISED_CARD=6]="UNAUTHORISED_CARD",e[e.UNPAIRED_CARD=7]="UNPAIRED_CARD",e[e.ENCRYPTION_KEY_FAILURE=8]="ENCRYPTION_KEY_FAILURE",e[e.UNAUTHORISED_CARD_2=9]="UNAUTHORISED_CARD_2",e[e.NO_SATELLITE_SIGNAL=28]="NO_SATELLITE_SIGNAL",e[e.NO_SATELLITE_SIGNAL_2=29]="NO_SATELLITE_SIGNAL_2"}(r||(r={}));var i=((a={})[r.NO_CARD_INSERTED]=o.default.createElement(o.default.Fragment,null,"Insert your Sky viewing card"),a[r.NO_SATELLITE_SIGNAL]=o.default.createElement(o.default.Fragment,null,"No Satellite Signal is being received.",o.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",o.default.createElement("br",null),"If the fault persists, contact customer services."),a[r.NO_SATELLITE_SIGNAL_2]=o.default.createElement(o.default.Fragment,null,"No Satellite Signal is being received.",o.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",o.default.createElement("br",null),"If the fault persists, contact customer services."),a),s=r,u=n(1074),d=n(7399),m=n(2585),f=n(8978),v=n(1671),h=(0,d.Z)({messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxWider:{width:"92%"},messageBoxHorizCenter:{margin:"auto"},messageBoxHeader:{background:l.Z.yellowMain,color:l.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative",fontFamily:"Zurich",fontStretch:"expanded",fontWeight:700,letterSpacing:.4},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:4,paddingBottom:1,fontFamily:"ZurichBT",fontWeight:400,background:l.Z.mainLight,color:l.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px",minHeight:136},messageBoxFooter:{color:l.Z.yellowText,paddingBottom:1}}),g=function(e){var t=e.title,n=void 0===t?"For your information":t,a=e.errorCode,r=void 0===a?s.NO_SATELLITE_SIGNAL:a,l=e.children,d=void 0===l?i[s.NO_SATELLITE_SIGNAL]:l,g=e.customControlData,p=void 0===g?{text:"BACK UP",control:"backUp"}:g,E=e.controlPrompt,k=void 0!==E&&E,y=e.controlPromptAction,b=void 0===y?"return":y,C=e.onControlPressed,x=void 0===C?function(){}:C,S=e.wider,w=void 0!==S&&S,M=e.horizontallyCentered,z=void 0!==M&&M,N=e.className,I=h(),A=(0,f.Zl)(c.X8);return k&&A((0,u.Z)("backUp",!0)),(0,o.useEffect)((function(){if(k){function e(e){e.detail.control===p.control&&(e.stopImmediatePropagation(),x())}return document.addEventListener("skyControlPressed",e),function(){document.removeEventListener("skyControlPressed",e),A((0,u.Z)("backUp",!1))}}})),o.default.createElement("section",{role:"alert",className:(0,m.Z)(I.messageBox,w&&I.messageBoxWider,z&&I.messageBoxHorizCenter,N)},o.default.createElement("header",{className:I.messageBoxHeader},n,o.default.createElement("span",{className:I.messageBoxErrorCode},null!=r&&String(r).padStart(2,"0"))),o.default.createElement("article",{className:I.messageBoxContent},d,k&&o.default.createElement("footer",{className:I.messageBoxFooter},"Press ",o.default.createElement(v.Z,null,p.text)," to ",b)))}},8588:function(e,t,n){"use strict";var a=n(6524),r=n(6965),c=n(3373),l=n(1074),o=n(7399),i=n(2585),s=n(1766),u=n(8978),d=(0,o.Z)({root:{position:"absolute",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",fontFamily:"Zurich",fontStretch:"condensed",fontSize:24,letterSpacing:.2,color:c.Z.accent,bottom:48,left:56,right:28},colorButton:{lineHeight:1}});t.Z=function(e){var t=e.className,n=e.buttonPressHandler,c=e.buttonsText,o=d(),m=(0,u.Zl)(a.X8),f=[],v=[];function h(e){["red","green","yellow","blue"].includes(e.detail.control)&&(e.stopImmediatePropagation(),n(e.detail.control))}return c.red?f.push("red"):v.push("red"),c.green?f.push("green"):v.push("green"),c.yellow?f.push("yellow"):v.push("yellow"),c.blue?f.push("blue"):v.push("blue"),(0,s.useEffect)((function(){return m((0,l.Z)(f,!0)),m((0,l.Z)(v,!1)),document.addEventListener("skyControlPressed",h),function(){document.removeEventListener("skyControlPressed",h),m((0,l.Z)(["red","green","yellow","blue"],!1))}})),s.default.createElement("footer",{className:(0,i.Z)(o.root,t)},c.red?s.default.createElement("div",{className:o.colorButton},s.default.createElement(r.Z,{buttonColor:"red"}),c.red):s.default.createElement("div",null),c.green?s.default.createElement("div",{className:o.colorButton},s.default.createElement(r.Z,{buttonColor:"green"}),c.green):s.default.createElement("div",null),c.yellow?s.default.createElement("div",{className:o.colorButton},s.default.createElement(r.Z,{buttonColor:"yellow"}),c.yellow):s.default.createElement("div",null),c.blue?s.default.createElement("div",{className:o.colorButton},s.default.createElement(r.Z,{buttonColor:"blue"}),c.blue):s.default.createElement("div",null))}},2476:function(e,t,n){"use strict";n.d(t,{a:function(){return C},Z:function(){return x}});var a=n(3917),r=n.n(a),c=n(7296),l=n.n(c),o=n(1843),i=n.n(o),s=n(7270),u=n.n(s),d=n(6524),m=n(7399),f=n(2585),v=n(2347),h=n(1766),g=(0,m.Z)({root:{width:"max-content",display:"flex",flexDirection:"column",alignItems:"center"},underText:{fontFamily:"SkyLogo",fontSize:32,color:"white",letterSpacing:2,lineHeight:1}}),p=function(e){var t=e.className,a=e.text,r=g();return h.default.createElement("div",{role:"presentation","aria-label":"Sky "+a,className:(0,f.Z)(r.root,t)},h.default.createElement(v.S,{src:"../assets/images/sky-logo-transparent.png",alt:"Sky",width:83,height:45,placeholder:"none",transformOptions:{fit:"fill"},__imageData:n(6565)}),a&&h.default.createElement("span",{className:r.underText},a))},E=n(3373),k=n(8978),y=(0,m.Z)({root:{display:"flex",gap:24,width:"85%",margin:"auto",marginTop:32,marginBottom:12},logo:{marginTop:6}}),b=(0,m.Z)({root:{listStyle:"none",display:"flex",gap:12},icon:{height:77,color:"white"},selectedIcon:{color:E.Z.headerTabSelected}}),C=function(){var e=b(),t=(0,k.sJ)(d.wh).selectedTab;return h.default.createElement("ul",{className:e.root},h.default.createElement("li",{key:"tv-guide"},h.default.createElement(u(),{className:(0,f.Z)(e.icon,"GUIDE"===t&&e.selectedIcon)})),h.default.createElement("li",{key:"box-office"},h.default.createElement(r(),{style:{paddingTop:3},className:(0,f.Z)(e.icon,"BOX OFFICE"===t&&e.selectedIcon)})),h.default.createElement("li",{key:"services"},h.default.createElement(i(),{className:(0,f.Z)(e.icon,"SERVICES"===t&&e.selectedIcon)})),h.default.createElement("li",{key:"interactive"},h.default.createElement(l(),{style:{paddingTop:3},className:(0,f.Z)(e.icon,"INTERACTIVE"===t&&e.selectedIcon)})))},x=function(e){var t=e.logoText,n=e.children,a=y();return h.default.createElement("header",{className:a.root},h.default.createElement(p,{text:t,className:a.logo}),n)}},1074:function(e,t,n){"use strict";function a(e,t){return Array.isArray(e)?function(n){var a=Object.assign({},n);return e.forEach((function(e){if(!Object.keys(a).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';a[e]="boolean"!=typeof t?!a[e]:t})),a}:function(n){var a=Object.assign({},n);if(!Object.keys(a).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';return a[e]="boolean"!=typeof t?!a[e]:t,a}}n.d(t,{Z:function(){return a}})},4331:function(e,t,n){"use strict";function a(e,t){return Math.ceil(Math.random()*(t-e))+e}n.d(t,{M:function(){return a}})},3230:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n.p+"static/sharing-image-db5dc5b9424e9194bebb470cf9c6e978.jpg",r=n(5444),c=n(1766),l=n(2013),o=function(e){var t=e.description,n=e.meta,o=e.title,i=(0,r.useStaticQuery)("63159454").site,s=t||i.siteMetadata.description,u=o?o+" | "+i.siteMetadata.title:i.siteMetadata.title;return c.default.createElement(c.default.Fragment,null,c.default.createElement(l.Title,null,u),c.default.createElement(l.Meta,{name:"description",content:s}),c.default.createElement(l.Meta,{name:"og:locale",content:"en_GB"}),c.default.createElement(l.Meta,{name:"og:title",content:u}),c.default.createElement(l.Meta,{name:"og:description",content:s}),c.default.createElement(l.Meta,{name:"og:type",content:"website"}),c.default.createElement(l.Meta,{name:"og:image",content:a}),c.default.createElement(l.Meta,{name:"twitter:card",content:"summary_large_image"}),c.default.createElement(l.Meta,{name:"twitter:title",content:u}),c.default.createElement(l.Meta,{name:"twitter:description",content:s}),c.default.createElement(l.Meta,{name:"twitter:creator",content:"@davwheat"}),c.default.createElement(l.Meta,{name:"twitter:site",content:"@davwheat"}),c.default.createElement(l.Meta,{name:"twitter:image",content:a}),c.default.createElement(l.Meta,{name:"twitter:image:alt",content:"Screenshot of the Sky+ Web EPG."}),n&&n.map((function(e,t){return c.default.createElement(l.Meta,{key:e.name+"--"+t,name:e.name,content:e.content})})))},i=function(e){var t=e.title,n=e.description,a=e.children;return c.default.createElement(c.default.Fragment,null,c.default.createElement(o,{title:t,description:n}),a)}},6918:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var a=n(6524),r=n(5936),c=n(1074),l=n(7399),o=n(1766),i=n(8978),s=n(8588),u=n(2476),d=n(5061),m=n(9205),f=n(3373),v=n(2585),h=(0,l.Z)({root:{width:585,margin:"auto",padding:0,display:"flex",flexDirection:"column",gap:4,position:"relative",fontFamily:"Zurich",fontStretch:"expanded",fontWeight:700,letterSpacing:.4,'&[data-more="true"]::after, &[data-less="true"]::before':{content:'""',display:"block",position:"absolute",height:24,width:32,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundImage:"url("+m.Z+")",right:0,transformOrigin:"center"},'&[data-more="true"]::after':{bottom:0,transform:"translateY(100%)"},'&[data-less="true"]::before':{top:0,transform:"translateY(-100%) rotate(0.5turn)"}}});function g(e){if(e.length<=10)return[e];for(var t=(0,d.Z)(e),n=[];t.length>0;){var a=void 0;t.length<=10?(a=t,t=[]):a=t.splice(0,9),n.push(a)}return n}var p=(0,l.Z)({uppercase:{textTransform:"uppercase"},root:{cursor:"pointer",paddingLeft:6,height:32,fontSize:26,display:"flex",alignItems:"center",background:f.Z.main,color:f.Z.mainText,counterIncrement:"menu",letterSpacing:-.15,lineHeight:32,outline:"none","&::before":{width:72,alignSelf:"stretch",textAlign:"center",lineHeight:"32px",marginRight:8,background:f.Z.accent,color:f.Z.accentText,content:"counter(menu)",display:"inline-block"},"&:nth-child(10)::before":{content:'"0"'}}}),E=function(e){var t=e.customNumber,n=e.text,a=e.onClick,r=e.noForcedUpperCase,c=void 0!==r&&r,l=p();return o.default.createElement("li",{"data-number":t,onKeyDown:function(e){"Enter"===e.key&&e.target.click()},onClick:a,tabIndex:0,className:(0,v.Z)(l.root,!c&&l.uppercase)},n)},k=function(e){var t=e.onBack,n=e.listItems,r=e.noForcedUpperCase,l=void 0!==r&&r,s=h(),u=(0,o.useRef)(null),d=(0,o.useRef)(-1),m=(0,i.Zl)(a.X8),f=(0,o.useState)(0),v=f[0],p=f[1];d.current!==v&&(d.current=v,m((0,c.Z)("backUp",!!(t||v>0))));var k=(0,o.useMemo)((function(){return g(n)}),[n,g]),y=k[v];return(0,o.useEffect)((function(){if(u.current){var e=u.current.firstElementChild;e&&e.focus()}function n(e){v>0&&"backUp"===e.detail.control?(e.stopImmediatePropagation(),p(0)):0===v&&t&&(e.stopImmediatePropagation(),t(e))}return document.addEventListener("skyControlPressed",n),function(){document.removeEventListener("skyControlPressed",n)}}),[v,u]),o.default.createElement("ol",{"data-more":String(v<k.length-1),"data-less":String(v>0),onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)){var t=e.target,n=e.currentTarget;if("ArrowUp"===e.key){var a=t.previousElementSibling,r=a;a||(r=n.lastElementChild),r.focus()}else if("ArrowDown"===e.key){var c=t.nextElementSibling,l=c;c||(l=n.firstElementChild),l.focus()}}},ref:u,className:s.root},y.map((function(e){return o.default.createElement(E,Object.assign({noForcedUpperCase:l,key:e.text},e))})),k.length-1!==v&&o.default.createElement(E,{text:"More...",onClick:function(){return p((function(e){return e+1}))}}))},y=n(3383),b=n(3213),C=n(4331),x=n(5444),S=[{text:"All Channels",onClick:function(){(0,x.navigate)("/epg/channel-list?start=101")}},{text:"Entertainment",onClick:function(){}},{text:"Lifestyle & Culture",onClick:function(){alert("l&c")}},{text:"Movies",onClick:function(){}},{text:"Sports",onClick:function(){}},{text:"News",onClick:function(){}},{text:"Documentaries",onClick:function(){}},{text:"Kids",onClick:function(){}},{text:"Music",onClick:function(){}},{text:"Radio",onClick:function(){}},{text:"Shopping",onClick:function(){}},{text:"Religion",onClick:function(){}},{text:"International",onClick:function(){}},{text:"Gaming & Dating",onClick:function(){}},{text:"Specialist",onClick:function(){}},{text:"Adult",onClick:function(){}}],w=[{text:"Movies by start time",onClick:function(){}},{text:"Movies A–Z",onClick:function(){}},{text:"New movies",onClick:function(){}},{text:"Sports & Events",onClick:function(){}},{text:"Previews",onClick:function(){}},{text:"Adult Pay–Per–Night",onClick:function(){}},{text:"Adult movies",onClick:function(){}}],M=[{text:"Using Sky+",onClick:function(){(0,x.navigate)("/services/using-sky-plus")}},{text:"Telephone numbers",onClick:function(){(0,x.navigate)("/services/telephone-numbers")}},{text:"Parental control",onClick:function(){}},{text:"System setup",onClick:function(){}},{text:"Sky+ Setup",onClick:function(){}},{text:"Anytime Setup",onClick:function(){}},{text:"Auto Standby",onClick:function(){}},{text:"Manual Recording",onClick:function(){}},{text:"Favourite Channels",onClick:function(){}},{text:"Other Channels",onClick:function(){}}],z=[{text:"Sky Active",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Active"}})}},{text:"QVC",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"QVC"}})}},{text:"PlayJam Games",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"PlayJam Games"}})}},{text:"Teletext Holidays",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"Teletext Holidays"}})}},{text:"Sky Customer Service",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Customer Service"}})}},{text:"Sky Games",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Games"}})}},{text:"Ladbrokes Betting & Games",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"Ladbrokes Betting & Games"}})}},{text:"Directgov",onClick:function(){(0,x.navigate)("/interactive/coming-next",{state:{serviceName:"Directgov",serviceDescription:"Public services all in one place",nextUrl:"/interactive/services/directgov"}})}},{text:"Sky Bet, Vegas & Sky Poker",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Bet, Vegas & Sky Poker"}})}},{text:"GoPlayTV Games",onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:"GoPlayTV Games"}})}},{text:'YO–YO"',onClick:function(){(0,x.navigate)("/interactive/service-unavailable",{state:{serviceName:'YO–YO"'}})}}],N=(0,l.Z)({centeredErrorMessage:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%"}}),I=function(){var e=(0,i.sJ)(y.R),t=Date.now()-e.bootTime<3e4,n=(0,o.useState)(!1),a=n[0],r=n[1],c=N();return(0,o.useEffect)((function(){if(!a){var e=setTimeout((function(){r(!0)}),(0,C.M)(2e3,t?1e4:6e3));return function(){clearTimeout(e)}}})),a?o.default.createElement(k,{noForcedUpperCase:!0,key:"interactive",listItems:z}):o.default.createElement("div",{className:c.centeredErrorMessage},o.default.createElement(b.Z,{errorCode:null,wider:!0,horizontallyCentered:!0},o.default.createElement("br",null),"Searching for listings",o.default.createElement("br",null),"Please wait"))},A={red:"Anytime",green:"Planner",yellow:"Search A–Z",blue:"Favourites"},T=["GUIDE","BOX OFFICE","SERVICES","INTERACTIVE"],Z=(0,l.Z)({root:{background:"url("+r.Z+")"},content:{marginTop:38},centeredErrorMessage:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%"}});var L=function(){var e=Z(),t=(0,i.sJ)(a.wh),n=(0,i.Zl)(a.wh),r=(0,i.Zl)(a.X8),l=function(e){switch(e){default:case"GUIDE":return S;case"BOX OFFICE":return w;case"SERVICES":return M}}(t.selectedTab),d=function(e){switch(e){case"GUIDE":return A;default:return null}}(t.selectedTab);var m=T.indexOf(t.selectedTab);return(0,o.useEffect)((function(){function e(e){var t=e.detail.control;if(["leftArrow","rightArrow"].includes(t)){var a=m;"leftArrow"===t?a-=1:a+=1,a<0?a=T.length-1:a>=T.length&&(a=0),n({selectedTab:T[a]})}}return r((0,c.Z)(["leftArrow","rightArrow"],!0)),addEventListener("skyControlPressed",e),function(){removeEventListener("skyControlPressed",e),r((0,c.Z)(["leftArrow","rightArrow"],!1))}}),[n,m]),o.default.createElement("div",{className:e.root},o.default.createElement(u.Z,{logoText:"guide"},o.default.createElement(u.a,null)),o.default.createElement("div",{className:e.content},"INTERACTIVE"!==t.selectedTab&&o.default.createElement(k,{listItems:l,key:t.selectedTab}),"INTERACTIVE"===t.selectedTab&&o.default.createElement(I,null)),d&&o.default.createElement(s.Z,{buttonPressHandler:function(e){switch(e){case"red":alert("Anytime isn't implemented yet.");break;case"green":alert("Planner isn't implemented yet.");break;case"yellow":alert("Search A-Z isn't implemented yet.");break;case"blue":alert("Favourites isn't implemented yet.")}},buttonsText:d}))},_=n(3230),R=function(e){var t,n=e.location,r=(0,i.Zl)(a.wh);return null!=n&&null!==(t=n.state)&&void 0!==t&&t.selectedTab&&r((function(e){return(0,x.navigate)("/",{replace:!0,state:{}}),Object.assign({},e,{selectedTab:n.state.selectedTab})})),o.default.createElement(_.Z,null,o.default.createElement(L,null))}},3917:function(e,t,n){var a=n(1766);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Box Office"),a.createElement("path",{d:"M37.39 2.8L15.85 13.75l.22.26 6.87 7.97 22.03-11.75zm-.1.65l6.8 6.64L23.06 21.3l-6.37-7.39zm-25.98 10.6L38.44.25l3.8 3.7s-.79.69.13 1.6c.86.86 1.64.17 1.64.17l4.72 4.58-27.78 14.92-3.7-4.3s1-.62.12-1.73c-.81-1.03-1.87-.3-1.87-.3z",key:1}),a.createElement("path",{d:"M38.83 0l2.78 2.7s2.58.04 3.89.8c1.57.9 1.42 2.3 1.42 2.3v2.15l2.53 2.46-2.66 1.44.06 3.8s-.06 1.67-1.26 2.63c-1.61 1.3-5.26 1.21-5.26 1.21h-7.74l-7.07 3.8h24.34V-.02zM17.87 0v10.22l2.77-1.4V5.66c0-1.2 2.85-2.9 6.14-2.9h5.69L37.97 0zM51.49 27.4h2.57v10.13H51.5zM63.19 27.45v10.03h6.45v-1.69h-3.6v-2.45h3.6v-1.92h-3.6v-2.15h3.6v-1.82zM0 27.44V37.5h5.9s2 .01 2-2.76c0-2.2-1.6-2.5-1.6-2.5s1.6-.13 1.6-2.34c0-2.47-2-2.45-2-2.45zm2.69 1.85h1.12s.47 0 .8.33c.31.3.32.83.32.83s.02.34-.3.66c-.3.3-.8.32-.8.32H2.69zm0 3.93h1.12s.48 0 .82.37c.3.35.31.85.31.85s.02.48-.3.84c-.3.34-.8.36-.8.36H2.7zM32.37 27.16c-3.83 0-3.89 2.59-3.89 2.59V35s.08 2.77 3.89 2.77c3.84 0 3.88-2.77 3.88-2.77v-5.25s-.04-2.6-3.88-2.6zm-.04 2.05c1 0 1.02 1.67 1.02 1.67v3.38s-.01 1.78-1.02 1.78c-1 0-1.01-1.78-1.01-1.78v-3.38s.01-1.67 1.01-1.67zM58.7 27.18c-2.34 0-3.22 1.35-3.56 2.58-.21.78-.23 4.36 0 5.23.36 1.3.87 2.75 3.56 2.75 3.54 0 3.57-4 3.57-4h-2.33v.5s0 1.78-1.24 1.78c-1.05 0-1.12-1.77-1.12-1.77v-3.37s.04-1.66 1.12-1.66c1.14 0 1.24 1.76 1.24 1.76h2.33s-.27-3.8-3.57-3.8zM37.17 27.36v10.22h2.76v-4.49h3.47v-1.75h-3.47v-2.12h3.47v-1.86zM44.33 27.36v10.22h2.76v-4.49h3.47v-1.75H47.1v-2.12h3.47v-1.86zM12.62 27.16c-3.83 0-3.89 2.59-3.89 2.59V35s.08 2.77 3.89 2.77c3.84 0 3.88-2.77 3.88-2.77v-5.25s-.04-2.6-3.88-2.6zm-.04 2.05c1 0 1.02 1.67 1.02 1.67v3.38s-.01 1.78-1.02 1.78c-1 0-1.01-1.78-1.01-1.78v-3.38s.01-1.67 1.01-1.67zM17.67 27.48h2.7l1.56 2.46 1.57-2.46h2.92l-2.78 4.82 2.98 5.15H23.5l-1.57-2.97-1.57 2.97h-3.03l2.97-5.15z",key:2})])}r.defaultProps={fill:"currentColor",viewBox:"0 0 69.64 37.77"},e.exports=r,r.default=r},7296:function(e,t,n){var a=n(1766);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Interactive"),a.createElement("path",{d:"M0 27.71h2.57v10.13H0zM20.36 27.76v10.02h6.45V36.1h-3.6v-2.45h3.6v-1.92h-3.6v-2.15h3.6v-1.82zM27.86 27.74V37.8h2.56v-3.9h1.11c.44 0 .65.28.65.81v3.1h2.9v-3.24c0-.94-.84-1.62-.84-1.62s.85-.31.85-2.39c0-2.83-1.97-2.83-1.97-2.83zm2.44 1.88h1.01s1.09.02 1.09 1.24c0 1.18-1.09 1.17-1.09 1.17H30.3zM49.02 27.5c-2.34 0-3.22 1.34-3.56 2.57-.2.78-.23 4.36 0 5.23.36 1.3.87 2.75 3.56 2.75 3.55 0 3.57-4 3.57-4h-2.33v.5s0 1.78-1.24 1.78c-1.05 0-1.11-1.77-1.11-1.77v-3.37s.03-1.66 1.11-1.66c1.14 0 1.24 1.76 1.24 1.76h2.33s-.27-3.8-3.57-3.8zM61.74 27.71h2.57v10.13h-2.57zM65.35 27.8h2.34l1.9 6.68 1.68-6.67h2.56l-2.66 9.93h-3.14zM74.87 27.76v10.02h6.45V36.1h-3.6v-2.45h3.6v-1.92h-3.6v-2.15h3.6v-1.82zM12.26 27.75h7.06v1.96H16.9v8.09h-2.21V29.7h-2.43zM53.64 27.75h7.06v1.96h-2.43v8.09h-2.21V29.7h-2.43zM38.76 27.73l-2.64 10.1h2.05l.58-2.21h2.86l.6 2.2h2.04l-2.66-10.1zm1.4 1.83l.98 4.15h-1.97zM3.61 27.77v10h2.1v-6.35l3.49 6.36h2.01V27.77H9.2v6.31L5.7 27.77zM20.42 18.89h3.74l8.35-7.75L36 12.58l7.06-10.44-16 6.58 2.9 1.27zM50.9 6.82h-3.69l-7.46 8.04-3.1-.86-4.57 10.82 13.89-8.12-3.1-.96z",key:1}),a.createElement("path",{d:"M23.4 0v14.92l2.27-2.11V6.79c0-1.6 2.1-4.31 6.65-4.31h8.15l3.48-1.34-.37 1.34s8.68.07 8.68 3.36v10.85c0 3.6-10.52 3.47-10.52 3.47l-6.03 3.29h19.13V0zm2.92 18.2l-1.98 1.82h-.93v3.4h8.56l1.37-3.3s-1.8-.23-3.75-.78c-2.04-.56-3.27-1.15-3.27-1.15z",key:2})])}r.defaultProps={fill:"currentColor",viewBox:"0 0 81.32 38.05"},e.exports=r,r.default=r},1843:function(e,t,n){var a=n(1766);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Services"),a.createElement("path",{d:"M14.3.1l1.74 7.86c.95-.2 2.52.33 2.52-.5 0-1.27-.14-4.68-.77-7.03-.58-.48-2.15-.51-3.5-.32zm1.08 8.3L13.46.26c-.45.1-.82.23-1.06.37-1.5.99-2.9 2.63-2.75 4.33 1.11 10.1 4.9 15.6 10.6 22.15.78.9 3.86.65 5.77.15l-5-7.16c-.36.15-.76.13-1.06-.36-1.6-2.6-3.53-5.26-4.35-8.26-.26-.99-.73-2.22-.23-3.08zm6.17 11.37l5.36 7.45c.28.04.55.07.8-.04.73-.32 2.11-1.05 1.68-1.73-1.58-2.47-3.23-5.18-5.66-7.3-.66-.57-1.4.94-2.06 1.52l-.12.1z",key:1}),a.createElement("path",{d:"M34.16 2.98L19.43 6.93s-.18 1.07-.56 1.4c-.76.68-2.95-.26-2.96.78-.05 3.57 3.9 9.04 4.58 9.99.66.92 1.6-1.75 2.93-1.74 1.11 0 2.9 2.5 2.9 2.5L41.5 15.7zm-.31 1.69l2.22 3.85-2.5.67-2.22-3.83zm-8.11 5.42c.36 0 .58.44.34.72-.33.21-.5.6-.89.71-.37 0-.75.06-1.11-.01a1.33 1.33 0 00-.84.09c-.36.05-.63-.4-.4-.7.32-.35.88-.35 1.33-.27.33 0 .83.19 1-.18.16-.15.33-.35.57-.36zm-4.77 1.13c.32-.01.56.34.41.63-.1.17-.27.28-.38.45-.33.34-.8.03-1.18.1-.15.27-.58.28-.75.02-.22-.31.07-.7.36-.85.26-.08.8-.14.93-.02.04.1.37-.38.61-.33zm5.6.04c.13 0 .25.05.34.15.1.43.54.16.88.29.24.06.53-.19.74.06.27.25.07.75-.3.75-.34.2-.7 0-1.06-.02-.32.09-.7.24-1-.04-.28-.18-.11-.79-.02-.8a.44.44 0 01.43-.39zm-2.14 1.08c.26-.03.46.28.44.5-.06.4-.5.38-.77.43-.33.16-.54.36-.88.48-.34.11-.71.02-1.07.04-.29.05-.75-.12-.92.19-.17.32-.7.26-.8-.08-.1-.38.26-.67.53-.86.52-.21 1.11-.12 1.66-.12.4.1.68-.26 1.02-.4.25-.2.53-.12.79-.18zm2.97 1.52c.29-.01.5.29.42.56-.08.3-.42.32-.66.4-.39-.02-.78-.06-1.17-.06-.34-.06-.56.2-.84.31-.35.1-.66-.34-.47-.64.38-.5 1.06-.57 1.64-.54.37 0 .73.08 1.08-.03zm-4.17.6c.03 0 .06 0 .1.02.35.05.47.57.17.77-.3.11-.5.37-.77.52-.58.34-1.28.16-1.91.2-.35.04-.6-.4-.4-.67.2-.31.63-.19.94-.2.35 0 .75.07 1.03-.17.27-.15.49-.46.84-.46z",key:2}),a.createElement("path",{d:"M43.85 2.3l-9.6.01 1.45 2.52s3.2-.05 4.03 1.61c1.72 3.46 1.33 7.11 1.33 7.11l1.46 2.57-1.27.33s-.16 3.39-2.08 5.3c-2.3 1.37-7.1 1.23-10.64 1.23l1.52 2.26h13.8zm-9.6.01H18.86l.28 2.56h5.56zM12.08 16.64v8.47h5.53s-.7-.82-2.91-3.89a35.94 35.94 0 01-2.62-4.58zM7.85 29.82v10.02h6.45v-1.68h-3.6V35.7h3.6V33.8h-3.6v-2.15h3.6v-1.82zM32.66 29.77h2.57V39.9h-2.57zM44.29 29.82v10.02h6.45v-1.68h-3.6V35.7h3.6V33.8h-3.6v-2.15h3.6v-1.82zM39.83 29.55c-2.34 0-3.22 1.35-3.56 2.58-.2.78-.23 4.36 0 5.22.36 1.31.87 2.76 3.56 2.76 3.55 0 3.57-4 3.57-4h-2.33v.5s0 1.78-1.24 1.78c-1.05 0-1.11-1.77-1.11-1.77v-3.37s.03-1.66 1.11-1.66c1.14 0 1.24 1.75 1.24 1.75h2.33s-.27-3.79-3.57-3.79zM4.42 32.87h2.55v-1.78s-.07-1.5-3.53-1.5S0 31.1 0 31.1v2.47c0 .46 4.42 2.46 4.42 2.92v.88s0 .93-.98.93c-1 0-.98-.93-.98-.93v-.88H.1v2.26s0 1.33 3.34 1.33c3.43 0 3.46-1.34 3.46-1.34v-3.1c0-.32-4.44-2.45-4.44-2.76v-.59s.03-.48.98-.48c.91 0 .98.47.98.47zM15.19 29.8v10.07h2.56v-3.9h1.11c.44 0 .65.28.65.81v3.1h2.9v-3.24c0-.94-.84-1.62-.84-1.62s.85-.31.85-2.39c0-2.83-1.97-2.83-1.97-2.83zm2.44 1.88h1.01s1.09.02 1.09 1.24c0 1.18-1.09 1.17-1.09 1.17h-1.01zM23.3 29.87h2.34l1.9 6.67 1.68-6.67h2.56l-2.66 9.93h-3.14zM56.04 32.87h2.55v-1.78s-.07-1.5-3.53-1.5-3.44 1.5-3.44 1.5v2.47c0 .46 4.42 2.46 4.42 2.92v.88s0 .93-.98.93c-1 0-.98-.93-.98-.93v-.88h-2.36v2.26s0 1.33 3.34 1.33c3.43 0 3.46-1.34 3.46-1.34v-3.1c0-.32-4.44-2.45-4.44-2.76v-.59s.03-.48.98-.48c.91 0 .98.47.98.47z",key:3})])}r.defaultProps={fill:"currentColor",viewBox:"0 0 58.58 40.11"},e.exports=r,r.default=r},7270:function(e,t,n){var a=n(1766);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"TV Guide"),a.createElement("g",{transform:"translate(-9.6 -17)",key:1},[a.createElement("path",{d:"M10.1 25.5H24l13.2 18.3H22.3zM24.6 25.4l9.1-8.4 5.1 5 9.8 12-11.2 9z",key:0}),a.createElement("path",{d:"M20.7 18.2V25h3.4s0-.9.4-1.6c.6-1.4 3.6-2 3.6-2l3.4-3.2zm15 0l3.4 3.2s7-.1 9 2c.2.1.3.4.4.6 1.4 4.3 1 8.8.2 11.9-.4 1.6-4.5 2.1-4.5 2.1l-4 3.5h12.6V18.2zM9.6 46h9.8l1.8 7 1.9-7h2.2l-2.6 10h-2.8l-2.1-7.8h-2.6v7.7H12v-7.7H9.6z",key:1}),a.createElement("path",{d:"M36.4 46h2.8v7s0 1.2 1.3 1.2 1.2-1.2 1.2-1.2v-7h3v7s0 3.4-4.2 3.4c-4.1 0-4-3.4-4-3.4zM45.9 46h2.5v10H46zM50.5 46V56h4.4s3.2 0 3.2-5.3C58.1 46 55 46 55 46zm2.6 1.8h.7s1.7 0 1.7 3.1c0 3.4-1.7 3.4-1.7 3.4h-.7zM59.2 46v10h6.4v-1.7H62V52h3.6v-2H62v-2h3.6V46zM35.3 55.4v-4.8h-3.7v1.6h1V54s0 .6-1 .6-1-1.2-1-1.2v-4.7s0-1.3 1-1.3 1 1 1 1v1.2h2.7v-2.1s0-2-3.7-2c-4.1 0-4 2.6-4 2.6v4.6s0 3.5 2.9 3.5h4c.8 0 .8-.8.8-.8z",key:2})])])}r.defaultProps={viewBox:"0 0 56.1 39.3",fill:"currentColor"},e.exports=r,r.default=r},9205:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMS43IDEwLjkiPjxwYXRoIGZpbGw9IiNlZWM0MDEiIGQ9Ik0wIDBsLjIuMkwxMSAxMC45IDIxLjcgMGgtNy41TDExIDMuNCA3LjUgMHoiLz48L3N2Zz4="},5936:function(e,t,n){"use strict";t.Z=n.p+"static/guide-bg.sized-7f29e9654da33fdec900a60ac94ca276.png"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8afccffcb969fa482a87.js.map