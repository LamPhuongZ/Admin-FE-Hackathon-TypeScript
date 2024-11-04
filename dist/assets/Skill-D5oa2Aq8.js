import{u as q,d as z,r as c,j as t,ai as R,aj as P,ak as X,al as _}from"./index-CvTr_Cs-.js";import{b as H}from"./index-CQEO34n4.js";import{E as U,F as $}from"./index.esm-DBfEecZd.js";import{F as l}from"./index-BusV-B2L.js";import{S as T}from"./index-BVkvosC7.js";import{B as i,I as b}from"./gapSize-CHh6thkj.js";import{M as G}from"./index-BYnQTAJ8.js";import{F as J}from"./index-20Ofi2ly.js";import{T as A,P as Q}from"./index-DLqgxa4N.js";import{T as D}from"./index-CVE6T0ti.js";import"./iconBase-DR9E3kk8.js";import"./ExclamationCircleFilled-CZqzfJXg.js";import"./context-aT5g-xJ9.js";const W=({editing:r,dataIndex:a,title:o,inputType:p,record:w,index:C,children:d,...x})=>{const u=a==="stt"||a==="id"?t.jsx(A,{disabled:!0}):p==="number"?t.jsx(A,{}):t.jsx(b.TextArea,{rows:4,style:{height:"auto"}});return t.jsx("td",{...x,children:r?t.jsx(l.Item,{name:a,style:{margin:0},rules:[{required:!0,message:`Vui lòng nhập ${o}!`}],children:u}):d})},me=()=>{const{allSkill:r}=q(e=>e.skillReducer),a=z(),o=async()=>{const e=R();await a(e)};c.useEffect(()=>{o()},[]),c.useEffect(()=>{if(r&&r.length>0){const e=r.slice().reverse().map((s,n)=>({...s,stt:n+1}));f(e)}},[r]);const p=async e=>{await a(X(e)),await o()},w=async e=>{await a(_(e)),await o()},[C,d]=c.useState(!1),x=()=>{d(!0)},u=()=>{d(!1)},K=()=>{d(!1)},[h]=l.useForm(),M=async e=>{await a(P(e)),d(!1),h.resetFields()},v=e=>{console.log("Failed:",e)},[y]=l.useForm(),[g,f]=c.useState([]),[I,m]=c.useState(""),F=e=>e.id===I,N=e=>{y.setFieldsValue({stt:"",skill:"",description:"",...e}),m(e.id)},S=()=>{m("")},V=async e=>{try{const s=await y.validateFields();console.log("🚀 ~ file: Skill.tsx:135 ~ save ~ row:",s),w(s);const n=[...g],j=n.findIndex(k=>e===k.id);if(j>-1){const k=n[j];n.splice(j,1,{...k,...s}),f(n),m("")}else n.push(s),f(n),m("")}catch(s){console.log("Validate Failed:",s)}},E=[{title:"Stt",dataIndex:"stt",key:"stt",width:40,editable:!0},{title:"Id",dataIndex:"id",key:"id",width:40,editable:!0},{title:"Kỹ năng",dataIndex:"skill",key:"skill",width:250,editable:!0},{title:"Mô tả",dataIndex:"description",key:"description",width:500,editable:!0},{title:"Chỉnh sửa",width:130,dataIndex:"operation",render:(e,s)=>F(s)?t.jsxs("span",{children:[t.jsx(D.Link,{onClick:()=>V(s.id),style:{marginInlineEnd:8},children:t.jsx(i,{className:"bg-[#57c81f] text-white custom-button",children:"Lưu"})}),t.jsx(Q,{title:"Bạn có muốn hủy?",onConfirm:S,children:t.jsx(i,{type:"primary",danger:!0,children:"Hủy"})})]}):t.jsx(D.Link,{className:"flex justify-center",disabled:I!=="",onClick:()=>N(s),children:t.jsxs(i,{type:"primary",children:[t.jsx(H,{className:"inline-block me-[6px] text-xl"})," Sửa"]})})},{title:"Xóa Kỹ năng",dataIndex:"delete",key:"delete",width:100,render:(e,s)=>t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(i,{type:"primary",danger:!0,onClick:()=>p(s.id),children:"X"})})}],B=E.map(e=>e.editable?{...e,onCell:s=>({record:s,inputType:e.dataIndex==="stt"||e.dataIndex==="id"?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:F(s)})}:e),L=e=>!!e.dataIndex,O=E.filter(L).map(e=>({title:e.title,dataIndex:e.dataIndex}));return t.jsxs(t.Fragment,{children:[t.jsxs(T,{className:"pb-4",children:[t.jsxs(T,{children:[t.jsx(i,{size:"large",type:"primary",onClick:x,children:"Thêm kỹ năng"}),t.jsx(G,{title:"Thêm kỹ năng",open:C,onOk:u,onCancel:K,width:800,children:t.jsxs(l,{form:h,name:"basic",scrollToFirstError:!0,style:{paddingBlock:32},labelCol:{span:4},wrapperCol:{span:18},onFinish:M,onFinishFailed:v,autoComplete:"off",children:[t.jsx(l.Item,{label:"Kỹ năng",name:"skill",rules:[{required:!0,message:"Vui lòng không bỏ trống !"}],children:t.jsx(b,{})}),t.jsx(l.Item,{label:"Mô tả kỹ năng",name:"description",rules:[{required:!0,message:"Vui lòng không bỏ trống !"}],children:t.jsx(b.TextArea,{rows:6})}),t.jsx(l.Item,{wrapperCol:{offset:4},children:t.jsxs(J,{gap:"small",children:[t.jsx(i,{type:"primary",htmlType:"submit",children:"Thêm"}),t.jsx(i,{danger:!0,onClick:()=>h.resetFields(),children:"Reset"})]})})]})})]}),t.jsx(i,{size:"large",onClick:()=>{new U().addSheet("DanhSachKynang").addColumns(O).addDataSource(g||[]).saveAs("DanhSachKynang.xlsx")},children:"Export File Excel"})]}),t.jsx(l,{form:y,component:!1,children:t.jsx($,{components:{body:{cell:W}},bordered:!0,size:"small",dataSource:g,columns:B,rowKey:"id",scroll:{x:"max-content",y:370},pagination:{onChange:S}})})]})};export{me as default};
