import React, { useState } from "react";
import { Layout as AntLayout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import MainContent from "../MainContent/MainContent";

const { Sider } = AntLayout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntLayout className="h-[100vh]">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Sidebar collapsed={collapsed} />
      </Sider>
      <AntLayout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <MainContent style={{ padding: "24px" }}>
          <Outlet />
        </MainContent>
      </AntLayout>
    </AntLayout>
  );
};

export default MainLayout;
