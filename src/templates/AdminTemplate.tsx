import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Space, theme } from 'antd';
import { Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import UserMenu from '../components/Header/Navbar/UserMenu';

import { BellOutlined, UserOutlined } from '@ant-design/icons';
import logo from "../assets/images/logo-company.png";
import { PiShareNetworkBold } from 'react-icons/pi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { VscGraph, VscGroupByRefType } from 'react-icons/vsc';
import TableData from '../components/Table/Table';


const { Header, Content, Footer, Sider } = Layout;

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
      getItem('Team 2', '8')
   ]),
   getItem('Thống kê', '9', <VscGraph />),
];

const AdminTemplate: React.FC = () => {
   const [collapsed, setCollapsed] = useState(false);
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider
            width={220}
            collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}>
            <Link to="/test" className="flex justify-center items-center gap-2">
               <img src={logo} alt="" className="w-10 h-10 my-3" loading="lazy" />
               <h1 className={`${collapsed ? "hidden" : "block"} text-xl h-full text-white font-bold`}>EasyJob</h1>
            </Link>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
         </Sider>

         <Layout>
            <Header
               className='flex items-center justify-end'
               style={{ padding: 0, background: colorBgContainer }} >

               <Space size="middle">
                  <Badge className='me-6' count={100}>
                     <Avatar className='bg-white hover:bg-slate-200' size="large" >
                        <BellOutlined className='text-2xl text-black' />
                     </Avatar>
                  </Badge>
               </Space>

               <UserMenu />
            </Header>

            <Content style={{ margin: '0 16px' }}>
               <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
               </Breadcrumb>
               <div
                  style={{
                     padding: 24,
                     minHeight: 360,
                     background: colorBgContainer,
                     borderRadius: borderRadiusLG,
                  }}
               >
                  {/* CONTENT */}
                  <TableData />
               </div>


            </Content>
            <Footer style={{ textAlign: 'center' }}>
               EasyJob ©01-10-{new Date().getFullYear()} Created by my team !!!
            </Footer>
         </Layout>
      </Layout>
   );
};

export default AdminTemplate;