import{u as A,d as v,r as p,j as t,as as D,at as J,au as L}from"./index-Kvu0bFJg.js";import{b as N}from"./index-TLkSNTa-.js";import{E as P}from"./index.esm-DmaffVTl.js";import{F as b,T as I}from"./index-DOmViuc0.js";import{S as V,B as o,I as K}from"./index-CBdURe_x.js";import{F as B}from"./Table-DvFsFOEP.js";import{T,P as z}from"./index-Db5dijEX.js";import"./iconBase-B4PMkM9p.js";import"./ExclamationCircleFilled-53hoV8aY.js";import"./ActionButton-CSAFwOuQ.js";const G=({editing:s,dataIndex:i,title:d,inputType:u,record:j,index:c,children:r,...l})=>{const x=i==="stt"||i==="id"?t.jsx(T,{disabled:!0}):u==="number"?t.jsx(T,{}):t.jsx(K.TextArea,{rows:4,style:{height:"auto"}});return t.jsx("td",{...l,children:s?t.jsx(b.Item,{name:i,style:{margin:0},rules:[{required:!0,message:`Vui lòng nhập ${d}!`}],children:x}):r})},W=()=>{const{allJobType:s}=A(e=>e.jobTypeReducer),i=v(),d=async()=>{const e=D();await i(e)};p.useEffect(()=>{d()},[]),p.useEffect(()=>{if(s&&s.length>0){const e=s.slice().reverse().map((n,a)=>({...n,stt:a+1}));l(e)}},[s]);const u=async e=>{await i(J(e)),await d()},j=async e=>{await i(L(e)),await d()},[c]=b.useForm(),[r,l]=p.useState([]),[x,m]=p.useState(""),f=e=>e.id===x,C=e=>{c.setFieldsValue({stt:"",name:"",description:"",...e}),m(e.id)},g=()=>{m("")},k=async e=>{try{const n=await c.validateFields();console.log("🚀 ~ file: TypeJob.tsx:144 ~ save ~ row:",n),j(n);const a=[...r],h=a.findIndex(y=>e===y.id);if(h>-1){const y=a[h];a.splice(h,1,{...y,...n}),l(a),m("")}else a.push(n),l(a),m("")}catch(n){console.log("Validate Failed:",n)}},w=[{title:"Stt",dataIndex:"stt",key:"stt",width:40,editable:!0},{title:"Id",dataIndex:"id",key:"id",width:40,editable:!0},{title:"Tên loại công việc",dataIndex:"name",key:"name",width:250,editable:!0},{title:"Mô tả",dataIndex:"description",key:"description",width:500,editable:!0},{title:"Giá thấp nhất",dataIndex:"minPrice",key:"minPrice",width:110,editable:!0,render:e=>t.jsxs("div",{children:[e," ",t.jsx("span",{children:".000đ"})]})},{title:"Giá cao nhất",dataIndex:"maxPrice",key:"maxPrice",width:100,editable:!0,render:e=>t.jsxs("div",{children:[e," ",t.jsx("span",{children:".000đ"})]})},{title:"Chỉnh sửa",width:140,dataIndex:"operation",render:(e,n)=>f(n)?t.jsxs("span",{children:[t.jsx(I.Link,{onClick:()=>k(n.id),style:{marginInlineEnd:8},children:t.jsx(o,{className:"bg-[#57c81f] text-white custom-button",children:"Lưu"})}),t.jsx(z,{title:"Bạn có muốn hủy?",onConfirm:g,children:t.jsx(o,{type:"primary",danger:!0,children:"Hủy"})})]}):t.jsx(I.Link,{className:"flex justify-center",disabled:x!=="",onClick:()=>C(n),children:t.jsxs(o,{type:"primary",children:[t.jsx(N,{className:"inline-block me-[6px] text-xl"})," Sửa"]})})},{title:"Xóa Kỹ năng",dataIndex:"delete",key:"delete",width:100,render:(e,n)=>t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(o,{type:"primary",danger:!0,onClick:()=>u(n.id),children:"X"})})}],E=w.map(e=>e.editable?{...e,onCell:n=>({record:n,inputType:e.dataIndex==="stt"||e.dataIndex==="id"?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:f(n)})}:e),S=e=>!!e.dataIndex,F=w.filter(S).map(e=>({title:e.title,dataIndex:e.dataIndex}));return t.jsxs(t.Fragment,{children:[t.jsx(V,{className:"pb-4",children:t.jsx(o,{size:"large",onClick:()=>{new P().addSheet("DanhSachLoaiCongViec").addColumns(F).addDataSource(r||[]).saveAs("DanhSachLoaiCongViec.xlsx")},children:"Export File Excel"})}),t.jsx(b,{form:c,component:!1,children:t.jsx(B,{components:{body:{cell:G}},bordered:!0,size:"small",dataSource:r,columns:E,rowKey:"id",scroll:{x:"max-content",y:370},pagination:{onChange:g}})})]})};export{W as default};
