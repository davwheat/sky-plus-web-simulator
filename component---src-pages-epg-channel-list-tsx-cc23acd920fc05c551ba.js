(self.webpackChunksky_plus_epg_simulator=self.webpackChunksky_plus_epg_simulator||[]).push([[648],{6537:function(e,t,a){"use strict";var n=a(1766),i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.Z=function(e){var t=e.children,a=e.defer,r=void 0!==a&&a,s=e.fallback,l=void 0===s?null:s,m=n.useState(!1),u=m[0],o=m[1];return i((function(){r||o(!0)}),[r]),n.useEffect((function(){r&&o(!0)}),[r]),n.createElement(n.Fragment,null,u?t:l)}},330:function(e,t,a){a(5743),e.exports=function(){"use strict";return function(e,t,a){t.prototype.isBetween=function(e,t,n,i){var r=a(e),s=a(t),l="("===(i=i||"()")[0],m=")"===i[1];return(l?this.isAfter(r,n):!this.isBefore(r,n))&&(m?this.isBefore(s,n):!this.isAfter(s,n))||(l?this.isBefore(r,n):!this.isAfter(r,n))&&(m?this.isAfter(s,n):!this.isBefore(s,n))}}}()},3029:function(e,t,a){"use strict";a.d(t,{h:function(){return n.Z},i:function(){return c}});var n=a(2476),i=a(4181),r=a(3373),s=a(7399),l=a(6537),m=a(1766),u=a(8978),o=(0,s.Z)({root:{fontFamily:"Zurich",fontWeight:700,color:r.Z.accent,display:"flex",flexDirection:"column",marginTop:11},date:{fontStretch:"condensed",fontSize:24},title:{fontStretch:"expanded",letterSpacing:.4,textTransform:"uppercase",fontSize:28}}),c=function(e){var t=e.heading,a=(0,u.sJ)(i.vb).time.format("h.mma ddd D MMM"),n=o();return m.default.createElement(l.Z,null,m.default.createElement("div",{className:n.root},m.default.createElement("p",{className:n.date},a),m.default.createElement("h1",{className:n.title},t)))}},7504:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5861),i=a(7757),r=a.n(i),s=a(2580),l=a.n(s),m="https://awk.epgsky.com/hawk/linear/schedule";function u(e,t){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(r().mark((function e(t,a){var n,i,s,u,o,c,_;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(n=void 0===a?{}:a).date,s=n.abortController,u=i?l()(i).format("YYYYMMDD"):l()().format("YYYYMMDD"),e.next=4,fetch(m+"/"+u+"/"+t,{signal:s.signal});case 4:return e.next=6,e.sent.json();case 6:return o=e.sent,c=o.schedule[0].events,_={date:o.date,schedule:c.map((function(e){return{startTime:1e3*e.st,duration:e.d,eventId:e.eid,channelGenreId:e.cgid,programmeUuid:e.programmeuuid,seasonNumber:e.seasonnumber,episodeNumber:e.episodenumber,seasonUuid:e.seasonuuid,seriesUuid:e.seriesuuid,hasChildren:e.haschildren,title:e.t,synopsis:e.sy,eg:e.eg,esg:e.esg,tso:e.tso,rating:e.r,audioTechnology:e.at,hasSubtitles:e.s,hasAudioDescription:e.ad,isHd:e.hd,isNew:e.new,canSeriesLink:e.canl,canBookRecording:e.canb,hasAlternativeAudio:e.hasAlternativeAudio,isRestartable:e.restartable,slo:e.slo,w:e.w,ippv:e.ippv,oppv:e.oppv}}))},e.abrupt("return",_);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7895:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return J}});var n=a(4181),i=a(5936),r=a(3262),s=a(7399),l=a(6537),m=a(1766),u=a(3029),o=a(9205),c=a(132),_=a(3213),h=a(3373),d=a(2585),b="1.2em",p=(0,s.Z)({root:{background:h.Z.coloredButtons.red,color:"#fff",display:"inline-flex",lineHeight:b,justifyContent:"center",width:b,height:b,verticalAlign:"middle",transform:"translateY(-0.125em)",border:"2px solid #fff",borderRadius:"50%",fontSize:"0.95em"},inner:{transform:"translateY(-0.075em)",fontSize:"0.95em"}}),v=function(e){var t=e.className,a=p();return m.default.createElement("span",{"aria-label":"record button",className:(0,d.Z)(a.root,t)},m.default.createElement("span",{className:a.inner},"R"))},f=a(3660);var k=a(6851),g=JSON.parse('[{"name":"BBC One HD","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC One Wal HD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_wales_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC One NI HD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_northern_ireland_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC One ScotHD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_scotland_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC Two HD","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC Two","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC Two NI HD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_northern_ireland_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC News HD","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBC Four HD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_four_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"CBBC HD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:cbbc_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"CBeebies HD","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:cbeebies_hd/t=3840/v=pv14/b=5070016/main.m3u8"},{"name":"BBCScotlandHD","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_scotland_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One Scot","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_scotland_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One NI","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_northern_ireland_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One Wales","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_wales_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC Four","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_four_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"CBBC","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:cbbc_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"CBeebies","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:cbeebies_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC News","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_news_channel_hd/mobile_wifi_main_sd_abr_v2.m3u8"},{"name":"BBC Two Wales","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_wales_digital/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC Two","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_hd/mobile_wifi_main_sd_abr_v2.m3u8"},{"name":"BBC Two NI","streamUrl":"https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_northern_ireland_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC Two Scot","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_hd/mobile_wifi_main_sd_abr_v2.m3u8"},{"name":"BBC Parliament","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_parliament/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC ALBA","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_alba/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"S4C","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:s4cpbs/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One Lon","streamUrl":"https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_london/mobile_wifi_main_sd_abr_v2.m3u8"},{"name":"BBC One Cambridge","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_cambridge/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One N West","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_north_west/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One NE&C","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_north_east/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One S West","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_south_west/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One S East","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_south_east/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One South","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_south/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One Yk&Li","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_east_yorkshire/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One Yorks","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_yorks/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One West","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_west/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One S East","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_south_east/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One South","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_south/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One Oxford","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_oxford/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One E Mid","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_east_midlands/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One East E","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_east/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One CI","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_channel_islands/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"},{"name":"BBC One W Mid","streamUrl":"http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_west_midlands/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8"}]'),w=a(7504),B=a(2580),C=a.n(B),x=a(330),E=a.n(x),z=a(5444),U=a(8978),Z=a(7039),N=a.n(Z),S=(0,s.Z)({info:{height:"0.75em",display:"inline-block"},infoContainer:{}}),y=function(e){var t=e.programmes,a=e.className,i=S(),r=(0,U.sJ)(n.zg).scheduleStartTime,s=t.length,l=0;return m.default.createElement(m.default.Fragment,null,t.map((function(e,t){var n=-C()(e.startTime).diff(r,"minutes"),u=Math.round(e.duration/60)-(n>0?n:0);t<s-1?l+=u:u=90-l;var o=C()().isBetween(e.startTime,e.startTime+1e3*e.duration);return m.default.createElement("span",{style:{gridColumnEnd:"span "+u},className:(0,d.Z)(a,u<25&&i.infoContainer),key:e.startTime+"__"+e.eventId,"data-active-programme":o},u<25?m.default.createElement(N(),{className:i.info}):e.title)})))},T=m.default.memo(y);C().extend(E());var O=(0,s.Z)({item:{padding:"3px 4px"},channelNumber:{width:"3ch",marginRight:4},channelName:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:'".."',color:"#fff",background:h.Z.main,lineHeight:1,cursor:"not-allowed","&[data-has-stream=true]":{cursor:"pointer"},"&:hover, &:focus":{"&, & ~ $programme[data-active-programme=true]:not(& ~ $programme[data-active-programme=true] ~ $programme[data-active-programme=true]):not($channelName:hover + span + [data-nolistings=true] ~ $programme[data-active-programme=true])":{background:h.Z.yellowMain,color:h.Z.main}}},programme:{"&":{textOverflow:"ellipsis"},whiteSpace:"nowrap",overflow:"hidden",textOverflow:'".."',color:"#fff",background:h.Z.main,lineHeight:1},noListings:{background:h.Z.mainFaded,color:h.Z.mainFadedText}});function H(e,t){return t.filter((function(t){var a=C()(t.startTime).diff(e,"minutes"),n=C()(t.startTime+1e3*t.duration).diff(e,"minutes"),i=C()(e).isBetween(t.startTime,t.startTime+1e3*t.duration,"minutes","()");return a>=0&&a<90||n>0&&n<90||i}))}var D=function(e){var t=e.channel,a=O(),i=(0,U.sJ)(n.zg).scheduleStartTime,r=(0,m.useState)(null),s=r[0],l=r[1],u=(0,m.useMemo)((function(){return s?H(i,s.schedule):null}),[H,i,s]);(0,m.useEffect)((function(){if(!s){var e=new AbortController;return(0,w.Z)(String(t.sid),{abortController:e}).then((function(e){l(e)})).catch((function(){})),function(){e.abort()}}}),[s,w.Z,t]);var o=g.find((function(e){return e.name===t.name}));return m.default.createElement(m.default.Fragment,null,m.default.createElement("span",{"data-has-stream":!!o,role:"button",className:(0,d.Z)(a.channelName,a.item),onClick:function(){o&&(0,z.navigate)("/watch-channel/"+t.channelNumber)}},m.default.createElement("span",{className:a.channelNumber},t.channelNumber),t.name),m.default.createElement("span",null),!s&&!u&&m.default.createElement("span",{"aria-hidden":!0,style:{gridColumnEnd:"span 90"}}),s&&u&&m.default.createElement(T,{className:(0,d.Z)(a.programme,a.item),programmes:u}),s&&!(null!=u&&u.length)&&m.default.createElement("span",{"data-nolistings":!0,className:(0,d.Z)(a.programme,a.noListings,a.item),style:{gridColumnEnd:"span 90"}},"..no listings available"))},F=a(5067),A=(0,s.Z)({timingHeader:{color:h.Z.accent,lineHeight:1.5,"&:first-child":{textAlign:"right"},"&:not(:first-child)":{gridColumnEnd:"span 30"}}}),Y=function(){var e=(0,U.sJ)(n.zg).scheduleStartTime,t=A();return m.default.createElement(m.default.Fragment,null,m.default.createElement("span",{className:t.timingHeader},"Today"),m.default.createElement("span",null),m.default.createElement("span",{className:t.timingHeader},(0,F.j)(e)),m.default.createElement("span",{className:t.timingHeader},(0,F.j)(e.add(30,"minutes"))),m.default.createElement("span",{className:t.timingHeader},(0,F.j)(e.add(60,"minutes"))))},L=(0,s.Z)({root:{position:"relative",display:"grid",gridTemplateColumns:"33% 2px repeat(90, minmax(0, 1fr))",gridTemplateRows:"repeat(11, calc(1em + 6px))",width:"85%",maxWidth:"85%",margin:"auto",gap:4,overflow:"visible",fontFamily:"Zurich",fontStretch:"condensed",fontSize:24,marginTop:-4},rootWithListArrows:{"&::after, &::before":{content:'""',display:"block",position:"absolute",height:24,width:32,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundImage:"url("+o.Z+")",right:0,transformOrigin:"center"},"&::after":{bottom:0,transform:"translateY(100%)"},"&::before":{top:34,transform:"translateY(-100%) rotate(0.5turn)"}},colorButtons:{position:"static",width:"85%",maxWidth:"85%",margin:"auto",marginTop:16},controlPrompt:{fontFamily:"ZurichBT",color:h.Z.accent,width:"85%",maxWidth:"85%",margin:"auto",fontSize:24,marginTop:8},controlText:{fontSize:20},noChannelsErrorMsg:{gridColumn:"1 / -1",gridRow:"2 / -1",justifySelf:"center",alignSelf:"center",width:"100%"}});var M=function(e){var t,a,n=e.firstChannel,i=e.genreFilter,r=L(),s=(0,m.useState)(n),u=s[0],o=s[1],h=(t=u+"__"+i,a=(0,m.useRef)(),(0,m.useEffect)((function(){a.current=t})),a.current),b=(0,m.useState)([]),p=b[0],g=b[1];function w(e){o((function(t){var a,n,r=(0,f.Yh)(t,10*e,i);r===t&&(r=1===e?(null===(a=(0,f.Hp)(0,i))||void 0===a?void 0:a.channelNumber)||(0,f.zB)(i)||"101":(null===(n=(0,f.Hp)(-1,i))||void 0===n?void 0:n.channelNumber)||(0,f.zB)(i)||"101");return window.history.replaceState&&function(e,t){var a=new URL(window.location.href);a.search="?start="+e,null!==t&&(a.search=a.search+"&genre="+t),window.history.replaceState({path:a.href},"",a.href)}(r,i),r}))}(0,m.useEffect)((function(){if(h!==u+"__"+i){var e=(0,f.Fn)(u,10,i);g(e)}}));var B=!p||0===p.length;return m.default.createElement(m.default.Fragment,null,m.default.createElement("section",{className:(0,d.Z)(r.root,!B&&r.rootWithListArrows)},m.default.createElement(Y,null),m.default.createElement(l.Z,null,null==p?void 0:p.map((function(e){return m.default.createElement(D,{key:e.sid,channel:e})})),B&&m.default.createElement(_.Z,{errorCode:null,className:r.noChannelsErrorMsg,controlPrompt:!0,controlPromptAction:"cancel"},m.default.createElement("br",null),"There are no services of this type available."))),m.default.createElement(k.Z,{className:r.colorButtons,buttonPressHandler:function(e){"red"===e?w(-1):"green"===e&&w(1)},buttonsText:B?{}:{red:"Page Up",green:"Page Down",yellow:"+24 Hours",blue:"–24 Hours"}}),m.default.createElement("p",{className:r.controlPrompt},!B&&m.default.createElement(m.default.Fragment,null,"Press ",m.default.createElement(c.Z,{className:r.controlText},"SELECT")," to view or ",m.default.createElement(v,null)," to record")))},P=(0,s.Z)({root:{background:"url("+i.Z+")"}}),W=function(e){var t=e.startingChannel,a=e.genreFilter,n=P();return m.default.createElement("div",{className:n.root},m.default.createElement(u.h,{logoText:"guide"},m.default.createElement(l.Z,null,m.default.createElement(u.i,{heading:r.Y[a]||"All channels"}))),m.default.createElement(l.Z,null,m.default.createElement(M,{firstChannel:t,genreFilter:a})))},R=a(1074),I=a(1917),j=a(3230);var J=function(e){var t,a,i=e.location,r=(null==i||null===(t=i.state)||void 0===t?void 0:t.startFromChannelNumber)||function(){if((0,I.Z)())return null;try{return new URL(window.location.href).searchParams.get("start")}catch(e){return null}}()||"101",s=(null==i||null===(a=i.state)||void 0===a?void 0:a.genre)||function(){if((0,I.Z)())return null;try{return parseInt(new URL(window.location.href).searchParams.get("genre"))||null}catch(e){return null}}()||null,l=(0,U.Zl)(n.X8);function u(e){var t=e.detail.control;["backUp"].includes(t)&&(0,z.navigate)("/",{state:{selectedTab:"GUIDE"}})}return(0,m.useEffect)((function(){return document.addEventListener("skyControlPressed",u),l((0,R.Z)(["backUp"],!0)),function(){document.removeEventListener("skyControlPressed",u),l((0,R.Z)(["backUp"],!1))}})),m.default.createElement(j.Z,null,m.default.createElement(W,{startingChannel:r,genreFilter:s}))}},7039:function(e,t,a){var n=a(1766);function i(e){return n.createElement("svg",e,n.createElement("path",{fill:"currentColor",d:"M.9 0v1.4h2.87V0zm0 2.12v3.85l-.9.17v.81h4.68v-.81l-.91-.17V2.12z"}))}i.defaultProps={viewBox:"0 0 4.68 6.95"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-epg-channel-list-tsx-cc23acd920fc05c551ba.js.map