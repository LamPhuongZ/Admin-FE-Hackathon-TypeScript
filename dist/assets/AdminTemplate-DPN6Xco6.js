import{r as o,g as ae,m as le,a as ie,u as Z,c as ye,C as W,b as xe,d as Se,e as Ce,f as ce,h as k,R as Oe,t as ee,i as de,P as je,p as ue,D as Ee,j as $e,k as Pe,I as ze,_ as Ne,l as Ie,n as l,L as te,o as Re,q as we,M as Be,S as Te,B as _e,U as Me,T as ke,s as Ae,v as He,w as Le,V as Xe,x as Fe}from"./index-C-MN9BHm.js";const re=o.createContext({}),Ve=e=>{const{antCls:r,componentCls:n,iconCls:t,avatarBg:s,avatarColor:i,containerSize:c,containerSizeLG:d,containerSizeSM:h,textFontSize:m,textFontSizeLG:j,textFontSizeSM:N,borderRadius:y,borderRadiusLG:g,borderRadiusSM:x,lineWidth:$,lineType:E}=e,a=(S,p,C)=>({width:S,height:S,borderRadius:"50%",[`&${n}-square`]:{borderRadius:C},[`&${n}-icon`]:{fontSize:p,[`> ${t}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},ie(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:i,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:s,border:`${Z($)} ${E} transparent`,"&-image":{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),a(c,m,y)),{"&-lg":Object.assign({},a(d,j,g)),"&-sm":Object.assign({},a(h,N,x)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Ge=e=>{const{componentCls:r,groupBorderColor:n,groupOverlapping:t,groupSpace:s}=e;return{[`${r}-group`]:{display:"inline-flex",[r]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:t}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:s}}}},De=e=>{const{controlHeight:r,controlHeightLG:n,controlHeightSM:t,fontSize:s,fontSizeLG:i,fontSizeXL:c,fontSizeHeading3:d,marginXS:h,marginXXS:m,colorBorderBg:j}=e;return{containerSize:r,containerSizeLG:n,containerSizeSM:t,textFontSize:Math.round((i+c)/2),textFontSizeLG:d,textFontSizeSM:s,groupSpace:m,groupOverlapping:-h,groupBorderColor:j}},me=ae("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:n}=e,t=le(e,{avatarBg:n,avatarColor:r});return[Ve(t),Ge(t)]},De);var We=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const Ue=(e,r)=>{const[n,t]=o.useState(1),[s,i]=o.useState(!1),[c,d]=o.useState(!0),h=o.useRef(null),m=o.useRef(null),j=ye(r,h),{getPrefixCls:N,avatar:y}=o.useContext(W),g=o.useContext(re),x=()=>{if(!m.current||!h.current)return;const b=m.current.offsetWidth,v=h.current.offsetWidth;if(b!==0&&v!==0){const{gap:_=4}=e;_*2<v&&t(v-_*2<b?(v-_*2)/b:1)}};o.useEffect(()=>{i(!0)},[]),o.useEffect(()=>{d(!0),t(1)},[e.src]),o.useEffect(x,[e.gap]);const $=()=>{const{onError:b}=e;(b==null?void 0:b())!==!1&&d(!1)},{prefixCls:E,shape:a,size:S,src:p,srcSet:C,icon:P,className:T,rootClassName:X,alt:I,draggable:z,children:f,crossOrigin:w}=e,R=We(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),u=xe(b=>{var v,_;return(_=(v=S??(g==null?void 0:g.size))!==null&&v!==void 0?v:b)!==null&&_!==void 0?_:"default"}),F=Object.keys(typeof u=="object"?u||{}:{}).some(b=>["xs","sm","md","lg","xl","xxl"].includes(b)),M=Se(F),A=o.useMemo(()=>{if(typeof u!="object")return{};const b=Ce.find(_=>M[_]),v=u[b];return v?{width:v,height:v,fontSize:v&&(P||f)?v/2:18}:{}},[M,u]),O=N("avatar",E),U=ce(O),[K,J,V]=me(O,U),q=k({[`${O}-lg`]:u==="large",[`${O}-sm`]:u==="small"}),H=o.isValidElement(p),Y=a||(g==null?void 0:g.shape)||"circle",G=k(O,q,y==null?void 0:y.className,`${O}-${Y}`,{[`${O}-image`]:H||p&&c,[`${O}-icon`]:!!P},V,U,T,X,J),he=typeof u=="number"?{width:u,height:u,fontSize:P?u/2:18}:{};let L;if(typeof p=="string"&&c)L=o.createElement("img",{src:p,draggable:z,srcSet:C,onError:$,alt:I,crossOrigin:w});else if(H)L=p;else if(P)L=P;else if(s||n!==1){const b=`scale(${n})`,v={msTransform:b,WebkitTransform:b,transform:b};L=o.createElement(Oe,{onResize:x},o.createElement("span",{className:`${O}-string`,ref:m,style:Object.assign({},v)},f))}else L=o.createElement("span",{className:`${O}-string`,style:{opacity:0},ref:m},f);return delete R.onError,delete R.gap,K(o.createElement("span",Object.assign({},R,{style:Object.assign(Object.assign(Object.assign(Object.assign({},he),A),y==null?void 0:y.style),R.style),className:G,ref:j}),L))},ge=o.forwardRef(Ue),se=e=>{const{size:r,shape:n}=o.useContext(re),t=o.useMemo(()=>({size:e.size||r,shape:e.shape||n}),[e.size,e.shape,r,n]);return o.createElement(re.Provider,{value:t},e.children)},qe=e=>{var r,n,t;const{getPrefixCls:s,direction:i}=o.useContext(W),{prefixCls:c,className:d,rootClassName:h,style:m,maxCount:j,maxStyle:N,size:y,shape:g,maxPopoverPlacement:x,maxPopoverTrigger:$,children:E,max:a}=e,S=s("avatar",c),p=`${S}-group`,C=ce(S),[P,T,X]=me(S,C),I=k(p,{[`${p}-rtl`]:i==="rtl"},X,C,d,h,T),z=ee(E).map((R,u)=>de(R,{key:`avatar-key-${u}`})),f=(a==null?void 0:a.count)||j,w=z.length;if(f&&f<w){const R=z.slice(0,f),u=z.slice(f,w),F=(a==null?void 0:a.style)||N,M=((r=a==null?void 0:a.popover)===null||r===void 0?void 0:r.trigger)||$||"hover",A=((n=a==null?void 0:a.popover)===null||n===void 0?void 0:n.placement)||x||"top",O=Object.assign(Object.assign({content:u},a==null?void 0:a.popover),{overlayClassName:k(`${p}-popover`,(t=a==null?void 0:a.popover)===null||t===void 0?void 0:t.overlayClassName),placement:A,trigger:M});return R.push(o.createElement(je,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},O),o.createElement(ge,{style:F},`+${w-f}`))),P(o.createElement(se,{shape:g,size:y},o.createElement("div",{className:I,style:m},R)))}return P(o.createElement(se,{shape:g,size:y},o.createElement("div",{className:I,style:m},z)))},pe=ge;pe.Group=qe;const Q=e=>{let{children:r}=e;const{getPrefixCls:n}=o.useContext(W),t=n("breadcrumb");return o.createElement("li",{className:`${t}-separator`,"aria-hidden":"true"},r===""?r:r||"/")};Q.__ANT_BREADCRUMB_SEPARATOR=!0;var Qe=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function Ke(e,r){if(e.title===void 0||e.title===null)return null;const n=Object.keys(r).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${n})`,"g"),(t,s)=>r[s]||t)}function fe(e,r,n,t){if(n==null)return null;const{className:s,onClick:i}=r,c=Qe(r,["className","onClick"]),d=Object.assign(Object.assign({},ue(c,{data:!0,aria:!0})),{onClick:i});return t!==void 0?o.createElement("a",Object.assign({},d,{className:k(`${e}-link`,s),href:t}),n):o.createElement("span",Object.assign({},d,{className:k(`${e}-link`,s)}),n)}function Je(e,r){return(t,s,i,c,d)=>{if(r)return r(t,s,i,c);const h=Ke(t,s);return fe(e,t,h,d)}}var ne=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const be=e=>{const{prefixCls:r,separator:n="/",children:t,menu:s,overlay:i,dropdownProps:c,href:d}=e,m=(j=>{if(s||i){const N=Object.assign({},c);if(s){const y=s||{},{items:g}=y,x=ne(y,["items"]);N.menu=Object.assign(Object.assign({},x),{items:g==null?void 0:g.map(($,E)=>{var{key:a,title:S,label:p,path:C}=$,P=ne($,["key","title","label","path"]);let T=p??S;return C&&(T=o.createElement("a",{href:`${d}${C}`},T)),Object.assign(Object.assign({},P),{key:a??E,label:T})})})}else i&&(N.overlay=i);return o.createElement(Ee,Object.assign({placement:"bottom"},N),o.createElement("span",{className:`${r}-overlay-link`},j,o.createElement($e,null)))}return j})(t);return m!=null?o.createElement(o.Fragment,null,o.createElement("li",null,m),n&&o.createElement(Q,null,n)):null},ve=e=>{const{prefixCls:r,children:n,href:t}=e,s=ne(e,["prefixCls","children","href"]),{getPrefixCls:i}=o.useContext(W),c=i("breadcrumb",r);return o.createElement(be,Object.assign({},s,{prefixCls:c}),fe(c,s,n,t))};ve.__ANT_BREADCRUMB_ITEM=!0;const Ye=e=>{const{componentCls:r,iconCls:n,calc:t}=e;return{[r]:Object.assign(Object.assign({},ie(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${Z(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},Pe(e)),"li:last-child":{color:e.lastItemColor},[`${r}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${r}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${Z(e.paddingXXS)}`,marginInline:t(e.marginXXS).mul(-1).equal(),[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Ze=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),et=ae("Breadcrumb",e=>{const r=le(e,{});return Ye(r)},Ze);var oe=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function tt(e){const{breadcrumbName:r,children:n}=e,t=oe(e,["breadcrumbName","children"]),s=Object.assign({title:r},t);return n&&(s.menu={items:n.map(i=>{var{breadcrumbName:c}=i,d=oe(i,["breadcrumbName"]);return Object.assign(Object.assign({},d),{title:c})})}),s}function rt(e,r){return o.useMemo(()=>e||(r?r.map(tt):null),[e,r])}var nt=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const st=(e,r)=>{if(r===void 0)return r;let n=(r||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{n=n.replace(`:${t}`,e[t])}),n},D=e=>{const{prefixCls:r,separator:n="/",style:t,className:s,rootClassName:i,routes:c,items:d,children:h,itemRender:m,params:j={}}=e,N=nt(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:y,direction:g,breadcrumb:x}=o.useContext(W);let $;const E=y("breadcrumb",r),[a,S,p]=et(E),C=rt(d,c),P=Je(E,m);if(C&&C.length>0){const I=[],z=d||c;$=C.map((f,w)=>{const{path:R,key:u,type:F,menu:M,overlay:A,onClick:O,className:U,separator:K,dropdownProps:J}=f,V=st(j,R);V!==void 0&&I.push(V);const q=u??w;if(F==="separator")return o.createElement(Q,{key:q},K);const H={},Y=w===C.length-1;M?H.menu=M:A&&(H.overlay=A);let{href:G}=f;return I.length&&V!==void 0&&(G=`#/${I.join("/")}`),o.createElement(be,Object.assign({key:q},H,ue(f,{data:!0,aria:!0}),{className:U,dropdownProps:J,href:G,separator:Y?"":n,onClick:O,prefixCls:E}),P(f,j,z,I,G))})}else if(h){const I=ee(h).length;$=ee(h).map((z,f)=>{if(!z)return z;const w=f===I-1;return de(z,{separator:w?"":n,key:f})})}const T=k(E,x==null?void 0:x.className,{[`${E}-rtl`]:g==="rtl"},s,i,S,p),X=Object.assign(Object.assign({},x==null?void 0:x.style),t);return a(o.createElement("nav",Object.assign({className:T,style:X},N),o.createElement("ol",null,$)))};D.Item=ve;D.Separator=Q;var ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"},at=function(r,n){return o.createElement(ze,Ne({},r,{ref:n,icon:ot}))},lt=o.forwardRef(at);const{Header:it,Content:ct,Footer:dt,Sider:ut}=te;function B(e,r,n,t){return{key:r,icon:n,children:t,label:e}}const mt=[B("Quản lý tài khoản","1",l.jsx(Ae,{})),B("Quản lý việc làm","2",l.jsx(He,{})),B("Quản lý loại việc làm","sub1",l.jsx(Le,{}),[B("Tom","3"),B("Bill","4"),B("Alex","5")]),B("Quản lý skill","sub2",l.jsx(Xe,{}),[B("Team 1","6"),B("Team 2","8")]),B("Thống kê","9",l.jsx(Fe,{}))],pt=()=>{const[e,r]=o.useState(!1),{token:{colorBgContainer:n,borderRadiusLG:t}}=Ie.useToken();return l.jsxs(te,{style:{minHeight:"100vh"},children:[l.jsxs(ut,{width:220,collapsible:!0,collapsed:e,onCollapse:s=>r(s),children:[l.jsxs(Re,{to:"/test",className:"flex justify-center items-center gap-2",children:[l.jsx("img",{src:we,alt:"",className:"w-10 h-10 my-3",loading:"lazy"}),l.jsx("h1",{className:`${e?"hidden":"block"} text-xl h-full text-white font-bold`,children:"EasyJob"})]}),l.jsx(Be,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",items:mt})]}),l.jsxs(te,{children:[l.jsxs(it,{className:"flex items-center justify-end",style:{padding:0,background:n},children:[l.jsx(Te,{size:"middle",children:l.jsx(_e,{className:"me-6",count:100,children:l.jsx(pe,{className:"bg-white hover:bg-slate-200",size:"large",children:l.jsx(lt,{className:"text-2xl text-black"})})})}),l.jsx(Me,{})]}),l.jsxs(ct,{style:{margin:"0 16px"},children:[l.jsxs(D,{style:{margin:"16px 0"},children:[l.jsx(D.Item,{children:"User"}),l.jsx(D.Item,{children:"Bill"})]}),l.jsx("div",{style:{padding:24,minHeight:360,background:n,borderRadius:t},children:l.jsx(ke,{})})]}),l.jsxs(dt,{style:{textAlign:"center"},children:["EasyJob ©01-10-",new Date().getFullYear()," Created by my team !!!"]})]})]})};export{pt as default};
