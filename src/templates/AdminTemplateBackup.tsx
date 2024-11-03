import React, { useState } from "react";
import { Layout, Menu, Space, theme } from "antd";
import { Avatar, Badge } from "antd";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import logo from "../assets/images/logo-company.png";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { PiShareNetworkBold } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscGraph, VscGroupByRefType } from "react-icons/vsc";
import { BiSolidBadgeCheck } from "react-icons/bi";

import UserMenu from "../components/Header/Navbar/UserMenu";
import User from "../pages/User/User";
import Job from "../pages/Job/Job";
import TypeJob from "../pages/TypeJob/TypeJob";
import Skill from "../pages/Skill/Skill";
import Statistical from "../pages/Statistical/Statistical";

const { Header, Content, Footer, Sider } = Layout;

const AdminTemplateBackup: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  // Lấy key từ đường dẫn hiện tại
  const getSelectedKey = () => {
    if (location.pathname.startsWith("/user"))          return "1";
    if (location.pathname.startsWith("/job"))           return "2";
    if (location.pathname.startsWith("/typejob/tom"))   return "3";
    if (location.pathname.startsWith("/typejob/bill"))  return "4";
    if (location.pathname.startsWith("/typejob/alex"))  return "5";
    if (location.pathname.startsWith("/skill/team1"))   return "6";
    if (location.pathname.startsWith("/skill/team2"))   return "8";
    if (location.pathname.startsWith("/statistical"))   return "9";
    return "1"; // Mặc định nếu không khớp
  };

  const items = [
    {
      label: <Link to="/user">Quản lý tài khoản</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/job">Quản lý việc làm</Link>,
      key: "2",
      icon: <PiShareNetworkBold />,
    },
    {
      label: "Quản lý loại việc làm",
      key: "sub1",
      icon: <MdOutlineWorkOutline />,
      children: [
        { label: <Link to="/typejob/tom">Tom</Link>, key: "3" },
        { label: <Link to="/typejob/bill">Bill</Link>, key: "4" },
        { label: <Link to="/typejob/alex">Alex</Link>, key: "5" },
      ],
    },
    {
      label: "Quản lý skill",
      key: "sub2",
      icon: <VscGroupByRefType />,
      children: [
        { label: <Link to="/skill/team1">Team 1</Link>, key: "6" },
        { label: <Link to="/skill/team2">Team 2</Link>, key: "8" },
      ],
    },
    {
      label: <Link to="/statistical">Thống kê</Link>,
      key: "9",
      icon: <VscGraph />,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={220}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to="/" className="flex justify-center items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10 my-3" loading="lazy" />
          <h1
            className={`
                  ${collapsed ? "hidden" : "block"} 
                  text-xl 
                  h-full 
                  text-white 
                  font-bold`}
          >
            EasyJob
          </h1>
        </Link>

        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['1']}
          selectedKeys={[getSelectedKey()]} // Sử dụng hàm để lấy selectedKey từ URL
          defaultOpenKeys={["sub1", "sub2"]} // Tự động mở các menu con khi vào
          items={items}
        />
      </Sider>

      <Layout>
        <Header
          className="flex items-center justify-end"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Space size="middle">
            <Badge className="me-6" count={100}>
              <Avatar className="bg-white hover:bg-slate-200" size="large">
                <BellOutlined className="text-2xl text-black" />
              </Avatar>
            </Badge>
          </Space>

          {/* ⭐ USER MENU PROFILE */}
          <UserMenu />
        </Header>

        <Content style={{ margin: "0 16px" }}>
          <div
            className="mt-4"
            style={{
              padding: 12,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* CONTENT */}
            <Routes>
              <Route path="/user" element={<User />} />
              <Route path="/job" element={<Job />} />
              <Route path="/typejob/:id" element={<TypeJob />} />
              <Route path="/skill/:teamId" element={<Skill />} />
              <Route path="/statistical" element={<Statistical />} />
            </Routes>
          </div>
        </Content>

        <Footer className="flex flex-col items-center justify-center w-full p-4">
          <div className="flex w-full max-w-[300px] justify-center items-center text-sm gap-x-1 text-gray-900 font-semibold">
            <BiSolidBadgeCheck />
            <span>Space of Easyjob.io.vn Official</span>
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <div>
              <a
                className="bg-gray-0 rounded-3xl px-12 py-1.5 text-base flex flex-col items-center justify-center gap-y-0"
                href="https://easyjob.io.vn"
              >
                <span className="tracking-tight text-lg bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-semibold hover:animate-pulse">
                  {" "}
                  Create or apply your Job
                </span>
              </a>
            </div>
            <a href="/" className="text-xs text-gray-400">
              {" "}
              Built by my Best Team and @Ductandev{" "}
            </a>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplateBackup;