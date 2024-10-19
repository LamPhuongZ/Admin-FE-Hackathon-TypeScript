import { useState } from 'react';
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   UserOutlined,
} from '@ant-design/icons';

import logo from "../assets/images/logo-company.png";

import { Button, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";

import { PiShareNetworkBold } from 'react-icons/pi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { VscGraph, VscGroupByRefType } from 'react-icons/vsc';



import TableData from '../components/table';



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

type Props = {}


const TestTemplate = (props: Props) => {
   const [collapsed, setCollapsed] = useState(false);
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout>

         {/* <Button
            style={{
               marginBottom: 20
            }}
            onClick={() => {
               const excel = new Excel();
               excel
                  .addSheet("test")
                  .addColumns(columns)
                  .addDataSource(data)
                  .saveAs("测试.xlsx");
            }}
         >
            下载
         </Button> */}

         <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" className="flex justify-center items-center gap-2">
               <img src={logo} alt="" className="w-10 h-10" loading="lazy" />
               <h1 className="lg:text-[28px]
                              md:text-[20px]
                              w-60 h-full 
                              text-white 
                              font-bold"
               >EasyJob</h1>
            </Link>

            {/* THÊM CODE TÊN ADMIN + TÊN Ở DƯỚI ĐÂY */}

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
                  // style={{width: 500}}

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
               </Header>


               <Content
                  style={{
                     padding: 12,
                     margin: '24px 16px',
                     minHeight: 280,
                     background: colorBgContainer,
                     borderRadius: borderRadiusLG,
                     // backgroundColor: 'pink'    // ############⭐⭐⭐⭐⭐   
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
