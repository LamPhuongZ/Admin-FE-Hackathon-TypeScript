import{r as g,j as t}from"./index-Kvu0bFJg.js";import{F as h,T as b}from"./index-DOmViuc0.js";import{F as y}from"./Table-DvFsFOEP.js";import{P as I,T as j}from"./index-Db5dijEX.js";import{I as w}from"./index-CBdURe_x.js";import"./ExclamationCircleFilled-53hoV8aY.js";import"./ActionButton-CSAFwOuQ.js";const k=Array.from({length:100}).map((s,a)=>({key:a.toString(),name:`Edward ${a}`,age:32,tel:"0123456789",phone:1234567899,address:`London Park no. ${a}`})),C=({editing:s,dataIndex:a,title:r,inputType:o,record:d,index:c,children:m,...l})=>{const u=o==="number"?t.jsx(j,{}):t.jsx(w,{});return t.jsx("td",{...l,children:s?t.jsx(h.Item,{name:a,style:{margin:0},rules:[{required:!0,message:`Please Input ${r}!`}],children:u}):m})};function E({}){const[s]=h.useForm(),[a,r]=g.useState(k),[o,d]=g.useState(""),c=e=>e.key===o,m=e=>{s.setFieldsValue({name:"",age:"",address:"",...e}),d(e.key)},l=()=>{d("")},u=async e=>{try{const n=await s.validateFields(),i=[...a],p=i.findIndex(x=>e===x.key);if(p>-1){const x=i[p];i.splice(p,1,{...x,...n}),r(i),d("")}else i.push(n),r(i),d("")}catch(n){console.log("Validate Failed:",n)}},f=[{title:"name",dataIndex:"name",width:"10%",editable:!0},{title:"age",dataIndex:"age",width:"5%",editable:!0},{title:"address",dataIndex:"address",width:"15%",editable:!0},{title:"tel",dataIndex:"tel",width:"10%",editable:!0},{title:"phone",dataIndex:"phone",width:"15%",editable:!0},{title:"operation",dataIndex:"operation",render:(e,n)=>c(n)?t.jsxs("span",{children:[t.jsx(b.Link,{onClick:()=>u(n.key),style:{marginInlineEnd:8},children:"Save"}),t.jsx(I,{title:"Sure to cancel?",onConfirm:l,children:t.jsx("a",{children:"Cancel"})})]}):t.jsx(b.Link,{disabled:o!=="",onClick:()=>m(n),children:"Edit"})}].map(e=>e.editable?{...e,onCell:n=>({record:n,inputType:e.dataIndex==="age"?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:c(n)})}:e);return t.jsx(h,{form:s,component:!1,children:t.jsx(y,{components:{body:{cell:C}},bordered:!0,dataSource:a,columns:f,rowClassName:"editable-row",pagination:{onChange:l}})})}function $({}){return t.jsx("div",{children:t.jsx(E,{})})}export{$ as default};
