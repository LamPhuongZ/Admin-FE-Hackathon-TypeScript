import{n as t,F as d}from"./index-kJUchTTU.js";import{c as n}from"./index-DHvtK_SN.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";const l=n(({css:e})=>({customTable:e`
      .ant-table-container {
        .ant-table-body,
        .ant-table-content {
          scrollbar-width: thin;
          scrollbar-color: #eaeaea transparent;
          scrollbar-gutter: stable;
        }
      }
    `})),s=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1",width:150},{title:"Column 2",dataIndex:"address",key:"2",width:150},{title:"Column 3",dataIndex:"address",key:"3",width:150},{title:"Column 4",dataIndex:"address",key:"4",width:150},{title:"Column 5",dataIndex:"address",key:"5",width:150},{title:"Column 6",dataIndex:"address",key:"6",width:150},{title:"Column 7",dataIndex:"address",key:"7",width:150},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Column 9",dataIndex:"address",key:"9"},{title:"Column 10",dataIndex:"address",key:"10"},{title:"Column 11",dataIndex:"address",key:"11"},{title:"Column 12",dataIndex:"address",key:"12"},{title:"Column 13",dataIndex:"address",key:"13"},{title:"Column 14",dataIndex:"address",key:"14"},{title:"Column 15",dataIndex:"address",key:"15"},{title:"Column 16",dataIndex:"address",key:"16"},{title:"Column 17",dataIndex:"address",key:"17"},{title:"Column 18",dataIndex:"address",key:"18"},{title:"Column 19",dataIndex:"address",key:"19"},{title:"Column 20",dataIndex:"address",key:"20"},{title:"Action",key:"operation",fixed:"right",width:100,render:()=>t.jsx("a",{children:"action"})}],r=Array.from({length:100}).map((e,a)=>({key:a,name:`Edward King ${a}`,age:32,address:`London, Park Lane no. ${a}`})),o=()=>{const{styles:e}=l();return t.jsx(d,{className:e.customTable,columns:s,dataSource:r,scroll:{x:"max-content",y:55*5}})};function u(){return t.jsx("div",{children:t.jsx(o,{})})}export{u as default};
