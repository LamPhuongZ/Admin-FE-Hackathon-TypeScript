import { useState } from 'react';
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   UserOutlined,
} from '@ant-design/icons';

import logo from "../assets/images/logo-company.png";

import { Button, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';

import { Excel } from "antd-table-saveas-excel";
import type { ColumnsType, ColumnType } from "antd/es/table";

import { Link } from "react-router-dom";

import { PiShareNetworkBold } from 'react-icons/pi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { VscGraph, VscGroupByRefType } from 'react-icons/vsc';

import TableData, { originData } from '../components/table';
import UserMenu from '../components/Header/Navbar/UserMenu';



const { Header, Sider, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
   label: React.ReactNode,
   key: React.Key,
   icon?: React.ReactNode,
   children?: MenuItem[],
): MenuItem {
   return {
      key,
      icon,
      children,
      label,
   } as MenuItem;
}

const items: MenuItem[] = [
   getItem('Quản lý tài khoản', '1', <UserOutlined />),
   getItem('Quản lý việc làm', '2', <PiShareNetworkBold />),
   getItem('Quản lý loại việc làm', 'sub1', <MdOutlineWorkOutline />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
   ]),
   getItem('Quản lý skill', 'sub2', <VscGroupByRefType />, [
      getItem('Team 1', '6'),
      getItem('Team 2', '7')
   ]),
   getItem('Thống kê', '8', <VscGraph />),

];


// ====================================================
//                EXPORT EXCEL FILE
// ====================================================
// Định nghĩa kiểu cột cho Excel
interface IExcelColumn {
   title: string;
   dataIndex: string;
   key?: string;
}

// Kiểu dữ liệu cho bảng
interface DataType {
   key: string;
   name: string;
   age: number;
   tel: string;
   phone: number;
   address: string;
}

const renderContent = (value: any, row: DataType, index: number) => {
   const obj = {
      children: value,
      props: {} as { colSpan?: number; rowSpan?: number; style?: React.CSSProperties },
   };
   if (index === 4) {
      obj.props.colSpan = 0;
   }
   return obj;
};

const columns: ColumnsType<DataType> = [
   {
      title: "Name",
      dataIndex: "name",
      render: (text: string, row: DataType, index: number) => {
         if (index < 4) {
            return <a>{text}</a>;
         }
         return {
            children: <a>{text}</a>,
            props: {
               colSpan: 5,
            },
         };
      },
   },
   {
      title: "Age",
      dataIndex: "age",
      render: renderContent,
   },
   {
      title: "Home phone",
      colSpan: 2,
      dataIndex: "tel",
      render: (value: string, row: DataType, index: number) => {
         const obj = {
            children: value,
            props: {} as { rowSpan?: number; colSpan?: number; style?: React.CSSProperties },
         };
         if (index === 2) {
            obj.props.rowSpan = 2;
            obj.props.style = { color: "red" };
         }
         if (index === 3) {
            obj.props.rowSpan = 0;
            obj.props.style = { color: "red" };
         }
         if (index === 4) {
            obj.props.colSpan = 0;
            obj.props.style = { color: "red" };
         }
         return obj;
      },
   },
   {
      title: "Phone",
      colSpan: 0,
      dataIndex: "phone",
      render: renderContent,
   },
   {
      title: "Address",
      dataIndex: "address",
      render: renderContent,
   },
];

// Dữ liệu cho bảng
const data: DataType[] = originData;
//  [
//    {
//      key: "1",
//      name: "John Brown",
//      age: 32,
//      tel: "0571-22098909",
//      phone: 18889898989,
//      address: "New York No. 1 Lake Park",
//    },
//    {
//      key: "2",
//      name: "Jim Green",
//      tel: "0571-22098333",
//      phone: 18889898888,
//      age: 42,
//      address: "London No. 1 Lake Park",
//    },
//    {
//      key: "3",
//      name: "Joe Black",
//      age: 32,
//      tel: "0575-22098909",
//      phone: 18900010002,
//      address: "Sidney No. 1 Lake Park",
//    },
//    {
//      key: "4",
//      name: "Jim Red",
//      age: 18,
//      tel: "0575-22098909",
//      phone: 18900010002,
//      address: "London No. 2 Lake Park",
//    },
//    {
//      key: "5",
//      name: "Jake White",
//      age: 18,
//      tel: "0575-22098909",
//      phone: 18900010002,
//      address: "Dublin No. 2 Lake Park",
//    },
//  ];

// Hàm kiểm tra kiểu
const isColumnType = (
   column: ColumnType<DataType> | any
): column is ColumnType<DataType> => {
   return !!column.dataIndex;
};

// Tạo kiểu cột cho Excel
const excelColumns: IExcelColumn[] = columns
   .filter(isColumnType) // Lọc các cột chỉ có dataIndex
   .map((col) => ({
      title: col.title as string,
      dataIndex: col.dataIndex as string,
   }));



type Props = {}


const TestTemplate = (props: Props) => {
   const [collapsed, setCollapsed] = useState(false);
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout>
         <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/" className="flex justify-center items-center gap-2">
               <img src={logo} alt="" className="w-10 h-10" loading="lazy" />
               <h1 className="text-xl h-full text-white font-bold">EasyJob</h1>
            </Link>

            {/* PROFILE */}
            <UserMenu />
         </Header>



         <Layout>
            <Sider
               trigger={null}
               collapsible collapsed={collapsed}
               style={{ height: 'full' }}
               width={220}
            >

               <div className="demo-logo-vertical" />
               <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={['1']}

                  // CÁCH VIẾT 1: ⭐⭐⭐⭐⭐
                  items={items}

               // CÁCH VIẾT 2: ⭐⭐⭐⭐⭐
               // items={[
               //    {
               //       key: '1',
               //       icon: <UserOutlined />,
               //       label: 'Quản lý tài khoản',
               //       children: [
               //          {
               //             key: '1-1',
               //             label: 'Danh sách tài khoản',
               //          },
               //          {
               //             key: '1-2',
               //             label: 'Thêm tài khoản mới',
               //          },
               //       ],
               //    },
               //    {
               //       key: '2',
               //       icon: <PiShareNetworkBold />,
               //       label: 'Quản lý việc làm',
               //    },
               //    {
               //       key: '3',
               //       icon: <MdOutlineWorkOutline />,
               //       label: 'Quản lý loại việc làm',
               //    },
               //    {
               //       key: '4',
               //       icon: <VscGroupByRefType />,
               //       label: 'Quản lý skill',
               //    },
               //    {
               //       key: '5',
               //       icon: <VscGraph />,
               //       label: 'Thống kê',
               //    },
               // ]}
               />
            </Sider>




            <Layout>

               <Header style={{ padding: 0, background: colorBgContainer }}>

                  {/* BUTTON THU GỌN MENU */}
                  <Button
                     type="text"
                     icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                     onClick={() => setCollapsed(!collapsed)}
                     style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                        background: 'red'       // ############⭐⭐⭐⭐⭐   
                     }}
                  />

                  {/* BUTTON EXPORT DATA EXCEL */}
                  <Button
                     style={{
                        marginBottom: 20,
                     }}
                     onClick={() => {
                        const excel = new Excel();
                        excel
                           .addSheet("test")
                           .addColumns(excelColumns) // Sử dụng excelColumns thay vì columns của Table
                           .addDataSource(data)
                           .saveAs("Data.xlsx");
                     }}
                  >
                     Export File Excel
                  </Button>


               </Header>


               <Content
                  style={{
                     padding: 12,
                     margin: '24px 16px',
                     minHeight: 280,
                     background: colorBgContainer,
                     borderRadius: borderRadiusLG,
                     backgroundColor: 'pink'    // ############⭐⭐⭐⭐⭐   
                  }}
               >
                  {/* CONTENT */}
                  <TableData />


               </Content>




               <Footer style={{ textAlign: 'center' }}>
                  EasyJob ©{new Date().getFullYear()}
               </Footer>

            </Layout>






         </Layout>
      </Layout>
   );
}

export default TestTemplate;
