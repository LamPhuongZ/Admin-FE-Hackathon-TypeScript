import{r,I as v,h,bb as F}from"./index-6gDDjvMj.js";import{B as I,G as z}from"./Table-H6LVRHGa.js";var B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},S=function(c,a){return r.createElement(v,h({},c,{ref:a,icon:B}))},L=r.forwardRef(S),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},y=function(c,a){return r.createElement(v,h({},c,{ref:a,icon:w}))},T=r.forwardRef(y);function d(n){return!!(n!=null&&n.then)}const $=n=>{const{type:c,children:a,prefixCls:C,buttonProps:p,close:o,autoFocus:g,emitEvent:x,isSilent:u,quitOnNullishReturnValue:R,actionFn:i}=n,l=r.useRef(!1),m=r.useRef(null),[E,f]=F(!1),s=function(){o==null||o.apply(void 0,arguments)};r.useEffect(()=>{let t=null;return g&&(t=setTimeout(()=>{var e;(e=m.current)===null||e===void 0||e.focus()})),()=>{t&&clearTimeout(t)}},[]);const b=t=>{d(t)&&(f(!0),t.then(function(){f(!1,!0),s.apply(void 0,arguments),l.current=!1},e=>{if(f(!1,!0),l.current=!1,!(u!=null&&u()))return Promise.reject(e)}))},k=t=>{if(l.current)return;if(l.current=!0,!i){s();return}let e;if(x){if(e=i(t),R&&!d(e)){l.current=!1,s(t);return}}else if(i.length)e=i(o),l.current=!1;else if(e=i(),!d(e)){s();return}b(e)};return r.createElement(I,Object.assign({},z(c),{onClick:k,loading:E,prefixCls:C},p,{ref:m}),a)};export{$ as A,L as R,T as a};