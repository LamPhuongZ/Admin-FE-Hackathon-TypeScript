import{H as Ie,J as lt,at as it,M as st,aV as at,bo as ct,aX as dt,aW as ut,r,C as ee,c as F,bp as pt,aM as ge,aP as te,ay as ft,aO as _e,I as be,a as ve,bc as Ne,bq as mt,S as gt,l as yt,aT as bt,aG as ke,t as Me,aC as K,_ as vt,o as Le,b3 as ht}from"./index-CY6L4MmU.js";import{K as ye,q as Et,m as $e}from"./index-D5QL93Sv.js";import{G as xt,a as Ct,u as St}from"./gapSize-Ztm6UEJs.js";const Q=e=>e?typeof e=="function"?e():e:null,Ot=e=>{const{componentCls:t,popoverColor:o,titleMinWidth:n,fontWeightStrong:l,innerPadding:i,boxShadowSecondary:u,colorTextHeading:a,borderRadiusLG:c,zIndexPopup:p,titleMarginBottom:s,colorBgElevated:f,popoverBg:m,titleBorderBottom:b,innerContentPadding:S,titlePadding:E}=e;return[{[t]:Object.assign(Object.assign({},st(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":f,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:c,boxShadow:u,padding:i},[`${t}-title`]:{minWidth:n,marginBottom:s,color:a,fontWeight:l,borderBottom:b,padding:E},[`${t}-inner-content`]:{color:o,padding:S}})},at(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},wt=e=>{const{componentCls:t}=e;return{[t]:ct.map(o=>{const n=e[`${o}6`];return{[`&${t}-${o}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}},$t=e=>{const{lineWidth:t,controlHeight:o,fontHeight:n,padding:l,wireframe:i,zIndexPopupBase:u,borderRadiusLG:a,marginXS:c,lineType:p,colorSplit:s,paddingSM:f}=e,m=o-n,b=m/2,S=m/2-t,E=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:u+30},dt(e)),ut({contentRadius:a,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:c,titlePadding:i?`${b}px ${E}px ${S}px`:0,titleBorderBottom:i?`${t}px ${p} ${s}`:"none",innerContentPadding:i?`${f}px ${E}px`:0})},De=Ie("Popover",e=>{const{colorBgElevated:t,colorText:o}=e,n=lt(e,{popoverBg:t,popoverColor:o});return[Ot(n),wt(n),it(n,"zoom-big")]},$t,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var Rt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const Be=e=>{let{title:t,content:o,prefixCls:n}=e;return!t&&!o?null:r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${n}-title`},t),o&&r.createElement("div",{className:`${n}-inner-content`},o))},jt=e=>{const{hashId:t,prefixCls:o,className:n,style:l,placement:i="top",title:u,content:a,children:c}=e,p=Q(u),s=Q(a),f=F(t,o,`${o}-pure`,`${o}-placement-${i}`,n);return r.createElement("div",{className:f,style:l},r.createElement("div",{className:`${o}-arrow`}),r.createElement(pt,Object.assign({},e,{className:t,prefixCls:o}),c||r.createElement(Be,{prefixCls:o,title:p,content:s})))},Pt=e=>{const{prefixCls:t,className:o}=e,n=Rt(e,["prefixCls","className"]),{getPrefixCls:l}=r.useContext(ee),i=l("popover",t),[u,a,c]=De(i);return u(r.createElement(jt,Object.assign({},n,{prefixCls:i,hashId:a,className:F(o,c)})))};var Tt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const It=r.forwardRef((e,t)=>{var o,n;const{prefixCls:l,title:i,content:u,overlayClassName:a,placement:c="top",trigger:p="hover",children:s,mouseEnterDelay:f=.1,mouseLeaveDelay:m=.1,onOpenChange:b,overlayStyle:S={}}=e,E=Tt(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:O}=r.useContext(ee),h=O("popover",l),[P,k,w]=De(h),$=O(),T=F(a,k,w),[x,M]=ge(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(n=e.defaultOpen)!==null&&n!==void 0?n:e.defaultVisible}),H=(g,v)=>{M(g,!0),b==null||b(g,v)},W=g=>{g.keyCode===ye.ESC&&H(!1,g)},N=g=>{H(g)},U=Q(i),_=Q(u);return P(r.createElement(te,Object.assign({placement:c,trigger:p,mouseEnterDelay:f,mouseLeaveDelay:m,overlayStyle:S},E,{prefixCls:h,overlayClassName:T,ref:t,open:x,onOpenChange:N,overlay:U||_?r.createElement(Be,{prefixCls:h,title:U,content:_}):null,transitionName:ft($,"zoom-big",E.transitionName),"data-popover-inject":!0}),_e(s,{onKeyDown:g=>{var v,C;r.isValidElement(s)&&((C=s==null?void 0:(v=s.props).onKeyDown)===null||C===void 0||C.call(v,g)),W(g)}})))}),_t=It;_t._InternalPanelDoNotUseOrYouWillBeFired=Pt;function Nt(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&e==null?[]:Array.isArray(e)?e:[e]}var kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},Mt=function(t,o){return r.createElement(be,ve({},t,{ref:o,icon:kt}))},Lt=r.forwardRef(Mt),Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Bt=function(t,o){return r.createElement(be,ve({},t,{ref:o,icon:Dt}))},zt=r.forwardRef(Bt),At={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ht=function(t,o){return r.createElement(be,ve({},t,{ref:o,icon:At}))},Wt=r.forwardRef(Ht);const Ut=(e,t,o,n)=>{const{titleMarginBottom:l,fontWeightStrong:i}=n;return{marginBottom:l,color:o,fontWeight:i,fontSize:e,lineHeight:t}},Vt=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=Ut(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},Ft=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},Ne(e)),{[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Kt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:mt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),qt=e=>{const{componentCls:t,paddingSM:o}=e,n=o;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${gt(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Xt=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),Gt=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),Jt=e=>{const{componentCls:t,titleMarginTop:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Vt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:o}}}),Kt(e)),Ft(e)),{[`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},Ne(e)),{marginInlineStart:e.marginXXS})}),qt(e)),Xt(e)),Gt()),{"&-rtl":{direction:"rtl"}})}},Yt=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),ze=Ie("Typography",e=>[Jt(e)],Yt),Zt=e=>{const{prefixCls:t,"aria-label":o,className:n,style:l,direction:i,maxLength:u,autoSize:a=!0,value:c,onSave:p,onCancel:s,onEnd:f,component:m,enterIcon:b=r.createElement(Wt,null)}=e,S=r.useRef(null),E=r.useRef(!1),O=r.useRef(),[h,P]=r.useState(c);r.useEffect(()=>{P(c)},[c]),r.useEffect(()=>{var g;if(!((g=S.current)===null||g===void 0)&&g.resizableTextArea){const{textArea:v}=S.current.resizableTextArea;v.focus();const{length:C}=v.value;v.setSelectionRange(C,C)}},[]);const k=g=>{let{target:v}=g;P(v.value.replace(/[\n\r]/g,""))},w=()=>{E.current=!0},$=()=>{E.current=!1},T=g=>{let{keyCode:v}=g;E.current||(O.current=v)},x=()=>{p(h.trim())},M=g=>{let{keyCode:v,ctrlKey:C,altKey:z,metaKey:j,shiftKey:L}=g;O.current!==v||E.current||C||z||j||L||(v===ye.ENTER?(x(),f==null||f()):v===ye.ESC&&s())},H=()=>{x()},[W,N,U]=ze(t),_=F(t,`${t}-edit-content`,{[`${t}-rtl`]:i==="rtl",[`${t}-${m}`]:!!m},n,N,U);return W(r.createElement("div",{className:_,style:l},r.createElement(xt,{ref:S,maxLength:u,value:h,onChange:k,onKeyDown:T,onKeyUp:M,onCompositionStart:w,onCompositionEnd:$,onBlur:H,"aria-label":o,rows:1,autoSize:a}),b!==null?_e(b,{className:`${t}-edit-content-confirm`}):null))};var Qt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(l){e.addRange(l)}),t&&t.focus()}},en=Qt,Re={"text/plain":"Text","text/html":"Url",default:"Text"},tn="Copy to clipboard: #{key}, Enter";function nn(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function on(e,t){var o,n,l,i,u,a,c=!1;t||(t={}),o=t.debug||!1;try{l=en(),i=document.createRange(),u=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=Re[t.format]||Re.default;window.clipboardData.setData(f,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),u.addRange(i);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");c=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(f){o&&console.error("unable to copy using clipboardData: ",f),o&&console.error("falling back to prompt"),n=nn("message"in t?t.message:tn),window.prompt(n,e)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(i):u.removeAllRanges()),a&&document.body.removeChild(a),l()}return c}var rn=on;const ln=yt(rn);var sn=function(e,t,o,n){function l(i){return i instanceof o?i:new o(function(u){u(i)})}return new(o||(o=Promise))(function(i,u){function a(s){try{p(n.next(s))}catch(f){u(f)}}function c(s){try{p(n.throw(s))}catch(f){u(f)}}function p(s){s.done?i(s.value):l(s.value).then(a,c)}p((n=n.apply(e,t||[])).next())})};const an=e=>{let{copyConfig:t,children:o}=e;const[n,l]=r.useState(!1),[i,u]=r.useState(!1),a=r.useRef(null),c=()=>{a.current&&clearTimeout(a.current)},p={};t.format&&(p.format=t.format),r.useEffect(()=>c,[]);const s=bt(f=>sn(void 0,void 0,void 0,function*(){var m;f==null||f.preventDefault(),f==null||f.stopPropagation(),u(!0);try{const b=typeof t.text=="function"?yield t.text():t.text;ln(b||Nt(o,!0).join("")||"",p),u(!1),l(!0),c(),a.current=setTimeout(()=>{l(!1)},3e3),(m=t.onCopy)===null||m===void 0||m.call(t,f)}catch(b){throw u(!1),b}}));return{copied:n,copyLoading:i,onClick:s}};function ce(e,t){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const cn=e=>{const t=r.useRef();return r.useEffect(()=>{t.current=e}),t.current},dn=(e,t,o)=>r.useMemo(()=>e===!0?{title:t??o}:r.isValidElement(e)?{title:e}:typeof e=="object"?Object.assign({title:t??o},e):{title:e},[e,t,o]);var un=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const Ae=r.forwardRef((e,t)=>{const{prefixCls:o,component:n="article",className:l,rootClassName:i,setContentRef:u,children:a,direction:c,style:p}=e,s=un(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:m,typography:b}=r.useContext(ee),S=c??m,E=u?ke(t,u):t,O=f("typography",o),[h,P,k]=ze(O),w=F(O,b==null?void 0:b.className,{[`${O}-rtl`]:S==="rtl"},l,i,P,k),$=Object.assign(Object.assign({},b==null?void 0:b.style),p);return h(r.createElement(n,Object.assign({className:w,style:$,ref:E},s),a))});function je(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function de(e,t,o){return e===!0||e===void 0?t:e||o&&t}function pn(e){const t=document.createElement("em");e.appendChild(t);const o=e.getBoundingClientRect(),n=t.getBoundingClientRect();return e.removeChild(t),o.left>n.left||n.right>o.right||o.top>n.top||n.bottom>o.bottom}const he=e=>["string","number"].includes(typeof e),fn=e=>{let{prefixCls:t,copied:o,locale:n,iconOnly:l,tooltips:i,icon:u,tabIndex:a,onCopy:c,loading:p}=e;const s=je(i),f=je(u),{copied:m,copy:b}=n??{},S=o?m:b,E=de(s[o?1:0],S),O=typeof E=="string"?E:S;return r.createElement(te,{title:E},r.createElement("button",{type:"button",className:F(`${t}-copy`,{[`${t}-copy-success`]:o,[`${t}-copy-icon-only`]:l}),onClick:c,"aria-label":O,tabIndex:a},o?de(f[1],r.createElement(Et,null),!0):de(f[0],p?r.createElement(Ct,null):r.createElement(Lt,null),!0)))},Y=r.forwardRef((e,t)=>{let{style:o,children:n}=e;const l=r.useRef(null);return r.useImperativeHandle(t,()=>({isExceed:()=>{const i=l.current;return i.scrollHeight>i.clientHeight},getHeight:()=>l.current.clientHeight})),r.createElement("span",{"aria-hidden":!0,ref:l,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},o)},n)}),mn=e=>e.reduce((t,o)=>t+(he(o)?String(o).length:1),0);function Pe(e,t){let o=0;const n=[];for(let l=0;l<e.length;l+=1){if(o===t)return n;const i=e[l],a=he(i)?String(i).length:1,c=o+a;if(c>t){const p=t-o;return n.push(String(i).slice(0,p)),n}n.push(i),o=c}return e}const ue=0,pe=1,fe=2,me=3,Te=4,Z={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function gn(e){const{enableMeasure:t,width:o,text:n,children:l,rows:i,expanded:u,miscDeps:a,onEllipsis:c}=e,p=r.useMemo(()=>Me(n),[n]),s=r.useMemo(()=>mn(p),[n]),f=r.useMemo(()=>l(p,!1),[n]),[m,b]=r.useState(null),S=r.useRef(null),E=r.useRef(null),O=r.useRef(null),h=r.useRef(null),P=r.useRef(null),[k,w]=r.useState(!1),[$,T]=r.useState(ue),[x,M]=r.useState(0),[H,W]=r.useState(null);K(()=>{T(t&&o&&s?pe:ue)},[o,n,i,t,p]),K(()=>{var g,v,C,z;if($===pe){T(fe);const j=E.current&&getComputedStyle(E.current).whiteSpace;W(j)}else if($===fe){const j=!!(!((g=O.current)===null||g===void 0)&&g.isExceed());T(j?me:Te),b(j?[0,s]:null),w(j);const L=((v=O.current)===null||v===void 0?void 0:v.getHeight())||0,re=i===1?0:((C=h.current)===null||C===void 0?void 0:C.getHeight())||0,X=((z=P.current)===null||z===void 0?void 0:z.getHeight())||0,le=Math.max(L,re+X);M(le+1),c(j)}},[$]);const N=m?Math.ceil((m[0]+m[1])/2):0;K(()=>{var g;const[v,C]=m||[0,0];if(v!==C){const j=(((g=S.current)===null||g===void 0?void 0:g.getHeight())||0)>x;let L=N;C-v===1&&(L=j?v:C),b(j?[v,L]:[L,C])}},[m,N]);const U=r.useMemo(()=>{if(!t)return l(p,!1);if($!==me||!m||m[0]!==m[1]){const g=l(p,!1);return[Te,ue].includes($)?g:r.createElement("span",{style:Object.assign(Object.assign({},Z),{WebkitLineClamp:i})},g)}return l(u?p:Pe(p,m[0]),k)},[u,$,m,p].concat(vt(a))),_={width:o,margin:0,padding:0,whiteSpace:H==="nowrap"?"normal":"inherit"};return r.createElement(r.Fragment,null,U,$===fe&&r.createElement(r.Fragment,null,r.createElement(Y,{style:Object.assign(Object.assign(Object.assign({},_),Z),{WebkitLineClamp:i}),ref:O},f),r.createElement(Y,{style:Object.assign(Object.assign(Object.assign({},_),Z),{WebkitLineClamp:i-1}),ref:h},f),r.createElement(Y,{style:Object.assign(Object.assign(Object.assign({},_),Z),{WebkitLineClamp:1}),ref:P},l([],!0))),$===me&&m&&m[0]!==m[1]&&r.createElement(Y,{style:Object.assign(Object.assign({},_),{top:400}),ref:S},l(Pe(p,N),!0)),$===pe&&r.createElement("span",{style:{whiteSpace:"inherit"},ref:E}))}const yn=e=>{let{enableEllipsis:t,isEllipsis:o,children:n,tooltipProps:l}=e;return!(l!=null&&l.title)||!t?n:r.createElement(te,Object.assign({open:o?void 0:!1},l),n)};var bn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};function vn(e,t){let{mark:o,code:n,underline:l,delete:i,strong:u,keyboard:a,italic:c}=e,p=t;function s(f,m){m&&(p=r.createElement(f,{},p))}return s("strong",u),s("u",l),s("del",i),s("code",n),s("mark",o),s("kbd",a),s("i",c),p}const hn="...",ne=r.forwardRef((e,t)=>{var o;const{prefixCls:n,className:l,style:i,type:u,disabled:a,children:c,ellipsis:p,editable:s,copyable:f,component:m,title:b}=e,S=bn(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:E,direction:O}=r.useContext(ee),[h]=St("Text"),P=r.useRef(null),k=r.useRef(null),w=E("typography",n),$=Le(S,["mark","code","delete","underline","strong","keyboard","italic"]),[T,x]=ce(s),[M,H]=ge(!1,{value:x.editing}),{triggerType:W=["icon"]}=x,N=d=>{var y;d&&((y=x.onStart)===null||y===void 0||y.call(x)),H(d)},U=cn(M);K(()=>{var d;!M&&U&&((d=k.current)===null||d===void 0||d.focus())},[M]);const _=d=>{d==null||d.preventDefault(),N(!0)},g=d=>{var y;(y=x.onChange)===null||y===void 0||y.call(x,d),N(!1)},v=()=>{var d;(d=x.onCancel)===null||d===void 0||d.call(x),N(!1)},[C,z]=ce(f),{copied:j,copyLoading:L,onClick:re}=an({copyConfig:z,children:c}),[X,le]=r.useState(!1),[Ee,He]=r.useState(!1),[xe,We]=r.useState(!1),[Ce,Ue]=r.useState(!1),[Ve,Fe]=r.useState(!0),[V,R]=ce(p,{expandable:!1,symbol:d=>d?h==null?void 0:h.collapse:h==null?void 0:h.expand}),[A,Ke]=ge(R.defaultExpanded||!1,{value:R.expanded}),I=V&&(!A||R.expandable==="collapsible"),{rows:q=1}=R,G=r.useMemo(()=>I&&(R.suffix!==void 0||R.onEllipsis||R.expandable||T||C),[I,R,T,C]);K(()=>{V&&!G&&(le($e("webkitLineClamp")),He($e("textOverflow")))},[G,V]);const[D,qe]=r.useState(I),Se=r.useMemo(()=>G?!1:q===1?Ee:X,[G,Ee,X]);K(()=>{qe(Se&&I)},[Se,I]);const Oe=I&&(D?Ce:xe),Xe=I&&q===1&&D,ie=I&&q>1&&D,Ge=(d,y)=>{var B;Ke(y.expanded),(B=R.onExpand)===null||B===void 0||B.call(R,d,y)},[we,Je]=r.useState(0),Ye=d=>{let{offsetWidth:y}=d;Je(y)},Ze=d=>{var y;We(d),xe!==d&&((y=R.onEllipsis)===null||y===void 0||y.call(R,d))};r.useEffect(()=>{const d=P.current;if(V&&D&&d){const y=pn(d);Ce!==y&&Ue(y)}},[V,D,c,ie,Ve,we]),r.useEffect(()=>{const d=P.current;if(typeof IntersectionObserver>"u"||!d||!D||!I)return;const y=new IntersectionObserver(()=>{Fe(!!d.offsetParent)});return y.observe(d),()=>{y.disconnect()}},[D,I]);const se=dn(R.tooltip,x.text,c),J=r.useMemo(()=>{if(!(!V||D))return[x.text,c,b,se.title].find(he)},[V,D,b,se.title,Oe]);if(M)return r.createElement(Zt,{value:(o=x.text)!==null&&o!==void 0?o:typeof c=="string"?c:"",onSave:g,onCancel:v,onEnd:x.onEnd,prefixCls:w,className:l,style:i,direction:O,component:m,maxLength:x.maxLength,autoSize:x.autoSize,enterIcon:x.enterIcon});const Qe=()=>{const{expandable:d,symbol:y}=R;return d?r.createElement("button",{type:"button",key:"expand",className:`${w}-${A?"collapse":"expand"}`,onClick:B=>Ge(B,{expanded:!A}),"aria-label":A?h.collapse:h==null?void 0:h.expand},typeof y=="function"?y(A):y):null},et=()=>{if(!T)return;const{icon:d,tooltip:y,tabIndex:B}=x,ae=Me(y)[0]||(h==null?void 0:h.edit),rt=typeof ae=="string"?ae:"";return W.includes("icon")?r.createElement(te,{key:"edit",title:y===!1?"":ae},r.createElement("button",{type:"button",ref:k,className:`${w}-edit`,onClick:_,"aria-label":rt,tabIndex:B},d||r.createElement(zt,{role:"button"}))):null},tt=()=>C?r.createElement(fn,Object.assign({key:"copy"},z,{prefixCls:w,copied:j,locale:h,onCopy:re,loading:L,iconOnly:c==null})):null,nt=d=>[d&&Qe(),et(),tt()],ot=d=>[d&&!A&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},hn),R.suffix,nt(d)];return r.createElement(ht,{onResize:Ye,disabled:!I},d=>r.createElement(yn,{tooltipProps:se,enableEllipsis:I,isEllipsis:Oe},r.createElement(Ae,Object.assign({className:F({[`${w}-${u}`]:u,[`${w}-disabled`]:a,[`${w}-ellipsis`]:V,[`${w}-ellipsis-single-line`]:Xe,[`${w}-ellipsis-multiple-line`]:ie},l),prefixCls:n,style:Object.assign(Object.assign({},i),{WebkitLineClamp:ie?q:void 0}),component:m,ref:ke(d,P,t),direction:O,onClick:W.includes("text")?_:void 0,"aria-label":J==null?void 0:J.toString(),title:b},$),r.createElement(gn,{enableMeasure:I&&!D,text:c,rows:q,width:we,onEllipsis:Ze,expanded:A,miscDeps:[j,A,L,T,C]},(y,B)=>vn(e,r.createElement(r.Fragment,null,y.length>0&&B&&!A&&J?r.createElement("span",{key:"show-content","aria-hidden":!0},y):y,ot(B)))))))});var En=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const xn=r.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,l=En(e,["ellipsis","rel"]);const i=Object.assign(Object.assign({},l),{rel:n===void 0&&l.target==="_blank"?"noopener noreferrer":n});return delete i.navigate,r.createElement(ne,Object.assign({},i,{ref:t,ellipsis:!!o,component:"a"}))}),Cn=r.forwardRef((e,t)=>r.createElement(ne,Object.assign({ref:t},e,{component:"div"})));var Sn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const On=(e,t)=>{var{ellipsis:o}=e,n=Sn(e,["ellipsis"]);const l=r.useMemo(()=>o&&typeof o=="object"?Le(o,["expandable","rows"]):o,[o]);return r.createElement(ne,Object.assign({ref:t},n,{ellipsis:l,component:"span"}))},wn=r.forwardRef(On);var $n=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const Rn=[1,2,3,4,5],jn=r.forwardRef((e,t)=>{const{level:o=1}=e,n=$n(e,["level"]),l=Rn.includes(o)?`h${o}`:"h1";return r.createElement(ne,Object.assign({ref:t},n,{component:l}))}),oe=Ae;oe.Text=wn;oe.Link=xn;oe.Title=jn;oe.Paragraph=Cn;export{Pt as P,oe as T,_t as a,Q as g};
