(self.webpackChunksky_digibox_simulator=self.webpackChunksky_digibox_simulator||[]).push([[169],{3213:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a,r,o=n(7399),i=n(2585),l=n(1766),c=n(8978),s=n(8923),u=n(3373);!function(e){e[e.NO_CARD_INSERTED=1]="NO_CARD_INSERTED",e[e.CARD_READ_ERROR=2]="CARD_READ_ERROR",e[e.CARD_CHECK_FAIL=3]="CARD_CHECK_FAIL",e[e.UNAUTHORISED_CARD=6]="UNAUTHORISED_CARD",e[e.UNPAIRED_CARD=7]="UNPAIRED_CARD",e[e.ENCRYPTION_KEY_FAILURE=8]="ENCRYPTION_KEY_FAILURE",e[e.UNAUTHORISED_CARD_2=9]="UNAUTHORISED_CARD_2",e[e.NO_SATELLITE_SIGNAL=28]="NO_SATELLITE_SIGNAL",e[e.NO_SATELLITE_SIGNAL_2=29]="NO_SATELLITE_SIGNAL_2"}(r||(r={}));var d=((a={})[r.NO_CARD_INSERTED]=l.default.createElement(l.default.Fragment,null,"Insert your Sky viewing card"),a[r.NO_SATELLITE_SIGNAL]=l.default.createElement(l.default.Fragment,null,"No Satellite Signal is being received.",l.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",l.default.createElement("br",null),"If the fault persists, contact customer services."),a[r.NO_SATELLITE_SIGNAL_2]=l.default.createElement(l.default.Fragment,null,"No Satellite Signal is being received.",l.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",l.default.createElement("br",null),"If the fault persists, contact customer services."),a),m=r,f=n(1074),E=n(1671),g=(0,o.Z)({messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxWider:{width:"92%"},messageBoxHorizCenter:{margin:"auto"},messageBoxHeader:{background:u.Z.yellowMain,color:u.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative"},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:4,paddingBottom:0,fontFamily:"ZurichBT",background:u.Z.mainLight,color:u.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px",minHeight:136},messageBoxFooter:{color:u.Z.yellowText,paddingBottom:1}}),p=function(e){var t=e.title,n=void 0===t?"For your information":t,a=e.errorCode,r=void 0===a?m.NO_SATELLITE_SIGNAL:a,o=e.children,u=void 0===o?d[m.NO_SATELLITE_SIGNAL]:o,p=e.backUpPrompt,A=void 0!==p&&p,_=e.backUpPromptTextAction,v=void 0===_?"return":_,b=e.onBackUp,x=void 0===b?function(){}:b,S=e.wider,N=void 0!==S&&S,h=e.horizontallyCentered,I=void 0!==h&&h,T=g(),C=(0,c.Zl)(s.X);return A&&C((0,f.Z)("backUp",!0)),(0,l.useEffect)((function(){if(A){function e(e){"backUp"===e.detail.control&&(e.stopImmediatePropagation(),x())}return document.addEventListener("skyControlPressed",e),function(){document.removeEventListener("skyControlPressed",e),C((0,f.Z)("backUp",!1))}}})),l.default.createElement("section",{role:"alert",className:(0,i.Z)(T.messageBox,N&&T.messageBoxWider,I&&T.messageBoxHorizCenter)},l.default.createElement("header",{className:(0,i.Z)("thick-text",T.messageBoxHeader)},n,l.default.createElement("span",{className:T.messageBoxErrorCode},null!=r&&String(r).padStart(2,"0"))),l.default.createElement("article",{className:T.messageBoxContent},u,A&&l.default.createElement("footer",{className:T.messageBoxFooter},"Press ",l.default.createElement(E.Z,null,"BACK UP")," to ",v)))}},1733:function(e,t,n){"use strict";var a=n(7399),r=n(1766),o=n(3373),i=n(3213),l=(0,a.Z)({root:{background:o.Z.accent,position:"absolute",top:0,bottom:0,right:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"},messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxHeader:{background:o.Z.yellowMain,color:o.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative"},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{padding:4,paddingBottom:0,fontFamily:"ZurichBT",background:o.Z.mainLight,color:o.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px"}});t.Z=function(e){var t=Object.assign({},e),n=l();return r.default.createElement("div",{className:n.root},r.default.createElement(i.Z,t))}},1074:function(e,t,n){"use strict";function a(e,t){return Array.isArray(e)?function(n){var a=Object.assign({},n);return e.forEach((function(e){if(!Object.keys(a).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';a[e]="boolean"!=typeof t?!a[e]:t})),a}:function(n){var a=Object.assign({},n);if(!Object.keys(a).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';return a[e]="boolean"!=typeof t?!a[e]:t,a}}n.d(t,{Z:function(){return a}})},5831:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(1766),r=n(5444),o=n(2013),i=function(e){var t=e.description,n=e.meta,i=e.title,l=(0,r.useStaticQuery)("63159454").site,c=t||l.siteMetadata.description;return a.default.createElement(a.default.Fragment,null,a.default.createElement(o.Title,null,i?i+" | "+l.siteMetadata.title:l.siteMetadata.title),a.default.createElement(o.Meta,{name:"description",content:c}),a.default.createElement(o.Meta,{name:"og:title",content:i}),a.default.createElement(o.Meta,{name:"og:description",content:c}),a.default.createElement(o.Meta,{name:"og:type",content:"website"}),a.default.createElement(o.Meta,{name:"twitter:card",content:"summary"}),a.default.createElement(o.Meta,{name:"twitter:title",content:i}),a.default.createElement(o.Meta,{name:"twitter:description",content:c}),a.default.createElement(o.Meta,{name:"twitter:creator",content:"@davwheat"}),n&&n.map((function(e,t){return a.default.createElement(o.Meta,{key:e.name+"--"+t,name:e.name,content:e.content})})))},l=function(e){var t=e.title,n=e.description,r=e.children;return a.default.createElement(a.default.Fragment,null,a.default.createElement(i,{title:t,description:n}),r)}},331:function(e,t,n){"use strict";n.r(t);var a=n(5444),r=n(1766),o=n(1733),i=n(5831);t.default=function(e){var t,n=e.location,l=(null==n||null===(t=n.state)||void 0===t?void 0:t.serviceName)||"This interactive service";return r.default.createElement(i.Z,null,r.default.createElement(o.Z,{errorCode:null,backUpPrompt:!0,backUpPromptTextAction:"cancel",onBackUp:function(){return(0,a.navigate)("/",{state:{selectedTab:"INTERACTIVE"}})}},r.default.createElement("br",null),l," is not available."))}}}]);
//# sourceMappingURL=component---src-pages-interactive-service-unavailable-tsx-3d6a2e7b25f162970b5f.js.map