import{ax as o}from"./index-fOC-h6cT.js";import{B as l,E as p,F as c}from"./index.esm-BdH0UDM4.js";const n=(e,t,a)=>{const r={children:e,props:{}};return a===4&&(r.props.colSpan=0),r},s=[{title:"Name",dataIndex:"name",render:(e,t,a)=>a<4?o.jsx("a",{children:e}):{children:o.jsx("a",{children:e}),props:{colSpan:5}}},{title:"Age",dataIndex:"age",render:n},{title:"Home phone",colSpan:2,dataIndex:"tel",render:(e,t,a)=>{const r={children:e,props:{}};return a===2&&(r.props.rowSpan=2,r.props.style={color:"red"}),a===3&&(r.props.rowSpan=0,r.props.style={color:"red"}),a===4&&(r.props.colSpan=0,r.props.style={color:"red"}),r}},{title:"Phone",colSpan:0,dataIndex:"phone",render:n},{title:"Address",dataIndex:"address",render:n}],d=[{key:"1",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park"},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park"}],i=e=>!!e.dataIndex,x=s.filter(i).map(e=>({title:e.title,dataIndex:e.dataIndex})),h=()=>o.jsxs("div",{children:[o.jsx(l,{style:{marginBottom:20},onClick:()=>{new p().addSheet("test").addColumns(x).addDataSource(d).saveAs("Data.xlsx")},children:"Export File Excel"}),o.jsx(c,{bordered:!0,columns:s,dataSource:d})]});export{h as default};
