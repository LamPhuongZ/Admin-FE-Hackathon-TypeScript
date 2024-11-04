import{u as M,d as z,r as n,j as t,v as B}from"./index-Kvu0bFJg.js";import{c as V,B as F,b as H}from"./index-CX8Rg18h.js";import{E as G}from"./index.esm-DmaffVTl.js";import{D as J,h as l}from"./moment-CqvMk7xu.js";import{R as O,g as W,a as Z}from"./useAddress-BzDcVe8d.js";import{G as K}from"./iconBase-B4PMkM9p.js";import{S as c,a as Q,B as U,I as _}from"./index-CBdURe_x.js";import{F as $}from"./Table-DvFsFOEP.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./ExclamationCircleFilled-53hoV8aY.js";import"./ActionButton-CSAFwOuQ.js";function q(s){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"},child:[]}]})(s)}const{Search:X}=_,{RangePicker:ee}=J,te=V(({css:s})=>({customTable:s`
    .ant-table-container {
      .ant-table-body,
      .ant-table-content {
        scrollbar-width: thin;
        scrollbar-color: #eaeaea transparent;
        scrollbar-gutter: stable;
      }
    }
  `})),ue=()=>{var m;const{allListJob:s}=M(e=>e.jobRedcucer),p=z(),{styles:g}=te(),[r,f]=n.useState(""),[i,I]=n.useState(""),[o,D]=n.useState(""),[d,y]=n.useState("ALL"),j=e=>{f(e.target.value)},b=e=>{y(e)},v=(e,a)=>{I(a[0]),D(a[1]),console.log(a)},h=async(e,a,w,k,E,L,N,T,P,A,Y)=>{const R=B({page:e,size:a,sortBy:w,direction:k,title:E,districtId:L,provinceId:N,startDate:T,endDate:P,jobTypeId:A,approval:Y});await p(R)};n.useEffect(()=>{h(0,100,"id","desc",r,void 0,void 0,i,o,void 0,d)},[r]),n.useEffect(()=>{const e=setTimeout(()=>{h(0,100,"id","desc",r,void 0,void 0,i,o,void 0,d)},300);return()=>clearTimeout(e)},[r,i,o,d]);const x=(m=s==null?void 0:s.content)==null?void 0:m.map((e,a)=>({...e,stt:a+1})),u=[{title:"Stt",dataIndex:"stt",key:"stt",width:40,fixed:"left"},{title:"JobId",dataIndex:"jobId",key:"jobId",width:60,fixed:"left"},{title:"Tiêu đề",dataIndex:"title",key:"title",width:200},{title:"Mô tả",dataIndex:"description",key:"description",width:250},{title:"Thời gian",dataIndex:"duration",key:"duration",width:100,render:e=>t.jsxs("div",{children:[e," ",t.jsx("span",{children:" - tiếng"})]})},{title:"Số điện thoại",dataIndex:"phone",key:"phone",width:120},{title:"Địa chỉ",dataIndex:"address",key:"address",width:250},{title:"Quận huyện",dataIndex:"districtId",key:"districtId",width:140,render:e=>{const a=W(e);return(a==null?void 0:a.name)||"chưa xác định"}},{title:"Tỉnh thành",dataIndex:"provinceId",key:"provinceId",width:180,render:e=>{const a=Z(e);return(a==null?void 0:a.name)||"chưa xác định"}},{title:"Người liên hệ",dataIndex:"contactPerson",key:"contactPerson",width:150},{title:"Ngày bắt đầu",dataIndex:"startDate",key:"startDate",width:120,render:e=>l(e).format("DD-MM-YYYY HH:mm:ss")},{title:"Ngày kết thúc",dataIndex:"endDate",key:"endDate",width:120,render:e=>l(e).format("DD-MM-YYYY HH:mm:ss")},{title:"Ngày đăng",dataIndex:"postedDate",key:"postedDate",width:120,render:e=>l(e).format("DD-MM-YYYY HH:mm:ss")},{title:"Trạng thái xác thực",dataIndex:"jobApprovalStatus",key:"jobApprovalStatus",width:100,fixed:"right",render:e=>t.jsx("div",{className:"flex justify-center",children:(()=>{switch(e){case"PENDING":return t.jsx(H,{className:"text-[#faad15] text-[24px]"});case"APPROVED":return t.jsx(F,{className:"text-[#57c81f] text-[24px]"});case"REJECTED":return t.jsx(q,{className:"text-red-500 text-[24px]"});default:return null}})()})}],C=e=>!!e.dataIndex,S=u.filter(C).map(e=>({title:e.title,dataIndex:e.dataIndex}));return t.jsxs(t.Fragment,{children:[t.jsxs(c,{className:"flex justify-between items-center mx-2 p-2",children:[t.jsxs(c,{children:[t.jsx(X,{placeholder:"Tìm theo tiêu đề",allowClear:!0,enterButton:!0,size:"large",value:r,onChange:j}),t.jsx(c,{direction:"vertical",size:12,children:t.jsx(ee,{size:"large",onChange:v})}),t.jsx(Q,{defaultValue:"ALL",style:{width:120},size:"large",onChange:b,options:[{value:"ALL",label:"Tất cả"},{value:"PENDING",label:"Đang chờ"},{value:"APPROVED",label:"Chấp nhận"},{value:"REJECTED",label:"Từ chối"}]}),t.jsx(U,{size:"large",onClick:()=>{new G().addSheet("DanhSachCongViec").addColumns(S).addDataSource(x||[]).saveAs("DanhSachCongViec.xlsx")},children:"Export File Excel"})]}),t.jsxs("div",{className:"flex items-center text-2xl font-medium",children:[t.jsx("img",{className:"me-2",src:"https://emoji.slack-edge.com/T0172CCPGUW/party-blob/d7253707fa13e9ee.gif",width:"30"}),t.jsx("h1",{className:"text-2xl me-1",children:s==null?void 0:s.totalElements}),t.jsx(O,{})]})]}),t.jsx($,{size:"small",className:`${g.customTable} p-2`,columns:u,dataSource:x,rowKey:"jobId",bordered:!0,scroll:{x:"max-content",y:370},pagination:{pageSize:10}})]})};export{ue as default};