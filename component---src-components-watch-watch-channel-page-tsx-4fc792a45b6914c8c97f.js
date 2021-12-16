(self.webpackChunksky_plus_epg_simulator=self.webpackChunksky_plus_epg_simulator||[]).push([[22],{2500:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(8179),r=a.n(n),o=a(3373),l=a(7399),i=a(2585),s=a(1766),c=(0,l.Z)({root:{display:"inline-flex",background:o.Z.main,padding:0,fontFamily:"ZurichBT",fontWeight:"bold",fontSize:18,verticalAlign:"middle",transform:"translateY(-0.1em)"},vertical:{flexDirection:"column","& > svg":{height:"0.6em","&:first-child":{transformOrigin:"center",transform:"rotate(0.5turn)",marginBottom:2},"&:last-child":{}}},horizontal:{flexDirection:"row",alignItems:"center",height:"1.3em","& > svg":{height:"0.6em",transformOrigin:"center","&:first-child":{transform:"rotate(90deg)",marginLeft:"-0.25em"},"&:last-child":{transform:"rotate(-90deg)",marginLeft:"-0.45em",marginRight:"-0.25em"}}}});function u(e){var t,a=e.className,n=e.variant,o=c();return s.default.createElement("span",{className:(0,i.Z)(o.root,a,(t={},t[o.vertical]="vertical"===n,t[o.horizontal]="horizontal"===n,t))},s.default.createElement(r(),null),s.default.createElement(r(),null))}},3213:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n,r,o=a(4181),l=a(3373),i=a(1766);!function(e){e[e.NO_CARD_INSERTED=1]="NO_CARD_INSERTED",e[e.CARD_READ_ERROR=2]="CARD_READ_ERROR",e[e.CARD_CHECK_FAIL=3]="CARD_CHECK_FAIL",e[e.UNAUTHORISED_CARD=6]="UNAUTHORISED_CARD",e[e.UNPAIRED_CARD=7]="UNPAIRED_CARD",e[e.ENCRYPTION_KEY_FAILURE=8]="ENCRYPTION_KEY_FAILURE",e[e.UNAUTHORISED_CARD_2=9]="UNAUTHORISED_CARD_2",e[e.NO_SATELLITE_SIGNAL=28]="NO_SATELLITE_SIGNAL",e[e.NO_SATELLITE_SIGNAL_2=29]="NO_SATELLITE_SIGNAL_2"}(r||(r={}));var s=((n={})[r.NO_CARD_INSERTED]=i.default.createElement(i.default.Fragment,null,"Insert your Sky viewing card"),n[r.NO_SATELLITE_SIGNAL]=i.default.createElement(i.default.Fragment,null,"No Satellite Signal is being received.",i.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",i.default.createElement("br",null),"If the fault persists, contact customer services."),n[r.NO_SATELLITE_SIGNAL_2]=i.default.createElement(i.default.Fragment,null,"No Satellite Signal is being received.",i.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",i.default.createElement("br",null),"If the fault persists, contact customer services."),n),c=r,u=a(1074),d=a(7399),m=a(2585),f=a(8978),g=a(132),p=(0,d.Z)({messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxWider:{width:"92%"},messageBoxHorizCenter:{margin:"auto"},messageBoxHeader:{background:l.Z.yellowMain,color:l.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative",fontFamily:"Zurich",fontStretch:"expanded",fontWeight:700,letterSpacing:.4},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:4,paddingBottom:1,fontFamily:"ZurichBT",fontWeight:400,background:l.Z.mainLight,color:l.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px",minHeight:136},messageBoxFooter:{color:l.Z.yellowText,paddingBottom:1}}),h=function(e){var t=e.title,a=void 0===t?"For your information":t,n=e.errorCode,r=void 0===n?c.NO_SATELLITE_SIGNAL:n,l=e.children,d=void 0===l?s[c.NO_SATELLITE_SIGNAL]:l,h=e.customControlData,E=void 0===h?{text:"BACK UP",control:"backUp"}:h,v=e.controlPrompt,b=void 0!==v&&v,N=e.controlPromptAction,A=void 0===N?"return":N,S=e.onControlPressed,w=void 0===S?function(){}:S,T=e.wider,x=void 0!==T&&T,y=e.horizontallyCentered,_=void 0!==y&&y,Z=e.className,C=p(),L=(0,f.Zl)(o.X8);return b&&L((0,u.Z)("backUp",!0)),(0,i.useEffect)((function(){if(b){var e=function(e){e.detail.control===E.control&&(e.stopImmediatePropagation(),w())};return document.addEventListener("skyControlPressed",e),function(){document.removeEventListener("skyControlPressed",e),L((0,u.Z)("backUp",!1))}}})),i.default.createElement("section",{role:"alert",className:(0,m.Z)(C.messageBox,x&&C.messageBoxWider,_&&C.messageBoxHorizCenter,Z)},i.default.createElement("header",{className:C.messageBoxHeader},a,i.default.createElement("span",{className:C.messageBoxErrorCode},null!=r&&String(r).padStart(2,"0"))),i.default.createElement("article",{className:C.messageBoxContent},d,b&&i.default.createElement("footer",{className:C.messageBoxFooter},"Press ",i.default.createElement(g.Z,null,E.text)," to ",A)))}},1733:function(e,t,a){"use strict";var n=a(3373),r=a(7399),o=a(1766),l=a(3213),i=(0,r.Z)({root:{background:n.Z.accent,position:"absolute",top:0,bottom:0,right:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"},messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxHeader:{background:n.Z.yellowMain,color:n.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative"},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{padding:4,paddingBottom:0,fontFamily:"ZurichBT",background:n.Z.mainLight,color:n.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px"}});t.Z=function(e){var t=Object.assign({},e),a=i();return o.default.createElement("div",{className:a.root},o.default.createElement(l.Z,t))}},7695:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=a(4181),r=a(1733),o=a(1074),l=a(3230),i=a(7399),s=a(7049),c=a(5444),u=a(8063),d=a(1766),m=a(8978),f=a(9962),g=a(1335),p=a(2500),h=a(3373),E=a(7504),v=a(2580),b=a.n(v),N=(0,i.Z)({root:{position:"absolute",zIndex:100,width:"80%",bottom:48,left:"50%",transform:"translateX(-50%)",background:"#fff"},header:{color:h.Z.main,fontFamily:"Zurich",fontSize:22,padding:"0 4px",paddingLeft:6,display:"flex",borderBottom:"4px solid "+h.Z.mainFadedText,height:32},headerTime:{marginLeft:"auto",color:h.Z.mainFadedText},main:{padding:"4px 0",paddingLeft:48,background:h.Z.mainFaded,fontSize:22,height:"2.75em",display:"grid",gridTemplateColumns:"18fr 82fr",gridTemplateRows:"1fr 1fr",fontFamily:"ZurichBT",gap:6,lineHeight:1},footer:{color:h.Z.main,fontFamily:"Zurich",fontSize:22,borderTop:"4px solid "+h.Z.mainFadedText,display:"grid",gridTemplateColumns:"repeat(4, 1fr)",height:32,paddingLeft:6,alignItems:"end"},controlArrow:{fontSize:22,position:"absolute",transform:"translateY(0.5px)","& + span":{marginLeft:"1.7em"}},footerSection:{position:"relative",maxHeight:"100%","& > $footerLabel":{display:"inline-block",transform:"translateY(-2px)"}},footerLabel:{},now:{color:"#fff"},later:{color:h.Z.mainFadedText},noInfo:{color:h.Z.yellowText,gridColumn:"1 / span 2"}});function A(e){var t=e.channel,a=N(),n=(0,m.sJ)(f.v).time,r=(0,d.useState)(null),o=r[0],l=r[1];(0,d.useEffect)((function(){var e=new AbortController;return null===o&&(0,E.Z)(t.sid,{abortController:e}).then((function(e){var t,a=e.schedule.findIndex((function(e){return e.startTime<=n.toDate().getTime()&&e.startTime+1e3*e.duration>=n.toDate().getTime()}));-1===a?l(!1):l([e.schedule[a],null===(t=e.schedule)||void 0===t?void 0:t[a+1]].filter(Boolean))})).catch(),function(){e.abort()}}));var i=d.default.createElement("span",{className:a.noInfo},"Further schedule information is not available");return d.default.createElement("aside",{className:a.root},d.default.createElement("div",{className:a.header},d.default.createElement("span",{style:{width:t.channelNumber.length+.5+"ch"}},t.channelNumber),d.default.createElement("span",null,t.name),d.default.createElement("span",{className:a.headerTime},n.format("H.mma ddd D MMM"))),d.default.createElement("div",{className:a.main},(null==o?void 0:o[0])&&d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{className:a.now},"NOW"),d.default.createElement("span",{className:a.now},o[0].title)),null!=o&&o[1]?d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{className:a.now},b()(o[1].startTime).format("h.mma")),d.default.createElement("span",{className:a.now},o[1].title)):i,!1===o&&i),d.default.createElement("div",{className:a.footer},d.default.createElement("div",{className:a.footerSection},d.default.createElement(p.Z,{className:a.controlArrow,variant:"horizontal"}),d.default.createElement("span",{className:a.footerLabel},"Time")),d.default.createElement("div",{className:a.footerSection},d.default.createElement(p.Z,{className:a.controlArrow,variant:"vertical"}),d.default.createElement("span",{className:a.footerLabel},"Channel")),d.default.createElement("div",{className:a.footerSection},d.default.createElement(g.Z,{buttonColor:"yellow"}),d.default.createElement("span",{className:a.footerLabel},"Messages")),d.default.createElement("div",{className:a.footerSection},d.default.createElement(g.Z,{buttonColor:"blue"}),d.default.createElement("span",{className:a.footerLabel},"Favourite"))))}var S=(0,i.Z)({root:{background:"#000"},video:{width:"100%",height:"100%"}}),w=function(e){var t=e.pageContext,a=t.channel,i=t.streamData,f=S(),g=(0,m.Zl)(n.X8),p=(0,m.sJ)(n.Db),h=(0,d.useState)({error:!1}),E=h[0],v=h[1],b=(0,d.useRef)(null),N=(0,u.Ds)(),w=N.enqueueSnackbar,T=N.closeSnackbar;function x(e){var t=e.detail.control;["backUp"].includes(t)&&(0,c.navigate)("/",{state:{selectedTab:"GUIDE"}})}return(0,d.useEffect)((function(){var e;return document.addEventListener("skyControlPressed",x),g((0,o.Z)(["backUp"],!0)),window.__bgAudio.pause(),p.hasTvLicense&&b.current&&(window.Hls.isSupported()||E.error||v((function(e){return Object.assign({},e,{error:!0})})),(e=new window.Hls).loadSource(i.streamUrl),e.attachMedia(b.current),e.on(window.Hls.Events.MEDIA_ATTACHED,(function(){b.current.play().catch((function(){w("TV stream is paused",{variant:"warning",persist:!0,key:"STREAM_PAUSED",action:function(e){return d.default.createElement(s.Z,{onClick:function(){b.current.play(),T(e)}},"Resume stream")}})}))}))),function(){document.removeEventListener("skyControlPressed",x),g((0,o.Z)(["backUp"],!1)),window.__bgAudio.play(),e&&e.destroy(),T("STREAM_PAUSED")}})),d.default.createElement(l.Z,null,d.default.createElement("div",{className:f.root},p.hasTvLicense&&!E.error&&d.default.createElement("video",{ref:b,className:f.video}),p.hasTvLicense&&E.error&&d.default.createElement(r.Z,{errorCode:30},d.default.createElement("br",null),"There is a technical fault with this channel",d.default.createElement("br",null),"Please try again later"),p.hasOptedOutOfTvLicenseContent&&d.default.createElement(r.Z,{errorCode:null,controlPrompt:!0,controlPromptAction:"return"},d.default.createElement("br",null),"This content is only available to TV Licensees"),d.default.createElement(A,{channel:a})))}},7504:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(5861),r=a(7757),o=a.n(r),l=a(2580),i=a.n(l),s="https://awk.epgsky.com/hawk/linear/schedule";function c(e,t){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(o().mark((function e(t,a){var n,r,l,c,u,d,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(n=void 0===a?{}:a).date,l=n.abortController,c=r?i()(r).format("YYYYMMDD"):i()().format("YYYYMMDD"),e.next=4,fetch(s+"/"+c+"/"+t,{signal:l.signal});case 4:return e.next=6,e.sent.json();case 6:return u=e.sent,d=u.schedule[0].events,m={date:u.date,schedule:d.map((function(e){return{startTime:1e3*e.st,duration:e.d,eventId:e.eid,channelGenreId:e.cgid,programmeUuid:e.programmeuuid,seasonNumber:e.seasonnumber,episodeNumber:e.episodenumber,seasonUuid:e.seasonuuid,seriesUuid:e.seriesuuid,hasChildren:e.haschildren,title:e.t,synopsis:e.sy,eg:e.eg,esg:e.esg,tso:e.tso,rating:e.r,audioTechnology:e.at,hasSubtitles:e.s,hasAudioDescription:e.ad,isHd:e.hd,isNew:e.new,canSeriesLink:e.canl,canBookRecording:e.canb,hasAlternativeAudio:e.hasAlternativeAudio,isRestartable:e.restartable,slo:e.slo,w:e.w,ippv:e.ippv,oppv:e.oppv}}))},e.abrupt("return",m);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1074:function(e,t,a){"use strict";function n(e,t){return Array.isArray(e)?function(a){var n=Object.assign({},a);return e.forEach((function(e){if(!Object.keys(n).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';n[e]="boolean"!=typeof t?!n[e]:t})),n}:function(a){var n=Object.assign({},a);if(!Object.keys(n).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';return n[e]="boolean"!=typeof t?!n[e]:t,n}}a.d(t,{Z:function(){return n}})},3230:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a.p+"static/sharing-image-db5dc5b9424e9194bebb470cf9c6e978.jpg",r=a(5444),o=a(1766),l=a(2013),i=function(e){var t=e.description,a=e.meta,i=e.title,s=(0,r.useStaticQuery)("63159454").site,c=t||s.siteMetadata.description,u=i?i+" | "+s.siteMetadata.title:s.siteMetadata.title;return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Title,null,u),o.default.createElement(l.Meta,{name:"description",content:c}),o.default.createElement(l.Meta,{name:"og:locale",content:"en_GB"}),o.default.createElement(l.Meta,{name:"og:title",content:u}),o.default.createElement(l.Meta,{name:"og:description",content:c}),o.default.createElement(l.Meta,{name:"og:type",content:"website"}),o.default.createElement(l.Meta,{name:"og:image",content:n}),o.default.createElement(l.Meta,{name:"twitter:card",content:"summary_large_image"}),o.default.createElement(l.Meta,{name:"twitter:title",content:u}),o.default.createElement(l.Meta,{name:"twitter:description",content:c}),o.default.createElement(l.Meta,{name:"twitter:creator",content:"@davwheat"}),o.default.createElement(l.Meta,{name:"twitter:site",content:"@davwheat"}),o.default.createElement(l.Meta,{name:"twitter:image",content:n}),o.default.createElement(l.Meta,{name:"twitter:image:alt",content:"Screenshot of the Sky+ Web EPG."}),o.default.createElement(l.Link,{rel:"preconnect",href:"https://awk.epgsky.com/"}),a&&a.map((function(e,t){return o.default.createElement(l.Meta,{key:e.name+"--"+t,name:e.name,content:e.content})})))},s=function(e){var t=e.title,a=e.description,n=e.children;return o.default.createElement(o.default.Fragment,null,o.default.createElement(i,{title:t,description:a}),n)}},8179:function(e,t,a){var n=a(1766);function r(e){return n.createElement("svg",e,n.createElement("path",{fill:"#eec401",d:"M0 0l.2.2L11 10.9 21.7 0h-7.5L11 3.4 7.5 0z"}))}r.defaultProps={viewBox:"0 0 21.7 10.9"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-components-watch-watch-channel-page-tsx-4fc792a45b6914c8c97f.js.map